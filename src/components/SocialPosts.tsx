import { ThePostForm } from "./ThePostForm";
import { PostInList } from "./PostInList";
import { Post } from "./Post";
import { useState } from "react";
import "./SocialPosts.css" 

export const SocialPosts = () => {

 let [ openForm, setOpenForm ] = useState(false);

 function openModal() {
    setOpenForm(true);
    console.log("hello");
  }
  function closeModal() {
    setOpenForm(false);
  }

 const [post, setPost] = useState<Post[]>([

        {title: "post1", thoughts: "mmm"},
        {title: "post2", thoughts: "mmm"},
        {title: "post3", thoughts: "mmm"}
    ])

    function handlePostFormSubmit(newPost: Post): void {
        setPost(prev => [ ...post, newPost ]);
        setOpenForm(false);
      }

    function handleDeletePost(index: number) {
        setPost(prev => [...prev.slice(0, index), ...prev.slice(index +1)])
    }

    return (
        <div className="container">
            <div className="SocialPosts">
            <h1>My Thoughts</h1>
            </div>
            <button onClick={openModal}>New Thought</button>

            {openForm ?? 
            <ThePostForm  onSubmit={handlePostFormSubmit} onClose={closeModal}/>
            }
            {post.map((post, i) => <PostInList key={i} post={post} onDelete={() => handleDeletePost(i)}/>)}
            
        </div>
    )
}
