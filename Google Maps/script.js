let map;

document.addEventListener("DOMContentLoaded", ()=> {
    let s = document.createElement("script");
    document.head.appendChild(s);
    s.addEventListener("load", () => {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 24.5465,
                lng: -81.7975
            },
            zoom: 21,
            mapTypeId: 'satellite'
        });
    });
    s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPKEY}`;
});