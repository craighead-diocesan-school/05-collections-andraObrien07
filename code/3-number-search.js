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
  let searchTarget = prompt('What number do you want to search the array for?')


  // let searchTarget = 1

  let searchResult = false

  for (let currentNumber of numberArray) {
    if (currentNumber == Number(searchTarget)) {
      searchResult = true
    }
    // else if (currentNumber != searchTarget) {
    //   searchResult = false

    // alert(searchTarget + ' found: ' + searchResult)
  }

  if (searchResult) {
    alert(searchTarget + 'is here')
  }
  else {
    alert(searchTarget + 'is not here')
  }
  alert(searchTarget + ' found: ' + searchResult)
}
