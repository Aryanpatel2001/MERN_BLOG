import React from "react";

export default function About() {
  return (
    <div>
      <div className="max-w-3xl mx-auto mt-20 h-screen">
        <div className="flex flex-col justify-center text-center">
          <h1 className=" text-3xl font-semibold mb-10"> About Uniq Blog</h1>
          <div className=" flex flex-col gap-8 text-gray-600">
            <p>
              {" "}
              Welcome to uniq Blog! This blog was created by Aryan Patel as a
              personal project to share his thoughts and ideas with the word.
              Aryan is a passionate developer who loves to write about
              technology,coding,and everything in between.
            </p>
            <p>
              On this Blog , you'll find weely articles and tutorials on topics
              such as web development,software engineering and programming
              launguages,Aryan is always leaning and exploring new technologies,
              so be sure to check back often for new content
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with
              other readers.You can like other people's comments and reply to
              them as well.We belive that a community of learners can help each
              other grow and improve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
