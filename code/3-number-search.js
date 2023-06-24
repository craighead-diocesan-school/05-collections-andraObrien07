// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  0,
  44,
  3,
  11,

]

function searchNumbers() {
  let ask = prompt('What number do you want to search the array for?')


  let searchTarget = 1

  // let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
    // else if (currentNumber != searchTarget) {
    //   searchResult = false
    // }
  }

  alert(searchTarget + ' found: ' + searchResult)
}
