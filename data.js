const storedData = localStorage.getItem('username');

if (storedData) {
  document.getElementById('data').textContent = storedData;
} else {
  document.getElementById('data').textContent = 'No hay datos almacenados.';
}
