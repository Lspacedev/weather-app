const container = document.querySelector(".container");

const heading = document.createElement("div");
const inputDiv = document.createElement("div");
const infoDiv = document.createElement("div");

inputDiv.classList.add("inputDiv");
infoDiv.classList.add("infoDiv");
//heading

heading.textContent = "Weather24";
heading.classList.add("heading");

//input

const form = document.createElement("form");
form.classList.add("form");

const submit = document.createElement("input");

submit.setAttribute("type", "submit");
submit.setAttribute("name", "submit");
submit.setAttribute("id", "submit");
submit.setAttribute("value", "search");

const label = document.createElement("label");
label.setAttribute("for", "input");
label.classList.add("label");

label.textContent = "Enter your city name: ";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "text");
input.setAttribute("id", "input");

form.appendChild(label);
form.appendChild(input);
form.appendChild(submit);

inputDiv.appendChild(form);

//info Div

const nameDiv = document.createElement("div");
nameDiv.classList.add("nameDiv");

const timeDiv = document.createElement("div");
timeDiv.classList.add("timeDiv");

const latLonDiv = document.createElement("div");
latLonDiv.classList.add("latLonDiv");

const count = document.createElement("div");
count.classList.add("count");

const region = document.createElement("div");
region.classList.add("region");

const city = document.createElement("div");
city.classList.add("city");

nameDiv.appendChild(count);
nameDiv.appendChild(region);
nameDiv.appendChild(city);

const time = document.createElement("div");
time.classList.add("time");

timeDiv.appendChild(time);

const lat = document.createElement("div");
const lon = document.createElement("div");

lat.classList.add("lat");
lon.classList.add("lon");

latLonDiv.appendChild(lat);
latLonDiv.appendChild(lon);

infoDiv.appendChild(nameDiv);
infoDiv.appendChild(timeDiv);
infoDiv.appendChild(latLonDiv);

container.appendChild(heading);
container.appendChild(inputDiv);
container.appendChild(infoDiv);

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let loc = document.querySelector("#input").value;
  console.log(loc);

  fetchCats(loc).then((data) => {
    console.log(data);
    createObj(data);
  });

  form.reset();
});

/*************  ASYNC FUNCTION  **************/

async function fetchCats(name) {
  let dataObj = {};
  let datar = {};
  let loc = name.toLowerCase();

  let data;
  const link = `https://api.weatherapi.com/v1/current.json?key=1d668ceaba92432fb3890228240802&q=${loc}`;
  const response = await fetch(link, { mode: "cors" });
  const locData = await response.json();
  data = locData;

  return data;
}

function createObj(data) {
  console.log(data);
  dataObj = {
    name: data.location.name,
    region: data.location.region,
    country: data.location.country,
    time: data.location.localtime,
    lat: data.location.lat,
    lon: data.location.lon,
  };
  console.log(dataObj);
  displayData(dataObj);
}

function displayData(obj) {
  const count = document.querySelector(".count");
  const region = document.querySelector(".region");
  const city = document.querySelector(".city");

  const time = document.querySelector(".time");

  const lat = document.querySelector(".lat");
  const lon = document.querySelector(".lon");

  count.textContent = obj.name;
  region.textContent = obj.region;
  city.textContent = obj.city;

  time.textContent = obj.time;

  lat.textContent = obj.lat;
  lon.textContent = obj.lon;
}
