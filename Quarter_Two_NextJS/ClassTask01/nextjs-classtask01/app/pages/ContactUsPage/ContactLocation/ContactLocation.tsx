import React from 'react'

const ContactLocation = () => {
    return (
        <section className="loacation">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.464225456387!2d73.05609981462118!3d31.450365254094195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919325bf5711d75%3A0x4d67a5eb9687e675!2sFaisalabad%2C%20Punjab!5e0!3m2!1sen!2s!4v1630495771496!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
            ></iframe>
        </section>
    )
}

export default ContactLocation
