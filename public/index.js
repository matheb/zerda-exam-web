var sendButton = document.querySelector('button');

sendButton.addEventListener('click', function(){
  console.log('LOADING');
})

function postAnswer() {
  var textValue =  document.querySelector('textarea').value;
  var scaleValue =  document.querySelector('scale').value;
  var emailValue =  document.querySelector('email').value;
  if ( textValue != '' && scaleValue !='' && emailValue !=''){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/exam", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({'feedback': textValue, 'scale': scaleValue, 'email': emailValue}));
    xhr.onreadystatechange = function (){
      if (xhr.readyState === XMLHttpRequest.DONE){
        decoded.textContent = JSON.parse(xhr.response)['text'];
      } else if (xhr.readyState === XMLHttpRequest.LOADING) {
        setInterval(console.log('LOADING'), 1000);
      };
    };
  } else {
    alert('Please add an iput!');
  };
};
