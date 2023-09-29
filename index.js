// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

 

function destructivelyAppendCat() {
    cats.push("Ralph");
}


beforeEach(function  () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");


  });


function destructivelyPrependCat() {
    cats.unshift("Bob")
}


beforeEach(function  () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");


  });


function destructivelyRemoveLastCat() {
    cats.pop()
}




beforeEach(function  () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");


  });


function destructivelyRemoveFirstCat() {
    cats.shift();
}



beforeEach(function  () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");


  });


function appendCat() {
    
    const addNewCatLst = [...cats, "Broom"];
   return addNewCatLst;
}
appendCat();


function prependCat() {
    
    const addNewCatBfr = ["Arnold", ...cats];
   return addNewCatBfr;
}
prependCat();

function removeLastCat() {
    const rmvLstCat = cats.slice(0, -1);
    return rmvLstCat;
}

removeLastCat();


function removeFirstCat() {
    const rmvFstCat = cats.slice(1);
    return rmvFstCat;
}

removeFirstCat();