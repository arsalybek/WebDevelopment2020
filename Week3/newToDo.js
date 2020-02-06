var plan = document.querySelector('.input');
var uList = document.querySelector('.listItems');

var addButton = document.getElementById('addButton');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click',removeItem);

function addItem(){  
  let item = document.createElement('li');
  if (plan.value != ''){
    item.innerHTML = plan.value;
    uList.appendChild(item);
    plan.value = '';
  } else {
    alert('Fill the space for plans');
  }
}

  function removeItem(){
    if (uList.hasChildNodes()) {
    uList.removeChild(uList.firstChild);
  } else {
    alert('TODO List is empty!!!');
  }
}


