// Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності.
// Визначити чи є він придатним на даний момент.

const container = document.querySelector('.product')
let productDate, daysNum, result

container.addEventListener('change', e => {
   const targetElement = e.target

   if (targetElement === document.getElementById('productDate')) {
      targetElement.value = targetElement.value.replace(/[\/\s]/g, '.')
      let [year, month, day] = targetElement.value.split('.')
      productDate = new Date()
      productDate.setFullYear(year, month - 1, day)
   }

   if (targetElement === document.getElementById('daysNum')) daysNum = parseInt(targetElement.value)

   if (productDate !== undefined && daysNum !== undefined) {
      let maxProductDate = new Date(productDate)
      maxProductDate.setDate(maxProductDate.getDate() + daysNum)

      const currentDate = new Date()

      if (maxProductDate < currentDate) result = `Продукт прострочений. Термін придатності до ${maxProductDate.toLocaleDateString()}`
      else result = `Продукт придатний для використання. Термін придатності до ${maxProductDate.toLocaleDateString()}`

      document.querySelector('.product__result').innerText = result
   }
})
