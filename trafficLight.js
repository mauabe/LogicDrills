function doTrafficLights() {
  var activeLight = getActiveLight();
  // your code will replace this call
  // to `console.log()`
  
  if(activeLight === "green"){
    turnGreen();
  } else if (activeLight === "yellow"){
    turnYellow();
  } else if (activeLight === "red"){
    turnRed();
  } else turnOffLights();
  
    console.log(activeLight);
}


function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(handleClicks);