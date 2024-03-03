function addKorzina(a, korzina, setKorzina, index) {
    let c = korzina[index].count
    if(a === 'm') c--
    else c++
    let arr = korzina.map((pr, i) => {
      if(i == index) pr.count = c
      return pr
    })
    setKorzina(arr)
}

export default addKorzina