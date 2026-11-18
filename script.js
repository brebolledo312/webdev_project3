document.addEventListener("DOMContentLoaded", function () {
    const questionsBtn = document.getElementById("questions-btn");
    if (questionsBtn) {
        questionsBtn.addEventListener("click", function () {
            alert("If you have questions, contact me at:\nbrebolledo@hawk.illinoistech.edu");
        });
    }
});

function initMap() { // Google Maps API
    const myLatLng = { lat: 41.8349, lng: -87.6270 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: myLatLng,
    });

    const infoWindow = new google.maps.InfoWindow();

    const markerIIT = new google.maps.Marker({ // IIT
        position: { lat: 41.8349, lng: -87.6270 },
        map: map,
        title: "Illinois Institute of Technology",
    });
    markerIIT.addListener("click", function() {
        infoWindow.setContent(`
            <h3 style="margin: 0 0 5px 0; font-size: 16px;">Illinois Institute of Technology</h3>
            <p style="margin: 0; font-size: 13px;">Main university campus in Bronzeville.</p>
        `);
        infoWindow.open(map, markerIIT);
    });

    const markerTheBean = new google.maps.Marker({ // The Bean
        position: { lat: 41.8827, lng: -87.6233 },
        map: map,
        title: "The Chicago Bean",
    });
    markerTheBean.addListener("click", function() {
        infoWindow.setContent(`
            <h3 style="margin: 0 0 5px 0; font-size: 16px;">The Chicago Bean</h3>
            <p style="margin: 0; font-size: 13px;">Famous sculpture located in Millennium Park. May or may not have a man trapped inside.</p>
        `);
        infoWindow.open(map, markerTheBean);
    });

    const markerSearsTower = new google.maps.Marker({ // Sears Tower
        position: { lat: 41.8789, lng: -87.6359 },
        map: map,
        title: "Sears Tower",
    });
    markerSearsTower.addListener("click", function() {
        infoWindow.setContent(`
            <h3 style="margin: 0 0 5px 0; font-size: 16px;">Sears Tower</h3>
            <p style="margin: 0; font-size: 13px;">Tallest building in the United States until 2013. On a clear day, you can see up to 50 miles away from the top (zoom out to see the circle!). Also known as the Willis Tower by tourists.</p>
        `);
        infoWindow.open(map, markerSearsTower);
    });    

    const markerZoo = new google.maps.Marker({ // Lincoln Park Zoo
        position: { lat: 41.9211, lng: -87.6340 },
        map: map,
        title: "Lincoln Park Zoo",
    });
    markerZoo.addListener("click", function() {
        infoWindow.setContent(`
            <h3 style="margin: 0 0 5px 0; font-size: 16px;">Lincoln Park Zoo</h3>
            <p style="margin: 0; font-size: 13px;">One of the largest and oldest zoos with free admission in the United States.</p>
        `);
        infoWindow.open(map, markerZoo);
    });        

    const markerWrigley = new google.maps.Marker({ // Wrigley Field
        position: { lat: 41.9484, lng: -87.6553 },
        map: map,
        title: "Wrigley Field",
    });
    markerWrigley.addListener("click", function() {
        infoWindow.setContent(`
            <h3 style="margin: 0 0 5px 0; font-size: 16px;">Wrigley Field</h3>
            <p style="margin: 0; font-size: 13px;">Home of the Chicago Cubs, winner of the 2016 World Series.</p>
        `);
        infoWindow.open(map, markerWrigley);
    });

    const markerSox = new google.maps.Marker({ // Rate Field
        position: { lat: 41.8317, lng: -87.6342 },
        map: map,
        title: "Rate Field",
    });
    markerSox.addListener("click", function() {
        infoWindow.setContent(`
            <h3 style="margin: 0 0 5px 0; font-size: 16px;">Rate Field</h3>
            <p style="margin: 0; font-size: 13px;">Home of the Chicago White Sox. Formerly Comiskey Park.</p>
        `);
        infoWindow.open(map, markerSox);
    });             

    const midwayBounds = {
        north: 41.795,
        south: 41.778,
        east: -87.729,
        west: -87.760
    };
    const ohareBounds = {
        north: 42.010,
        south: 41.960,
        east: -87.870,
        west: -87.940
    };

    const midwayImageOverlay = new google.maps.GroundOverlay( // Chicago flag on top of MDW
        "images/chicagoflag.png",
        midwayBounds,
        { map: map }
    );

    const ordImageOverlay = new google.maps.GroundOverlay( // Chicago flag on top of ORD
        "images/chicagoflag.png",
        ohareBounds,
        { map: map }
    );

    const searsTowerHorizonCircle = new google.maps.Circle({ // Shows how far you can see from the top of the Sears Tower
        strokeColor: "#308aff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#2c7ee9",
        fillOpacity: 0.1,
        map: map,
        center: { lat: 41.8789, lng: -87.6359 },
        radius: 50 * 1609.344 // 50 miles (view distance) x number of meters in a mile
    });

}
