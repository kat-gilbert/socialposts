import { Post } from "./Post"
import { ThePostForm } from "./ThePostForm"
import "./PostInList.css"

interface PostProp {
    post: Post,
    onDelete: () => void
}

export const PostInList = ({post, onDelete}:PostProp) => {

    // let style = {
    // }

    return (

        <div className="PostInList" >
            <p>{post.title}</p>
            <p>{post.thoughts} <i className="material-icons" onClick={onDelete}>delete</i></p>


            

        </div>
    )
}

