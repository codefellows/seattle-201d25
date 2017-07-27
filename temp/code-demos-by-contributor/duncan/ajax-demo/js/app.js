
var appToken = 'FFlk6SrRmiFy2PLX4hK3Z8dfG';
var meteoriteURL = 'https://data.nasa.gov/resource/y77d-th95.json';

function handleMeteoriteRequest(data){
  if(Array.isArray(data)){
    var meteoriteListEl = document.getElementById('meteorite-list');
    var li;
    for(var i = 0; i < data.length ; i++){
      li = document.createElement('li');
      li.textContent = data[i].name;
      meteoriteListEl.appendChild(li);
    }
  }
}

function handleFailRequest(response){
  alert('you fail');
  console.log('response status code: ' + response.status);
  console.log('response status text: ' + response.statusText);
  console.dir(response);
};

// var queryParams = {
//   $limit: 5,
//   $offset: 100
// };
function getJSONFromUrl(url, hanlder){
  url += '?$$app_token=' + appToken;
  $.getJSON(url, hanlder).fail(handleFailRequest);
}

getJSONFromUrl(meteoriteURL, handleMeteoriteRequest);
