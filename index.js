const find = document.getElementById("find");
const showRes = document.querySelector('.cld');

find.addEventListener("click", () => {

  let animeName = document.getElementById("text").value;
  function apiFetch() {
    const url = `https://api.jikan.moe/v3/search/anime?q=${animeName}&page=1`;
    const show = document.querySelector(".show");

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const result = res.results;
        console.log(result);
        show.innerHTML = `
        ${result.map((anime) => {
          return  `
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-black p-6 rounded-lg">
                <div class="flex object-center justify-center">
              <img class="h-40 rounded object-cover w-auto h-auto object-center mb-6" src="${anime.image_url}" alt="${anime.image_url} Image">
              </div>
              <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">Anime : ${anime.type}</h3>
              <h2 class="text-lg text-gray-100 font-medium title-font mb-4">${anime.title}</h2>
              <p class="leading-relaxed text-gray-400 text-base"><strong>OverView : </strong> ${anime.synopsis}.</p>
                

              <div class="flex items-center flex-wrap ">

              
              <div class="p-2 my-3">
              <a target="_blank" href="${anime.url}"><button class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Learn more</button></a>
            </div>

              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>${anime.members}
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>Ep<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg> ${anime.episodes}
              </span>

            </div>
        
              </div>
          </div>

          
            `;
        }).join("")}`;
      });
  }
  apiFetch();

  showRes.innerHTML = `
  <h3 class="sm:text-3xl text-xl mx-5 font-medium title-font mb-2 text-white"> "${animeName}" - Anime Results from <span class="text-red-500 xl-3">A</span>nime<span class="text-red-500 xl-3">H</span>ub</h3>

  `
});
