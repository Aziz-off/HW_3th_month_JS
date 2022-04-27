const baseURL = 'https://api.tvmaze.com/';

const endpoints = {
  shows: 'shows'
};

function getAllShows() {
    fetch(`${baseURL}${endpoints.shows}`, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        const shows = document.querySelector('.shows');

        data.forEach(show => {
            const show_block = `
            <div class="show_block">
                <div class="image">
                    <img src="${show.image.medium}" alt=""/>
                </div>
                
                <h3>${show.name}</h3>
                
                <div class="info">
                    <h4>Information:</h4>
                    <ul>
                        <li>Rating: ${show.rating.average}</li>
                        <li>Genres: ${show.genres}</li>
                        <li>Language: ${show.language}</li>
                        <li>Runtime: ${show.averageRuntime}</li>
                    </ul>
                </div>
                
                <button>
                    <a href="${show.officialSite}" target="_blank" rel="noreferrer" class="link">
                        More
                    </a>
                </button>
             </div>
            `;
            shows.innerHTML += show_block;
        })
    });
}

getAllShows();


