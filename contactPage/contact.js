const contactForm = document.getElementById("contactForm")
const nameInputBox = document.getElementById("name")
const emailInputBox = document.getElementById("email")
const messageInputBox = document.getElementById("message")

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = nameInputBox.value
  let email = emailInputBox.value
  let message = messageInputBox.value

  if(!name || !email || !message) {
    alert("Please enter all fields.")
    return
  }

const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

  if(emailRegex.test(email)) {
    alert(`Thank you ${name} for your message!`)
    window.location.reload()
  } else {
    alert("Your email is invalid!")
  }
}) 