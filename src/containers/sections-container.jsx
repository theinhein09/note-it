import React, { Fragment } from "react";
import Sections from "../components/sections";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const SectionsContainer = (props) => {
  const { sections } = props;

  const renderPages = () => {
    let pages = [];
    for (let section in sections) {
      pages.push(
        <Fragment key={section}>
          <h3>
            {section}
            <button onClick={() => console.log("EDIT Page Section")}>
              <FaEdit />
            </button>
            <button onClick={() => console.log("DELETE Page Section")}>
              <RiDeleteBin6Line />
            </button>
          </h3>
          {sections[section].map((page) => (
            <Fragment key={page.id}>
              <h4>
                {page.title}
                <button onClick={() => console.log("EDIT Page Title")}>
                  <FaEdit />
                </button>
                <button onClick={() => console.log("DELETE Page Title")}>
                  <RiDeleteBin6Line />
                </button>
              </h4>
            </Fragment>
          ))}
        </Fragment>
      );
    }

    return pages;
  };

  return <>{sections && <Sections {...props} children={renderPages()} />}</>;
};

export default SectionsContainer;
