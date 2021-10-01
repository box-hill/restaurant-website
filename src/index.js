import renderFirstTab from './first-tab.js';
import './style.css';

const content = document.getElementById('content');
const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');

homeTab.addEventListener('click',()=>{
    removeAllChildNodes(content);
    renderFirstTab();
});
menuTab.addEventListener('click',()=>console.log('dude2'));
contactTab.addEventListener('click',()=>console.log('dude3'));

renderFirstTab();

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}