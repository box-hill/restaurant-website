import avoToast from './menu images/avo_on_toast.jpg';
import kayaToast from './menu images/kaya_toast.jpeg';
import sourDough from './menu images/sourdough.jpg'
import sweetBuns from './menu images/sweet_buns.jpg'
import baguette from './menu images/baguette.jpg';

export default function renderSecondTab() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const MenuItem = (img, name, description, price, direction) => {
        const getName = () => name;
        const getDes = () => description;
        const getPrice = ()=> price;

        const addToArray =() => null; // to implement;

        const card = document.createElement('div');
        card.classList.add('card');
        if(direction === 'reversed')card.classList.add('row-reverse');

        const menuImg = new Image();
        menuImg.src = img;
        menuImg.classList.add('menu-img');
        card.appendChild(menuImg);

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('menu-info');

        const itemName = document.createElement('div');
        itemName.classList.add('menu-title');
        itemName.innerHTML = name;
        itemInfo.appendChild(itemName);

        const itemDes = document.createElement('div');
        itemDes.classList.add('menu-text');
        itemDes.innerHTML = description;
        itemInfo.appendChild(itemDes);

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('menu-price');
        itemPrice.innerHTML = price;
        itemInfo.appendChild(itemPrice);

        card.appendChild(itemInfo);
        container.appendChild(card);

        
        
        return {name, description, price};
    };


    MenuItem(avoToast,`Avo' on Toast`,`Don't eat this if you ever want to afford a house`,'$99.99');
    MenuItem(sourDough,`Sourdough `,`Fermented dough... Yum`,'$5.20','reversed');
    MenuItem(kayaToast, `Kaya on Toast`, `A Singaporean classic. Some say it's not as good as Avo on toast...but at least it's affordable`, `$6.4`);
    MenuItem(sweetBuns, `Sweet Buns`, `Damn those are some shiny looking buns`, `$5`,'reversed');
    MenuItem(baguette, `Baguette`, `Stick looking bread`, `$5`,);

}

