var inputName=document.getElementById("name");
var inputEmail=document.getElementById("email");
var detail=document.getElementById('my-form');
detail.addEventListener('submit',userDetails);

function userDetails(e){
    e.preventDefault();
    localStorage.setItem('name',inputName.value);
    localStorage.setItem('email',inputEmail.value);
    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('email'));

}