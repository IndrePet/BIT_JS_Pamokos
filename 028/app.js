console.log('------1-------');
//Kreiptis į serverį ir iš jo gautą informaciją įdėti į html. title į h1 body į p DONE!

fetch('https://jsonplaceholder.typicode.com/posts/7')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector('h1').innerHTML = data.title;
    document.querySelector('p').innerHTML = data.body;
  });

console.log('------2-------');
//Reikia padaryti mygtuką ir input posto numeriui įvesti.
//Paspaudus mygtuką parsiunčiama ir įdedama to posto informacija, kuri nurodoma inpute DONE!
const postNumber = document.querySelector('#postNumber');
const postBtn = document.querySelector('#getPost');
const postTitle = document.querySelector('#postTitle');
const postBody = document.querySelector('#postBody');

postBtn.addEventListener('click', () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      postTitle.innerHTML = data.title;
      postBody.innerHTML = data.body;
    });
});

console.log('------3-------');
//padaryti ul li autorių vardų sarašą DONE!

const authorList = document.querySelector('#authorList');
fetch('https://picsum.photos/v2/list')
  .then((response) => response.json())
  .then((data) => {
    let html = '';
    data.forEach((element) => {
      html += `<li>${element.author}</li>`;
    });
    authorList.innerHTML = html;
  });

console.log('------4-------');
//padaryti nuotraukų albumą DONE!

const galleryContainer = document.querySelector('.container');

fetch('https://picsum.photos/v2/list')
  .then((response) => response.json())
  .then((data) => {
    let html = '';
    data.forEach((element) => {
      html += `<img src="${element.download_url}" height="100px">`;
    });
    galleryContainer.innerHTML = html;
  });
