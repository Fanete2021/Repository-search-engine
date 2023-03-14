import { Search } from '../components/Search'

export function Main() {
    let main = document.createElement('div')
    main.className = 'main'

    appendElements(main)

    return main
}

function appendElements(parentNode) {
    let search = new Search(parentNode)
    parentNode.append(search)

    let separator = document.createElement('div')
    separator.className = 'separator'
    parentNode.append(separator)
}
