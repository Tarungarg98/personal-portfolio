import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav_bar.css";
import { AppContext } from "../../context/AppContext";

const NavBar = () => {
  const { show_sidebar, dispatch } = useContext(AppContext);

  const open_sidebar = () => {
    dispatch({
      type: "SHOW_SIDEBAR",
    });
  };

  let sidebar_content = <div></div>;
  if (show_sidebar === 1) {
    sidebar_content = (
      <div className="sidebar_open">
        <div>
          <button className="closebtn" onClick={open_sidebar}>
            Close
          </button>
        </div>
        <div>
          <a href="#intro_page">Home</a>
        </div>
        <div>
          <a href="#education">Education</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#workexp">Work Experience</a>
        </div>
        <div>
          <a href="#awards">Awards</a>
        </div>
        <div>
          <a href="#publications">Publications</a>
        </div>
        <div>
          <a href="#volunteering">Volunteering</a>
        </div>
        {/* <a href="#Blog_DS_Journey">Blog</a> */}
      </div>
    );
  } else {
    sidebar_content = <div></div>;
  }
  return (
    <div>
      <div className="nav_bar_header">
        <nav>
          <a href="#intro_page">Home</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#workexp">Work Experience</a>
          <a href="#awards">Awards</a>
          <a href="#publications">Publications</a>
          <a href="#volunteering">Volunteering</a>
          {/* <a href="#Blog_DS_Journey">Blog</a> */}
        </nav>
      </div>
      <div className="nav_bar_sidebar">
        <nav>
          <button className="openbtn" onClick={open_sidebar}>
            ☰ Navigation Bar
          </button>
          {sidebar_content}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
