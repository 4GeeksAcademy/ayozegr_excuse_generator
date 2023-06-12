  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird"
  ];

  let action = [
    "ate",
    "peed",
    "crushed",
    "broke"
  ];

  let what = [
    "my homework",
    "the keys",
    "the car"
  ];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Generamos una excusa aleatoria
  function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomaction = action[Math.floor(Math.random() * action.length)];
    let randomwhat = what[Math.floor(Math.random() * what.length)];
    let randomwhen = when[Math.floor(Math.random() * when.length)];

    let excuse = randomWho + " " + randomaction + " " + randomwhat + " " + randomwhen + ".";
    document.getElementById("excuse").textContent = excuse;
  }

  // Generamos una excusa automáticamente al cargar la página
  window.addEventListener("load", generateExcuse);

  // Generamos una excusa automáticamente al hacer clic en cualquier botón
  document.addEventListener("click", generateExcuse);

  // Generamos una excusa automáticamente al pulsar cualquier tecla
  document.addEventListener("keydown", generateExcuse);
// }