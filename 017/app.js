const cat = document.querySelector("div");
const dog = document.querySelector("div + div");

const racoon = document.querySelector("div + div + div");
cat.style.color = "red";
dog.style.color = "green";
//eventas
cat.addEventListener("click", () => {
  cat.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
});
//eventas

setInterval(() => {
  //end main
  racoon.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  //racoon
  if (racoon.style.visibility == "visible") {
    racoon.style.visibility = "hidden";
  } else {
    racoon.style.visibility = "visible";
  }

  //racoon
}, 500); // resume main

const clowns = document.querySelectorAll("li");
clowns.forEach((c) => (c.style.color = "pink"));

setInterval(() => {
  clowns.forEach((c, i) => {
    if (i % 2) {
      // c.style.color = 'blue';

      c.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      if (c.style.visibility == "visible") {
        c.style.visibility = "hidden";
      } else {
        c.style.visibility = "visible";
      }
    }
  });
}, 500);

console.log("---------1--------");
//Nuskaityti iš nodeListo kovotojų vardus, surašyti juos į savo susikūrtą masyvą ,
//tą masyvą išrūšiuoti priešinga abėcėlės tvarka ir atspausdinti konsolėje DONE!

const myFighters = [];

for (let i = 0; i < clowns.length; i++) {
  myFighters.push(clowns[i].innerText);
}

const myOtherFighter = [];
////////////////////
///////////////////
//galima su foreach
clowns.forEach((c) => myOtherFighter.push(c.innerText));

console.log(myFighters);
console.log(myOtherFighter);

myFighters.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});

console.table(myFighters);

console.log("---------2--------");
///innerHtml

const day = document.querySelector(".day");

const dayHtml = "<h2>Big Day</h2>";

day.innerHTML = dayHtml;

//Į sekciją padėti ul jame li o kiekviename
//li po žodį "'servizas" DONE!

const section = document.querySelector("section");

const sekcija = `<ul>
<li>SErvizas</li>
<li>Servyzas</li>
<li>Serv(i)yziukelis</li>
</ul>
`;

section.innerHTML = sekcija;

console.log("---------3--------");
//Į random sekciją patalpinti ul jame
//22 li kurių viduje random skaičius nuo 100 iki 999 DONE!

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const newSection = document.querySelector(".random");

let listItem = "";
for (let i = 0; i < 22; i++) {
  listItem += `<li> ${rand(100, 999)} </li>`;
}
const randUl = `<ul> ${listItem} </ul>`;

newSection.innerHTML = randUl;
