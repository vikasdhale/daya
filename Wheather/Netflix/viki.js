//api key form TMDB
const api = " api_key=aae5b2f963eb21af62529d4a4583e54a";

//base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

//request foer movies data

const requests = {
  fetchTrending: `${base_url}/trending/all/Week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};
// used to  truncate the String

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
}

//banner
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    console.log(data.results);
    //every refresh the movie will be change

    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");

    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
  });

//movies row
fetch(requests .fetchNetflixOrignals)
.then((res) => res.json())


.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.ClassName = ("row");
    row.ClassList.add("netflixrow");

    headrow.appenChild(row);
 

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "NETFLIX ORIGINALS";

    row.appenchild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appenchild(row_posters);

    data.results.forEach((movie)  => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s = movie.name.replace(/\s+/g, "");

        poster.id = s;
        poster.src = img_url + movie.poster_path;
        row_posters.appenchild(poster);
    });
});

//top rated
fetch(requests.fetchTrending)
.then((res)  => res.json())


.then((data)  => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";


    headrow.appenchild(row);


    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Top Rated";
    row.appenChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appenChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.poster_path;
        row_posters.appenChild(poster);

    });
});
//action
fetch(requests.fetchActionMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appenChild(row);


    const title = document.createElement("h2");
    const.className = "row_title";
    tittle.innerText = "Action Movies";
    row.appenChild(title);


    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appenChild(row_posters);


    data.results.forEach((movie)  => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appenChild(poster);

    });
});
//comedy
fetch(requests.fetchActionMovies)\
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appenChild(row);

    const title = document.createElement("h2");
    const.className = "row_title";
    tittle.innerText = "Comedy Movies";
    row.appenChild(title);


    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appenChild(row_posters);

    data.results.forEach((movie)  => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appenChild(poster);

    });
});
//Horror
fetch(requests.fetchActionMovies)\
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appenChild(row);

    const title = document.createElement("h2");
    const.className = "row_title";
    tittle.innerText = "Horror Movies";
    row.appenChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appenChild(row_posters);


    data.results.forEach((movie)  => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appenChild(poster);

    });
});
//Romance
fetch(requests.fetchActionMovies)\
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appenChild(row);

    const title = document.createElement("h2");
    const.className = "row_title";
    tittle.innerText = "Romance Movies";
    row.appenChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appenChild(row_posters);

    data.results.forEach((movie)  => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appenChild(poster);

    });
});
//documentary
fetch(requests.fetchActionMovies)\
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appenChild(row);

    const title = document.createElement("h2");
    const.className = "row_title";
    tittle.innerText = "Documentaries";

    row.appenChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appenChild(row_posters);

    data.results.forEach((movie)  => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appenChild(poster);

    });
});
