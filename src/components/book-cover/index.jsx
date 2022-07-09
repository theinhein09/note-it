import React from "react";
import PropTypes from "prop-types";

const BookCover = (props) => {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      role="presentation"
      className="grid aspect-[17/22] w-40 place-content-center border border-l-8 border-black"
    >
      <div
        role="presentation"
        className="aspect-[22/15] w-16 border border-black"
      />
    </div>
  );
};

BookCover.propTypes = {
  onClick: PropTypes.func,
};

export default BookCover;
