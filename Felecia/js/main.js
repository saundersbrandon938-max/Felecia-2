// Felicia Saunders website scripts
document.getElementById('yr').textContent = new Date().getFullYear();
// Design-only signup: validates and shows a thank-you. Connect to Mailchimp/etc. later.
document.getElementById('signupForm').addEventListener('submit', function(e){
  e.preventDefault();
  var email = document.getElementById('email');
  if(!email.value || !/^\S+@\S+\.\S+$/.test(email.value)){
    email.style.borderColor = '#c0392b'; email.focus(); return;
  }
  this.style.display = 'none';
  document.getElementById('thanks').style.display = 'block';
});
