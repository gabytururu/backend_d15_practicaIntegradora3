const emailVerifyButton = document.querySelector('#verifyEmail')
emailVerifyButton.addEventListener('click',async()=>{
    console.log(emailVerifyButton)
    console.log('se apreto el boton')
    let email = 'gabymh4@gmail.com'
    const response = await fetch('/api/sessions/password',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(email)
    });
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // OJO AQUI CON EL REQ.DTO DEL API/SESSIONS/CUSRRENT SE ESTA JODIENDO EL ENVIO DE CURRENT TUVE Q QUITAR DTO PARA Q OPERARA BIEN REVISAR
    const password = await response.json();
    console.log({password})
    // const currentUserEmail = await currentUser.payload.email;
   // return currentUserEmail
})

// async function verifyEmail() {
//    // const response = await fetch('/api/sessions/password');
//     // if (!response.ok) {
//     //   throw new Error('Network response was not ok');
//     // }
//     // const currentUser = await response.json();
//     // const currentUserEmail = await currentUser.payload.email;
//     // return currentUserEmail
// }