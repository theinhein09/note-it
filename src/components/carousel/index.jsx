import React, { Children, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";

const Carousel = (props) => {
  const { children } = props;
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(1);
  const slideRef = useRef(null);

  const memo = useMemo(
    () => ({ index, width, setIndex, setWidth }),
    [index, width]
  );

  useEffect(() => {
    memo.setWidth(slideRef.current.children[0].offsetWidth);
  }, [memo]);

  const handlePrev = () => {
    if (memo.index <= 0) return;
    memo.setIndex((prev) => (prev -= 1));
  };

  const handleNext = () => {
    if (memo.index >= children.length - 1) return;
    memo.setIndex((prev) => (prev += 1));
  };

  return (
    <>
      <div className="my-2 max-w-full overflow-hidden bg-slate-100 p-4 shadow-inner shadow-black">
        <div
          className="whitespace-nowrap"
          style={{ transform: `translateX(${-memo.index * memo.width}px)` }}
        >
          <div ref={slideRef}>
            {Children.map(children, (child) => (
              <div className="inline-block w-fit">{child}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {memo.index > 0 ? (
          <ButtonContainer
            label="PREV"
            onClick={handlePrev}
            disabled={memo.index <= 0}
            className="bg-white"
          />
        ) : (
          <ButtonContainer className="invisible" label="PREV" />
        )}
        {memo.index < children.length - 1 ? (
          <ButtonContainer
            disabled={memo.index >= children.length - 1}
            label="NEXT"
            onClick={handleNext}
            className="bg-white"
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
