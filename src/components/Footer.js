import React from 'react'

function Footer() {
  return (
    <footer className="py-5">
        <div className="container text-center">
            <ul className="list d-flex justify-content-center">
                <li className='footer-li'><i className="fa-brands fa-facebook-f"></i></li>
                <li className='footer-li'><i className="fa-brands fa-twitter"></i></li>
                <li className='footer-li'><i className="fa-brands fa-linkedin-in"></i></li>
                <li className='footer-li'><i className="fa-brands fa-youtube"></i></li>
            </ul>
            <p>Copyright ©2023 All rights reserved | Anup Maharjan</p>
            <a href="/">Terms and Conditions</a> / <a href="">Privacy Policy</a>
        </div>
    </footer>
  )
}

export default Footer
