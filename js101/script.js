function showmedatetime() {
    document.getElementById('datetime').innerHTML = Date();
};

function turnOn() {
    document.getElementById('bulb').src='https://lightingandceilingfans.com/wp-content/uploads/imgp/light-bulb-lamp-10-5723.jpg';
};

function turnOff() {
    document.getElementById('bulb').src='https://www.freeiconspng.com/uploads/bulb-off-icon-14.jpg';
};

function biggerFont() {
    document.querySelector('body').style.fontSize='30px';
};

function normalFont() {
    document.querySelector('body').style.fontSize='20px';
};

function hideAll() {
    document.querySelector('body').style.display="none"
};

window.alert("Are you sure you want to visit this website?");

window.prompt("Well, helloooo!")

function bigImg(x) {
    x.style.height = "120px";
    x.style.width = "120px";
    x.style.border = "1px solid red";
};

function normalImg(x) {
    x.style.height = "60px";
    x.style.height = "60px";
};