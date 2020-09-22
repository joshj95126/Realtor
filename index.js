function requestRealtor(location, state) {
    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "a08f1d89f5msha8e71f3e2f5cffep1af3f3jsnf24db2d71b5a");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://realtor.p.rapidapi.com/properties/v2/list-for-rent?${location}&state_code=${state}&limit=20&offset=0`, requestOptions)
        .then(response => response.json())
        .then(result => displayResultsReal(result))
        .catch(error => console.log('error', error));


}

function requestTripAdvisor(location) {
    fetch("https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=20&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=" + location, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "5002e774ccmsh38522f8d4d99f31p12b52cjsna087170306fb"
            }
        })
        .then(res => res.json())

    .then(response => {
            displayResultsRestaurants(response)
        })
        .catch(err => {
            console.log(err);
        });
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const location = event.target.location.value;
        const state = event.target.state.value;
        requestRealtor(location, state)
        requestTripAdvisor(location + "-" + state)
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});

function displayResultsReal(responseJson) {
    console.log(responseJson);
    if (responseJson.properties.length > 0) {
        const html = responseJson.properties.map(item => `
    
    <div><h3>${item.prop_type}

    <a href="${item.rdc_web_url}">Link</a>

    </h3></div>`)
        $('#real_estate').html(html)
    }
}

function displayResultsRestaurants(responseJson) {
    console.log(responseJson);
    if (responseJson.data.length > 0) {
        const html = responseJson.data.map(item => `
    
    <div><h3>${item.result_object.name}</h3></div>`)
        $('#restaurants').html(html)
    }
}