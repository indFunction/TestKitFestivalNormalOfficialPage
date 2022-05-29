const baseUrl = ''; // '/kitfes'
const isRoot = location.pathname == baseUrl + '/' || location.pathname == baseUrl + '/index.html' ? true : false;

// const backgroundElement = document.getElementById('background');

// backgroundElement.style.backgroundImage = `url('${isRoot ? '.' : '..'}/media/background/background_fhd.jpg')`;

const getJson = (filePath) => fetch(filePath).then((resp) => resp.json());
