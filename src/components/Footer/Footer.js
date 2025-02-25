import React from 'react';
import './Footer.css';  // Add the styles if you have any custom CSS for the footer

function Footer() {
  return (
    <section className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by Amare | All Right reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <i className='bx bxs-up-arrow-circle'></i>
        </a>
      </div>
    </section>
  );
}

export default Footer;
