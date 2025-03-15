// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

// const destructivelyAppendCat = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(){
    return cats.push('Ralph')
};

function destructivelyPrependCat(){
    return cats.unshift('Bob')
};

function destructivelyRemoveLastCat() {
    return cats.pop()
};


function destructivelyRemoveFirstCat() {
    return cats.shift()
};

function removeFirstCat() {
    return cats.slice(1, 3)
};
console.log(cats);

function removeLastCat() {
    return cats.slice(0, 2)
};

function appendCat() { 
 const newCatsName =[...cats, 'Broom'];
 return newCatsName
};
appendCat()

function prependCat() {
    const newKittyName =['Arnold', ...cats]
    return newKittyName;
};
console.log(prependCat())