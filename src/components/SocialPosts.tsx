import { ThePostForm } from "./ThePostForm";
import { PostInList } from "./PostInList";
import { Post } from "./Post";
import { useState } from "react";
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import "./SocialPosts.css" 

export const SocialPosts = () => {

    let [ openForm, setOpenForm ] = useState(false);

    function openModal() {
        setOpenForm(true);
    }
    function closeModal() {
        setOpenForm(false);
    }

    // Modal.setAppElement('div');

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

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return (
            <div className="container">
            <div className="SocialPosts">
            <h1>My Thoughts</h1>
            </div>

            <button onClick={openModal}>New Thought</button>

            {openForm && 

            <Modal
            isOpen={openForm}
            // onAfterOpen={closeModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <ThePostForm  onSubmit={handlePostFormSubmit} onClose={closeModal}/>
            </Modal>
            }

            {post.map((post, i) => <PostInList key={i} post={post} onDelete={() => handleDeletePost(i)}/>)}
        </div>
    )
    // ReactDOM.render(<SocialPosts />, "div");
}
