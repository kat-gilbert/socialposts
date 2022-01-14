import { ThePostForm } from "./ThePostForm";
import { PostInList } from "./PostInList";
import { Post } from "./Post";
import { useState } from "react";
import "./SocialPosts.css" 

export const SocialPosts = () => {

 const [post, setPost] = useState<Post[]>([

        {title: "post1", thoughts: "mmm"},
        {title: "post2", thoughts: "mmm"},
        {title: "post3", thoughts: "mmm"}
    ])

    function handlePostFormSubmit(newPost: Post): void {
        setPost(prev => [ ...post, newPost ]);
      }

    function handleDeletePost(index: number) {
        setPost(prev => [...prev.slice(0, index), ...prev.slice(index +1)])
    }

    return (
        <div className="container">
            <div className="SocialPosts">
            <h1>My Thoughts</h1>
            </div>

            <button>New Thought</button>
            <ThePostForm onSubmit={handlePostFormSubmit}/>

            {post.map((post, i) => <PostInList key={i} post={post} onDelete={() => handleDeletePost(i)}/>)}
            
        </div>
    )
}
