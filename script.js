(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${questionNumber +1}. ${currentQuestion.question} </div> 
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Being a clown isn't all fun and games. Rodeo clowns expose themselves to great danger every time they perform. When cowboys dismount or bulls buck them off, rodeo clowns jump in front of the bulls and motion wildly to get their attention. In this way rodeo clowns provide an alternate target, and in doing so protect the rider. Of course, this is a very dangerous thing to do. So you see, sometimes clowning around can be serious business.",
      answers: {
        a: "Rodeo Clowns: Humorous Heroes", 
        b: "All in a Day's Work: Odd Jobs at the Rodeo",
        c: "From the Circus: A History of Clowning",
        d: "Many Different Faces: Types of Clowns"
      },
      correctAnswer: "a"
    },
    {
      question: "What do you get when you cross a robot and an astronaut? A Robonaut! Robonauts are robot helpers designed to work side-by-side with astronauts. Work on the first Robonaut began in 1997, and by 2002 Robonaut B was revealed to the public. Robonaut B featured interchangeable lower bodies, like four-wheel mode or hydraulic legs. Yet scientists and engineers continued to improve Robonaut. In February of 2010, Robonaut 2 was released to the public. Robonaut 2 moved four times faster than the first Robonaut. An advanced version of Robonaut 2 was finally tested in outer space in 2011. Robonaut 2 functioned exactly as designed.",
      answers: {
        a: "Rodeo Clowns: Humorous Heroes", 
        b: "All in a Day's Work: Odd Jobs at the Rodeo",
        c: "From the Circus: A History of Clowning",
        d: "Many Different Faces: Types of Clowns"
      },
      correctAnswer: "d"
    },
    {
      question: "Automation is the use of machines to reduce the need for human labor. In other words automation is when jobs done by people become jobs done by robots. Automation can be a good thing. Clothing, cars, and other manufactured products are available at good prices and in large supply because of automation. But automation can also be a bad thing. Because of automation there are over 700,000 robots in America that do jobs once performed by humans. The way of automation may not be best for humanity, but it is the course we are taking.",
      answers: {
        a: "Automation: Those Robots Took Our Jobs", 
        b: "Automation: Improving Our Lives",
        c: "Automation: Reducing the Need for Human Labor",
        d: "Automation: Good and Bad for Humanity"
      },
      correctAnswer: "d"
    },
    {
      question: "My grandma may not look very strong, but with the help of hydraulic power, she can stop a car with her foot. How does hydraulic power work? First, fluid is rapidly released into a chamber through a valve. As the fluid collects, the valve is slammed shut. This causes a pressure spike, but since the chamber is sealed, the pressure has nowhere to go. The hydraulic mechanism channels the pressure and provides great power. And that's how, with the help of hydraulics, my grandma can stop a speeding car with one foot.",
      answers: {
        a: "Amazing Grandma: Everyday Superheroes", 
        b: "Hydraulic Power: How it Works",
        c: "My Crazy Grandma: Things She Does",
        d: "Hydraulics: Lifting Up Cars and Other Stuff"
      },
      correctAnswer: "b"
    },
    {
      question: "Many people use the words cyborg and android interchangeably, but these words have different meanings. Both refer to beings powered by robotics, but an android is powered entirely by machinery. Cyborgs are partly powered by a living organism. They also look different. Androids may be completely mechanical, but they are designed to look like humans. They may have synthetic skin, hair, and other human-like features. Cyborgs are usually designed in a way that accents their robotic modifications. A cyborg's mechanically enhanced eye may cast a red light or have a chrome plate surrounding it, for instance. So you see, though the terms cyborg and android seem similar, they refer to different things.",
      answers: {
        a: "Why Cyborgs are Cooler Than Androids", 
        b: "Cyborgs and Androids: Unnatural Enemies",
        c: "Comparing and Contrasting Cyborgs and Androids",
        d: "Cyborgs and Androids: Pretty Much the Same Thing"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();