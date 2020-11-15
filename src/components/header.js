import React from "react"
import Navbar from "./Navbar"
import ContactNavbar from "./ContactNavbar"





class Header extends React.Component {



  componentDidMount() {
    let topMenuHeader = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
      let scrollCoordination = window.scrollY;
      let coordinationSliderContainer = 322;
      let fixedTopCoordination = coordinationSliderContainer + 200;
      if (scrollCoordination >= coordinationSliderContainer) {
        topMenuHeader.classList.add("site-header_fixed");

        if (scrollCoordination > fixedTopCoordination) {
          topMenuHeader.classList.add("site-header_animation");
        } else {
          topMenuHeader.classList.remove("site-header_animation");
        }
      } else if (scrollCoordination < coordinationSliderContainer) {
        topMenuHeader.classList.remove("site-header_fixed");
      }
    });
  }

  render() {
    return(

      <header className="site-header">
        <ContactNavbar />
        <Navbar />
      </header>
    )
  }

}


export default Header
