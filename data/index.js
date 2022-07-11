const array = ["Paris", "Lyon", "Montreal", "Bordeaux"];
const array1 = ["Paris", 33, ["Montreal", "Bordeaux"], true];

for (i = 0; i < array.length; i++) {
  console.log(typeof array1[i]);
}

const number = [21, 45, 1, 22, 44, 7];
number.sort();
console.log(number);

// *******************************************
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  changeLink(e.target.value);

  if(link) {
      video.innerHTML = `<iframe
      width="640"
      height="360"
      src=${link}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
  }
});

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', 'embed');
    link = embed.split('&')[0];
}