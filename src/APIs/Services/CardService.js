import { HttpClient } from "../HttpClient";

class CardService extends HttpClient {
    constructor() {
        super("https://localhost:7216/api/Sliders/isNotDeleted")
    }

    getAllPosts() {
        return this.get('posts')
    }
    getUserComments(id) {
        return this.getCommentUsers('comments',id)
    }
    postNewPosts(body) {
        return this.post("posts", body);
    }
    editPost(id, body) {
        return this.put("post", body, id);
    }
}

export const cardService = new CardService()