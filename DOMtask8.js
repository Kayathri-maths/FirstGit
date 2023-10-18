var itemList = document.querySelectorAll('.list-group-item');
itemList.forEach( function (elmt) 
{
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-Warning btn-sm float-right edit';
    editBtn.textContent='Edit';
    elmt.appendChild(editBtn);
    
});
    

