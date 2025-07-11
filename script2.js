function getQueryStringParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const RATING = getQueryStringParameter('rating');
const OUTPUT = document.querySelector('.output');

if (RATING) {
    OUTPUT.textContent = `You selected ${RATING} out of 5`;
} else {
    OUTPUT.textContent = 'No rating selected';
}

window.onload = () => {
    const [navigation] = performance.getEntriesByType('navigation');

    if (navigation.type === 'reload') {
        setTimeout(() => {
        window.location.href = 'index.html';
    }, 100);
    }
};