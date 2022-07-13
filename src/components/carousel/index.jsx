import React, { useState } from "react";
import PropTypes from "prop-types";

const Carousel = (props) => {
  const { children, slideWidth = 128 } = props;
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="max-w-[280px] overflow-hidden">
        <div
          className={`whitespace-nowrap bg-orange-500`}
          style={{ transform: `translateX(${-index * slideWidth}rem)` }}
        >
          {children}
        </div>
      </div>
      <div>
        <button onClick={() => setIndex((prev) => (prev -= 1))}>Prev</button>
        <button onClick={() => setIndex((prev) => (prev += 1))}>Next</button>
      </div>
    </>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  slideWidthInRem: PropTypes.number,
};

export default Carousel;
