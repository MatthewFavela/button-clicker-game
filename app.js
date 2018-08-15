//First one is Points value
//Second one is Points Per Second
//Third one is Points Per Click

var main = [0, 0, 1];


























































































var points = main[0];
var pointsPerSecond = main[1];
var pointsPerClick = main[2];

function Clicked(){
  
  points += pointsPerClick;
  
}

setInterval(function Updater() {
  
  document.getElementById("points").innerHTML = "Machew Points: " + points;
  
})

setInterval(function perSecond() {
  
  document.getElementById("pps").innerHTML = "Points Per Second: " + pointsPerSecond;
  
})

setInterval(function perClick() {
  
  document.getElementById("ppc").innerHTML = "Points Per Click: " + pointsPerClick;
  
})

function gainOnePPS() {
  
  if (points >= 50) {
    
    pointsPerSecond += 1;
    points -= 50;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

function gainFivePPS() {
  
  if (points >= 200) {
    
    pointsPerSecond += 5;
    points -= 200;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

function gainTenPPS() {
  
  if (points >= 2500) {
    
    pointsPerSecond += 10;
    points -= 2500;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

function gainTwentyPPS() {
  
  if (points >= 10000) {
    
    pointsPerSecond += 20;
    points -= 10000;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

function gainOneHundredFiftyPPS() {
  
  if (points >= 100000) {
    
    pointsPerSecond += 150;
    points -= 100000;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

function gainFiveHundredPPS() {
  
  if (points >= 600000) {
    
    pointsPerSecond += 500;
    points -= 600000;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

function gainOneThousandPPS() {
  
  if (points >= 1000000) {
    
    pointsPerSecond += 1000;
    points -= 1000000;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

function gainTenThousandPPS() {
  
  if (points >= 7500000) {
    
    pointsPerSecond += 10000;
    points -= 7500000;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

function gainFiftyThousandPPS() {
  
  if (points >= 15000000) {
    
    pointsPerSecond += 50000;
    points -= 15000000;
    
  }else {
  alert("You don't have enough points!");
  }
  
}

setInterval(function perSecondUpdater(){
  
  points += pointsPerSecond;
  
}, 1000)

function twoPointsPerClick(){
  
  if(points >= 100) {
    
    pointsPerClick += 1;
    points -= 100;
                  document.getElementById("twoppc").innerHTML = "Completed";
  }
  
}

function threePointsPerClick(){
  
  if(points >= 1000) {
    
    pointsPerClick += 1;
    points -= 1000;
                  document.getElementById("threeppc").innerHTML = "Completed";
  }
  
}

function fourPointsPerClick(){
  
  if(points >= 5000) {
    
    pointsPerClick += 1;
    points -= 5000;
                  document.getElementById("fourppc").innerHTML = "Completed";
  }
  
}

function fivePointsPerClick(){
  
  if(points >= 15000) {
    
    pointsPerClick += 1;
    points -= 15000;
                  document.getElementById("fiveppc").innerHTML = "Completed";
  }
  
}

function tenPointsPerClick(){
  
  if(points >= 100000) {
    
    pointsPerClick += 5;
    points -= 100000;
                  document.getElementById("tenppc").innerHTML = "Completed";
  }
  
}

function fifteenPointsPerClick(){
  
  if(points >= 500000) {
    
    pointsPerClick += 5;
    points -= 500000;
                  document.getElementById("fifteenppc").innerHTML = "Completed";
  }
  
}

function twentyPointsPerClick(){
  
  if(points >= 1000000) {
    
    pointsPerClick += 5;
    points -= 1000000;
                  document.getElementById("twentyppc").innerHTML = "Completed";
  }
  
}

function fiftyPointsPerClick(){
  
  if(points >= 8000000) {
    
    pointsPerClick += 30;
    points -= 8000000;
                  document.getElementById("fiftyppc").innerHTML = "Completed";
  }
  
}