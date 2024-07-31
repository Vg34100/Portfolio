import React, { useEffect } from "react";

const DropIn = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".drop-in-element");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("drop-in");
      }, index * 300); // Adds a slight delay between each element
    });
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes dropIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .drop-in {
            animation: dropIn 1s ease forwards;
          }

          .drop-in-element {
            opacity: 0;
          }
        `}
      </style>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { className: `${child.props.className || ''} drop-in-element` })
      )}
    </>
  );
};

export default DropIn;
