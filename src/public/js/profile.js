document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');

    logoutButton.addEventListener('click', () => {
        fetch('/api/auth/logout')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = '/login.html';
            })
            .catch(error => console.log(error));
    });
});