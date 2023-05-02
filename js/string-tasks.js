const list = ['Hello', 'H1', 'Task 5', 'How are you?', '12.04.2021', 'ASFDSAFsd', '33', 'sdrcvgpbm']

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

const task1List = list.filter(str => str.match(/\d/g))
document.getElementById('task1').innerText = task1List

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

const task2List = list.filter(str => str.match(/^\D*$/g))
document.getElementById('task2').innerText = task2List

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

const task3List = list.filter(str => str.match(/[aeiouy]/gi))
document.getElementById('task3').innerText = task3List

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.

const task4List = list.filter(str => str.match(/^[^aeiouy]*$/gi))
document.getElementById('task4').innerText = task4List

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

const task5List = list.filter(str => str.match(/[13]/g))
document.getElementById('task5').innerText = task5List

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

const str =
   'Lorem ipsum 12.24.2014 sit amet, consectetur 2 elit. Temporibus aperiam 27 excepturi 4142-3433-2323-3534 aspernatur tempore, minima 98 est nostrum! Consequuntur dolorem sed ea impedit 23.12.2012 aspernatur amet, explicabo 3253-4440-2758-9021 quis quos nihil?'

const task6List = str.match(/\d+/g)
document.getElementById('task6').innerText = task6List

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

const task7List = str.match(/[\p{P}]/gu)
document.getElementById('task7').innerText = task7List

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

const task8List = str.split(/[\p{P}]/u)
document.getElementById('task8').innerText = task8List

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).

const task9List = str.match(/\b(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}\b/g)
document.getElementById('task9').innerText = task9List

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

const task10List = str.match(/\b\d{2}\b/g)
document.getElementById('task10').innerText = `Кількість двоцифрових чисел рядку: ${task10List.length}`

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»).
// Знайти усі такі номери.

const task11List = str.match(/\d{4}\-\d{4}\-\d{4}\-\d{4}/g)
if (task11List.length) document.getElementById('task11').innerText = `Це номер(и) банківської картки ${task11List}`

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)

const address = 'https://www.kmu.gov.ua/'

const task12List = /\.gov\./.test(address)
let result12

if (task12List) result12 = 'Цей сайт є урядовим'
else result12 = 'Цей сайт не є урядовим'

document.getElementById('task12').innerText = result12

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення

const message = '2004, 2007, 1975, 2222, 2045, 3021, 2008, 2022, 2021, 1974, 1032'

const task13List = message.match(/\b(20[2-9]{2}|2[2-9][0-9]{2}|[3-9][0-9]{3})\b/g)
document.getElementById('task13').innerText = task13List

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)

let phoneNumber = '+380 73 060 39 52'

phoneNumber = phoneNumber.replace(/\s/g, '')

const task14List = /\+380\d{9}/.test(phoneNumber)
let result14

if (task14List) result14 = 'Цей номер український'
else result14 = 'Цей номер не український'

document.getElementById('task14').innerText = result14

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.

document.getElementById('userName').addEventListener('change', e => {
   e.target.value = e.target.value.replace(/\s/g, '-')
})

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»

document.getElementById('userDate').addEventListener('change', e => {
   e.target.value = e.target.value.replace(/\./g, '/')
})

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним

document.getElementById('userDay').addEventListener('change', e => {
   let result17

   if (/([06]|sun|sat)/.test(e.target.value)) result17 = 'Це вихідний день'
   else result17 = 'Це не вихідний день'

   document.getElementById('task17').innerText = result17
})
