document.getElementById('quantity').addEventListener('input', calculate);

function calculate() {
    var quantity = document.getElementById('quantity').value;
    document.getElementById('oil').textContent = (10 / 50 * quantity).toFixed(2);
    document.getElementById('neri').textContent = (13.28 / 50 * quantity).toFixed(2);
    document.getElementById('goma').textContent = (6.6 / 50 * quantity).toFixed(2);
    document.getElementById('flour').textContent = (40 / 50 * quantity).toFixed(2);
    document.getElementById('sugar').textContent = (10 / 50 * quantity).toFixed(2);
    document.getElementById('salt').textContent = (0.1 / 50 * quantity).toFixed(2);

    document.getElementById('materialsTitle').textContent = quantity + '個に対する材料';

}

