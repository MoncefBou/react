// fetch('https://restcountries.eu/rest/v2/')




// let result = [];


let country = ['usa', 'frence', 'sudan', 'austria', 'australia', 'mroc'];

let string = "aus";


let newCountry = country.map((elem) => { 

    for (let i=0; i < string.length; i++) {
        if ( elem.search(string[i]) !== -1) {
            return elem
        } else {
            return 0
        }
    }
})


console.log(newCountry);
