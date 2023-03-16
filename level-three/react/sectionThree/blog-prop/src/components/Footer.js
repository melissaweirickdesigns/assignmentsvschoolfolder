import React from "react";

export default function Footer () {
    return (
        <div className="footer-container">
            <div className="footer-center">
                <ul className="footer-social">
                    <li className="footer-twitter">
                        <a href="#" className="twitter-link footer-link">
                            <i class='bx bxl-twitter' ></i>
                        </a>
                    </li>
                    <li className="footer-facebook">
                        <a href="#" className="facebook-link footer-link">
                            <i class='bx bxl-facebook-circle' ></i>
                        </a>
                    </li>
                    <li className="footer-github">
                        <a href="#" className="github-link footer-link">
                            <i class='bx bxl-github' ></i>
                        </a>
                    </li>
                </ul>
                <div className="footer-copyright">
                    <p className="footer-copyrighttext">
                        Copyright © Your Website 2022
                    </p>
                </div>
            </div>
        </div>
    )
}