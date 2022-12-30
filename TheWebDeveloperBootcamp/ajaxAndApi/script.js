//****************************/
//Making XHRs 
//****************************/

// const reg = new XMLHttpRequest();

// reg.onload = function () {
//   console.log("IT LOADED!!");
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// }

// reg.onerror = function() {
//   console.log("ERROR!!");
//   console.log(this);
// }

// reg.open("GET", "https://swapi.dev/api/people/1");
// reg.send();


//****************************/
//Using Fetch API
//****************************/
// fetch("https://swapi.dev/api/people/1")
// .then((res) => {
//   console.log("RESOLVED", res)
//   return res.json()
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((e) => {
//   console.log("ERROR!!", e)
// })


//****************************/
//Using 2 requests with fetch
//****************************/
// fetch("https://swapi.dev/api/people/1")
// .then((res) => {
//   console.log("RESOLVED", res)
//   return res.json()
// })
// .then((data) => {
//   console.log(data);
//   return fetch("https://swapi.dev/api/people/60")
// })
// .then((res) => {
//   console.log("SECOND REQUEST RESOLVED!!")
//   return res.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((e) => {
//   console.log("ERROR!!", e)
// })



//****************************/
//Using async function
//****************************/
// const loadStarWars = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/12");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/14");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("ERROR!!!")
//   }
// }

// loadStarWars();



//****************************/
//Axios - a library for making http requests
//****************************/

// axios.get("https://swapi.dev/api/people/12")
// .then((res) => {
//     console.log("RESOLVED", res)
// })
// .catch((e) => {
//   console.log("ERROR!!", e)
// })

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data); 
//   } catch(e) {
//       console.log("ERROR!!", e)
//   }
// };

// getStarWarsPerson(4);  


//Setting Headers with Axios
// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addNewJoke = async () => {
//   const jokeText = await getDadJoke();
//   const newLI = document.createElement('li');
//   newLI.append(jokeText);
//   jokes.append(newLI);
// }  
// const getDadJoke = async () => {
//   try {
//     const config = {headers: {Accept: 'application/json'}} 
//     const res = await axios.get("https://icanhazdadjoke.com", config);
//     return res.data.joke;
//   } catch(e) {
//     return "NO JOKES AVAILABLE!! SORRY :("
//   }

// }

// button.addEventListener('click', addNewJoke);


//TV Show Search App
// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//   e.preventDefault();
//   const searchTerm = form.elements.query.value;
//   const config = { params: { q: searchTerm } }
//   const res = await axios.get(`https://api.tvmaze.com/search/shows`, config); 
//   makeImages(res.data);
//   form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//   for(let results of shows) {
//     if (results.show.image) {
//       const img = document.createElement('img');
//       img.src = results.show.image.medium;
//       document.body.append(img);
//     }
//   }
// }