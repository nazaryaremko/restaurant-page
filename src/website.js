
function createHeader() {
    const header = document.createElement("h");
    const footer = document.createElement("h");
    
    const content = document.getElementById('content')
    
    header.setAttribute('id', 'header')
    footer.setAttribute('id', 'footer')
    header.textContent = 'Noodle Doodle';
    footer.textContent = 'Page Navigation:'

    content.appendChild(header);
    content.appendChild(footer);

    footer.appendChild(setButtons()[0]);
    footer.appendChild(setButtons()[1]);

    return content
}

function setButtons() {

    const button1 = document.createElement('button');
    button1.setAttribute('id', 'btn1')
    button1.textContent = 'Home';


    const button2 = document.createElement('button')
    button2.setAttribute('id', 'btn2')
    button2.textContent = 'Menu'


    return [button1, button2]
}


export default createHeader;


/*
button2.addEventListener('click', (e) => {
        if (e.target.contains('active')) return;
        setActiveButton(button2);
        createMenu();
    })

*/