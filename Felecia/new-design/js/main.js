// Felecia Saunders: site scripts

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// NOTE: the forms are design-only for now. They validate and show a
// confirmation, but emails are not saved anywhere until the forms are
// connected to Mailchimp or another email service.

var EMAIL_RE = /^\S+@\S+\.\S+$/;

// ---------- Email typo suggestions ("Did you mean gmail.com?") ----------
var DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'live.com', 'msn.com', 'comcast.net', 'att.net'];

function distance(a, b) {
  var d = [];
  for (var i = 0; i <= a.length; i++) { d[i] = [i]; }
  for (var j = 0; j <= b.length; j++) { d[0][j] = j; }
  for (i = 1; i <= a.length; i++) {
    for (j = 1; j <= b.length; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1,
        d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
  }
  return d[a.length][b.length];
}

function suggestFor(value) {
  var at = value.lastIndexOf('@');
  if (at < 1) return null;
  var domain = value.slice(at + 1).toLowerCase();
  if (!domain || DOMAINS.indexOf(domain) > -1) return null;
  for (var k = 0; k < DOMAINS.length; k++) {
    if (distance(domain, DOMAINS[k]) <= 2) return value.slice(0, at + 1) + DOMAINS[k];
  }
  return null;
}

function attachSuggestion(input) {
  var box = document.createElement('p');
  box.className = 'suggest';
  box.hidden = true;
  box.setAttribute('aria-live', 'polite');
  input.closest('.field, .quick').appendChild(box);
  input.addEventListener('blur', function () {
    var fix = suggestFor(input.value.trim());
    if (!fix) { box.hidden = true; return; }
    box.innerHTML = '';
    box.append('Did you mean ');
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = fix;
    b.addEventListener('click', function () { input.value = fix; box.hidden = true; input.focus(); });
    box.append(b, '?');
    box.hidden = false;
  });
}

// ---------- Shared submit handling ----------
function validate(input, errorEl) {
  var ok = EMAIL_RE.test(input.value.trim());
  input.setAttribute('aria-invalid', ok ? 'false' : 'true');
  errorEl.hidden = ok;
  if (!ok) input.focus();
  return ok;
}

function fakeSend(button, done) {
  var label = button.textContent;
  button.disabled = true;
  button.textContent = 'Sending…';
  setTimeout(function () { button.disabled = false; button.textContent = label; done(); }, 700);
}

// ---------- Hero quick signup (email only) ----------
var quickForm = document.getElementById('quick-form');
var quickEmail = document.getElementById('quick-email');
var quickDone = document.getElementById('quick-done');
attachSuggestion(quickEmail);

quickForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!validate(quickEmail, document.getElementById('quick-error'))) return;
  fakeSend(quickForm.querySelector('button[type=submit]'), function () {
    quickForm.hidden = true;
    quickDone.hidden = false;
    quickDone.focus();
  });
});

// "Tell Felecia what you're looking for" carries the email down to the full form
document.getElementById('quick-more').addEventListener('click', function () {
  document.getElementById('email').value = quickEmail.value.trim();
  setTimeout(function () { document.getElementById('name').focus(); }, 400);
});

// ---------- Full signup: copy changes with the visitor's goal ----------
var COPY = {
  buy:      { title: 'Get homes that fit, sent to your inbox', button: 'Send Me Matching Homes' },
  sell:     { title: 'Get your free home value estimate', button: 'Get My Free Home Value' },
  relocate: { title: 'Plan your move to Columbus', button: 'Help Me Plan My Move' },
  browse:   { title: 'Get new Columbus listings by email', button: 'Send Me New Listings' }
};
var joinTitle = document.getElementById('join-title');
var joinBtn = document.getElementById('join-btn');

function setGoal(goal) {
  var radio = document.querySelector('input[name=goal][value=' + goal + ']');
  if (radio) radio.checked = true;
  joinTitle.textContent = COPY[goal].title;
  joinBtn.textContent = COPY[goal].button;
}

document.querySelectorAll('input[name=goal]').forEach(function (r) {
  r.addEventListener('change', function () { setGoal(r.value); });
});

// Buttons like "Get My Free Home Value" open the form with that choice picked
document.querySelectorAll('[data-goal]').forEach(function (a) {
  a.addEventListener('click', function () { setGoal(a.getAttribute('data-goal')); });
});

var form = document.getElementById('join-form');
var email = document.getElementById('email');
var joined = document.getElementById('joined');
attachSuggestion(email);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!validate(email, document.getElementById('email-error'))) return;
  var phone = document.getElementById('phone');
  var phoneOk = phone.value.replace(/\D/g, '').length >= 10;
  phone.setAttribute('aria-invalid', phoneOk ? 'false' : 'true');
  document.getElementById('phone-error').hidden = phoneOk;
  if (!phoneOk) { phone.focus(); return; }
  fakeSend(joinBtn, function () {
    form.hidden = true;
    joined.hidden = false;
    joined.focus();
  });
});
