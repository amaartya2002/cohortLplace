



let button = document.getElementById("submit-btn")

button.addEventListener("click", (e) => {
  e.preventDefault()
  const name = document.getElementById("nameInput")
  const amount = document.getElementById("amountNumber")
  const category = document.getElementById("selectOption")
  let mainExpenses = document.querySelector(".total-expense")



  // const nameValue = name.value

  mainExpenses.textContent = parseInt(mainExpenses.textContent) + parseInt(amount.value)

  const expenseAmount = Number(amount.value)

  console.log(`${name.value} , ${amount.value} and ${category.value}`)

  const element = document.createElement("div")

  element.style.backgroundColor = "oklch(71.8% 0.202 349.761)"
  element.style.borderRadius = "12px"
  element.style.padding = "4px 6px"



  let firstChild = document.createElement("div")
  firstChild.textContent = `Spent $${amount.value} at ${name.value}(${category.value})`
  firstChild.style.backgroundColor = "oklch(71.8% 0.202 349.761)"

  let deleteBtn = document.createElement("button")
  deleteBtn.innerText = "Delete"
  deleteBtn.style.all = "unset"
  deleteBtn.style.background = "oklch(71.8% 0.202 349.761)"
  deleteBtn.style.color = "oklch(98.5% 0 0)"
  deleteBtn.style.textAlign = "center"
  deleteBtn.style.padding = "3px 6px"
  deleteBtn.style.border = "0.3px solid oklch(92.3% 0.003 48.717)"
  deleteBtn.style.borderRadius = "8px"

  element.append(firstChild, deleteBtn)

  element.style.display = "flex"
  element.style.alignItems = "center"
  element.style.justifyContent = "space-between"
  element.style.marginBottom = "4px"

  const parentDiv = document.getElementById("expense")

  parentDiv.appendChild(element)

  name.value = ""
  amount.value = ""
  category.value = ""

  deleteBtn.addEventListener("click", () => {
    mainExpenses.innerText = parseInt(mainExpenses.innerText) - expenseAmount
    element.remove()
    deleteBtn = null
  })


})