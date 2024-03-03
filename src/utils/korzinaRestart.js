import { arrOfKorzina, bestOf } from "../Data/BestOf"

const korzinaRestart = function(korzina,setKorzina) {
    const arr = korzina.map(product => {
        if(product.count) {
            return {
                id: product.id,
                image: product.pic,
                name: product.name,
                category: product.desc1,
                desc: product.fulldesc,
                price: product.price,
                count: 0,
                get highPrice() {
                  return this.count * this.price
                }
            }
        }
        else return product
    })
    setKorzina(arr)
}

export default korzinaRestart