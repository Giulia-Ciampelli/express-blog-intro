console.log('script dellindex pubblico');

// chiamata ajax dalla rotta posts
axios.get('http://127.0.0.1:3005/posts')
.then(response => {
    let posts = response.data;
    console.log(posts);

    // ciclo nell'array

    // destrutturazione post

    // creazione markup

    // assegnazione markup
})
.catch(err => {
    console.error(err);
})