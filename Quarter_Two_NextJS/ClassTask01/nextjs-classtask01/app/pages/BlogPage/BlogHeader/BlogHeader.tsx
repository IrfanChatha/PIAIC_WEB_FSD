import React from 'react'
import Link from 'next/link'

const BlogHeader = () => {
    return (
        <section className="Sub-header">
            <nav>
            <Link href="/" className="logo">Xplore
                    <i className="fab fa-staylinked"></i>kill
                </Link>
                <div className="nav-links" id="navLinks">

                    <i className="fa fa-times" onClick="hideMenu()"></i>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="./CoursePage">Course</Link></li>
                        <li><Link href="./BlogPage">Blog</Link></li>
                        <li><Link href="./AboutPage">About</Link></li>
                        <li><Link href="./ContactUsPage">Contact</Link></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick="showMenu()"></i>

            </nav>
            <h1>Our Post</h1>
        </section>
    )
}

export default BlogHeader
