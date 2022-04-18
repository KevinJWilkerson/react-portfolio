import React, { useEffect } from "react";

function Nav({ pages = [], setCurrentPage, currentPage }) {
  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  console.log(pages);

  return (
    <nav>
      <ul className="flex-row">
        {pages.map((page) => {
          return (
            <li
              className={`mx-2 ${currentPage.name === page.name}`}
              key={page.name}
            >
              <span onClick={() => setCurrentPage(page)}>{page.name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
