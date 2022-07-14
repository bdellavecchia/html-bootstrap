const buttonMore = document.querySelector('#buttonMore')
        const links = document.querySelector('#links')
        
        buttonMore.addEventListener('click', e=>{
            links.classList.toggle('collapsed')
        })