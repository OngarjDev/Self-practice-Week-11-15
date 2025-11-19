import { loadQuotes, addQuote } from './quoteManagement.js'
document.addEventListener('DOMContentLoaded', async () => {
    const quotes = await loadQuotes();
    console.log(quotes);

    const element = document.getElementById('quoteList')
    for (const quote of quotes) {
        element.innerHTML += `
<div class="quote-card" data-id="${quote.id}">
        <p>${quote['content']}</p>
        <p>${quote['author']}
        <div class="actions">
         <button class="edit" data-id="${quote.id}">edit</button>
         <button class="delete" data-id="${quote.id}">delete</button>
         </div>
         </div>
<br>`
    }
})

const formEle = document.getElementById("quoteForm")
formEle.addEventListener("submit", handleAddEdit)

async function handleAddEdit(e) {
    e.preventDefault()
    const id = formEle.quoteId.value
    const content = formEle.content.value
    const author = formEle.author.value

    const newQuote = { content, author }
    try {
        const createQuote = await addQuote(newQuote)
        const divQuoteEle = newQuoteElement(createQuote)
        document.getElementById("quoteList").appendChild(divQuoteEle)
    } catch (e) {
        console.log(e.message);
    }
}


const editButton = document.querySelector('#quoteList');
editButton.addEventListener("click", async (e) => {
    e.preventDefault()
    const card = document.querySelector(`.quote-card[data-id="${e.target.dataset.id}"]`);
    const content = card.children[0].textContent
    const author = card.children[1].textContent
    formEle.content.value = content
    formEle.author.value = author

});;
const content = document.querySelector('#content');
const author = document.querySelector('#author');
