import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const singleLink = links.map((link) => {
    return <a key={link} href={"#"+link}>{link}</a>
  })

  return <nav>{singleLink}</nav>;
}

export default NavBar;
