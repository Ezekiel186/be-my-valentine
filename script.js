document.querySelector('.yes').addEventListener('click', function(){
    document.getElementById('happy').play();
    document.querySelector('.image').src = "./images/happy.gif";
    document.querySelector('.question').classList.add('hide');
});

var no = document.querySelector('.no');

no.addEventListener('click', function(){
    var X = Math.floor(Math.random() * 400) - 100;
    var Y = Math.floor(Math.random() * 400) - 100;

    no.style.transform = `translate(${X}px, ${Y}px)`;
    no.classList.add('clicked');
    setTimeout(()=> {
            GamepadButton.classList.remove('clicked');
        }, 300)
});