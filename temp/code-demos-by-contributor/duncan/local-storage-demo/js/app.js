var preferences = {
  backgroundColor: '#ff7a7a',
  chatDisplay: false,
  bestFriends: [
    'slug',
    'zap',
    'pop'
  ]
};

function savePreferencesToStorage(){
  localStorage.setItem('userPrefs', JSON.stringify(preferences));
}

function fetchPreferencesFromStorage(){
  var userPrefs = JSON.parse(localStorage.getItem('userPrefs'));
  if (userPrefs){
    console.log('user has allready saved there own prefs');
    preferences = userPrefs;
  }
}

function handleClearLsClick(){
  localStorage.clear();
}

var clearLsButton = document.getElementById('clear-ls');
clearLsButton.addEventListener('click', handleClearLsClick);

fetchPreferencesFromStorage();
