const posts = [
    {
        title: 'post 1',
        content: 'lorem ipsum lorem ipsum',
        img: 'https://picsum.photos/200',
        tags: ['post', 'image', 'random']
    },
    {
        title: 'post 2',
        content: 'lorem ipsum lorem ipsum',
        img: 'https://picsum.photos/200',
        tags: ['post', 'image', 'random']
    },
    {
        title: 'post 3',
        content: 'lorem ipsum lorem ipsum',
        img: 'https://picsum.photos/200',
        tags: ['post', 'image', 'random']
    },
    {
        title: 'post 4',
        content: 'lorem ipsum lorem ipsum',
        img: 'https://picsum.photos/200',
        tags: ['post', 'image', 'random']
    },
    {
        title: 'post 5',
        content: 'lorem ipsum lorem ipsum',
        img: 'https://picsum.photos/200',
        tags: ['post', 'image', 'random']
    }
]

// funzione index per trasportare i post come json
function index(req, res) {
    res.json({
        data: posts,
        count: posts.length
    })
}

// esportazione
module.exports = {index};