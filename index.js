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