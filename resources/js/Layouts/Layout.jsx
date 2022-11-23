import { React, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SocialLinks from '../Components/SocialLinks';


export default function Website({ header, children }) {

    useEffect(() => {


        const menu = document.getElementById('toggle')
        const logotext = document.querySelector('.logotext');
        const subject = document.querySelector('.subject');
        const logo = document.querySelector('.Logo');
        const btn = document.getElementById('overlay')
        const navbar = document.querySelector('.mainmenu');

        menu.addEventListener('click', function (e) {
            menu.classList.toggle('active')
            btn.classList.toggle('open');
        }, false)


        if (!isMobile) {

            let cursor = document.createElement('div');
            let cursorinner = document.createElement('div');
            var a = document.querySelectorAll('a');

            cursor.classList.add('cursor');
            cursorinner.classList.add('cursor2');
            document.body.appendChild(cursor);
            document.body.appendChild(cursorinner);



            document.addEventListener('mousemove', function (e) {
                var x = e.clientX;
                var y = e.clientY;
                cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
            });

            document.addEventListener('mousemove', function (e) {
                var x = e.clientX;
                var y = e.clientY;
                cursorinner.style.left = x + 'px';
                cursorinner.style.top = y + 'px';
            });

            document.addEventListener('mousedown', function () {
                cursor.classList.add('click');
                cursorinner.classList.add('cursorinnerhover')
            });

            document.addEventListener('mouseup', function () {
                cursor.classList.remove('click')
                cursorinner.classList.remove('cursorinnerhover')
            });

            a.forEach(item => {
                item.addEventListener('mouseover', () => {
                    cursor.classList.add('hover');
                });
                item.addEventListener('mouseleave', () => {
                    cursor.classList.remove('hover');
                });
            })

            window.onresize = () => {
                second = document.querySelector('.second').offsetTop;
                third = document.querySelector('.third').offsetTop;
                fourth = document.querySelector('.fourth').offsetTop;
                fifth = document.querySelector('.fifth').offsetTop;
            };

            window.onscroll = () => {

                if (window.scrollY >= second - navbar.clientHeight) {

                    logo.style.filter = 'grayscale(0) brightness(100%)';
                    logotext.style.display = 'block';
                    subject.style.display = 'none';
                    subject.textContent = "";
                }
                if (window.scrollY >= third - navbar.clientHeight) {
                    logo.style.filter = 'grayscale(100%) brightness(50%)';
                    logotext.style.display = 'none';
                    subject.style.display = 'block';
                    subject.textContent = "OUR MAGICAL BOOSTS";
                }
                if (window.scrollY >= fourth - navbar.clientHeight) {
                    subject.textContent = "Our Clients";
                }
                if (window.scrollY >= fifth - navbar.clientHeight) {
                    subject.textContent = "LATEST INSIGHTS";
                }
            };


        } else {

            window.onscroll = () => {

                if (window.scrollY > 300) {
                    navbar.classList.add('nav-active');

                }
                if (window.scrollY < 300) {
                    navbar.classList.remove('nav-active');
                }

                if (window.scrollY >= second - navbar.clientHeight) {

                    logo.style.display = 'block';
                    logotext.style.display = 'block';
                    subject.textContent = "";
                }
                if (window.scrollY >= third - navbar.clientHeight) {
                    logo.style.display = 'none';
                    logotext.style.display = 'none';
                    subject.textContent = "OUR MAGICAL BOOSTS";
                }
                if (window.scrollY >= fourth - navbar.clientHeight) {
                    subject.textContent = "Our Clients";
                }
                if (window.scrollY >= fifth - navbar.clientHeight) {
                    subject.textContent = "LATEST INSIGHTS";
                }
            };

        }
    }, []);

    return (
        <div className="relative items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0 ">
            <Header />
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}
                {children}
            <Footer />
            <SocialLinks />
        </div>
    );
}
