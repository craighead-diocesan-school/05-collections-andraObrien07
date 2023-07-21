// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let jobs = [
  ' astronaut ',
  ' firefighter ',
  ' police officer ',
  ' space doctor ',
  ' digi tech teacher',
  ' sucba diver',
]

function getJob() {

  let index = Math.floor(Math.random() * 5)

  alert('Your future job will be a' + jobs[index])
}
