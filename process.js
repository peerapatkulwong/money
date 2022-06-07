var button = document.getElementById('random');
var clear = document.getElementById('clear');

button.addEventListener('click',function(event){
    var num = parseInt(document.getElementById('number').value);
    var cur = document.getElementById('currency').value;
    if (cur == "usd") {
        random_num = Math.floor(Math.random() * num);
        process = random_num.toLocaleString('en-US', {style:"currency", currency:"USD"});
        document.querySelector('.output').textContent = process;
    }
    else if (cur == "krw"){
        random_num = Math.floor(Math.random() * num);
        process = random_num.toLocaleString('en-US', {style:"currency", currency:"KRW"});
        document.querySelector('.output').textContent = process;
    }
    else if (cur == 'eur'){
        random_num = Math.floor(Math.random() * num);
        process = random_num.toLocaleString('en-US', {style:"currency", currency:"EUR"});
        document.querySelector('.output').textContent = process;
    }
    else if (cur == 'jpy'){
        random_num = Math.floor(Math.random() * num);
        process = random_num.toLocaleString('en-US', {style:"currency", currency:"JPY"});
        document.querySelector('.output').textContent = process;
    }
    else{
        alert("error");
    }
});

clear.addEventListener('click',function(event){
    document.getElementById('number').value = '';
    document.querySelector('.output').textContent = '';
    document.getElementById('currency').value = '';
});