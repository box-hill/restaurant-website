
export default function renderThirdTab() {
    const content = document.getElementById('content');
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = 'Hellooooo'
    contactInfo.classList.add('contact-info');
    content.appendChild(contactInfo);
}

