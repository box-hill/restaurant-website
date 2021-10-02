
//import SweetBuns from './sweet-buns.jpg';
 
export default function renderFirstTab() {
    const content = document.getElementById('content');
    
    const topSection = document.createElement('div');
    topSection.classList.add('top-banner');
    content.appendChild(topSection);

    const middleSection = document.createElement('div');
    middleSection.classList.add('middle-section');
    middleSection.innerHTML = 'BAKERY NOW OPEN';
    content.appendChild(middleSection);
    
    content.classList.add('content-background');
    // const breadBackground = document.createElement('div');
    // breadBackground.classList.add('home-background');
    // content.appendChild(breadBackground);
}

