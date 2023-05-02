// Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути).
// Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним,
// якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.

class Sapper {
   constructor(field) {
      this.field = field
   }

   check() {
      if (this.getAttribute('mine') === '0') this.classList.add('td_green')
      else this.classList.add('td_red')
   }

   render(containerSelector) {
      const table = document.createElement('table')

      const tr = document.createElement('tr')

      for (const el of this.field) {
         const td = document.createElement('td')
         td.className = 'td'
         td.setAttribute('mine', el)
         td.onclick = this.check
         tr.append(td)
      }

      table.append(tr)

      document.querySelector(containerSelector).append(table)
   }
}

new Sapper([0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0]).render('.block__container')
