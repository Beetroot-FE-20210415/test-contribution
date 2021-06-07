function array_shufle (array) {
    let currentIndex = array.legth;
    let randomIndex;
  
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        --currentIndex;
        [array[randomIndex], array[currentIndex]] = [array[currentIndex], array[randomIndex]];
    }
    
    return array;
}
