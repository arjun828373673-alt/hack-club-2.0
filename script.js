document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('join-btn');
    if (joinButton) {
        joinButton.addEventListener('click', () => {
            showView("event-id");
        });

    }
});

function showView(viewId) {
    const view = document.getElementById(viewId);
    if (view) {
        view.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
}