// import Unsplash from 'unsplash-js';

// const unsplash = new Unsplash({
//   applicationId: "8cae69ff96b9c773e026a31027d799adbb6f1b6c440bce9b0d87e8a81eb5d0b9",
//   secret: "4e9776d4eff09c12ae49fa8f6c32b85afcd78c756b9a74bddb4e43271bf527a5",
//   callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
// });

(function () {


  var quotes = [
    "Do the fucking work. Don't be lazy.",
    "Stop fucking waiting. It's time",
    "Rely on yourself. The Universe doesn't give a fuck.",
    "Be fucking practical. Success is not a theory.",
    "Be productive early. Don't fuck around all day.",
    "Don't be a fucking baby. Life's hard. Get on with it. ",
    "Don't hangout with fuckwits",
    "Don't fucking waste energy on shit you can't control.",
    "Stop bullshiting. It's a fucking embarrasing.",
    "Stop being a fucking people-pleaser. It's sad.",
    "Stop putting toxic shit in your body. It's fucking stupid.",
    "Stop doing same fucking thing and hoping shit will change."
  ];

  var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.onload = function () {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/' + randomImage + '")';
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = "— " + 'DJ Khaled' + " —";

    document.getElementById('quote').className = 'move';
    document.getElementById('author').className = 'move';
  };

})();