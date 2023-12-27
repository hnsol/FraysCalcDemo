document.getElementById('quantity').addEventListener('input', calculate);

function calculate() {
    var quantity = document.getElementById('quantity').value;
    document.getElementById('oil').textContent =   (10   / 60 * quantity).toFixed(2);
    document.getElementById('neri').textContent =  (16.6 / 60 * quantity).toFixed(2);
    document.getElementById('goma').textContent =  (6.6  / 60 * quantity).toFixed(2);
    document.getElementById('flour').textContent = (40   / 60 * quantity).toFixed(2);
    document.getElementById('sugar').textContent = (10   / 60 * quantity).toFixed(2);
    document.getElementById('salt').textContent =  (0.1  / 60 * quantity).toFixed(2);

    document.getElementById('materialsTitle').textContent = quantity + '個に対する材料';

}

