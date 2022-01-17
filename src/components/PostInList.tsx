import { Post } from "./Post"
import "./PostInList.css"

interface PostProp {
    post: Post,
    onDelete: () => void
}

export const PostInList = ({post, onDelete}:PostProp) => {

    return (

        <div className="PostInList" >
            <p className="title">{post.title}</p>
            <p className="thoughts">{post.thoughts} <i className="material-icons" onClick={onDelete}>delete</i></p>
        </div>
    )
}

