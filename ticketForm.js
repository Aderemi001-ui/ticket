const avatar=document.getElementById('upload')
const namer= document.getElementById('namediv')
const mailer= document.getElementById('maildiv')
const nicknamer= document.getElementById('usernamediv')
function formsubmit(){
  const names= document.getElementById('namediv').value
const mail= document.getElementById('maildiv').value
const nickname= document.getElementById('usernamediv').value
const error=document.querySelectorAll('.error')
  console.log(names,mail,nickname)

  localStorage.setItem('namesave',names)
   localStorage.setItem('mailsave',mail)
    localStorage.setItem('usernamesave',nickname)

const nameval= localStorage.getItem('namesave')
const mailval= localStorage.getItem('mailsave')
const usernameval= localStorage.getItem('usernamesave')
console.log(nameval,mailval,usernameval)

if(names==='' ){
error[0].innerHTML='This field is required'
namer.style.border='1px solid red'
}
if(mail===''){
error[1].innerHTML='Pls enter valid email address'
mailer.style.border='1px solid red'
}
if(nickname===''){
  error[2].innerHTML='Incorrect Username'
nicknamer.style.border='1px solid red'
}

if( names!=='' && mail!=='' && nickname!==''){
alert(` Congratulations!! ,${nameval} .You have successfully registered your event ticket and booked a seat at the event...`)
}

}
function avatarReturn(){
  avatar.innerHTML=` `
}
function avatarPopOut(){
avatar.innerHTML=`<img src='image-avatar.jpg' width='40px' height='40px' style='margin-bottom:5px'>`
const drag=document.querySelector('#drag')
drag.innerHTML=`<div>
<button class='btn btn-secondary' style='background-color:grey;border:none;border-radius:5px;margin-top:8px' onclick='avatarReturn()'>Remove Image</button>
<button style='background-color:grey;border:none;border-radius:5px;margin-top:8px'>Change Image</button>
</div>`
}
