const quizData = [
	{
		question: 'W którym roku ukazał się pierwszy film Iron Mana?',
		a: '2005',
		b: '2012',
		c: '2010',
		d: '2008',
		correct: 'd',
	},
	{
		question: 'Jak nazywa się młot Thora?',
		a: 'Vanir',
		b: 'Mjolnir',
		c: 'Asir',
		d: 'Norn',
		correct: 'b',
	},
	{
		question: 'Z czego wykonana jest tarcza Kapitana Ameryki?',
		a: 'Adamantium',
		b: 'Vibranium',
		c: 'Promethium',
		d: 'Karbonad',
		correct: 'b',
	},
	{
		question: 'Jak się nazywa obca rasa, którą Loki wysyła do inwazji na Zimię?',
		a: 'Chitauri',
		b: 'Skrullowie',
		c: 'Kree',
		d: 'Flerkenowie',
		correct: 'a',
	},
	{
		question: 'Kto był ostatnim posiadaczem Kamienia kosmicznego zanim Thanos go zdobył?',
		a: 'Thor',
		b: 'Tony Stark',
		c: 'Loki',
		d: 'Kolekcjoner',
		correct: 'c',
	},
	{
		question: 'Kto został zabity przez Lokiego?',
		a: 'Maria Hill',
		b: 'Nick Fury',
		c: 'Agent Coulson',
		d: 'Dr Erik Selvig',
		correct: 'c',
	},
	{
		question: 'Kim jest siostra Czarnej Pantery?',
		a: 'Okoye',
		b: 'Nakia',
		c: 'Ramonda',
		d: 'Shuri',
		correct: 'd',
	},
	{
		question: 'Jaką specjalizację posiada Stephen Strange?',
		a: 'Neurochirurg',
		b: 'Kardiolog',
		c: 'Chirurg plastyczny',
		d: 'Anestezjolog',
		correct: 'a',
	},
	{
		question: 'Co mówi Zimowy Żołnierz po tym jak Steve rozpoznaje go po raz pierwszy?',
		a: 'Kim do diabła jest Bucky?',
		b: 'Czy ja cię znam?',
		c: 'On odszedł',
		d: 'Co powiedziałeś?',
		correct: 'a',
	},
	{
		question: 'Kogo poświęcił Thanos by zdobyć Kamień Duszy?',
		a: 'Nebulę',
		b: 'Gamorę',
		c: 'Lokiego',
		d: 'Hulka',
		correct: 'b',
	},
]
const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
	deselectAnswers()
	const currentQuizData = quizData[currentQuiz]

	questionEl.innerText = currentQuizData.question

	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

function getSelected() {
	let answer = undefined

	answerEl.forEach(answerEl => {
		if (answerEl.checked) {
			answer = answerEl.id
		}
	})

	return answer
}

function deselectAnswers() {
	answerEl.forEach(answerEl => {
		answerEl.checked = false
	})
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected()

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++
		}
		currentQuiz++
		if (currentQuiz < quizData.length) {
			loadQuiz()
		} else {
			if (score >= 8)
				quiz.innerHTML = `<h2>Gratulacje, świetnie Ci poszło! Twój wynik to: ${score}/${quizData.length}</h2> <br> <a href="https://marvelquiz-oski.netlify.app/">Reset</a>`
			else if (score >= 5 && score < 8)
				quiz.innerHTML = `<h2>Nie najgorzej! Twój wynik to: ${score}/${quizData.length}</h2><br> <a href="https://marvelquiz-oski.netlify.app/">Reset</a> `
			else {
				quiz.innerHTML = `<h2>Następnym razem pójdzie Ci lepiej! Twój wynik to: ${score}/${quizData.length}</h2> <br> <a href="https://marvelquiz-oski.netlify.app/">Reset</a>`
			}
		}
	}
})
