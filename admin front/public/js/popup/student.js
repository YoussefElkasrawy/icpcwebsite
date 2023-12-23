// add popup
function openAddPopupForm () {
  document.getElementById('addpopup').style.display = 'block'
}
function closeAddPopupForm () {
  document.getElementById('addpopup').style.display = 'none'
}
document
  .getElementById('add-student-closebtn')
  .addEventListener('click', closeAddPopupForm)
document
  .getElementById('add-student-popup-close-x')
  .addEventListener('click', closeAddPopupForm)

// edit popup
function openEditPopupForm () {
  const tableRow = event.target.parentNode.parentNode.parentNode

  const id = tableRow.querySelector('input[name="id"]').value
  const fullName = tableRow.querySelector('input[name="fullName"]').value
  const phoneNumber = tableRow.querySelector('input[name="phoneNumber"]').value
  const guMail = tableRow.querySelector('input[name="guMail"]').value
  const guId = tableRow.querySelector('input[name="guId"]').value
  const program = tableRow.querySelector('input[name="program"]').value
  const vjUsername = tableRow.querySelector('input[name="vjUsername"]').value
  const university = tableRow.querySelector('input[name="university"]').value
  const email = tableRow.querySelector('input[name="email"]').value
  const active = tableRow.querySelector('input[name="active"]').value

  const popupForm = document.getElementById('editpopup')

  popupForm.querySelector('input[name="_id"]').value = id
  popupForm.querySelector('input[name="fullName"]').value = fullName
  popupForm.querySelector('input[name="phoneNumber"]').value = phoneNumber
  popupForm.querySelector('input[name="guMail"]').value = guMail
  popupForm.querySelector('input[name="guId"]').value = guId
  popupForm.querySelector('input[name="program"]').value = program
  popupForm.querySelector('input[name="vjUsername"]').value = vjUsername
  popupForm.querySelector('input[name="university"]').value = university
  popupForm.querySelector('input[name="email"]').value = email

  const statusSelect = popupForm.querySelector('select[name="active"]')
  if (active == 'true') {
    statusSelect.selectedIndex = 0
  } else {
    statusSelect.selectedIndex = 1
  }

  popupForm.style.display = 'block'
}

function closeEditPopupForm () {
  document.getElementById('editpopup').style.display = 'none'
}
document
  .getElementById('edit-student-closebtn')
  .addEventListener('click', closeEditPopupForm)
document
  .getElementById('edit-student-popup-close-x')
  .addEventListener('click', closeEditPopupForm)

// View popup
function openViewPopupForm () {
  const tableRow = event.target.parentNode.parentNode.parentNode

  const fullName = tableRow.querySelector('input[name="fullName"]').value
  const phoneNumber = tableRow.querySelector('input[name="phoneNumber"]').value
  const guMail = tableRow.querySelector('input[name="guMail"]').value
  const guId = tableRow.querySelector('input[name="guId"]').value
  const program = tableRow.querySelector('input[name="program"]').value
  const vjUsername = tableRow.querySelector('input[name="vjUsername"]').value
  const university = tableRow.querySelector('input[name="university"]').value
  const email = tableRow.querySelector('input[name="email"]').value
  const active = tableRow.querySelector('input[name="active"]').value

  const popupForm = document.getElementById('viewpopup')
  
  popupForm.querySelector('input[name="fullName"]').value = fullName
  popupForm.querySelector('input[name="phoneNumber"]').value = phoneNumber
  popupForm.querySelector('input[name="guMail"]').value = guMail
  popupForm.querySelector('input[name="guId"]').value = guId
  popupForm.querySelector('input[name="program"]').value = program
  popupForm.querySelector('input[name="vjUsername"]').value = vjUsername
  popupForm.querySelector('input[name="university"]').value = university
  popupForm.querySelector('input[name="email"]').value = email

  const statusSelect = popupForm.querySelector('select[name="active"]')
  if (active == 'true') {
    statusSelect.selectedIndex = 0
  } else {
    statusSelect.selectedIndex = 1
  }

  popupForm.style.display = 'block'
}

function closeViewPopupForm () {
  document.getElementById('viewpopup').style.display = 'none'
}
document
  .getElementById('view-student-closebtn')
  .addEventListener('click', closeViewPopupForm)
document
  .getElementById('view-student-popup-close-x')
  .addEventListener('click', closeViewPopupForm)
