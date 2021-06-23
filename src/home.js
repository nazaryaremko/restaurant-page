function createHeader(text) {
    const paragraph = document.createElement("h");
    paragraph.textContent = text;
    return paragraph;
};

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
};

function createHomepage() {
    if (document.getElementById('it1') !== null) {
        document.getElementById('it1').remove()
    }
    if (document.getElementById('home') !== null) {
        document.getElementById('home').remove()
    }
    const home = document.createElement('div');
    home.setAttribute('id', 'home')
    const content = document.getElementById('content')

    const paragraph1 = createHeader("Reinventing Chineese Cuisine");
    paragraph1.setAttribute('id', 'pg1')
    const paragraph2 = createHeader("Working Hours");
    paragraph2.setAttribute('id', 'pg2')
    const paragraph3 = createHeader("Address");
    paragraph3.setAttribute('id', 'pg3')

    home.appendChild(paragraph1);
    home.appendChild(paragraph2);
    home.appendChild(paragraph3);

    const subparagraph1 = createParagraph("Delicious noodles, dumplings, and fried rice - customized according to your preference and prepared using secret techiques developed by our chefs over the last 20 years");
    subparagraph1.setAttribute('id', 'spg1');
    const subparagraph2_1 = createParagraph("Monday - Friday: 2 pm - 12 am");
    const subparagraph2_2 = createParagraph("Saturday: 5 pm - 2 am");
    const subparagraph2_3 = createParagraph("Sunday: 7 pm - 12 am");
    subparagraph2_1.setAttribute('id', 'spg21');
    subparagraph2_2.setAttribute('id', 'spg22');
    subparagraph2_3.setAttribute('id', 'spg23');
    const subparagraph3 = createParagraph("851 California St., San Francisco, 94108, US");
    subparagraph3.setAttribute('id', 'spg3');

    paragraph1.appendChild(subparagraph1);
    paragraph2.appendChild(subparagraph2_1);
    paragraph2.appendChild(subparagraph2_2);
    paragraph2.appendChild(subparagraph2_3);
    paragraph3.appendChild(subparagraph3);

    content.appendChild(home)
    return home;
};

export default createHomepage;