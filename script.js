const form = document.querySelector('.questionForm');
const sendButton = document.querySelector('.button');
const result = document.querySelector('.result');
const point = document.querySelector('.point');
const questions = document.querySelectorAll('.question');


const correctAnswers = ['D', 'D', 'D', 'D', 'D','D','D','D','D','D'];



form.addEventListener('submit', e => {
    e.preventDefault();
    scroll();

    const givenAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value,
    form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];

    let score = 0;
    let puan = 0;
    givenAnswers.forEach((answer, index) => {
        if (answer == correctAnswers[index]) {
            puan += 10;  
            questions[index].classList.remove('redBorder');  
            questions[index].classList.remove('yellowBorder');  
            questions[index].classList.add('greenBorder');
        }
        else if(answer==''){     
            questions[index].classList.remove('redBorder');
            questions[index].classList.remove('greenBorder');    
            questions[index].classList.add('yellowBorder');    
        }
        else if(answer!=correctAnswers[index]){
            questions[index].classList.remove('yellowBorder');  
            questions[index].classList.remove('greenBorder');
            questions[index].classList.add('redBorder');  
        }
    })
    result.style.display='block';
    const write = setInterval(() => {
        if(score!=puan){
            score++;
            point.textContent=score;
        }
        else{
            clearInterval(write);
            if(score==100){
                sendButton.disabled = true;
            }
        }
    }, 30);
    if(score==0){
        point.textContent=0;
    }

})


function scroll(){
    window.scrollTo({top:0,behavior:'smooth'});
}