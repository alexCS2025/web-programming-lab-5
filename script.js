let osInfo = localStorage.setItem('os', navigator.userAgent)

const footerOsInfo = document.querySelector("#osInfo")
footerOsInfo.textContent = localStorage.getItem('os')



async function fetchComments() {
    const url = "https://jsonplaceholder.typicode.com/posts/14/comments"

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

function appendComments(comments) {
    if (!Array.isArray(comments)) return

    const container = document.querySelector("#comments-container")
    if (!container) return

    container.innerHTML = ""
    const fragment = document.createDocumentFragment()

    comments.forEach(comment => {
        const card = document.createElement("article")
        card.classList.add("comment-card")

        const author = document.createElement("h4")
        author.textContent = comment.name

        const body = document.createElement("p")
        body.textContent = comment.body

        const email = document.createElement("a")
        email.textContent = comment.email
        email.href = `mailto:${comment.email}`

        card.appendChild(author)
        card.appendChild(email)
        card.appendChild(body)
        fragment.appendChild(card)
    })

    container.appendChild(fragment)
}

fetchComments()
    .then(comments => appendComments(comments))
    .catch(error => console.error(error))


setTimeout(() => {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}, 60000);

document.getElementById('closeModalBtn')?.addEventListener('click', () => {
  document.getElementById('contactModal').style.display = 'none';
});

function applyAutoTheme() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 7 && hours < 21) {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }
}

applyAutoTheme();

document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});