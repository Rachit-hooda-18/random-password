function randomPassword() {
  let chars =
    "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[];',./{}|:<>?";
  let passstrength = 15;
  let password = "";

  for (let i = 0; i < passstrength; i++) {
    let random = Math.floor(Math.random() * chars.length);

    password += chars.substring(random, random + 1);
  }
  document.getElementById("password").value = password;
}

// abcdefghijklmnopqrstuvwxyz
// 1234567890
// !@#$%^&*()_+-=[];',./{}|:<>?
