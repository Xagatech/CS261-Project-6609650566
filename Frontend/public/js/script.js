function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU69a2b5d8f99dfc3243e24e1ab222de0d33cf3ad2eb7d94c79ab52f8634d5c67bdd60df00281345fb2ad4aeb23645747a'
        },
        body: JSON.stringify({ UserName: username, PassWord: password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
        document.getElementById('status').innerText = data.status; 
        document.getElementById('type').innerText =data.type;
        document.getElementById('username').innerText = data.username;
        document.getElementById('tu_status').innerText =  data.tu_status;
        document.getElementById('statusid').innerText = data.statusid;
        document.getElementById('displayname_th').innerText = data.displayname_th;
        document.getElementById('displayname_en').innerText =  data.displayname_en;
        document.getElementById('email').innerText =  data.email;
        document.getElementById('department').innerText =  data.department;
        document.getElementById('faculty').innerText = data.faculty;
    })
    .catch(error => console.error('Error:', error));
}