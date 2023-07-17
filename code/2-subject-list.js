// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  ' English',
  ' Digital Technology',
  ' Maths',
  ' Science',
]

function showSubjects() {
  alert(subjects)
}




function addSubject() {

  let newSubject = prompt('What subject do you want to add to the array?')
  while (newSubject != 'stop') {

    subjects.push(newSubject)

    newSubject = prompt('What subject do you want to add to the array?')
  }
}






function removeSubject() {

  // remove 1 item at the index position of the subjects array
  let index = prompt('Which index do you want to delete from the array?')

  let arrayLength = subjects.length
  if (index >= arrayLength) {
    alert('error, please insert a digit')
  } else {
    subjects.splice(index, 1)
  }
}
