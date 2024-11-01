import Card from "../Card/Card";
import "./Korzina.css";

const Korzina = ({arr,setArr,korzinaRestart}) => {
  let indexs = []
  const w = arr.filter((pr, i) => {
    if(pr.count > 0) indexs.push(i)
    return pr.count > 0
  })

  let len = w.length,
      totalPrice = 0
  if(len) {
    w.forEach(element => {
      totalPrice += element.highPrice
    })
  }

  return (
    <>
      {len ? <button onClick={() => korzinaRestart(arr,setArr)}>restart</button> : ""}
      <div className="korzina">
        {len ? w.map((product, index) => {
          const {image, name, desc, price, count, highPrice, id} = product
          return <Card 
                    key={id} 
                    index={indexs[index]}
                    rasm={image} 
                    title={name} 
                    desc={desc} 
                    price={price} 
                    countOfK={count} 
                    highPrice={highPrice} 
                    korzina={arr}
                    setKorzina={setArr}
                    k={true} 
                  />
        }) : <h3>korzina bo'sh juda</h3>}
      </div>
      {len ? <h2>Total price: ${totalPrice}</h2> : ""}
    </>
  )
}

export default Korzina