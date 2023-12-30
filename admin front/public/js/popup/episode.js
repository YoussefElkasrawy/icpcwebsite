// add popup
function openAddPopupForm () {
    document.getElementById('addpopup').style.display = 'block'
  }
  function closeAddPopupForm () {
    document.getElementById('addpopup').style.display = 'none'
  }
  document
    .getElementById('add-episode-closebtn')
    .addEventListener('click', closeAddPopupForm)
  document
    .getElementById('add-episode-popup-close-x')
    .addEventListener('click', closeAddPopupForm)
  
  // edit popup
  function openEditPopupForm () {
    const tableRow = event.target.parentNode.parentNode.parentNode
  
    const id = tableRow.querySelector('input[name="id"]').value
    const courseId = tableRow.querySelector('input[name="courseId"]').value
    const title = tableRow.querySelector('input[name="title"]').value
    const description = tableRow.querySelector('.description').value
    const ytVideoCode = tableRow.querySelector('input[name="ytVideoCode"]').value
    const index = tableRow.querySelector('input[name="index"]').value
  
    const popupForm = document.getElementById('editpopup')
  
    popupForm.querySelector('input[name="_id"]').value = id
    popupForm.querySelector('input[name="courseId"]').value = courseId
    popupForm.querySelector('input[name="title"]').value = title
    popupForm.querySelector('.description').value = description
    popupForm.querySelector('input[name="ytVideoCode"]').value = ytVideoCode
    popupForm.querySelector('input[name="index"]').value = index
  
    popupForm.style.display = 'block'
  }
  
  function closeEditPopupForm () {
    document.getElementById('editpopup').style.display = 'none'
  }
  document
    .getElementById('edit-epi-closebtn')
    .addEventListener('click', closeEditPopupForm)
  document
    .getElementById('edit-epi-popup-close-x')
    .addEventListener('click', closeEditPopupForm)
  