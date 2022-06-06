var button = document.getElementById('random');
var clear = document.getElementById('clear');
var data = '0123456789';
var random_num = '';

button.addEventListener('click',function(event){
    var length = parseInt(document.getElementById('length-num').value);
    var money = document.getElementById('money');
    if (length >= 1500 && money == usd) {
        random_num = Math.floor(Math.random() * length);
        process = random_num.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(random_num);
        document.querySelector('.output').textContent = process;
    }
    else {
        alert("ห้ามต่ำกว่า 1500");
    }
});

clear.addEventListener('click',function(event){
    document.getElementById('length-num').value = '';
    document.querySelector('.output').textContent = '';
});