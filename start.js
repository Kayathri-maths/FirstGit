// Manipulate the title of the page and experiment with other things
console.dir(document.getElementsByClassName);
//console.log(document.title);
//var headerTitle=document.getElementById("header-title");
//console.log(headerTitle);
//console.log(headerTitle.textContent); //Item Lister 123
//console.log(headerTitle.innerText);  //Item Lister
//headerTitle.textContent='Hello';
//console.log(headerTitle.textContent); //Hello
//console.log(headerTitle.innerText); //Hello
//headerTitle.innerText='GoodBye';
//console.log(headerTitle.innerText);//GoodBoy
//console.log(headerTitle.textContent);//GoodBye
//headerTitle.innerHTML='<h2>Hello</h2>';
//headerTitle.style.borderBottom='solid 3px #000';
//var header=document.getElementById("main-header");
//header.style.borderBottom='solid 3px #000';

// Make the title have a black border   
var header=document.getElementById('main-header');
header.style.border='solid 5px #000';

//Now make ADD ITEM bold and chage the font color to greeen
var Title=document.querySelector("h2");
//console.log(Title.textContent);
Title.style.fontWeight='bold';
Title.style.color='green';