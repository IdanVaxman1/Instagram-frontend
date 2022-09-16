import { storageService } from './async-storage.service.js'
import { story } from './instush'

const STORAGE_KEY = 'PostDB'

export const postService = {
    query,
    add,
    remove,
    get,
    addComment,
    getEmptyPost,
    save,
    getPost

}
window.cs = postService;


function query() {

    let posts = localStorage.getItem(STORAGE_KEY)
    if (!posts) {
        localStorage.setItem('PostDB', JSON.stringify(story()))
    }
    return storageService.query(STORAGE_KEY)

}

async function add(newEntities) {
    return storageService.postMany(STORAGE_KEY, newEntities)
}

async function remove(postId) {
    await storageService.remove(STORAGE_KEY, postId)
}

async function get(postId) {
    return storageService.get(STORAGE_KEY, postId)
}

async function getPost(postId) {
    return storageService.getPost(STORAGE_KEY, postId)
}

async function save(post) {
    var savedPost
    if (post._id) {
        savedPost = await storageService.put(STORAGE_KEY, post)
    }
    return savedPost
}

async function addComment(postId, newComment) {
    return storageService.addComment(STORAGE_KEY, postId, newComment)
}


function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function getEmptyPost() {
    return {
        txt: 'String',
        by: {
            fullname: 'Idan vaxman',
            imgUrl: 'https://res.cloudinary.com/demo/image/upload/e_sepia:50/coast.jpg'
        },
        selectedImg: 'https://res.cloudinary.com/demo/image/upload/e_sepia:50/coast.jpg',
    }
}



