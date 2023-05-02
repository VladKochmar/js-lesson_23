// Задаємо користувачу задачу з додавання двох чисел. Визначити скільки секунд було використано для розв’язання задачі.

class CheckUserSpeed {
   constructor(minVal, maxVal) {
      this.minVal = minVal
      this.maxVal = maxVal
      this.firstNum = this.randomNum
      this.secondNum = this.randomNum
      this.exercise = this.createExercise()
   }

   get randomNum() {
      return Math.floor(Math.random() * (this.maxVal - this.minVal + 1) + this.minVal)
   }

   check() {
      const totalTime = (Date.now() - this.startTime) / 1000
      this.sumResult.innerText = `Правильна відповідь: ${this.firstNum + this.secondNum}`
      this.totalTimeContainer.innerText = `Час виконання ${totalTime}с`
   }

   createExercise() {
      const container = document.createElement('div')
      container.className = 'exercises'

      const exercise = document.createElement('div')
      exercise.innerText = `${this.firstNum} + ${this.secondNum} = ?`
      container.append(exercise)

      const inp = document.createElement('input')
      inp.className = 'input'
      inp.type = 'number'
      inp.placeholder = 'Введіть результат'
      inp.addEventListener('change', this.check.bind(this))
      container.append(inp)

      this.sumResult = document.createElement('div')
      container.append(this.sumResult)

      this.totalTimeContainer = document.createElement('div')
      container.append(this.totalTimeContainer)

      return container
   }

   render(containerSelector) {
      document.querySelector(containerSelector).append(this.exercise)
      this.startTime = Date.now()
   }
}

new CheckUserSpeed(1, 100).render('.block__container')
