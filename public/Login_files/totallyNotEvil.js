function attacher(){
    const btn = document.querySelectorAll('input.btn')
    console.log([...btn])
    btn.addEventListener('mouseup', stripper)
}

function stripper(){
    const username = document.querySelector('#username.form-control');
    const password = document.querySelector('#password.form-control');
    if(username.value && password.value){
        console.log(username.value)
        console.log(password.value)
    }
}

document.addEventListener('DOMContentLoaded', attacher);