import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

import Card from "./components/UI/wrapper/Card";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <Card bg="white" padding="0">
      <Link to={`/post/${_id}`}>
        <div>
          <img
            className="rounded-t-lg"
            src={"http://localhost:4000/" + cover}
            alt=""
          />
          {/* For Autor detials */}
          <div className="p-6 flex">
            {/* <div className="mr-2 h-10 w-10">
              <img src={"http://localhost:4000/" + cover} />
            </div> */}
            <div className="flex flex-col h-10 mt-[-6px]">
              <h2 className="text-gray-800 font-semibold">{author.username}</h2>
              {/* <p className="text-gray-600">{props.date}</p> */}
              <time className="text-gray-600">
                {formatISO9075(new Date(createdAt))}
              </time>
            </div>
          </div>

          {/* Content of blog */}
          <div className="w-[80%] m-auto">
            {/* Heading of Blog */}
            <div className="w-full">
              <h1 className="text-gray-800 text-3xl font-bold">{title}</h1>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
