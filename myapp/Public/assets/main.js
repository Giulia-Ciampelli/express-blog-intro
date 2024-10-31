console.log('script dellindex pubblico');

// #region variabili globali
let rowElement = document.querySelector('.row');
let postElements = '';
// #endregion variabili globali

// chiamata ajax dalla rotta posts
axios.get('http://127.0.0.1:3005/posts')
    .then(response => {
        let posts = response.data;
        console.log(posts);

        // ciclo nell'array
        posts.forEach(post => {

            // destrutturazione post
            const {content, img, tags} = post;

            // creazione markup

        });

        // assegnazione markup
    })
    .catch(err => {
        console.error(err);
    })