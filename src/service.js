export async function getRepositories(repos) {
    let data = await fetch(`https://api.github.com/search/repositories?q=${repos}+in:name&per_page=10`).then(
        (response) => response.json()
    )

    return data
}
