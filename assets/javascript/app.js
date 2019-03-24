var counter = 0
var score = 0


var content = [{
  question: "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
  correct_answer: "True",
  answer: "False",

},
{
  question: "The Chevrolet Corvette has always been made exclusively with V8 engines only.",
  correct_answer: "False",
  answer:"True",

},
{
  question: "The full English name of the car manufacturer BMW is Bavarian Motor Works",
  correct_answer: "True",
  answer: "False",
},
{
  question: "When BMW was established in 1916, it was producing automobiles.",
  correct_answer: "False",
  answer: "True",

},
{
  question: "Ferrari has never made a V10 engine for any of its cars.",
  correct_answer: "False",
  answer: "True",

},
{
  question: "Bugatti was an Italian car manufacturer.",
  correct_answer: "False",
  answer: "True",

},
{
  question: "The majority of Subaru vehicles are made in China.",
  correct_answer: "False",
  answer: "True",
},
{
  question: "BMW M GmbH is a subsidiary of BMW AG that focuses on car performance.",
  correct_answer: "True",
  answer: "False",
}];

console.log(content);

var $question = $(".question"),
  $generate = $("#generate"),
  $result = $("#result"),
  $score = $("#score"),
  $thanks = $(".thanks"),
  $options = $("#options");

$(document).ready(function () {
  var selection = content[Math.floor(Math.random() * 8)];
  type = selection["correct_answer"];
  answer = selection["answer"];
  $("#question").html(selection["question"]);
  $("#generate").hide();
  $("#result").hide();

})

var carApp = {}

carApp.init = function () {
  var selection = content[counter];
  type = selection["question"];
  $question.html(selection["question"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();

}
carApp.generate = function () {
  if (counter < content.length) {
    var selection = content[counter];
    $question.html(selection["question"]);
    type = selection["answer"];

    $result.hide();
    $score.hide();
    $question.show();
    $options.show();
  } else {
    $thanks.show()
  }
  $generate.hide();
}

$(".choice").click(function (e) {
  var chosenAnswer = e.target.id;
  $result.show();
  $score.show();
  $question.hide();
  $options.hide();
  console.log(this)

  if (type == "ture") {
    answer ="right";
  } else {
    answer ="wrong";
  }

  if (chosenAnswer == type) {
    $result.html("<span>Your Right</span> It's " + answer + ".");
    score++;
  } else {
    $result.html("<span>Your Wrong</span> It's " + answer + ".");
  }
  counter++;
  $score.html("You're " + score + " for " + counter + ".");
  $generate.show();

});

$(document).ready(function () {
  carApp.init();
});

$generate.on("click", function () {
  carApp.generate();
});
