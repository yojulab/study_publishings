let map;
let infowindow;

function initMap() {
    // 지도의 초기 위치와 줌 레벨을 설정합니다.
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });

    // 정보창을 초기화합니다.
    infowindow = new google.maps.InfoWindow();

    // 약국 데이터 예시입니다. 실제 데이터로 교체해야 합니다.
    const pharmacies = [
        { name: "Pharmacy A", lat: -34.397, lng: 150.644, hours: "9AM - 5PM" },
        // 추가 약국 정보...
    ];

    // 각 약국에 대해 마커를 생성하고 이벤트 리스너를 등록합니다.
    pharmacies.forEach(pharmacy => {
        const marker = new google.maps.Marker({
            position: { lat: pharmacy.lat, lng: pharmacy.lng },
            map: map,
            title: pharmacy.name,
        });

        // 마우스 오버 이벤트를 추가합니다.
        marker.addListener("mouseover", () => {
            infowindow.setContent(`${pharmacy.name}<br/>Hours: ${pharmacy.hours}`);
            infowindow.open(map, marker);
        });

        // 마우스가 마커에서 벗어났을 때 정보창을 닫습니다.
        marker.addListener("mouseout", () => {
            infowindow.close();
        });
    });

    // 지도의 경계가 변경될 때 실행될 이벤트를 추가합니다.
    google.maps.event.addListener(map, 'bounds_changed', function() {
        // 여기에 지도의 표시 영역에 따라 정보를 로딩하는 로직을 구현합니다.
    });
}

// 필요에 따라 지도의 표시 영역에 따른 로딩 로직 구현은 복잡하며, 약국 데이터를
// 관리하는 백엔드 시스템과의 통신을 포함할 수 있습니다. 이 부분은 추가적인
// AJAX 요청이나 Fetch API를 사용하여 구현할 수 있습니다.
