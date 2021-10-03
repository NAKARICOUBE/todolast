const API_KEY = "d11016c35d7f999b1ca6615066e74a82";


function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weatherDegreeInfo = document.querySelector(".weatherDegreeInfo span");
            const geolocationInfo = document.querySelector(".geolocationInfo span");
            weatherDegreeInfo.innerText = `${data.weather[0].main},  ${Math.floor(data.main.temp)}℃`;
            geolocationInfo.innerText = data.name;
        });
    
}
function onGeoError() {}





navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);