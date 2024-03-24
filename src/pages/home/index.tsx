import { HomePageContainer, SearchInput, TableList } from "./styles";
import { useEffect, useState } from "react";
import { geckoService } from "../../service/GeckoService";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinsSuccess } from "../../redux/coin/actions";
import { RootState } from "../../redux/store";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const { coins } = useSelector((state: RootState) => state.coinReducer);

  const { get10Coins } = geckoService();
  const navigate = useNavigate()

  useEffect(() => {
    fetchCoins();
  }, []);

  async function fetchCoins() {
    setLoading(true);
    const data = await get10Coins();
    if (data) {
      dispatch(fetchCoinsSuccess(data));
      setLoading(false);
    }
  }

  function handleCoinsFilter() {
    return coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  function handleDetailsNavigation(coinName: string) {
    navigate(`/${coinName}`)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <HomePageContainer>
          <SearchInput>
            <PiMagnifyingGlassThin />
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Filtrar"
            />
          </SearchInput>

          <TableList>
            <tbody>
              {handleCoinsFilter().map((coin) => (
                <tr
                  key={coin.id}
                  onClick={() => handleDetailsNavigation(coin.id)}
                >
                  <td><a href="#"><img src={coin.image} alt="" /></a></td>
                  <td><p>{coin.symbol.toUpperCase()}</p></td>
                  <td><p>{coin.name}</p></td>
                  <td><p>${coin.current_price}</p></td>
                </tr>
              ))}
            </tbody>
          </TableList>
        </HomePageContainer>
      )}
    </>
  );
}