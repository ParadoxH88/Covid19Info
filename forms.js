import { loadData } from "./covid";

export const initForm = () => {
    const form = document.getElementById('form');
    const loadingIndicator = document.getElementById('loading-indicator');
    form.addEventListener('submit', e => {
        const country = document.getElementById('country-input').value;
        const country2 = country.charAt(0).toUpperCase() + country.slice(1);
        loadingIndicator.style.display = 'block';
        loadData(country2);
        loadingIndicator.style.display = 'none';
        e.preventDefault();
    })
}