import { useParams } from "react-router-dom";

export default function User(props) {
    const { userId } = useParams();

    console.log(userId);
    return (
        <div>{ userId }</div>
    );
}