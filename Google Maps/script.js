let southMost;
let northMost;

document.addEventListener("DOMContentLoaded", ()=> {
    let s = document.createElement("script");
    document.head.appendChild(s);
    s.addEventListener("load", () => {
        southMost = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 24.5465,
                lng: -81.7975
            },
            zoom: 15,
            mapTypeId: 'satellite'
        });
        northMost = new google.maps.Map(document.getElementById("map-north"), {
            center: {
                lat: 71.2905556,
                lng: -156.7886111
            },
            zoom: 15,
            mapTypeId: 'satellite'
        });
    });
    s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPKEY}`;
});