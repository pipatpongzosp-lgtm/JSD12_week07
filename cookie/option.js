const d = document;
let hit = 0;
let display = d.querySelector("#showNumber");
let btn = d.querySelector("#lion");
let toolWork = true;
let rawMeat = 0;

btn.onclick = function increasepress() {
  hit++;
  display.innerText = hit;
  return;
  console.log(hit);
};
function tool1() {
  if (hit >= buytool1.interText ) {
    hit -= buyt1.interText;
  }
}


// function hidden() {
//   if (hit <= 50) console.display("hellow");
//   d.querySelector("#cost").disabled = true;
// }
