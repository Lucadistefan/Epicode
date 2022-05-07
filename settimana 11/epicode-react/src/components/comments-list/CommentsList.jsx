import { useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../functions/comments";
import CommentsListRow from "../comments-list-row/CommentsListRow";

export default function CommentsList(props) {
    const [hasLoaded, setHasLoeaded] = useState(false);
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    if (!hasLoaded) {
        getComments(postId).then(comments => {
            setComments(comments)
            setHasLoeaded(true);
        });
    } 

    return (
        <section>
            <h1>Comments List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    { comments.map(comment => <CommentsListRow key={comment.id} comment={comment} />) }
                </tbody>
            </table>
        </section>
    );
}