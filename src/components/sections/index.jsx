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
        <section className="bg-slate-600 font-display" key={section}>
          <header className="flex items-center bg-black text-white">
            <h3 className="grow px-1">{section}</h3>
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
          </header>
          {sections[section].map((page) => (
            <article
              onClick={openPage(page)}
              key={page.id}
              className="flex items-center"
            >
              <div role="presentation" className="ml-4 h-4 w-0.5 bg-black" />
              <div role="presentation" className="h-0.5 w-4 bg-black" />
              <h4 className="grow overflow-hidden text-ellipsis px-2">
                {page.title}
              </h4>
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
            </article>
          ))}
          <ButtonContainer label="Add Page" />
        </section>
      );
    }

    return pages;
  };

  return <>{sections && renderPages()}</>;
};

export default Sections;
