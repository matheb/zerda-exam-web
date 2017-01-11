var sendButton = document.querySelector('button');
var result = document.querySelector('.list');
var displayLoading = document.querySelector('.loading');


sendButton.addEventListener('click', function(){
  console.log('LOADING');
  postAnswer();
})

function postAnswer() {
  result.innerHTML = '';
  var textValue =  document.querySelector('textarea').value;
  var scaleValue =  document.querySelector('#scale').value;
  var emailValue =  document.querySelector('#email').value;
  if ( textValue != '' && scaleValue != '' && emailValue != ''){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/exam", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({'feedback': textValue, 'scale': scaleValue, 'email': emailValue}));
    xhr.onreadystatechange = function (){
      if (xhr.readyState === XMLHttpRequest.DONE){
        displayLoading.style.visibility = 'hidden';
        if (xhr.response.includes("projects")){
          listItems = JSON.parse(xhr.response)['projects'];
          drawList(listItems);
        } else {
          result.textContent = JSON.parse(xhr.response)['text'];
        };
      } else if (xhr.readyState === XMLHttpRequest.LOADING) {
        displayLoading.style.visibility = 'visible';
        setInterval(console.log('LOADING'), 1000);
      };
    };
  } else {
    alert('Please add valid input!');
  };
};

function drawList(listItems) {
  for ( var i = 0; i < listItems.length; i++) {
    var newItem = document.createElement('li');
    newItem.textContent = listItems[i];
    result.appendChild(newItem);
  };
};
