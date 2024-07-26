

const emailVerifyButton = document.querySelector('#verifyEmail')
const email = document.querySelector('#emailInput')

emailVerifyButton.addEventListener('click',async(e)=>{
    e.preventDefault()

    try{
        const response = await fetch('/api/sessions/password',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email:email.value})
        });
        const data = await response.json()   
        if(response.status !== 200){
            let paragraph = document.createElement('p')
            paragraph.textContent = data.details
            paragraph.style.color = 'red';
            paragraph.style.fontSize = '20px';
        
            let errorContainer = document.querySelector("#error")
            errorContainer.appendChild(paragraph)

            setTimeout(()=>{
                errorContainer.innerHTML = ''
            },3000)
        }

        if(response.status === 200){
            let paragraph = document.createElement('p')
            paragraph.textContent = data.details
            paragraph.style.color = 'green';
            paragraph.style.fontSize = '20px';
        
            let errorContainer = document.querySelector("#error")
            errorContainer.appendChild(paragraph)

            setTimeout(()=>{
                errorContainer.innerHTML = ''
            },7000)
        } 
    }catch(error){
        console.log('fetch error at password reset screen:',error)
    }
   
})


//--------------------------------
 // const response = await fetch('/api/sessions/password',{
    //     method: 'POST',
    //     headers:{
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify(email)
    // });
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // OJO AQUI CON EL REQ.DTO DEL API/SESSIONS/CUSRRENT SE ESTA JODIENDO EL ENVIO DE CURRENT TUVE Q QUITAR DTO PARA Q OPERARA BIEN REVISAR
    // const password = await response.json();
    // console.log({password})
    // const currentUserEmail = await currentUser.payload.email;
   // return currentUserEmail

   //------------------------------------------



// async function verifyEmail() {
//    // const response = await fetch('/api/sessions/password');
//     // if (!response.ok) {
//     //   throw new Error('Network response was not ok');
//     // }
//     // const currentUser = await response.json();
//     // const currentUserEmail = await currentUser.payload.email;
//     // return currentUserEmail
// }