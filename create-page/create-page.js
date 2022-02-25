import { checkAuth, fetchWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const select = document.getElementById('select');
    const workshops = await fetchWorkshops();

    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.textContent = workshop.name;
        option.value = workshop.id;
        select.append(option);
    }
});