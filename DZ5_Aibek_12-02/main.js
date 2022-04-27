const baseURL = 'https://api.tvmaze.com/';

const endpoints = {
  shows: 'shows'
};



const xhr = new XMLHttpRequest();


xhr.open('GET', `${baseURL}${endpoints.shows}`, true);

xhr.send();



xhr.onreadystatechange = function () {
  if (xhr.readyState === 1) {
    console.log('open');
  } else if (xhr.readyState === 2) {
    console.log('2');
  } else if (xhr.readyState === 3) {
    console.log('loading...');
  } else if (xhr.status === 200) {
    const data = JSON.parse(xhr.response)
    console.log(data[0])

    for (let i = 0; i < data.length; i++) {
      const shows = document.querySelector('.shows');

      const show_block = document.createElement('div');
      show_block.className = 'show_block';
      shows.append(show_block);

      const newDivImage = document.createElement('div');
      newDivImage.className = 'image';
      show_block.append(newDivImage);

      const newImage = document.createElement('img');
      newImage.setAttribute('src', `${data[i]}${show.image.medium}`);
      newDivImage.append(newImage);

      const newH3 = document.createElement('h3');
      newH3.innerText = `${baseURL}${endpoints.shows.name}`;
      show_block.append(newH3);

    }


  } else {
    console.log('err', xhr.responseText);
  }
}







// прошлый код по fetch запросу.
// function getAllShows() {
//   fetch(`${baseURL}${endpoints.shows}`, {
//     method: 'GET'
//   }).then((response) => {
//     return response.json();
//   }).then((data) => {
//     const shows = document.querySelector('.shows');
//
//     data.forEach(show => {
//       const show_block = `
//             <div class="show_block">
//                 <div class="image">
//                     <img src="${show.image.medium}" alt=""/>
//                 </div>
//
//                 <h3>${show.name}, ${show.rating.average}</h3>
//
//                 <button>
//                     <a href="${show.officialSite}" target="_blank" rel="noreferrer">
//                         More
//                     </a>
//                 </button>
//              </div>
//             `;
//       shows.innerHTML += show_block;
//     })
//   });
// }
// getAllShows();