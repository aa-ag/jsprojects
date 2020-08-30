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