function requestRealtor() {
    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "a08f1d89f5msha8e71f3e2f5cffep1af3f3jsnf24db2d71b5a");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city=New York City&state_code=NY&limit=200&offset=0", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


}

function requestTripAdvisor() {
    fetch("https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=New%20York", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "5002e774ccmsh38522f8d4d99f31p12b52cjsna087170306fb"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
}

requestRealtor()
requestTripAdvisor()