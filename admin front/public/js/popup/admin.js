// add popup
function openAddPopupForm () {
  document.getElementById('addpopup').style.display = 'block'
}
function closeAddPopupForm () {
  document.getElementById('addpopup').style.display = 'none'
}
document
  .getElementById('add-admin-closebtn')
  .addEventListener('click', closeAddPopupForm)
document
  .getElementById('add-admin-popup-close-x')
  .addEventListener('click', closeAddPopupForm)

// edit popup
function openEditPopupForm () {
  const tableRow = event.target.parentNode.parentNode.parentNode

  const id = tableRow.querySelector('input[name="id"]').value
  const fullName = tableRow.querySelector('input[name="fullName"]').value
  const email = tableRow.querySelector('input[name="email"]').value
  const active = tableRow.querySelector('input[name="active"]').value

  const popupForm = document.getElementById('editpopup')

  popupForm.querySelector('input[name="_id"]').value = id
  popupForm.querySelector('input[name="fullName"]').value = fullName
  popupForm.querySelector('input[name="email"]').value = email

  const statusSelect = popupForm.querySelector('select[name="active"]')
  if (active === 'true') {
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
  .getElementById('edit-admin-closebtn')
  .addEventListener('click', closeEditPopupForm)
document
  .getElementById('edit-admin-popup-close-x')
  .addEventListener('click', closeEditPopupForm)

// View popup
function openViewPopupForm () {
  const tableRow = event.target.parentNode.parentNode.parentNode

  const fullName = tableRow.querySelector('input[name="fullName"]').value
  const email = tableRow.querySelector('input[name="email"]').value
  const active = tableRow.querySelector('input[name="active"]').value

  const popupForm = document.getElementById('viewpopup')

  popupForm.querySelector('input[name="fullName"]').value = fullName
  popupForm.querySelector('input[name="email"]').value = email

  const statusSelect = popupForm.querySelector('select[name="active"]')
  if (active === 'true') {
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
  .getElementById('view-admin-closebtn')
  .addEventListener('click', closeViewPopupForm)
document
  .getElementById('view-admin-popup-close-x')
  .addEventListener('click', closeViewPopupForm)
