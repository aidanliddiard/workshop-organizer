import { checkAuth, fetchWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopEl = document.getElementById('workshops');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops(){
    workshopEl.textContent = '';
    const workshops = await fetchWorkshops();
    
    for (let workshop of workshops) {
        const div = document.createElement('div');
        div.classList.add('workshop');
        const h3 = document.createElement('h3');
        h3.textContent = workshop.name;

        for (let participant of workshop.participants) {
            const p = document.createElement('p');
            p.textContent = participant.name;
            div.append(h3, p);
        }

        workshopEl.append(div);
    }
}
displayWorkshops();