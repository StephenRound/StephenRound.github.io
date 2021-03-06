var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Missoula,USA&cnt=10&mode=json&APPID=9b538b2395ff3480b6ee5fc192b5b548";

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, handleData);
}

function handleData(data) {
  console.log(data.list);
  
  for (var i = 0; i < data.list.length; i++) {
    var clouds = data.list[i].clouds;
    var humidity = data.list[i].humidity;
    
    fill(200, 50, 100, humidity);
    ellipse(i*100+50, height/2, clouds, clouds);
    text("day"+i, i*100+50, height/2);
  }
}

