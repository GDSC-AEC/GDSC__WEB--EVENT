const hangup = document.getElementsByClassName('hangup')[0];

hangup.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const message = document.querySelector('.message'); 
    console.log(name.value);
    console.log(email.value);
    console.log(message.value);
    name.value = "";
    email.value = "";
    message.value = "";
});