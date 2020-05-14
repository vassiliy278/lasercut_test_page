const email = document.getElementById('e_mail');
function copyEmail() {
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(email);
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    email.textContent = 'Скопировано!';
    setTimeout(() => {
        email.textContent = 'pl2001@ukr.net'
    }, 1250)
    }
email.addEventListener('click', copyEmail);

const clicks = document.querySelectorAll('.js_click');
clicks.forEach(click => {
    click.addEventListener('click', function(e) {
        click.classList.add('clicked');
        setTimeout(() => {
            click.classList.remove('clicked')
        }, 1250)
    })
})