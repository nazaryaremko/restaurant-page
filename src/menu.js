import createHeader from "./home";

function createMenu() {
    if (document.getElementById('it1') !== null) {
        document.getElementById('it1').remove()
    }
    if (document.getElementById('home') !== null) {
        document.getElementById('home').remove()
    }
    const home = document.createElement('div');
    const content = document.getElementById('content')

    const item1 = document.createElement('p')
    item1.textContent = 'Menu Will Appear Here Soon'
    item1.setAttribute('id', 'it1')

    home.appendChild(item1)
    content.appendChild(home)

    return home
}

export default createMenu;