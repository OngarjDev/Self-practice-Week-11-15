import { loadQuotes } from './quoteManagement.js'
document.addEventListener('DOMContentLoaded', async() => {
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

