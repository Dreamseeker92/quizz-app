
let riddle = {};



function playGame() {
    let field1 = randNumber(20, 50);
    let field2 = randNumber(20,50);
    let result = field1 + field2;
    let resultsArray = generateRandomeOptions(result);
    resultsArray.push(result);
    resultsArray.sort(function(a, b) {return 0.5 - Math.random()});

    riddle = {
        field1: field1,
            field2: field2,
            resultArray: resultsArray,
            answer: result
    };


    document.querySelector('#field1').innerHTML = riddle.field1;
    document.querySelector('#field2').innerHTML = riddle.field2;
    document.querySelector('#option-1').innerHTML = riddle.resultArray[0];
    document.querySelector('#option-2').innerHTML = riddle.resultArray[1];
    document.querySelector('#option-3').innerHTML = riddle.resultArray[2];
    document.querySelector('#option-4').innerHTML = riddle.resultArray[3];
}

function randNumber(min,max) {
    return Math.floor(Math.random() * (max - min +1 ) + min);
}

function checkAnswer(selectedElement) {


    let after = document.querySelector('#after')

    if (selectedElement.innerHTML == riddle.answer){

        after.classList.remove('hide');
        after.classList.add('correct');
        after.classList.add('animated');
        after.classList.add('zoomInDown');
        after.innerHTML = " VICTORY!";

    } else {
        after.classList.remove('hide');
        after.classList.add('wrong');
        after.classList.add('animated');
        after.classList.add('zoomInDown');
        after.innerHTML = " POTRACHENO!";
    }
}

function generateRandomeOptions(sum) {
    let resultArray = [];
     let randomNumberArray = [];
  while (randomNumberArray.length < 3) {
      let randomNumber = randNumber(1, 10);
      if (randomNumberArray.indexOf(randomNumber) >-1)  continue;
          randomNumberArray.push(randomNumber);

      }


    for (let i = 0; i<3; i++){
        let  addSubtract = randNumber(0,1);
        let  result = sum;
        if  (addSubtract === 1) {
            result += randomNumberArray[i];
        } else {
            result -= randomNumberArray[i];
        }
        resultArray.push(result);
    }

    return resultArray;
}



function playAgain() {
    let after = document.querySelector('#after');
    after.classList.remove('wrong');
    after.classList.remove('correct');
    after.classList.add('hide');
    playGame();
}

