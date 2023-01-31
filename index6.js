//1

/*let userLogin = prompt('Введите логин')
userLogin = userLogin.trim()
let userPassword = prompt('Введите пароль')
userPassword = userPassword.trim()

const existingUserLogin = 'the_best_user'
const existingUserPassword = '12345678'

if (userLogin === existingUserLogin && userPassword === existingUserPassword)
{alert(`Добро пожаловать, ${existingUserLogin}!`)}
else{alert('Логин и (или) Пароль введены неверно!')}*/

//2

/*let correctAnswers = 0
let incorrectAnswers = 0

const q1 = prompt('Сколько будет 2+2?')
if (Number(q1) === 4) {alert('Ответ Верный'), ++correctAnswers}
else{alert('Ответ Неверный'), ++incorrectAnswers}

const q2 = prompt('Сколько будет 2*2?')
if (Number(q2) === 4) {alert('Ответ Верный'), ++correctAnswers}
else{alert('Ответ Неверный'), ++incorrectAnswers}

const q3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?')
if (Number(q3) === 1) {alert('Ответ Верный'), ++correctAnswers}
else{alert('Ответ Неверный'), ++incorrectAnswers}

const q4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет.Сколько в итоге конфет осталось у Маши?')
if (Number(q4) === 12) {alert('Ответ Верный'), ++correctAnswers}
else{alert('Ответ Неверный'), ++incorrectAnswers}

const q5 = prompt('Сколько будет 2+2*2?')
if (Number(q5) === 6) {alert('Ответ Верный'), ++correctAnswers}
else{alert('Ответ Неверный'), ++incorrectAnswers}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`)*/

//3

/*confirm('JavaScript появился в 1995 году?')
alert('Верно')

confirm('Спецификация JavaScript называется ECMAScript?')
alert('Верно')

confirm('JavaScript был создан за 1 месяц?')
alert('10 дней')*/

//4

/*let i = 0
while (i<3)
{let newStudent = prompt('Введите имя нового студента!')
if (newStudent) {
 newStudent = newStudent.trim()
 alert(`Добро пожаловать, ${newStudent}`)
 i++}}

let a = 0
do
{let newStudent = prompt('Введите имя нового студента!')
if (newStudent) {
 newStudent = newStudent.trim()
 alert(`Добро пожаловать, ${newStudent}`)
 a++}}
while (a<3)*/

//5

let sum  = 0

for(let i = 1; i <= 100; i++){sum += i;}
alert(`${sum}`)