function submitContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('submitMessage');

    if (name && email) {
        message.innerText = `Thank you, ${name}! Your message has been
sent!`;
        message.style.color = 'green';
    } else {
        message.innerText = `Please fill in all fields.`;
        message.style.color = 'red';
    }
}