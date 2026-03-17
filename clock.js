const digitalTime = document.getElementById('digital-time');
const digitalDate = document.getElementById('digital-date');
const ampmLabel = document.getElementById('ampm-label');

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function tick() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const hh = String(h % 12 || 12).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    const ss = String(s).padStart(2, '0');

    digitalTime.textContent = `${hh}:${mm}:${ss}`;
    ampmLabel.textContent = h < 12 ? 'AM' : 'PM';

    const day = DAYS[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const mon = MONTHS[now.getMonth()];
    const yr = now.getFullYear();
    digitalDate.textContent = `${day}, ${date} ${mon} ${yr}`;
}

    tick();
    setInterval(tick, 1000);
