import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <div>
      <nav>
        {
          links.map((link) => (
            <a href={`#${link}`}>
              {link}
            </a>
            
          ))
        }
      </nav>
    </div>

    );
}

export default NavBar;

