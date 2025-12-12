// Show admin login
function showAdminLogin(){
  document.getElementById('adminLogin').style.display='block';
}

// Admin login
function loginAdmin(){
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value.trim();
  const msg = document.getElementById('msg');

  if(u==="THE GREAT INSPIRATION" && p==="222011"){
    alert("Welcome, Admin! Now you can manage results.");
    // Optionally, redirect or open dashboard here
  }else{
    msg.style.display='block';
    msg.innerText='Incorrect username or password!';
  }
}

// Check student result
function checkResult(){
  const examNo = document.getElementById('examNumber').value.trim();
  const term = document.getElementById('term').value;
  const box = document.getElementById('resultBox');

  const data = localStorage.getItem(examNo);
  if(!data){
    box.style.display='block';
    box.innerHTML='Result not found.';
    return;
  }

  const r = JSON.parse(data);
  if(r.term!==term){
    box.style.display='block';
    box.innerHTML='Result not found for this term.';
    return;
  }

  box.style.display='block';
  box.innerHTML=`<strong>Name:</strong> ${r.name}<br>
                 <strong>Class:</strong> ${r.class}<br>
                 <strong>Term:</strong> ${r.term}<br>`;
  for(const sub in r.scores){
    box.innerHTML+=`<strong>${sub}:</strong> ${r.scores[sub]}<br>`;
  }
}

// Example: upload a result (for testing)
localStorage.setItem('2025-12345', JSON.stringify({
  name:"John Doe",
  class:"SS2",
  term:"1st Term",
  scores:{Math:85, English:78, Biology:90}
}));
