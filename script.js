document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('join-btn');
    if (joinButton) {
        joinButton.addEventListener('click', () => {
            showView("event-id");
        });

    }
});

function showView(view-id) {
    const view = document.getElementById(view-id);
    if (view) {
        view.style.display = "block";
    }
}