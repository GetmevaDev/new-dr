import React from "react"

const Map = () => (
  <section className="section-map">
    <iframe
      className={`lazload`}
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24192.303985803024!2d-73.874642!3d40.71718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc10891d527fcb068!2sIV%20STAT!5e0!3m2!1sen!2skz!4v1635236232660!5m2!1sen!2skz"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  </section>
)

export default Map
