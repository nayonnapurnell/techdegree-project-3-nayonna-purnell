


window.onload = function() {
    var input = document.getElementById("name").focus();
  }


   
  const jobRoleSelector = document.getElementById('title');
  const otherSelector = document.getElementById('other');

  const otherInputField =  document.getElementById('other_title');
  otherInputField.style.display = "none";

  jobRoleSelector.addEventListener('click', () => {
    if (otherInputField.style.display = "block") 
      {
        otherSelector.value != 'other';
      }
    else (otherInputField.style.display = "none") 
      {
        otherSelector.value === 'other'
      }
  });


  // const jobRoleSelector = document.getElementById('title');
  // const otherSelector = document.querySelector('other');

  // const otherInputField =  document.querySelector('other_title');
  // document.getElementById('other_title').style.display = "none";

  // jobRoleSelector.addEventListener('click', () => {
  //   if (jobRoleSelector.value === 'other') 
  //     {
  //       otherInputField.style.display = "none";
  //     }
  //     else (jobRoleSelector.value != 'other')
  //     {
  //       otherInputField.style.display = "block";
  //     }
  // });

