//1
const myName = 'Вадим'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Result School'
const reasonText = 'хочу узнать что-то новое'
numberOfMonth = 4

console.log(`Всем привет! Меня зовут ${myName}.
 Сейчас я изучаю язык программирования ${programmingLanguage}
на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}.
До этого я изучал ${programmingLanguage} ${numberOfMonth}
месяца. Я уверен, что пройду данный курс до конца!`)

//2
let myInfoText = `Всем привет! Меня зовут Вадим.
Сейчас я изучаю язык программирования JavaScript
 на курсе по JavaScript у Result School. 
 Я хочу стать веб-разработчиком, потому что хочу узнать что-то новое.
 До этого я изучал JavaScript 4
 месяца. Я уверен, что пройду данный курс до конца!`
console.log(myInfoText.replaceAll('JavaScript', 'javascript'))
console.log(myInfoText.replaceAll('курс', 'КУРС'))
console.log(myInfoText.length)
console.log(myInfoText[0, 274])

//3
/*const userName = prompt('Как вас зовут?')
const userName1 = (userName.toLowerCase().trim()) 
alert(`Вас зовут ${userName1}`)*/

//4
/*const userName2 = prompt('Как вас зовут?')
const userName3 = (userName2.toLowerCase().trim()) 
const userAge = prompt('Сколько вам лет?')
const userAge1 = (Number(userAge)) 
alert(`Вас зовут ${userName3} и вам ${userAge1} лет`)*/

//5
/*let userString = prompt('Введите текст для обрезки')
userString = userString.trim()
const startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')
const string = userString.slice(startSliceIndex, endSliceIndex)
alert(`Результат: ${string}`)*/

//6
let userText = prompt('Введите текст')
userText = userText.trim()
let worldFromText = prompt('Введите слово из текста')
worldFromText = worldFromText.trim()
const index = userText.indexOf('worldFromText')
const indexOfWorld = worldFromText.slice(index)
alert(`Результат: ${worldFromText}`)



