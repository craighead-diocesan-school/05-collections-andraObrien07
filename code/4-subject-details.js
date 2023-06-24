// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: ' DigiTech',
  room: ' Room 9',
  students: 150,
  teacher: ' Random Middle aged man'
}

function showSubject() {
  alert(subject.name + (', ') + subject.room + (', ') + subject.teacher)
}

function changeSubject() {
  let newName = 'Typing Skills'

  subject.name = newName
}

function changeTeacher() {
  let changeTeacher = prompt('What is the name of the new teacher? ')
  subject.teacher = changeTeacher
}