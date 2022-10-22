export default function Header({ $target }) {
    const $head = document.createElement('h1')
    $head.innerText = 'Component JSSS'

    this.render = () => {
        $target.appendChild($head)
    }
}