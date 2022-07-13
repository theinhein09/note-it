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

  const handlePrev = () => {
    if (index <= 0) return;
    setIndex((prev) => (prev -= 1));
  };

  const handleNext = () => {
    if (index >= children.length - 1) return;
    setIndex((prev) => (prev += 1));
  };

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
        {index > 0 ? (
          <ButtonContainer
            label="PREV"
            onClick={handlePrev}
            disabled={index <= 0}
          />
        ) : (
          <ButtonContainer className="invisible" label="PREV" />
        )}
        {index < children.length - 1 ? (
          <ButtonContainer
            disabled={index >= children.length - 1}
            label="NEXT"
            onClick={handleNext}
          />
        ) : (
          <ButtonContainer className="invisible" label="NEXT" />
        )}
      </div>
    </>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
};

export default Carousel;
