import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditableInputContainer from "../../containers/editable-input-container";

const Sections = (props) => {
  const { sections, openPage } = props;

  const renderPages = () => {
    let pages = [];
    for (let section in sections) {
      pages.push(
        <section className="font-display" key={section}>
          <header className="flex items-center bg-black text-white">
            <EditableInputContainer
              content={section}
              id={section}
              customClassName="bg-black"
            />
            <ButtonContainer
              onClick={() => console.log("DELETE Page Section")}
              icon={<RiDeleteBin6Line />}
              category="icon-only"
            />
            <ButtonContainer label="Add New Page" className="text-sm" />
          </header>
          {sections[section].map((page) => (
            <article key={page.id} className="flex items-center">
              <div role="presentation" className="ml-4 h-5 w-0.5 bg-black" />
              <div role="presentation" className="h-0.5 w-2 bg-black" />
              <EditableInputContainer content={page.title} id={page.id} />
              <ButtonContainer
                icon={<FaRegEye />}
                onClick={openPage(page)}
                category="icon-only"
                title="Open Page in Text Editor"
              />
              <ButtonContainer
                onClick={() => console.log("DELETE Page")}
                icon={<RiDeleteBin6Line />}
                category="icon-only"
              />
            </article>
          ))}
        </section>
      );
    }

    return pages;
  };

  return <>{sections && renderPages()}</>;
};

Sections.propTypes = {
  sections: PropTypes.object,
  openPage: PropTypes.func,
};

export default Sections;
