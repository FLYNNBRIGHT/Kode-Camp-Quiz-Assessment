const qButt = document.querySelector(".Question--Butt");
const qButt1 = document.querySelector("#Question--Butt1");
const qButt2 = document.querySelector("#Question--Butt2");
const qButt3 = document.querySelector("#Question--Butt3");
const qButt4 = document.querySelector("#Question--Butt4");
const qButt5 = document.querySelector("#Question--Butt5");
const qButt6 = document.querySelector("#Question--Butt6");
const qButt7 = document.querySelector("#Question--Butt7");
const qButt8 = document.querySelector("#Question--Butt8");
const qButt9 = document.querySelector("#Question--Butt9");
const qButt10 = document.querySelector("#Question--Butt10");
const qPopUp = document.querySelector(".Question--popUp");
const userScore = document.querySelector('#correct--score');

const optionA = document.querySelector('#option--A');
const optionB = document.querySelector('#option--B');
const optionC = document.querySelector('#option--C');
const optionD = document.querySelector('#option--D');


// Array of objects containing the entire quiz questions
const quizQuestions = [
    quest1 = {
        header: "Question 1",
        questionP: "Who is the President of The Federal Republic of Nigeria ?",
        options: ["Bola Ahmed Tinubu", "Goodluck Ebele Jonathan", "Peter Obi", "Umar Musa Yar'Adua"],
        correct: "Bola Ahmed Tinubu",
    },
    quest2 = {
        header: "Question 2",
        questionP: "How many states do we have in Nigeria ?",
        options: ["28 States", "45 States", "36 States", "12 States",],
        correct: "36 States",
    },
    quest3 = {
        header: "Question 3",
        questionP: "What are the three major ethnic group in Nigeria ?",
        options: ["Hausa, Igbo, Yoruba", "Tshekiri, Ijaw, Bendel", "Kumasi, Efik, Hausa", "Yoruba, Fulani, Yoruba",],
        correct: "Hausa, Igbo, Yoruba",
    },
    quest4 = {
        header: "Question 4",
        questionP: "What is the capital of OYO State ?",
        options: ["Agbowo", "Akure", "Ado-Ekiti", "Ibadan"],
        correct: "Ibadan",
    },
    quest5 = {
        header: "Question 5",
        questionP: "A girl has 5 Oranges and bought 7 extra Oranges, How many Oranges does she have in total ?",
        options: ["12 Oranges", "14 Oranges", "35 Oranges", "2 Oranges",],
        correct: "12 Oranges",
    },
    quest6 = {
        header: "Question 6",
        questionP: "Who is the Senate President of The Federal Republic of Nigeria ?",
        options: ["Sen. Yahaya Bello", "Sen. Seyi Makinde", "Sen. Nyesom Wike", "Sen. Godswill Akpabio"],
        correct: "Sen. Godswill Akpabio",
    },
    quest7 = {
        header: "Question 7",
        questionP: "In which state is the Kode Camp head office located ?",
        options: ["Lagos State", "Kano State", "Akwa Ibom State", "Anambra State"],
        correct: "Akwa Ibom State",
    },
    quest8 = {
        header: "Question 8",
        questionP: "The three basic programming language to learn in Frontend Web Development are ?",
        options: ["HTML, CSS and Javascript", "Bootstrap, Tailwind and React.js", "Vue.js, Python and Java", "SQL, MongoDB and Rust"],
        correct: "HTML, CSS and Javascript",
    },
    quest9 = {
        header: "Question 9",
        questionP: "_______________ is the frame or structure of a basic webpage ?",
        options: ["CSS", "HTML", "C++", "Javascript"],
        correct: "HTML",
    },
    quest10 = {
        header: "Question 10",
        questionP: "Which programming language adds dynamism and functionality to a basic webpage ?",
        options: ["Ruby", "Javascript", "Rust", "React.js"],
        correct: "Javascript",
    }
];

// This function unchecks all radio buttons.
let uncheckAll = () => {
    const radios = document.querySelectorAll('input[type = "radio"]');

    radios.forEach((radio) => {
        radio.checked = false;
    })
}


let score = 0;
let questionButt1 = () => {
    qPopUp.classList.remove('hidden');
    qButt1.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.remove('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[0].header;
    document.querySelector('.Question').textContent = quizQuestions[0].questionP;
    document.querySelector('.optA').textContent = quizQuestions[0].options[0];
    document.querySelector('.optB').textContent = quizQuestions[0].options[1];
    document.querySelector('.optC').textContent = quizQuestions[0].options[2];
    document.querySelector('.optD').textContent = quizQuestions[0].options[3];

    document.querySelector('#submitButt1').addEventListener('click', () => {
        if (optionA.checked) {
            window.alert(`You are Correct, ${quizQuestions[0].correct}.`)
            qButt1.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt1.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[0].correct}.`)
            qButt1.textContent = 'Wrong';
            qButt1.classList.add('wrong--answer');
        }
    });
};

let questionButt2 = () => {
    uncheckAll();
    qButt2.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.remove('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[1].header;
    document.querySelector('.Question').textContent = quizQuestions[1].questionP;
    document.querySelector('.optA').textContent = quizQuestions[1].options[0];
    document.querySelector('.optB').textContent = quizQuestions[1].options[1];
    document.querySelector('.optC').textContent = quizQuestions[1].options[2];
    document.querySelector('.optD').textContent = quizQuestions[1].options[3];

    document.querySelector('#submitButt2').addEventListener('click', () => {
        if (optionC.checked) {
            window.alert(`You are Correct, ${quizQuestions[1].correct}.`)
            qButt2.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt2.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[1].correct}.`)
            qButt2.textContent = 'Wrong';
            qButt2.classList.add('wrong--answer');
        }
    });
};

let questionButt3 = () => {
    uncheckAll();
    qButt3.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.remove('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[2].header;
    document.querySelector('.Question').textContent = quizQuestions[2].questionP;
    document.querySelector('.optA').textContent = quizQuestions[2].options[0];
    document.querySelector('.optB').textContent = quizQuestions[2].options[1];
    document.querySelector('.optC').textContent = quizQuestions[2].options[2];
    document.querySelector('.optD').textContent = quizQuestions[2].options[3];

    document.querySelector('#submitButt3').addEventListener('click', () => {
        if (optionA.checked) {
            window.alert(`You are Correct, ${quizQuestions[2].correct}.`)
            qButt3.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt3.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[2].correct}.`)
            qButt3.textContent = 'Wrong';
            qButt3.classList.add('wrong--answer');
        }
    })
};

let questionButt4 = () => {
    uncheckAll();
    qButt4.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.remove('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[3].header;
    document.querySelector('.Question').textContent = quizQuestions[3].questionP;
    document.querySelector('.optA').textContent = quizQuestions[3].options[0];
    document.querySelector('.optB').textContent = quizQuestions[3].options[1];
    document.querySelector('.optC').textContent = quizQuestions[3].options[2];
    document.querySelector('.optD').textContent = quizQuestions[3].options[3];

    document.querySelector('#submitButt4').addEventListener('click', () => {
        if (optionD.checked) {
            window.alert(`You are Correct, ${quizQuestions[3].correct}.`)
            qButt4.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt4.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[3].correct}.`)
            qButt4.textContent = 'Wrong';
            qButt4.classList.add('wrong--answer');
        }
    });
};

let questionButt5 = () => {
    uncheckAll();
    qButt5.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.remove('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[4].header;
    document.querySelector('.Question').textContent = quizQuestions[4].questionP;
    document.querySelector('.optA').textContent = quizQuestions[4].options[0];
    document.querySelector('.optB').textContent = quizQuestions[4].options[1];
    document.querySelector('.optC').textContent = quizQuestions[4].options[2];
    document.querySelector('.optD').textContent = quizQuestions[4].options[3];

    document.querySelector('#submitButt5').addEventListener('click', () => {
        if (optionA.checked) {
            window.alert(`You are Correct, ${quizQuestions[4].correct}.`)
            qButt5.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt5.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[4].correct}.`)
            qButt5.textContent = 'Wrong';
            qButt5.classList.add('wrong--answer');
        }
    });
};

let questionButt6 = () => {
    uncheckAll();
    qButt6.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.remove('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[5].header;
    document.querySelector('.Question').textContent = quizQuestions[5].questionP;
    document.querySelector('.optA').textContent = quizQuestions[5].options[0];
    document.querySelector('.optB').textContent = quizQuestions[5].options[1];
    document.querySelector('.optC').textContent = quizQuestions[5].options[2];
    document.querySelector('.optD').textContent = quizQuestions[5].options[3];

    document.querySelector('#submitButt6').addEventListener('click', () => {
        if (optionD.checked) {
            window.alert(`You are Correct, ${quizQuestions[5].correct}.`)
            qButt6.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt6.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[5].correct}.`)
            qButt6.textContent = 'Wrong';
            qButt6.classList.add('wrong--answer');
        }
    });
};

let questionButt7 = () => {
    uncheckAll();
    qButt7.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.remove('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[6].header;
    document.querySelector('.Question').textContent = quizQuestions[6].questionP;
    document.querySelector('.optA').textContent = quizQuestions[6].options[0];
    document.querySelector('.optB').textContent = quizQuestions[6].options[1];
    document.querySelector('.optC').textContent = quizQuestions[6].options[2];
    document.querySelector('.optD').textContent = quizQuestions[6].options[3];

    document.querySelector('#submitButt7').addEventListener('click', () => {
        if (optionC.checked) {
            window.alert(`You are Correct, ${quizQuestions[6].correct}.`)
            qButt7.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt7.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[6].correct}.`)
            qButt7.textContent = 'Wrong';
            qButt7.classList.add('wrong--answer');
        }
    });
};

let questionButt8 = () => {
    uncheckAll();
    qButt8.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.remove('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[7].header;
    document.querySelector('.Question').textContent = quizQuestions[7].questionP;
    document.querySelector('.optA').textContent = quizQuestions[7].options[0];
    document.querySelector('.optB').textContent = quizQuestions[7].options[1];
    document.querySelector('.optC').textContent = quizQuestions[7].options[2];
    document.querySelector('.optD').textContent = quizQuestions[7].options[3];

    document.querySelector('#submitButt8').addEventListener('click', () => {
        if (optionA.checked) {
            window.alert(`You are Correct, ${quizQuestions[7].correct}.`)
            qButt8.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt8.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[7].correct}.`)
            qButt8.textContent = 'Wrong';
            qButt8.classList.add('wrong--answer');
        }
    });
};

let questionButt9 = () => {
    uncheckAll();
    qButt9.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.remove('hidden');
    document.querySelector('#submitButt10').classList.add('hidden');

    document.querySelector('h3').textContent = quizQuestions[8].header;
    document.querySelector('.Question').textContent = quizQuestions[8].questionP;
    document.querySelector('.optA').textContent = quizQuestions[8].options[0];
    document.querySelector('.optB').textContent = quizQuestions[8].options[1];
    document.querySelector('.optC').textContent = quizQuestions[8].options[2];
    document.querySelector('.optD').textContent = quizQuestions[8].options[3];

    document.querySelector('#submitButt9').addEventListener('click', () => {
        if (optionB.checked) {
            window.alert(`You are Correct, ${quizQuestions[8].correct}.`)
            qButt9.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt9.classList.add('correct--answer');
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[8].correct}.`)
            qButt9.textContent = 'Wrong';
            qButt9.classList.add('wrong--answer');
        }
    });
};

let questionButt10 = () => {
    uncheckAll();
    qButt10.classList.add('Active--Question');
    document.querySelector('#submitButt1').classList.add('hidden');
    document.querySelector('#submitButt2').classList.add('hidden');
    document.querySelector('#submitButt3').classList.add('hidden');
    document.querySelector('#submitButt4').classList.add('hidden');
    document.querySelector('#submitButt5').classList.add('hidden');
    document.querySelector('#submitButt6').classList.add('hidden');
    document.querySelector('#submitButt7').classList.add('hidden');
    document.querySelector('#submitButt8').classList.add('hidden');
    document.querySelector('#submitButt9').classList.add('hidden');
    document.querySelector('#submitButt10').classList.remove('hidden');

    document.querySelector('h3').textContent = quizQuestions[9].header;
    document.querySelector('.Question').textContent = quizQuestions[9].questionP;
    document.querySelector('.optA').textContent = quizQuestions[9].options[0];
    document.querySelector('.optB').textContent = quizQuestions[9].options[1];
    document.querySelector('.optC').textContent = quizQuestions[9].options[2];
    document.querySelector('.optD').textContent = quizQuestions[9].options[3];

    document.querySelector('#submitButt10').addEventListener('click', () => {
        if (optionB.checked) {
            window.alert(`You are Correct, ${quizQuestions[9].correct}.`)
            qButt10.textContent = 'Correct';

            score = score + 10;
            userScore.textContent = Number(`${score}`);
            qButt10.classList.add('correct--answer');
            let finalScore = score;
        }
        else {
            window.alert(`You are Wrong; The correct answer is ${quizQuestions[9].correct}.`)
            qButt10.textContent = 'Wrong';
            qButt10.classList.add('wrong--answer');
        }
    });
};

let congratulations = () => {
    window.alert(`Congratulations`);
}