const name =  document.querySelector('#name');
const message =  document.querySelector('#message');


const getForm =  document.querySelector('#get-form');
const postForm =  document.querySelector('#post-form');

const postNameInput = document.querySelector('#post-name-input');
const postMessageInput = document.querySelector('#post-message-input');
const submitBtn = document.querySelector('#submit-btn');

const getNameInput = document.querySelector('#name-input');

postForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const nameValue = postNameInput.value;
    const messageValue = postMessageInput.value;
    
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameValue,
            message: messageValue
        })
    }).then( res =>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        name.textContent = data.name;
        message.textContent = data.message;
    }).catch(err=>{
        console.log(err);
    })
})
















getForm.addEventListener('submit', ()=>{
    fetch('/api')
        .then( res =>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            name.textContent = data.name;
            message.textContent = data.message;
        }).catch(err=>{
            console.log(err);
        })
            
})