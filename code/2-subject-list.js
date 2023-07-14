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

  // while(newSubject =! 'yes')
  // let newSubject = prompt('What subject do you want to add to the array?')
  // let newSubject = 'Maths'
  while (newSubject = ! 'yes') {
    let newSubject = prompt('What subject do you want to add to the array?')
  }
  // add a new item to the end of the subjects array
  subjects.push(newSubject)
}






function removeSubject() {
  let index = 0
  let removeSubject = prompt('Which index do you want to delete from the array?')
  // remove 1 item at the index position of the subjects array
  subjects.splice(index, removeSubject)
}
// Math.floor(Math.random() * 5)