const candles = document.querySelectorAll('.candle');
const dateText = document.getElementById('dateText');
const timeText = document.getElementById('timeText');

function toggleCandles() {
  candles.forEach(candle => {
    candle.classList.toggle('lit');
  });
}

function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('id-ID', options);
  const formattedTime = now.toLocaleTimeString('id-ID');
  dateText.textContent = formattedDate;
  timeText.textContent = formattedTime;
}

setInterval(toggleCandles, 1000);
setInterval(updateDateTime, 1000);
