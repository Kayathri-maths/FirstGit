//QuerySelector
//var items=document.querySelector('.list-group-item');
//console.log(items);
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor='green';
//var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='none';

//QuerySelectorALL
var items=document.querySelectorAll('.list-group-item');
console.log(items);
items[1].style.color='green';
var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

