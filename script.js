var map;

document.addEventListener("DOMContentLoaded", function () {
    const questionsBtn = document.getElementById("questions-btn");
    if (questionsBtn) {
        questionsBtn.addEventListener("click", function () {
            alert("If you have questions, contact me at:\nbrebolledo@hawk.illinoistech.edu");
        });
    }
});

function initMap() {

    const myLatLng = { lat: 41.8349, lng: -87.6270 };

    const mapOptions = {
        zoom: 4,
        center: myLatLng,
    }

    const mapElement = document.getElementById("map");
        if (mapElement) {
            const map = new google.maps.Map(mapElement, mapOptions);
            const marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: "Illinois Tech (IIT)"
            });
    }    

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Illinois Tech!",
    });
}
