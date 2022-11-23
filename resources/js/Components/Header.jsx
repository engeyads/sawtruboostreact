import React, { useEffect } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { isMobile } from 'react-device-detect';
import { Helmet } from "react-helmet";

export default function Header({ className }) {

    useEffect(() => {

        const topmenus = document.querySelector('.topmenu')
        const logo = document.querySelector('.Logo');
        const btn = document.getElementById('overlay')
        const navbar = document.querySelector('.mainmenu');

        if (!isMobile) {
            if (window.scrollY > 300) {
                navbar.classList.add('nav-active');

            }
            if (window.scrollY < 300) {
                navbar.classList.remove('nav-active');

            }

            function mouseOver() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin-top:30px';
            }

            function mouseOut() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin:0';
            }

            topmenus.addEventListener("mouseover", mouseOver);
            topmenus.addEventListener("mouseout", mouseOut);
        }
        else {
            function mouseOver() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(5)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(6)').style = 'transition: all 0.35s ease;margin-top:30px';
            }

            function mouseOut() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(5)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(6)').style = 'transition: all 0.35s ease;margin:0';
            }

            topmenus.addEventListener("mouseover", mouseOver);
            topmenus.addEventListener("mouseout", mouseOut);
        }
    }, []);
    return (
        <>
            <Helmet>

            </Helmet>
            <div id="mainmenu" className="fixed px-6  z-50 top-0 right-0 mainmenu" /*onScroll={handleScroll}*/>
                <div className="fixed px-6  sm:block">

                    <ApplicationLogo className="block h-16 w-auto Logo" />
                    <div className='subject'></div>

                </div>
                <div className="sm:inline-flex justify-center items-center justify-between justify-items-center">
                    <div className="links text-gray-700 dark:text-gray-500">
                        <ul className='flex text-xl font-bold'>
                            <li><Link href="">Company Profile</Link></li>
                            <li><Link href="">Blog</Link></li>
                            <li>
                                <div className='topmenu2'>
                                    <span>Services</span><span className='triangleBlack'></span>
                                    <div className='submenu2'>
                                        <Link href='/'>Digital</Link>
                                        <Link href='/'>Consultancy</Link>
                                        <Link href='/'>Growth Studies</Link>
                                        <Link href='/'>Creativity</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="button_container" id="toggle">
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
                    </div>
                </div>
                <div className="overlay customYellowbg" id="overlay">
                    <nav className="overlay-menu">
                        <ul>
                            <li><Link href='/about'>About Us</Link></li>
                            <li><div className='topmenu'><span>Services</span><span className='triangleWhite'></span>
                                <div className='submenu '>
                                    <div className="submenuItems flex">
                                        <Link href='/'>Digital</Link>
                                        <Link href='/'>Consultancy</Link>
                                        <Link href='/'>Growth Studies</Link>
                                        <Link href='/'>Creativity</Link>
                                    </div>
                                </div>
                            </div>
                            </li>
                            <li><Link href="/">Contact Us</Link></li>
                            <li><Link href="/">People</Link></li>
                            <li className='extramenu'><Link href="/">blog</Link></li>
                            <li className='extramenu'><Link href="/">Company Profile</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
