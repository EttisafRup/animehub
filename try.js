const find = document.getElementById('find')

find.addEventListener('click', async () => {
  const animeName = document.getElementById('text').value
  const show = document.querySelector('.show')
  const url = `https://api.jikan.moe/v3/search/anime?q=${animeName}&page=1`
  const res = await fetch(url)
  const data = await res.json()

  const markup = data.results.map(anime => {
    return `
    <div class="xl:w-1/4 md:w-1/2 p-4">
    <div class="bg-gray-100 p-6 rounded-lg">
        <div class="flex object-center justify-center">
      <img class="h-40 rounded object-cover w-auto h-auto object-center mb-6" src="${anime.image_url}" alt="${anime.image_url} Image">
      </div>
      <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">Anime : ${anime.type}</h3>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${anime.title}</h2>
      <p class="leading-relaxed text-base"><strong>OverView : </strong> ${anime.synopsis}.</p>
        
      <div class="p-2 my-3">
      <a target="_blank" href="${anime.url}"><button class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Learn more</button></a>
    </div>
      </div>
  </div>
    `
  })

  show.innerHTML = markup.join('')
})