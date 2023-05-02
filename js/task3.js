// Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і вставкою.

class SpeedChecker {
   constructor(elemsNum, minVal, maxVal) {
      this.elemsNum = elemsNum
      this.minVal = minVal
      this.maxVal = maxVal
      this.arr = this.getRandomArray()
   }

   get randomNum() {
      return Math.floor(Math.random() * (this.maxVal - this.minVal + 1) + this.minVal)
   }

   getRandomArray() {
      let arr = []

      for (let i = 0; i < this.elemsNum; i++) {
         arr.push(this.randomNum)
      }

      return arr
   }

   getBubbleSortTime() {
      const arrCopy = this.arr.slice()

      let changes,
         startTime = Date.now()
      do {
         changes = false

         for (let i = 1; i < arrCopy.length; i++) {
            if (arrCopy[i - 1] > arrCopy[i]) {
               ;[arrCopy[i - 1], arrCopy[i]] = [arrCopy[i], arrCopy[i - 1]]
               changes = true
            }
         }
      } while (changes)

      return Date.now() - startTime
   }

   getInsertSortTime() {
      const arrCopy = this.arr.slice()

      let key,
         i,
         startTime = Date.now()

      for (let k = 1; k < arrCopy.length; k++) {
         key = arrCopy[k]
         i = k - 1
         while (i >= 0 && arrCopy[i] > key) {
            arrCopy[i + 1] = arrCopy[i]
            i = i - 1
         }
         arrCopy[i + 1] = key
      }

      return Date.now() - startTime
   }
}

const sc = new SpeedChecker(1000, 1, 800)

console.log(sc.arr)

document.getElementById('bubble-result').innerText = `Час сортування: ${sc.getBubbleSortTime()}мс`
document.getElementById('insert-result').innerText = `Час сортування: ${sc.getInsertSortTime()}мс`
