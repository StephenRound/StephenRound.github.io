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
    
    fill(0, 100, humidity);
    ellipse(i*100+50, height/2-50, clouds, clouds);
    text("day"+i, i*100+50, height/2);
    
  }
  text("The circles represent the cloud cover, the color of the circle represents humidity. The greener, the less humid.", 50, height/2+50);
  text("Missoula, MT", 50, height/2+100);
}
