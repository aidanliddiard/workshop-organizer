import { checkAuth, createParticipant, fetchWorkshops, logout } from '../fetch-utils.js';

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

const form = document.getElementById('join-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const joinForm = new FormData(form);

    const participantData = { name: joinForm.get('name'), workshop_id: joinForm.get('workshop-name') };
    await createParticipant(participantData);
    form.reset();
});