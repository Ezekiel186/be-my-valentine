document.querySelector('.yes').addEventListener('click', function(){
    document.querySelector('.image').src = "./images/happy.gif";
});

var no = document.querySelector('.no');

no.addEventListener('click', function(){
    var X = Math.floor(Math.random() * 500) - 100;
    var Y = Math.floor(Math.random() * 500) - 100;

    no.style.transform = `translate(${X}px, ${Y}px)`;
    no.classList.add('clicked');
    setTimeout(()=> {
            GamepadButton.classList.remove('clicked');
        }, 300)
});