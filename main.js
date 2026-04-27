// SELFWORK 1 ARRAY

function crescente(array) {
return array.sort((a,b)=>a-b)
};

function decrescente(array) {
return array.sort((a,b)=>b-a)
};

let decr = decrescente([3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25])
console.log(decr);


let cre= crescente([12,43,54,63,234,1,4,656,24])
console.log(cre);

let crescent= crescente([3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25])
console.log(crescent);

// SELFWORK 2 ARRAY

// function media(array) {
//     let somma= array.reduce((acc,n)=>acc+n)
//     let media= somma/array.length
//     let filter = array.filter((number)=> number < media)
//     let maggiore= array.filter((number)=> number> media).length;
//     let minore= array.filter((number)=> number< media).length;
//     console.log(minore);
    
    
    
//     return `La media dei numeri è ${media},i valori minori sono [${filter}],i numeri inferiori alla media sono ${minore},i numeri superiori alla media sono ${maggiore}`
    
// }

// let exercise= media([1,2,3,4,5,6,7])

// console.log(exercise);

