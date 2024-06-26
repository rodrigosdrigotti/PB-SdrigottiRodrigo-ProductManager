const form = document.getElementById('resetPassword')

form.addEventListener('submit', e => {
    e.preventDefault()

    const data = new FormData(form)

    const obj = {}

    data.forEach((value, key) => (obj[key] = value))
    
    const fetchParams = {
        url: '/api/auth/reset-password',
        headers: {
            'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(obj),
    }

    fetch(fetchParams.url, {
        headers: fetchParams.headers,
        method: fetchParams.method,
        body: fetchParams.body
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.status === 'Success') { 
            window.location.href = '/login.html'; 
        } else {
            // Inicio de sesión no exitoso
            console.log("Cambio de Contraseña fallida")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "La Contraseña no puede ser igual a la anterior",
              });
        }
    })
    .catch(error => console.log(error))
})

