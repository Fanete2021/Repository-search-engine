import { getRepositories } from '../service'
import { Repository } from './Repository'

export function Search(parentNode) {
    let search = document.createElement('form')
    search.className = 'search'
    search.innerHTML = toHTML()

    search.addEventListener('submit', submitForm)
    document.addEventListener('keydown', submitFormKeydown)

    addEventListenerButton(search)

    return search
}

function toHTML() {
    return `
        <div>
            <label class="search__label" for="repos">Repository</label>
            <input class="search__data" name="repos"></input>
        </div>

        <button class="search__send">Find</button>
    `
}

function addEventListenerButton(search) {
    let button = search.querySelector('.search__send')

    button.addEventListener('click', (event) => {
        submitForm(event)
    })
}

async function submitForm(event) {
    event.preventDefault()

    let input = document.querySelector('.search__data')

    if (input.value.length < 3) {
        alert('Few characters')
    } else {
        let repositories = await getRepositories(input.value)
        let parentNode = document.querySelector('.main')

        let elements = document.querySelectorAll('.repository, .result')
        console.log(elements)

        for (let elem of elements) {
            parentNode.removeChild(elem)
        }

        if (repositories.items.length === 0) {
            let result = document.createElement('div')
            result.className = 'result'
            result.textContent = 'Nothing found'
            parentNode.append(result)
        }

        for (let infoRepository of repositories.items) {
            let repos = new Repository(infoRepository)
            parentNode.append(repos)
        }
    }
}

function submitFormKeydown(event) {
    if (event.key === 'Enter') {
        submitForm(event)
    }
}
