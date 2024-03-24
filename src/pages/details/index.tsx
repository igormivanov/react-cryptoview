import { useParams } from "react-router-dom"
import { CryptoInfo, DetailsContainer, GraphicLabel, PriceChangeGraphic, Title } from "./styles"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { geckoService } from "../../service/GeckoService";
import { formatNumberToDecimal } from "../../utils/formatNumberToDecimal";
import { formatNumberToBillion } from "../../utils/formatNumberToBillion";
import { useNavigate } from "react-router-dom"
import LineChart from "./components/LineChart";
import { settingChartData } from "../../hooks/settingChartData";
import Card from "./components/Card";
import { Coin } from "../../types/Coin";
import { RootState } from "../../redux/store";
import { ChartData } from "chart.js";
import 'chart.js/auto';

export default function DetailsPage() {

  const initialState: ChartData<"line"> = {
    labels: [],
    datasets: []
  }

  const [chartData, setChartData] = useState(initialState);

  const { coins } = useSelector((state: RootState) => state.coinReducer);

  const { id } = useParams()
  const { getPrices } = geckoService();
  const navigate = useNavigate()

  useEffect(() => {
    if (coins.length == 0) {
      navigate("/");
    } else {
      getData();
    }
  }, [coins])

  const filteredCoin = coins.find((coin: Coin) => coin.id == id) as Coin
  const priceFall = filteredCoin?.price_change_24h < 0;
  const absolutePrice = Math.abs(filteredCoin?.price_change_24h);
  const formattedNumberToDecimal = formatNumberToDecimal(absolutePrice);
  const formattedNumberToBillion = formatNumberToBillion(filteredCoin?.total_volume)

  async function getData() {
    const prices = await getPrices({
      id: id!,
      days: 7,
      priceType: "prices"
    })
    
    if (prices) {
      settingChartData(setChartData, prices);
    }
  }


  return (
    <DetailsContainer>
      <Title>
        <p>{filteredCoin?.symbol.toUpperCase()}</p>
        <p>-</p>
        <p>{filteredCoin?.name}</p>
      </Title>

      <CryptoInfo>
        <Card
          text={'VARIAÇÃO DO PREÇO 24H'}
          value={formattedNumberToDecimal}
          hasIcon
          priceFall={priceFall}
        />
        <Card text={'ALTA 24H'} value={filteredCoin?.high_24h} />
        <Card text={'BAIXA 24H'} value={filteredCoin?.low_24h} />
        <Card text={'VOLUME DE MERCADO'} value={formattedNumberToBillion} />
      </CryptoInfo>

      <PriceChangeGraphic>
        <GraphicLabel>Variação do preço nos últimos 7 dias</GraphicLabel>
        <LineChart chartData={chartData} />
      </PriceChangeGraphic>

    </DetailsContainer>
  )
}