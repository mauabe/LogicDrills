function main() {
  try {
    doAllTheThings();
  }
  catch(error){
    console.error(error);
    reportError(error);
  }
}

function doAllTheThings() {
  throw {
    message: "Everything's ruined",
    name: "FatalException",
    toString: function(){return this.name + ": " + this.message;} 
  }
}

function reportError(error) {
  $('.js-error-report').text("Uh oh, something went wrong! Here's what we know: " + error.message);
}

$(main);