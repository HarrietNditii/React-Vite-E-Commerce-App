import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '30px 20px', textAlign: 'center' }}>
            <div className="footer-section" style={{ marginBottom: '20px' }}>
                <h3>FIND US</h3>
                <p>Westlands, Bandari Plaza, ground floor, along Woodvale groove</p>
                <p>Email: <a href="mailto:info@ivybeauty.com" style={{ color: '#fff' }}>info@ivybeauty.com</a></p>
                <p>Phone: <a href="tel:+254796187173" style={{ color: '#fff' }}>+254 796 187 173</a></p>
            </div>



            <div className="footer-section" style={{ marginBottom: '20px' }}>
                <h3>Quick Links</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                    <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
                    <li><a href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a></li>
                    <li><a href="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms and Conditions</a></li>
                    <li><a href="/faqs" style={{ color: '#fff', textDecoration: 'none' }}>FAQs</a></li>
                    <li><a href="/how-to-pay" style={{ color: '#fff', textDecoration: 'none' }}>How to Pay</a></li>
                    <li><a href="/my-account" style={{ color: '#fff', textDecoration: 'none' }}>My Account</a></li>
                    <li><a href="/sale" style={{ color: '#fff', textDecoration: 'none' }}>Sale</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <p>Operating Hours: Mon to Sat – 9AM to 6PM</p>
            </div>
        </footer>
    );
}

export default Footer;
