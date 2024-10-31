console.log('script dellindex pubblico');

// #region variabili globali
let rowElement = document.querySelector('.row');
let postElements = '';
// #endregion variabili globali

// chiamata ajax dalla rotta posts
axios.get('http://127.0.0.1:3005/posts')
    .then(response => {
        let posts = response.data.data;
        console.log(posts);

        // ciclo nell'array
        posts.forEach(post => {

            // destrutturazione post
            const { title, content, img, tags } = post;

            // creazione markup
            const markup = `
            <div class="card">
                <div class="card-title">
                    ${title}
                </div>
                <div class="card-img">
                    <img src="${img}" class="api-img" alt="immagine post casuale">
                </div>
                <div class="card-desc">
                    ${content}
                </div>
                <div class="card-tags">
                    ${tags}
                </div>
            </div>`;

            // assegnazione markup
            postElements += markup;
        });

        // stampa markup
        rowElement.innerHTML = postElements;
    })
    .catch(err => {
        console.error(err);
    })