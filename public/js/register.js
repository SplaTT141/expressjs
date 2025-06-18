const formDOM = document.forms[0];
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');

formDOM.addEventListener('submit', e => {
    e.preventDefault();

    const clientData = {
        username: usernameDOM.value,
        password: passwordDOM.value,
    };

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
});