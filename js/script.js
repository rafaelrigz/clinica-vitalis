document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-contato');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Obrigado pelo contato! Em breve retornaremos.');
        form.reset();
    });
});