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
        view.style.display = "block";
    }
}