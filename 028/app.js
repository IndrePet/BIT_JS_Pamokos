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
    data.forEach((element) => {
      const li = document.createElement('li');
      const author = document.createTextNode(element.author);
      li.appendChild(author);
      authorList.appendChild(li);
    });
    // let html = '';
    // data.forEach((element) => {
    //   html += `<li>${element.author}</li>`;
    // });
    // authorList.innerHTML = html;
  });

console.log('------4-------');
//padaryti nuotraukų albumą DONE!

const galleryContainer = document.querySelector('.container');
//uzkomentinta, nes sunkiai uzkrauna

// fetch('https://picsum.photos/v2/list')
//   .then((response) => response.json())
//   .then((data) => {
//     let html = '';
//     data.forEach((element) => {
//       html += `<img src="${element.download_url}" height="100px">`;
//     });
//     galleryContainer.innerHTML = html;
//   });

console.log('------5-------');
//VINTED

const container2 = document.querySelector('.container2');

fetch('https://in3.dev/vinted/api/products/id/14')
  .then((response) => response.json())
  .then((data) => {
    const title2 = document.createElement('h2');
    const titleText = document.createTextNode(data.title);
    const desc = document.createElement('p');
    const descText = document.createTextNode(data.desc);

    //cia pirmas img issplice'inamas ir sukuriamas
    const mainImgUrl = data.img[data.main_img];
    data.img.splice(data.main_img, 1); //isimam, kad nesimaisytu prie visu kitu;
    const img1 = document.createElement('img');
    img1.setAttribute('src', mainImgUrl);
    img1.classList.add('big');

    desc.appendChild(descText);
    title2.appendChild(titleText);

    const div = document.createElement('div');
    div.appendChild(img1);
    data.img.forEach((image) => {
      const img = document.createElement('img');
      img.setAttribute('src', image);
      img.classList.add('small');
      div.appendChild(img);
    });

    container2.appendChild(title2);
    container2.appendChild(desc);
    container2.appendChild(div);
  });
