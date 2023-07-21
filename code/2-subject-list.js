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
  // adding subjects to the array
  let newSubject = prompt('What subject do you want to add to the array?')
  // a loop that allows the user to add as many subjects to the array as they like until they say 'stop'
  while (newSubject != 'stop') {

    subjects.push(newSubject)

    newSubject = prompt('What subject do you want to add to the array?')
  }
}

function removeSubject() {

  // remove 1 item at the index position of the subjects array
  let index = prompt('Which index do you want to delete from the array?')

  let arrayLength = subjects.length
  // if the index is more than or equal to the array they will be asked to insert a valid digit 
  if (index >= arrayLength) {
    alert('error, please insert a digit')
  }
  // if they insert a correct digit it index assisgned to that digit will be removed
  else {
    subjects.splice(index, 1)
  }
}
