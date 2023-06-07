import { useContext, useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

import Card from "../components/UI/wrapper/Card";
import ButtonSecondary from "../components/UI/button/ButtonSecondary";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  console.log(postInfo);

  if (!postInfo) return "";

  const deleteHandler = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.set("id", postInfo._id);

    const response = await fetch(`http://localhost:4000/post/${postInfo._id}`, {
      method: "DELETE",
      body: data,
      credentials: "include",
    });

    redirect("/post");
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="text-center mt-4 p-2">
        <h1 className="text-4xl font-bold">{postInfo.title}</h1>
        <time className="text-gray-500">
          {formatISO9075(new Date(postInfo.createdAt))}
        </time>
        <div className="author">by @{postInfo.author.username}</div>
        {userInfo.id === postInfo.author._id && (
          <div className="my-2">
            <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
              <button className="bg-clear ml-2 font-semibold text-green-600 border border-green-600 py-1 px-2 rounded-lg">
                Edit Post
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="mx-auto">
        <div className="image">
          <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
      {userInfo.id === postInfo.author._id && (
        <div className="text-center">
          <button
            className="bg-clear ml-2 font-semibold text-red-600 border border-red-600 py-1 px-2 rounded-lg"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

{
  /* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg> */
}
