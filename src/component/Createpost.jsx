import React, { useRef } from "react";
import { useContext } from "react";
import { postlistcontext } from "../store/postlist_store";
import { Form, redirect, useNavigate } from "react-router-dom";

function Createpost() {

  // const { addpost } = useContext(postlistcontext);
  // const navigate = useNavigate();

  // const useridElement = useRef();
  // const titleElement = useRef();
  // const titlecontentElement = useRef();
  // const hashtagsElement = useRef();
  // const reactionElement = useRef();

  // const handleOnClick = (event) => {
  //   event.preventDefault();

  //   const postid = useridElement.current.value;
  //   const title = titleElement.current.value;
  //   const titlecontent = titlecontentElement.current.value;
  //   const hashtags = hashtagsElement.current.value.split(" ");
  //   const reaction = reactionElement.current.value;

  //   useridElement.current.value = "";
  //   titleElement.current.value = "";
  //   titlecontentElement.current.value = "";
  //   hashtagsElement.current.value = "";
  //   reactionElement.current.value = "";
  // };

  return (
    <Form method="POST" className="createpost">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          User Id
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id=""
          placeholder="Your Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id=""
          placeholder="How are you feeding Today..."
        />
      </div>

      <div className="mb-3 feed">
        <label className="">Title Content</label>
        <textarea type="text" name="body" placeholder="Tell more about us" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Your Hashtags
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id=""
          placeholder="Type your hashtags using with sapce"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id=""
          placeholder="No. of Reaction"
        />
      </div>

      <button type="click" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}

export const postAction = async (data) => {
  // const { addpost } = useContext(postlistcontext);
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ")

  // console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addpost(post);
      console.log(post);
    });

    return redirect("/")
};

export default Createpost;
