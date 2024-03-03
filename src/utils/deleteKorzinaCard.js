const deleteKorzinaCard = function(korzina, setKorzina, index) {
    let c = korzina[index].count
    c = 0
    let arr = korzina.map((pr, i) => {
        if(i == index) pr.count = c
        return pr
    })
    setKorzina(arr)
}

export default deleteKorzinaCard