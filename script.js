function updateProgress() {
    const goal = parseFloat(document.getElementById('goal').value);
    const current = parseFloat(document.getElementById('current').value);
    const progressBar = document.getElementById('progress-bar');

    if (isNaN(goal) || isNaN(current) || goal <= 0) {
        alert('Please enter valid amounts.');
        return;
    }

    const progress = Math.min((current / goal) * 100, 100);
    progressBar.style.height = progress + '%';
}
