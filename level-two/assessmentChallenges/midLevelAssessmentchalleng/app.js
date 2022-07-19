function oneWordOnly(words){
    // implicit return (one liner code, no ccurly, no return stmt)
    const result = words.filter(oneWord => oneWord.indexOf(' ') < 0);
    return result;
}


const result = words.filter(function(oneWord){
    if(oneWord.indexOf(' ') < 0)
        return oneWord
})

// explicit return (curly brackets for the code block, 
// return statement)
const result2 = words.filter(oneWord =>{
    if(oneWord.indexOf(' ') < 0)
        return oneWord
})

// test data
console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]

console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]
