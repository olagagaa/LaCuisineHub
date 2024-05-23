const productButton1 = document.getElementById('product-button-1');
const productButton2 = document.getElementById('product-button-2');
const productButton3 = document.getElementById('product-button-3');

const productSection1 = document.getElementById('product-1');
const productSection2 = document.getElementById('product-2');
const productSection3 = document.getElementById('product-3');

hideAllSection = () => {
    productSection1.classList.add('hidden');
    productSection2.classList.add('hidden');
    productSection3.classList.add('hidden');
}

showSection = (section) => {
    hideAllSection();
    section.classList.remove('hidden');
}

productButton1.addEventListener('click', () => showSection(productSection1));
productButton2.addEventListener('click', () => showSection(productSection2));
productButton3.addEventListener('click', () => showSection(productSection3));