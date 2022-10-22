export default function TodoList({$target, initialState}) {
    console.log('TodoList', $target, initialState)
    this.state = initialState
    
    const $List = document.createElement('ul')

    this.render = () => {
        $List.innerHTML = `
            ${this.state?.map(todo =>
                `<li>${todo.title}</li>`
                ).join('')}`
        $target.appendChild($List)
    }

    this.render()
    

}