const toTitleCase = (word) => {
    const regex = /(?:^|\s)\w/g;
    return word.toLowerCase().replace(regex, (match)=>{
        return match.toUpperCase();
        });
}

console.log(toTitleCase("hi"));
console.log(toTitleCase("i love programming"));