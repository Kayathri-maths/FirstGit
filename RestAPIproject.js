function addCandyList(event){
  event.preventDefault();
 const candy=document.getElementById('candyname').value;
 const description=document.getElementById('description').value;
  const price=document.getElementById('price').value;
  const quantity=document.getElementById('quantity').value;
  
  const items= {
    candy,
    description,
    price,
    quantity
  }

  axios.post('https://crudcrud.com/api/ec67fc26af4b4f7c8b63161fe709701c/candysDetails',items)
   .then( (response) => {
      showOnUserScreen(response.data);
      console.log(response);
   })
   .catch( (error) => {
    document.body.innerHTML+="<h4>Something Went Wrong</h4>"
    console.log(error)
   })

}

function getAllItems(ItemId){
  axios.get(`https://crudcrud.com/api/ec67fc26af4b4f7c8b63161fe709701c/candysDetails/${ItemId}`)
  .then( (response) => {
     showOnUserScreen(response.data);
     console.log(response.data)
  })
  .catch( (error) => {
   document.body.innerHTML+="<h4>Something Went Wrong</h4>"
   console.log(error)
  })

}

window.addEventListener("DOMContentLoaded", () => {
  axios.get('https://crudcrud.com/api/ec67fc26af4b4f7c8b63161fe709701c/candysDetails')
  .then( (response) => {
     console.log(response);
     for(var i=0;i<response.data.length;i++){
      showOnUserScreen(response.data[i])
     }
  })
  .catch( (error) => {
   document.body.innerHTML+="<h4>Something Went Wrong</h4>"
   console.log(error)
  })

} )

function showOnUserScreen(item) {
  const parentNode=document.getElementById('ListOfItems');

    const childHTMl=`<li id=${item._id}> ${item.candy} - ${item.description} - ${item.price} - ${item.quantity}  
   <button onclick=buyOne('${item._id}','${item.candy}','${item.description}','${item.price}','${item.quantity}')>  BuyOne  </button>
   <button onclick=buyTwo('${item._id}','${item.candy}','${item.description}','${item.price}','${item.quantity}')>  BuyTwo  </button>
   <button onclick=buyThree('${item._id}','${item.candy}','${item.description}','${item.price}','${item.quantity}')>  BuyThree  </button>
   </li>`

   parentNode.innerHTML=parentNode.innerHTML+childHTMl;
}   

function buyOne(itemId,candy,description,price,quantity){
    let availableCandies=quantity-1;

    if(availableCandies>0){
      axios.put(`https://crudcrud.com/api/ec67fc26af4b4f7c8b63161fe709701c/candysDetails/${itemId}`,{
        "candy":candy,
        "description":description,
        "price":price,
        "quantity":availableCandies
      })
      .then(() => {
        getAllItems(itemId);
        removeItem(itemId);
      })
      .catch( (error) => {
        document.body.innerHTML+="<h4>Something Went Wrong</h4>"
        console.log(error)
      })

    }  else{
      deleteItem(itemId);
    }
}


function buyTwo(itemId,candy,description,price,quantity){
  let availableCandies=quantity-2;

  if(availableCandies>0){
    axios.put(`https://crudcrud.com/api/ec67fc26af4b4f7c8b63161fe709701c/candysDetails/${itemId}`,{
      "candy":candy,
      "description":description,
      "price":price,
      "quantity":availableCandies
    })
    .then(() => {
      getAllItems(itemId);
      removeItem(itemId);
    })
    .catch( (error) => {
      document.body.innerHTML+="<h4>Something Went Wrong</h4>"
      console.log(error)
    })

  }  else{
    deleteItem(itemId);
  }
}


function buyThree(itemId,candy,description,price,quantity){
  let availableCandies=quantity-3;

  if(availableCandies>0){
    axios.put(`https://crudcrud.com/api/ec67fc26af4b4f7c8b63161fe709701c/candysDetails/${itemId}`,{
      "candy":candy,
      "description":description,
      "price":price,
      "quantity":availableCandies
    })
    .then(() => {
      getAllItems(itemId);
      removeItem(itemId);
    })
    .catch( (error) => {
      document.body.innerHTML+="<h4>Something Went Wrong</h4>"
      console.log(error)
    })

  }  else{
    deleteItem(itemId);
  }
}


function deleteItem(itemId){


  axios.delete(`https://crudcrud.com/api/ec67fc26af4b4f7c8b63161fe709701c/candysDetails/${itemId}`)
  .then( () => {
    console.log('Item deleted successfully.');

     removeItem(itemId);
  })
  .catch( (err) => {
   document.body.innerHTML+="<h4>Something Went Wrong</h4>"
   console.log(err)
  })
}

function removeItem(itemId) {

  const parentNode = document.getElementById('ListOfItems');
  const childNodeToBeDeleted = document.getElementById(itemId);

  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
    console.log('Item removed from the shop');
  }
}
