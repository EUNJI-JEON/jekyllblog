// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [{
  question_string: "매일 한 종목이라도 매매해야 마음이 허전하지 않다.",
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
}, {
  question_string: "나는 주식 창을 보느라 해야할 일을 종종 잊는다.",
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
}, {
  question_string: "주말에 주식 장이 개장하지 않는 게 아쉽다.",
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
}, {
  question_string: '업무 시간에도 틈날 때마다 주식 앱과 종목을 확인한다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
}, {
  question_string: 'HTS나 MTS를 보고 있으면 시간 가는 줄 모른다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
},{
  question_string: '빨간색과 파란색만 보면 주가 상승(양봉)과 하락(음봉)이 생각난다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
},{
  question_string: '주식 계좌에 현금이 남아있으면 무슨 종목이라도 사야할 것 같은 기분이 든다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
},{
  question_string: '신나게 수다를 떨다가도 갑자기 주가가 생각나 우울해진다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
},{
  question_string: '주식을 못하게 되면 지루해지거나 안절부절 못 한다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
},{
  question_string: '매매할 것도 아닌데 호가창을 계속 지켜보게 된다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
},{
  question_string: '지금 안 사면 나중에 엄청 오를 것 같은 기분이 든다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
},{
  question_string: '주식에 신경쓰느라 가족과 친구와의 관계가 소원해지는 것 같다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
},{
  question_string: '장 종료 후에도 계속 종목과 주가가 생각난다.',
  choices: {
    correct: "No",
    wrong: ["Yes"]
  }
}];

// An object for a Quiz, which will contain Question objects.
var Quiz = function(quiz_name) {
  // Private fields for an instance of a Quiz object.
  this.quiz_name = quiz_name;
  
  // This one will contain an array of Question objects in the order that the questions will be presented.
  this.questions = [];
}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
Quiz.prototype.add_question = function(question) {
  // Randomly choose where to add question
  var index_to_add_question = Math.floor(Math.random() * this.questions.length);
  this.questions.splice(index_to_add_question, 0, question);
}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
Quiz.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Hide the quiz results modal
  $('#quiz-results').hide();
  
  // Write the name of the quiz
  $('#quiz-name').text(this.quiz_name);
  
  // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
  
  // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    $('#prev-question-button').prop('disabled', current_question_index === 0);
    $('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);
    
    // Determine if all questions have been answered
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  }
  
  // Render the first question
  var current_question_index = 0;
  change_question();
  
  // Add listener for the previous question button
  $('#prev-question-button').click(function() {
    if (current_question_index > 0) {
      current_question_index--;
      change_question();
    }
  });
  
  // Add listener for the next question button
  $('#next-question-button').click(function() {
    if (current_question_index < self.questions.length - 1) {
      current_question_index++;
      change_question();
    }
  });
  
  // Add listener for the submit answers button
  $('#submit-button').click(function() {
    // Determine how many questions the user got right
    var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
        score++;
      }
    }
    
    // Display the score with the appropriate message

    var percentage = score / self.questions.length;
    console.log(percentage);
    var message;
    var messageLong;
    var messageKey;
    if (percentage === 1) {
      message = '👑건강한 투자자!👑';
      messageLong = '당신은 건강한 투자자입니다. 주식 중독 증상 없이 건강한 투자를 하고 계시네요.👍 앞으로도 지금처럼 건강하게 성투하세요!👏👏';
    } else if (percentage >= .75) {
      message = '😕경미한 중독 상태😕';
      messageLong = '혹시 요즘들어 유난히 호가창을 들여다보는 횟수가 늘지는 않았나요? 아직은 약한 중독 상태이지만 방심은 금물! 너무 중독되지 않게 유의하면서 성투를 빌어요!';
      
    } else if (percentage >= .5) {
      message = '🤭중독 상태🤭';
      messageLong = '당신은 주식에 중독된 상태로 보입니다. 주식에만 너무 몰두해 일상에 지장이 생기진 않았나요? 매매중독에 따른 뇌동매매 없이 건강한 투자를 위해 일상에서 주식의 비중을 조금만 줄여보는 건 어떨까요?';
    } else if (percentage >= .2) {
      message = '😥심각한 중독 상태😥';
      messageLong = '당신은 주식에 심각하게 중독된 상태로 보입니다. 하루라도 매매를 하지 않으면 불안하고 한시도 HTS나 MTS에서 눈을 뗄 수 없진 않은가요? 몸도 마음도 지치지 않고 건강한 투자를 이어가기 위해 내일부턴 조금이라도 줄여보는 건 어떨까요?';
      messageKey ='연관 키워드: 딘O, 노O철, 김O민, 박O두, 딘딘하다, 홍반꿀, 호반꿀 등';
    }else {
      message = '😇지금은 쉬어갈 시간😇';
      messageLong = '머리보다 손가락이 먼저 움직이는 당신, 과도하게 잦은 매매는 계좌를 녹이는 지름길이 될 수도 있어요! 중독을 넘어 주식이 일상을 지배한 상태로 보이는 지금, 오래오래 건강한 투자를 이어가기 위해 잠시 매매를 쉬어가는 건 어떨까요?';
      messageKey ='연관 키워드: 딘O, 노O철, 김O민, 박O두, 딘딘하다, 홍반꿀, 호반꿀 등';
    }
    var totalPer = (1-percentage)*100;
    getProgress(totalPer)

    $('#question').hide();
  
    $('#quiz-results-message').text(message);
    // $('#quiz-results-score').html('You got <b>' + score + '/' + self.questions.length + '</b> questions correct.');
    $('#quiz-results-score').text(messageLong);
    $('#quiz-results-keywords').text(messageKey);
    $('#quiz-results').slideDown();
    $('#quiz button').slideUp();
  

  });
  
  // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
  question_container.bind('user-select-change', function() {
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  });
}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // Random assign the correct choice an index
  this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
  
  // Fill in this.choices with the choices
  var number_of_choices = wrong_choices.length + 1;
  for (var i = 0; i < number_of_choices; i++) {
    if (i === this.correct_choice_index) {
      this.choices[i] = correct_choice;
    } else {
      // Randomly pick a wrong choice to put in this index
      var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      this.choices[i] = wrong_choices[wrong_choice_index];
      
      // Remove the wrong choice from the wrong choice array so that we don't pick it again
      wrong_choices.splice(wrong_choice_index, 1);
    }
  }
}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Fill out the question label
  var question_string_h2;
  if (container.children('h2').length === 0) {
    question_string_h2 = $('<h2>').appendTo(container);
  } else {
    question_string_h2 = container.children('h2').first();
  }
  question_string_h2.text(this.question_string);
  
  // Clear any radio buttons and create new ones
  if (container.children('input[type=radio]').length > 0) {
    container.children('input[type=radio]').each(function() {
      var radio_button_id = $(this).attr('id');
      $(this).remove();
      container.children('label[for=' + radio_button_id + ']').remove();
    });
  }
  for (var i = 0; i < this.choices.length; i++) {
    // Create the radio button
    var choice_radio_button = $('<input>')
      .attr('id', 'choices-' + i)
      .attr('type', 'radio')
      .attr('name', 'choices')
      .attr('value', 'choices-' + i)
      .attr('checked', i === this.user_choice_index)
      .appendTo(container);
    
    // Create the label
    var choice_label = $('<label>')
      .text(this.choices[i])
      .attr('for', 'choices-' + i)
      .appendTo(container);
  }
  
  // Add a listener for the radio button to change which one the user has clicked on
  $('input[name=choices]').change(function(index) {
    var selected_radio_button_value = $('input[name=choices]:checked').val();
    
    // Change the user choice index
    self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
    
    // Trigger a user-select-change
    container.trigger('user-select-change');
  });
}

// "Main method" which will create all the objects and render the Quiz.
$(document).ready(function() {
  // Create an instance of the Quiz object
  var quiz = new Quiz();
  
  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < all_questions.length; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
    
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});



function getProgress(per) {
  var can = document.getElementById('canvas'),
      spanProcent = document.getElementById('procent'),
       c = can.getContext('2d');
 
  var posX = can.width / 2,
      posY = can.height / 2,
      fps = 1000 / 200,
      procent = 0,
      oneProcent = 360 / 100,
      result = oneProcent * per;
  
  c.lineCap = 'round';
  arcMove();
  
  function arcMove(){
    var deegres = 0;
    var acrInterval = setInterval (function() {
      deegres += 1;
      c.clearRect( 0, 0, can.width, can.height );
      procent = deegres / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
      c.strokeStyle = '#b1b1b1';
      c.lineWidth = '10';
      c.stroke();

      c.beginPath();
      c.strokeStyle = '#f25050';
      c.lineWidth = '10';
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
      c.stroke();
      if( deegres >= result ) clearInterval(acrInterval);
    }, fps);
    
  }
  
  
}