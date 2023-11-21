import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <section className="header">
            <nav>
                <Link href="./" className="logo">Xplore
                    <i className="fab fa-staylinked"></i>kill
                </Link>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times" onClick="hideMenu()"></i>
                    <ul>
                        <li><Link href="./">Home</Link></li>
                        <li><Link href="./pages/CoursePage">Course</Link></li>
                        <li><Link href="./pages/BlogPage">Blog</Link></li>
                        <li><Link href="./pages/AboutPage">About</Link></li>
                        <li><Link href="./pages/ContactUsPage">Contact</Link></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick="showMenu()"></i>
            </nav>
            <div className="text_box">
                <h2>GET READY</h2>
                <p id="headtext">TO DISCOVER CAMPUS</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                    <br /> esse blanditiis in quae perspiciatis quo.
                </p>
                <a href="#" className="hero_btn">Visit Us To Know More</a>
            </div>
        </section>)
}

export default Header