function calcvowels()
{

let vowels = "aeiou";

let words = "Happy coding";

let spaceremove = words.split(" ").join("");

let len = spaceremove.length;

let count = 0;

for(let i=0; i<len; i++){
    for(let j=0; j<len; j++){
        if(vowels.charCodeAt(i) == spaceremove.charCodeAt(j))
        {
            count = count + 1;
        }
    }
}
return (`The Vowel count is ${count} in this given string ${words}`);
}

console.log(calcvowels());