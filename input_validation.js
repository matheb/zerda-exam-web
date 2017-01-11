var lista = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];

function validator(feedback, scale, email){
  var checkMail = email.includes("@");
  var feedbackWords = feedback.split(' ');
  var counter = 0;
  if(checkMail && scale >= 10 && countNiceWords(feedbackWords, lista, counter) >= 3){
    return true;
  } else {
    return false;
  };
};

var countNiceWords = function(feedbackWords, lista, counter){
  for ( var i = 0; i < feedbackWords.length; i++){
    if ( lista.includes(feedbackWords[i])){
      counter++;
    };
  };
  return counter;
};

module.exports = validator;
