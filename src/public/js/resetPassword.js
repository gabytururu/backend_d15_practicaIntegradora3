
const mainContainer = document.querySelector('.mainContainer')
const newPasswordButton = document.querySelector('#newPasswordButton')
const passwordInput = document.querySelector('#passwordInput')

newPasswordButton.addEventListener('click',async(e)=>{
    e.preventDefault()    
    const email = mainContainer.getAttribute('data-email')
    const oldPassword = mainContainer.getAttribute('data-oldPassword')
    const password = passwordInput.value

    try {
        const response = await fetch('api/sessions/resetPassword',{
            method:'POST',
            headers:{'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:email,
                oldPassword:oldPassword,
                newPassword:password
            })
        })
        const data=await response.json()
        if(response.status === 200){
            let paragraph = document.createElement('p')
            paragraph.textContent = data.message
            paragraph.style.color = 'green';
            paragraph.style.fontSize = '20px';
        
            let responseContainer = document.querySelector("#response")
            responseContainer.appendChild(paragraph)

            setTimeout(()=>{
                responseContainer.innerHTML = ''
            },10000)
        }        
    } catch (error) {
        console.log('fetch error at password reset screen:',error)
    }
})

