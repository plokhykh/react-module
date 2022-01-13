import {urls} from "../config";

const getByUser = (userId) => {
    return fetch(`${urls.posts}?userId=${userId}`)
        .then(data => data.json())
}

export const postsService = {
    getByUser
}
