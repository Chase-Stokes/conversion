function convertFromFarenheit(number1) {
  return  (number1 - 32) * 5/9;
}

function convertFromCelsius(number1) {
  return (number1 * 9/5) + 32;
}

function convertOuncesPounds(number1) {
  return number1/16;
}

function convertOuncesGrams(number1) {
  return number1*28.35;
}

function convertPoundsOunces(number1) {
  return number1*16;
}

function convertPoundsGrams(number1) {
  return number1*453.59;
}

function convertFlouncesCups(number1) {
  return number1/8;
}

function convertFlouncesMl(number1) {
  return number1*30;
}

function convertCupsFlounces(number1) {
  return number1*8;
}

function convertCupsMl(number1) {
  return number1*240;
}

$(document).ready(function() {
  $("form#f2c-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertFromFarenheit(parseInt($("#convertFromFarenheit").val())));
  });
  $("form#c2f-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertFromCelsius(parseInt($("#convertFromCelsius").val())));
  });
  $("form#o2p-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertOuncesPounds(parseInt($("#convertOuncesPounds").val())));
  });
  $("form#o2g-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertOuncesGrams(parseInt($("#convertOuncesGrams").val())));
  });
    $("form#p2o-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertPoundsOunces(parseInt($("#convertPoundsOunces").val())));
  });
  $("form#p2g-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertPoundsGrams(parseInt($("#convertPoundsGrams").val())));
  });
  $("form#f2cups-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertFlouncesCups(parseInt($("#convertFlouncesCups").val())));
  });
  $("form#f2m-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertFlouncesMl(parseInt($("#convertFlouncesMl").val())));
  });
  $("form#c2f-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertCupsFlounces(parseInt($("#convertCupsFlounces").val())));
  });
  $("form#c2m-form").submit(function(event) {
    event.preventDefault();
    $("#output").text(convertCupsMl(parseInt($("#convertCupsMl").val())));
  });


});