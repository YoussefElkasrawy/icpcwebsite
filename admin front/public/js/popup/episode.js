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
    const podcastId = tableRow.querySelector('input[name="podcastId"]').value
    const title = tableRow.querySelector('input[name="title"]').value
    const by = tableRow.querySelector('input[name="by"]').value
    const googlelink = tableRow.querySelector('input[name="googlelink"]').value
    const spotifylink = tableRow.querySelector('input[name="spotifylink"]').value
    const ytlink = tableRow.querySelector('input[name="ytlink"]').value
  
    const popupForm = document.getElementById('editpopup')
  
    popupForm.querySelector('input[name="_id"]').value = id
    popupForm.querySelector('input[name="podcastId"]').value = podcastId
    popupForm.querySelector('input[name="title"]').value = title
    popupForm.querySelector('input[name="by"]').value = by
    popupForm.querySelector('input[name="googlelink"]').value = googlelink
    popupForm.querySelector('input[name="spotifylink"]').value = spotifylink
    popupForm.querySelector('input[name="ytlink"]').value = ytlink
  
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
  