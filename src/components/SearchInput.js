export default function SearchInput({$target}) {
    const $input = document.createElement('input');
    
    // property
    $input.placeholder = "검색어 입력"

    // handler
    $input.addEventListener('input', handleOnChange)


    function handleOnChange(event) {
        console.log(event.target.value)
    }

    

        
    
    // render
    this.render = () => {
        $target.appendChild($input)
    }
    
}