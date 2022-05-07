import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../functions/posts";
import PostsListRow from "../posts-list-row/PostsListRow";

export default function PostsList() {
    const [hasLoaded, setHasLoeaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const { userId } = useParams();

    if (!hasLoaded) {
        getPosts(userId).then(posts => {
            setPosts(posts);
            setHasLoeaded(true);
        });
    } 

    return (
        <section>
            <h1>Posts List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { posts.map(post => <PostsListRow key={post.id} post={post} />) }
                </tbody>
            </table>
        </section>
    );
}