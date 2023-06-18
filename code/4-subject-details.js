// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
}

function showSubject() {
  alert(subject.name)
}

function changeSubject() {
  let newName = 'Typing Skills'

  subject.name = newName
}