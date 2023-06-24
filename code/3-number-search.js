// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
  44,
  3,
  11,

]

function searchNumbers() {
  let ask = prompt('What number do you want to search the array for?')


  let searchTarget = 1

  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  }

  alert(searchTarget + ' found: ' + searchResult)
}
