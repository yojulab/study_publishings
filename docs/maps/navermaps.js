var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

var map = new naver.maps.Map('map', mapOptions);

// 약국 데이터 예시
var pharmacies = [
    {name: "약국1", lat: 37.3595704, lng: 127.105399, hours: "09:00-18:00"},
    // 20개의 약국 데이터 추가...
];

pharmacies.forEach(function(pharmacy) {
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(pharmacy.lat, pharmacy.lng),
        map: map
    });

    var contentString = [
        '<div class="iw_inner">',
        '   <h3>' + pharmacy.name + '</h3>',
        '   <p>운영 시간: ' + pharmacy.hours + '</p>',
        '</div>'
    ].join('');

    var infowindow = new naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 140,
        backgroundColor: "#eee",
        borderColor: "#2db400",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(30, 30),
        anchorSkew: true,
        anchorColor: "#eee",
        pixelOffset: new naver.maps.Point(20, -20)
    });

    naver.maps.Event.addListener(marker, "mouseover", function(e) {
        infowindow.open(map, marker);
    });

    naver.maps.Event.addListener(marker, "mouseout", function(e) {
        infowindow.close();
    });
});