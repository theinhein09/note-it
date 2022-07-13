import React, { Children, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";

const Carousel = (props) => {
  const { children } = props;
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(1);
  const slideRef = useRef(null);

  useEffect(() => {
    setWidth(slideRef.current.children[0].offsetWidth);
  }, []);

  return (
    <>
      <div className="max-w-full overflow-hidden">
        <div
          className="whitespace-nowrap"
          style={{ transform: `translateX(${-index * width}px)` }}
        >
          <div ref={slideRef}>
            {Children.map(children, (child) => (
              <div className="inline-block w-fit">{child}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <ButtonContainer
          label="PREV"
          onClick={() => setIndex((prev) => (prev -= 1))}
        />
        <ButtonContainer
          label="NEXT"
          onClick={() => setIndex((prev) => (prev += 1))}
        />
      </div>
    </>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
};

export default Carousel;
