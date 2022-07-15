import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineFileAdd } from "react-icons/ai";
import EditableInputContainer from "../../containers/editable-input-container";

const Sections = (props) => {
  const {
    sections,
    openPage,
    onPageDelete,
    onSectionDelete,
    onPageTitleSave,
    onSectionSave,
  } = props;

  const renderPages = () => {
    let pages = [];
    for (let section in sections) {
      pages.push(
        <section className="font-display" key={section}>
          <header className="mt-2 mb-1 flex items-center bg-black py-1 text-white shadow-sm shadow-black">
            <div role="presentation" className="w-full">
              <EditableInputContainer
                content={section}
                id={section}
                customClassName="bg-black flex-grow"
                onSave={onSectionSave}
              />
            </div>
            <ButtonContainer
              onClick={() => onSectionDelete(section)}
              icon={<RiDeleteBin6Line />}
              category="icon-only"
            />
            <ButtonContainer
              icon={<AiOutlineFileAdd title="Add New Page" />}
              category="icon-only"
            />
          </header>
          {sections[section].map((page, index) => (
            <article key={page.id} className="flex items-center">
              <div
                role="presentation"
                className={`ml-4 h-5 w-0.5 bg-black  ${
                  index === sections[section].length - 1 && "clip-path"
                }`}
              />
              <div role="presentation" className="h-0.5 w-2 bg-black" />
              <EditableInputContainer
                content={page.title}
                id={page.id}
                onSave={onPageTitleSave}
                className="mr-1"
              />
              <ButtonContainer
                icon={<FaRegEye />}
                onClick={openPage(page)}
                category="icon-only"
                title="Open Page in Text Editor"
                className="mr-1"
              />
              <ButtonContainer
                onClick={() => onPageDelete(page.id)}
                icon={<RiDeleteBin6Line />}
                category="icon-only"
                className="mr-1"
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
  onPageDelete: PropTypes.func,
  onSectionDelete: PropTypes.func,
  onPageTitleSave: PropTypes.func,
  onSectionSave: PropTypes.func,
};

export default Sections;
