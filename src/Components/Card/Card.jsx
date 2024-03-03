import addKorzina from "../../utils/addKorzina";
import deleteKorzinaCard from "../../utils/deleteKorzinaCard";
import "./Card.css";

const Card = ({rasm, title, desc, price, count, index, setKorzina, korzina, k, countOfK, highPrice}) => {
  return (
    <div className={`${k ? 'cardOfKorzina' : 'card'}`}>
        <img src={rasm} alt="" />
        <h3>{title}</h3>
        <div>
          <p>{desc}</p>
          <p>${price}</p>
        </div>
        {k  ?
            <div className="cardOfKorzinaSettings">
              <h4>count: {countOfK}</h4>
              <h4>price: ${highPrice}</h4>
              <button onClick={() => deleteKorzinaCard(korzina, setKorzina, index)}>delete</button>
            </div>
            :
            <div className="counter">
                <button disabled={count > 0 ? false : true} onClick={() => addKorzina('m', korzina, setKorzina, index)}>-</button>
                <span>{count}</span>
                <button onClick={() => addKorzina('p', korzina, setKorzina, index)}>+</button>
            </div>
        }
    </div>
  )
}

export default Card