var btnOne = document.querySelector("#da");
var btnTwo = document.querySelector("#ne");
var backDiv = document.querySelector(".back");
var frontDiv = document.querySelector(".front");
var mainH1 = document.querySelector("#mainH");



btnTwo.addEventListener("click", odbijanje);
btnOne.addEventListener("click", prihvatanje);
function odbijanje(){
  alert("Sorry!!! \n need permission for yours geolocation");
}

function prihvatanje(){
  backDiv.style.transform = "perspective(900px) rotateY(0deg)";
  frontDiv.style.transform = "perspective(900px) rotateY(180deg)";
  setTimeout(function(){
    mainH1.style.display = "block";
  },1000)
}


var xml = new XMLHttpRequest();
console.log(xml);
xml.open('post',"https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDPkiMQ-iLA-HOh0SX2rMQ0vc__AQTOggg", true);
//console.log(xml.open);
xml.addEventListener("readystatechange", function (){
  if(xml.status === 200 && xml.readyState === 4){
    getData(xml)

  }
})
xml.send();
function getData(xml){
  var data = xml.responseText;
  var xmlData = JSON.parse(data);

  //console.log(xmlData);
  lat = xmlData.location.lat
  lng = xmlData.location.lng

  var text ="";
    text += "<tr>";
    text += "<td id='lat'>" + lat +"</td>";
    text += "<td id='lng'>" + lng +"</td>";
    text += "</tr>";

  document.getElementsByTagName("tbody")[0].innerHTML = text;



var squer = new XMLHttpRequest();
squer.open('get',"https://api.foursquare.com/v2/venues/explore?ll=" + lat + ","+ lng +"&radius=1000&section=coffee,drinks&limited=20&sortByDistance=1&v=20170601&client_id=Q4VWEDX51W5HWFNAUHZAGU3N4RN5QCSO5WKISAERPSITKLWK&client_secret=KCRWKICCRDGENXGGMVTQKLTVGT24QN2IKWQVOHOXNNXGCB4T");
  console.log(squer.open);
squer.addEventListener("readystatechange", function (){
  if(squer.status === 200 && squer.readyState === 4){
    getData1(squer)

  }
})

 squer.send();
function getData1(squer){
  var data1 = squer.responseText;
  var squerData = JSON.parse(data1);
  //console.log(squerData);
  var imeGr = squerData.response.headerFullLocation;

  var ime = [];
  var adresa = [];
  var kontakt = [];
  var status = [];
  var udaljenost = [];
  var eadresa = [];
  var text1 = "";


  for( var i = 0; i < 10; i++){
  ime.push(squerData.response.groups[0].items[i].venue.name);
  adresa.push(squerData.response.groups[0].items[i].venue.location.address);
  kontakt.push(squerData.response.groups[0].items[i].venue.contact.phone);
  udaljenost.push(squerData.response.groups[0].items[i].venue.location.distance);
  eadresa.push(squerData.response.groups[0].items[i].venue.url);
  }

  var text1 ="";
  for (var i = 0; i < 10; i++){
    text1 += "<tr>";
    text1 += "<td id='im'>" + ime[i] +"</td>";
    text1 += "<td id='adr'>" + adresa[i] +"</td>";
    text1 += "<td id='ko'>" + kontakt[i] +"</td>";
    text1 += "<td id='ud'>" + udaljenost[i] +"</td>";
    text1 += "<td id='ea'><a href="+ eadresa[i]+">more</a></td>";
    text1 += "</tr>";
  }
  document.getElementsByTagName("tbody")[1].innerHTML = text1;
}
}
