import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { CardContainer, Value } from "./styles";

interface CardProps {
  text: string,
  value: number | string,
  hasIcon?: boolean,
  priceFall?: boolean
}

export default function Cards({ text, value, hasIcon = false, priceFall }: CardProps) {
  return (
    <CardContainer>
      <p>{text}</p>
      <Value pricefall={priceFall?.toString()}>
        {hasIcon && (priceFall ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />)}
        <p>${value}</p>
      </Value>
    </CardContainer>
  )
}