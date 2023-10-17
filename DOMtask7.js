var itemList=document.querySelector('#items');

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//lastelementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

//lastChild
console.log(itemList.lastChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

//firstChild
console.log(itemList.firstChild);

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previouselementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='brown';

//createElement
//add HEllo word before Item Lister
//create a div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//Add id
newDiv.id='hello1';
//setAttribute
newDiv.setAttribute('title','Hello Div');
//createtextnode
var newDivText=document.createTextNode('HEllo');
//add text to div (appendChild)
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);
console.log(newDiv);

//Now go head and add HEllo word before Item 1
//var newDiv=document.createElement('div');
//add class
//.className='hello';
//Add id
//newDiv.id='hello1';
//setAttribute
//newDiv.setAttribute('title','Hello Div');
//createtextnode
//var newDivText=document.createTextNode('HEllo');
//add text to div (appendChild)
//newDiv.appendChild(newDivText);
//var item1 = document.querySelector(".list-group-item:nth-child(1)");
//newDiv.style.fontSize='20px';
//item1.parentNode.insertBefore(newDiv,item1);
//console.log(newDiv);

var items=document.getElementById('items');
var newli=document.createElement('li');
//add class
newli.className="list-group-item";
var newliText=document.createTextNode('HEllo World');
newli.appendChild(newliText);
items.insertBefore(newli,items.childNodes[0]);
console.log(items);

