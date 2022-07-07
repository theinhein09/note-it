import React, { Fragment } from "react";
import Sections from "../components/sections";
import { FaEdit } from "react-icons/fa";

const SectionsContainer = (props) => {
  const { sections } = props;

  const renderPages = () => {
    let pages = [];
    for (let section in sections) {
      pages.push(
        <Fragment key={section}>
          <h3>{section}</h3>
          {sections[section].map((page) => (
            <Fragment key={page.id}>
              <h4>
                {page.title}
                <button>
                  <FaEdit />
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
