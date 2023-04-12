import React from "react";

const Blog = () => {
  return (
    <div className="my-20 grid md:grid-cols-2 gap-5 ">
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg space-y-3 hover:bg-cyan-300 hover:-translate-y-3 duration-300 hover:border-black">
        <h2 className="text-2xl font-semibold">
          
          <span className="text-gray-500">Question 1: </span> when is the contex
          api used?
        </h2>
        <p className="text-lg text-gray-700">
          
          <span className="text-orange-400 text-xl font-semibold">
            Answer:
          </span>
          The Context API is a feature in React that allows you to pass data
          down the component tree without having to manually pass props through
          each level of the tree. It is typically used when you have data or
          state that needs to be accessed by many components at different levels
          of the component tree.
        </p>
      </div>
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg space-y-3 hover:bg-rose-300 hover:-translate-y-3 duration-300 hover:border-black">
        <h2 className="text-2xl font-semibold">
          
          <span className="text-gray-500">Question 2: </span> what is coustom
          hook?
        </h2>
        <p className="text-lg text-gray-700">
          
          <span className="text-orange-400 text-xl font-semibold">
            Answer:
          </span>
          In React, a custom hook is a JavaScript function that starts with the
          word "use" and allows you to extract and reuse logic from your
          components. Custom hooks can be used to abstract away complex logic
          into reusable functions that can be easily shared across different
          components or even different projects.
        </p>
      </div>
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg space-y-3 hover:bg-fuchsia-300 hover:-translate-y-3 duration-300 hover:border-black">
        <h2 className="text-2xl font-semibold">
          
          <span className="text-gray-500">Question 3: </span> What is useRef ?
        </h2>
        <p className="text-lg text-gray-700">
          
          <span className="text-orange-400 text-xl font-semibold">
            Answer:
          </span>
          In React, the useRef hook is used to create a mutable reference that
          can be used to store a value that persists between re-renders of a
          component. The useRef hook returns an object with a current property
          that can be used to access or update the stored value.
        </p>
      </div>
      <div className=" hover:-translate-y-3 duration-300 bg-gray-50 border border-gray-200 p-8 rounded-lg space-y-3 hover:bg-orange-200 hover:border-black">
        <h2 className="text-2xl font-semibold">
          
          <span className="text-gray-500">Question 4: </span> What is useMemo?
        </h2>
        <p className="text-lg text-gray-700">
          
          <span className="text-orange-400 text-xl font-semibold">
            Answer:
          </span>
          the useMemo hook is used to memoize the result of a function and
          optimize the performance of your app by avoiding unnecessary
          re-computations. It is useful for expensive computations or functions
          that are called frequently with the same inputs.
        </p>
      </div>
    </div>
  );
};

export default Blog;
