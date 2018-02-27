





module.exports = function (mapEl) {

    let springInfoWindow = new google.maps.InfoWindow({
        content:
            `
<h2>Get your snooze on</h2>
<div class="address">
    <span>Springhill Suites</span>
    <span>300 Marriott Dr</span>
    <span>Lincolnshire, IL 60069</span>
</div>
`
    });
    let noahInfoWindow = new google.maps.InfoWindow({
        content:
            `
<h2>Get your wedding on</h2>
<div class="address">
    <span>Noah's Event Venue</span>
    <span>200 Barclay Blvd</span>
    <span>Lincolnshire, IL 60069</span>
</div>
`
    });

    let middleGround = {
        lat: 42.19419934053994,
        lng: -87.93560524998475
    };

    window.map = new google.maps.Map(mapEl, {
        center: middleGround,
        zoom: 16,
        gestureHandling: 'cooperative',
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{visibility: 'off'}]
            }, {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{visibility: 'on'}]
            }
        ]
    });


    let springhill = new google.maps.Marker({
        map: window.map,
        position: {
            lat: 42.194090,
            lng: -87.933491
        },
        title: 'Springhill Suites',
        animation: 'drop',
        icon: {
            url: 'https://image.flaticon.com/icons/svg/12/12701.svg',
            // size: new google.maps.Size(50,50),
            scaledSize: new google.maps.Size(50, 50),
            // anchor: new google.maps.Point(400, 400)
        }
    });

    let noahplace = new google.maps.Marker({
        map: window.map,
        position: {
            lat: 42.194834,
            lng: -87.937624
        },
        title: `Noah's Event Venue`,
        animation: 'drop',
        icon: {
            url: 'https://www.svgrepo.com/show/12098/wedding.svg',
            size: new google.maps.Size(50,50),
            scaledSize: new google.maps.Size(50, 50),
            anchor: new google.maps.Point(25, 25)
        }

    });



    springhill.addListener('click', function(){
        springInfoWindow.open(window.map, springhill);
    });
    noahplace.addListener('click', function(){
        noahInfoWindow.open(window.map, noahplace);
    });

    google.maps.event.addListener(map, 'zoom_changed', function() {
        var zoom = map.getZoom();
        springhill.setVisible(zoom >= 15)
    });

};