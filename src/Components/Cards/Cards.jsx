import {bestOf} from "../../Data/BestOf";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({countF, setKorzina, korzina}) => {
  return (
    <div className="cards">
      {bestOf.map((product, index) => {
        return <Card
                  key={product.id}
                  title={product.name}
                  rasm={product.pic}
                  desc={product.fulldesc}
                  price={product.price}
                  count={countF(korzina, index)}
                  korzina={korzina}
                  setKorzina={setKorzina}
                  index={index}
                  k={false}
                />
      })}
    </div>
  )
}

export default Cards