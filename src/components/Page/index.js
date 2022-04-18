import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Work from "../Work";
import Contact from "../Contact";
import Resume from "../Resume";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "Work":
        return <Work />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}

export default Page;
