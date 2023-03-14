export function Repository(data) {
    let repository = document.createElement('div')
    repository.className = 'repository'
    repository.innerHTML = toHTML(data)

    console.log(data)

    return repository
}

function toHTML(data) {
    let [user, nameRepository] = data.full_name.split('/')

    return `
        <div class="repository__header">
            <a class="repository__nameRepository" href="${data.clone_url}">${nameRepository}</a>

            <span class="repository__user">${user}</span>
        </div>

        <span class="repository__language">Language: ${data.language || 'none'}</span>

        <span class="repository__description"><pre>Description: ${data.description || 'none'}</pre></span>
    `
}
