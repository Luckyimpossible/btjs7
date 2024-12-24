let numbers = [];

function submitArray() {
    const input = document.getElementById('arrayInput').value;
    numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    alert('Mảng đã được lưu: ' + numbers.join(', '));
}

function sumPositive() {
    const sum = numbers.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);
    document.getElementById('result1').innerText = `Tổng số dương: ${sum}`;
}

function countPositive() {
    const count = numbers.filter(num => num > 0).length;
    document.getElementById('result2').innerText = `Số lượng số dương: ${count}`;
}

function findMin() {
    const min = Math.min(...numbers);
    document.getElementById('result3').innerText = `Số nhỏ nhất: ${min}`;
}

function findMinPositive() {
    const positiveNumbers = numbers.filter(num => num > 0);
    const minPositive = Math.min(...positiveNumbers);
    document.getElementById('result4').innerText = `Số dương nhỏ nhất: ${minPositive}`;
}

function findLastEven() {
    const lastEven = numbers.reverse().find(num => num % 2 === 0) || -1;
    document.getElementById('result5').innerText = `Số chẵn cuối: ${lastEven}`;
}

function sortArray() {
    const sorted = [...numbers].sort((a, b) => a - b);
    document.getElementById('result7').innerText = `Mảng tăng dần: ${sorted.join(', ')}`;
}

function toggleCollapse(cardId) {
    const card = document.getElementById(cardId);
    const result = card.querySelector('.result');
    if (card.classList.contains('collapsed')) {
        card.classList.remove('collapsed');
        result.style.display = 'block';
    } else {
        card.classList.add('collapsed');
        result.style.display = 'none';
    }
}
