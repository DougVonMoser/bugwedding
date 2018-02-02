module.exports = function (mapEl) {

    let noahs = {
        location: {lat: 42.194834, lng: -87.937624},
        placeId: '71386921995adb6ecb512e4ff4960282a7d88b31',
        options: {
            animation: 'drop',
            label: 'Z'
        }
    };

    let middleGround = {
        lat: 42.19419934053994,
        lng: -87.93560524998475
    };

    window.map = new google.maps.Map(mapEl, {
        // 42.195026, -87.937633
        center: middleGround,
        zoom: 16,
        gestureHandling: 'cooperative',
        styles: [{
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
        position: noahs.location,
        title: `Noah's Event Venue`,
        // placeId: '71386921995adb6ecb512e4ff4960282a7d88b31',
        animation: 'drop',
        icon: {
            url: 'https://www.svgrepo.com/show/12098/wedding.svg',
            size: new google.maps.Size(50,50),
            scaledSize: new google.maps.Size(50, 50),
            anchor: new google.maps.Point(25, 25)
        }
        // label: 'Z'
    });
};