document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('join-btn');
    if (join-Btn) {
        join-btn.addEventListener('click', () => {
            showView("eventId");
        });

    }
});

function showView(viewId) {
    const view = document.getElementById(viewId);
    if (view) {
        view.style.display = 'block';
    }
}