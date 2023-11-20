import React from 'react'

const BlogHeader = () => {
    return (
        <section className="Sub-header">
            <nav>
                <a href="index.html" className="logo">Xplore
                    <i className="fab fa-staylinked"></i>kill
                </a>
                <div className="nav-links" id="navLinks">

                    <i className="fa fa-times" onClick="hideMenu()"></i>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="course.html">Course</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick="showMenu()"></i>

            </nav>
            <h1>Our Post</h1>
        </section>
    )
}

export default BlogHeader
