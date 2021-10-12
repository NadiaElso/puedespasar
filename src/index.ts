let altura: number = document.getElementById("altura");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (altura.value >= 130) {
    console.log("puedes jugar a la Montaña Rusa");
  } else {
    console.log("No puedes pasar a jugar");
  }
});
