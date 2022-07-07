import React, { Fragment } from "react";
import ButtonContainer from "../../containers/button-container";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Sections = (props) => {
  const { sections, openPage } = props;

  const renderPages = () => {
    let pages = [];
    for (let section in sections) {
      pages.push(
        <Fragment key={section}>
          <h3>
            {section}
            <ButtonContainer
              onClick={() => console.log("EDIT Page Section")}
              icon={<FaEdit />}
              category="icon-only"
            />
            <ButtonContainer
              onClick={() => console.log("DELETE Page Section")}
              icon={<RiDeleteBin6Line />}
              category="icon-only"
            />
          </h3>
          {sections[section].map((page) => (
            <Fragment key={page.id}>
              <h4 onClick={openPage(page)}>
                {page.title}
                <ButtonContainer
                  onClick={() => console.log("EDIT Page Title")}
                  icon={<FaEdit />}
                  category="icon-only"
                />
                <ButtonContainer
                  onClick={() => console.log("DELETE Page Title")}
                  icon={<RiDeleteBin6Line />}
                  category="icon-only"
                />
              </h4>
            </Fragment>
          ))}
          <ButtonContainer label="Add Page" />
        </Fragment>
      );
    }

    return pages;
  };

  return <>{sections && renderPages()}</>;
};

export default Sections;
