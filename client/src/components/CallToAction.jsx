import React from "react";
import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col  sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-t-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center  flex flex-col  pl-40">
        <h2 className="text-2xl dark:text-gray-400">
          Want to learn more about ReactJS?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 my-2">
          Checkout these resourse with 100 ReactJS projects
        </p>
        <Button>
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1 ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCW_s8SqjXqJOpywby6GClx3Rq3VSy9yDUcA&s" />
      </div>
    </div>
  );
}
