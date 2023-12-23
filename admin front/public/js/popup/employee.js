// add popup
function openAddPopupForm () {
  document.getElementById('addpopup').style.display = 'block';
}
function closeAddPopupForm () {
  document.getElementById('addpopup').style.display = 'none';
}
document.getElementById('add-emp-closebtn').addEventListener('click', closeAddPopupForm);
document.getElementById('add-emp-popup-close-x').addEventListener('click', closeAddPopupForm);

// edit popup
function openEditPopupForm () {
  const tableRow = event.target.parentNode.parentNode.parentNode;

  const id = tableRow.querySelector('input[name="id"]').value;
  const name = tableRow.querySelector('input[name="name"]').value;
  const jobTitle = tableRow.querySelector('input[name="jobTitle"]').value;
  const linkedin = tableRow.querySelector('input[name="linkedin"]').value;
  const instgram = tableRow.querySelector('input[name="instgram"]').value;
  const facebook = tableRow.querySelector('input[name="facebook"]').value;
  const role = tableRow.querySelector('input[name="role"]').value;

  const popupForm = document.getElementById('editpopup');

  popupForm.querySelector('input[name="_id"]').value = id;
  popupForm.querySelector('input[name="name"]').value = name;
  popupForm.querySelector('input[name="jobTitle"]').value = jobTitle;
  popupForm.querySelector('input[name="linkedin"]').value = linkedin;
  popupForm.querySelector('input[name="instgram"]').value = instgram;
  popupForm.querySelector('input[name="facebook"]').value = facebook;

  const statusSelect = popupForm.querySelector('select[name="role"]');
  if (role == 'higherBoard') {
    statusSelect.selectedIndex = 0;
  } else if (role == 'trainer') {
    statusSelect.selectedIndex = 1;
  } else {
    statusSelect.selectedIndex = 2;
  }

  popupForm.style.display = 'block';
}

function closeEditPopupForm () {
  document.getElementById('editpopup').style.display = 'none';
}
document.getElementById('edit-emp-closebtn').addEventListener('click', closeEditPopupForm);
document.getElementById('edit-emp-popup-close-x').addEventListener('click', closeEditPopupForm);

// View popup
function openViewPopupForm () {
  const tableRow = event.target.parentNode.parentNode.parentNode;

  const image = tableRow.querySelector('input[name="image"]').value;
  const name = tableRow.querySelector('input[name="name"]').value;
  const jobTitle = tableRow.querySelector('input[name="jobTitle"]').value;
  const linkedin = tableRow.querySelector('input[name="linkedin"]').value;
  const instgram = tableRow.querySelector('input[name="instgram"]').value;
  const facebook = tableRow.querySelector('input[name="facebook"]').value;
  const role = tableRow.querySelector('input[name="role"]').value;

  const popupForm = document.getElementById('viewpopup');

  popupForm.querySelector('img[ alt="empimg"]').src += image;
  popupForm.querySelector('input[name="name"]').value = name;
  popupForm.querySelector('input[name="jobTitle"]').value = jobTitle;
  popupForm.querySelector('input[name="linkedin"]').value = linkedin;
  popupForm.querySelector('input[name="instgram"]').value = instgram;
  popupForm.querySelector('input[name="facebook"]').value = facebook;

  const statusSelect = popupForm.querySelector('select[name="role"]');
  if (role == 'higherBoard') {
    statusSelect.selectedIndex = 0;
  } else if (role == 'trainer') {
    statusSelect.selectedIndex = 1;
  } else {
    statusSelect.selectedIndex = 2;
  }

  popupForm.style.display = 'block';
}

function closeViewPopupForm () {
  document.getElementById('viewpopup').style.display = 'none';
}
document.getElementById('view-emp-closebtn').addEventListener('click', closeViewPopupForm);
document.getElementById('view-emp-popup-close-x').addEventListener('click', closeViewPopupForm);
