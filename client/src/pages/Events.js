import React from "react";

import Card from "../components/UI/wrapper/Card";
import AsideLeft from "../components/asides/AsideLeft";
import AsideRight from "../components/asides/AsideRight";

const Events = () => {
  return (
    <div className="w-[85%] m-auto mt-4">
      <div className="flex">
        <div className="mr-4">
          <AsideLeft />
        </div>
        <div>
          <Card bg="white" padding="0">
            <div>
              <img
                className="rounded-t-lg h-[500px] w-[500px]"
                src="/assets/pexels-aditya-aiyar-1407354.jpg"
                alt=""
              />
              {/* For Autor detials */}
              <div className="p-6 flex">
                {/* <div className="mr-2 h-10 w-10">
              <img src={"http://localhost:4000/" + cover} />
            </div> */}
                <div className="flex flex-col h-10 mt-[-6px]">
                  <h2 className="text-gray-800 font-semibold">chitkara</h2>
                  {/* <p className="text-gray-600">{props.date}</p> */}
                  <time className="text-gray-600">22-May-2023</time>
                </div>
              </div>
              {/* Content of blog */}
              <div className="w-[80%] m-auto">
                {/* Heading of Blog */}
                <div className="w-full">
                  <h1 className="text-gray-800 text-3xl font-bold">
                    Sneaker Fest
                  </h1>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="ml-4">
          <AsideRight />
        </div>
      </div>
    </div>
  );
};

export default Events;
