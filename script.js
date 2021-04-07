const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  "Hello",
  "Have a good day!",
  "Have you drank water today?",
  "Good Morning!",
  "Good luck today!"
]

const colors = [
  "red",
  "black",
  "blue",
  "yellow",
  "green",
  "orange"
]


button.addEventListener('click', () => createNotification())

function createNotification() {
  const notif = document.createElement('div')
  notif.classList.add('toast')

  notif.innerText = getRandomMessage()
  notif.style.color = colors[Math.floor(Math.random() * colors.length)]

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}


function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
