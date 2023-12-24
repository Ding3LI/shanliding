import React, {useEffect} from 'react';
import './Navbar.scss';

function handleSVGClick() {
    const svg = document.querySelector('.ham');
    svg.classList.toggle('active');
}

export const Navbar = () => {
    useEffect(() => {
        const handleNavClick = () => {
            const toggler = document.querySelector('.navbar-toggler');
            const ham = document.querySelector('.ham');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (ham.classList.contains('active')) {
                ham.classList.remove('active');
                navbarCollapse.classList.remove('centered-list');
            } else {
                navbarCollapse.classList.add('centered-list');
            }
            toggler.classList.add('collapsed');
            toggler.setAttribute('aria-expanded', 'false');
            document.querySelector('#toggleMobileMenu').classList.remove('show');
        };

        const handleScroll = () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const ham = document.querySelector('.ham');
            let currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                header.style.opacity = "1";
                header.style.transform = "translateY(0)";
                header.style.zIndex = "24";
            } else {
                header.style.opacity = "0";
                header.style.transform = "translateY(-100%)";
                header.style.zIndex = "0";
                if (navbarCollapse.classList.contains('show') && ham.classList.contains('active')) {
                    navbarCollapse.classList.add('collapsed');
                    navbarCollapse.setAttribute('aria-expanded', 'false');
                    document.querySelector('#toggleMobileMenu').classList.remove('show');
                    ham.classList.remove('active');
                }
            }
            prevScrollPos = currentScrollPos;
        };

        document.querySelectorAll('.nav-link').forEach((navLink) => {
            navLink.addEventListener('click', handleNavClick);
        });

        let prevScrollPos = window.scrollY;
        const header = document.querySelector('.navbar-header');

        window.onscroll = handleScroll;

        return () => {
            document.querySelectorAll('.nav-link').forEach((navLink) => {
                navLink.removeEventListener('click', handleNavClick);
            });
            window.onscroll = null;
        };
    }, []);

    return (
        <header className="sticky-top navbar-header">
            <nav className="navbar navbar-expand-lg navbar-light py-3" id="navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
                    </a>
                    <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#toggleMobileMenu"
                        aria-controls="toggleMobileMenu"
                        aria-expanded="false"
                        onClick={handleSVGClick}
                    >
                        <svg
                            className="ham hamRotate"
                            viewBox="0 0 100 100"
                            width="80"
                        >
                            <path
                                className="line top"
                                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                            />
                            <path className="line middle" d="m 30,50 h 40"/>
                            <path
                                className="line bottom"
                                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                            />
                        </svg>
                    </button>

                    <div className="collapse navbar-collapse" id="toggleMobileMenu">
                        <ul className="navbar-nav ms-lg-auto centered-list">
                            <li className="nav-item">
                                <a href="#hero" aria-current="page" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/"
                                    target="_blank"
                                    className="nav-link"
                                >Blog</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};