const timeElement = document.getElementById('clock');
if (timeElement) {
    const tick = () => {
        timeElement.textContent = new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
    };

    tick();
    setInterval(tick, 1000);
}
