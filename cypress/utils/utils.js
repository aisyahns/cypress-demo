function randomEmail(){
    return `random${Math.random() * 1000}@gmail.com`;
}

function parsePrice(price){
    return parseInt(price.replace('Rp', '').replace(',', ''))
}
export {randomEmail, parsePrice} ;