import { Post } from "./Post"
import { FormEvent, useState } from "react";
import Modal from 'react-modal';

interface Props {
    onSubmit: (post: Post) => void;
    onClose: () => void;
}

export const ThePostForm = ({onSubmit, onClose}:Props) => { 

const [ title, setTitle ] = useState("");
const [ thoughts, setThoughts ] = useState("");

function handlePostSubmit(e:FormEvent) {

  e.preventDefault();

  const newPost: Post = {
    title: title,
    thoughts: thoughts,
  };

  // Then trigger the onSubmit callback
  // 3. call the callback prop from the event handler
  onSubmit(newPost);

  setTitle("");
  setThoughts("");
}

    return (
    <div className="ThePostForm" onSubmit={handlePostSubmit}>
      <p className="close"><i className="material-icons" onClick={onClose}>close</i></p>

      <form className="postForm" action="submit">
        <p>
            <label htmlFor="title">Title</label><br />
            <input id="title" type="text" value={title}
            onChange={(e) => setTitle(e.target.value)}/>
        </p>
        <p> 
            <label htmlFor="newThought">New Thought</label><br />
            <textarea rows={10} id="newThought" value={thoughts}
            onChange={(e) => setThoughts(e.target.value)} />
        </p>
        <p>
            <button type="submit">Add Post</button></p>
      </form>
    </div>
    )
}

