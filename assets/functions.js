 // Function to bind onclick event
 document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('contact').addEventListener('click',function(){
      event.preventDefault();
      showContactPopup();
    },false);

    document.getElementById('share').addEventListener('click',function(){
      event.preventDefault();
      showSharePopup();
    },false);
},false);

// Function to show the Contact Pop-up
function showContactPopup() {
  document.getElementById("contactPopup").style.display = "block";
}

// Function to show the Share Pop-up
function showSharePopup() {
  document.getElementById("sharePopup").style.display = "block";
}

// Function to close the Contact Pop-up
function closeSharePopup() {
  document.getElementById("contactPopup").style.display = "none";
}

function closeContactPopup() {
  document.getElementById("sharePopup").style.display = "none";
}