import renderFirstTab from './first-tab.js';
import renderSecondTab from './second-tab.js';
import renderThirdTab from './third-tab.js';
import './style.css';

const content = document.getElementById('content');
const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');

homeTab.addEventListener('click',()=>{
    removeAllChildNodes(content);
    renderFirstTab();
});
menuTab.addEventListener('click',()=>{
    removeAllChildNodes(content);
    renderSecondTab();
});
contactTab.addEventListener('click',()=>{
    removeAllChildNodes(content);
    renderThirdTab();
});
renderFirstTab();

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}