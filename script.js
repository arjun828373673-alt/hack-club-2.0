document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('join-btn');
    const eventSection = document.getElementById('event-id');
    if (joinButton && eventSection) {
        joinButton.addEventListener('click', () => {
            eventSection.style.display = 'block';

            eventSection.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
            });

        });
    }
});