var lista = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];

var feedback = "stellar stupendous super";
var email = "alma@valami.hu"
var scale = 4;

function validator(feedback, scale, email){
  var checkMail = email.includes("@");
  var feedbackWords = feedback.split(' ');
  var counter = 0;
  var countNiceWords = function(feedbackWords, lista){
    for ( var i = 0; i < feedbackWords.length; i++){
      if ( lista.includes(feedbackWords[i])){
        counter++;
      };
    };
  };
  countNiceWords(feedbackWords, lista);
  if(checkMail && scale>= 0 && scale < 10 && counter >= 3){
    return true;
  } else {
    return false;
  };
};

module.exports(validator);
