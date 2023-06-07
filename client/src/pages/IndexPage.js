import Post from "../Post";
import { useEffect, useState } from "react";

import AsideLeft from "../components/asides/AsideLeft";
import AsideRight from "../components/asides/AsideRight";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <div className="w-[85%] m-auto mt-4">
        <div className="flex">
          <div className="mr-4">
            <AsideLeft />
          </div>
          <div>
            {posts.length > 0 && posts.map((post) => <Post {...post} />)}
          </div>
          <div className="ml-4">
            <AsideRight />
          </div>
        </div>
      </div>
    </>
  );
}
