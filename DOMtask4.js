var items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor='green';
//bold
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
//color font
for(var i=0;i<items.length;i++){
    items[i].style.color='blue';
}