import React from 'react';
import { useEffect } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import logos from '../../images/Blacklogo.svg';
import img1 from '../../images/example1.webp';
import img2 from '../../images/example2.webp';
import en from '../../images/united-kingdom.svg';
import ar from '../../images/palestine.svg';
import blg1 from '../../images/top-view-man-doing-online-shopping-his-laptop.webp';
import blg2 from '../../images/business-partners-handshake-international-corporate.webp';
import blg3 from '../../images/man-holding-credit-card-hand-entering-security-code-using-laptop-keyboard.webp';
import client1 from '../../images/client1.webp';
import client2 from '../../images/client2.webp';
import client3 from '../../images/client3.webp';
import client4 from '../../images/cybersky.webp';
import { Container, Row, Col } from 'react-grid';

import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


import { isMobile } from 'react-device-detect';
import { Helmet } from "react-helmet";




export default function Services(props) {


    useEffect(() => {

        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

        /* Main navigation */
        let panelsSection = document.querySelector("#panels");
        let panelsContainer = document.querySelector("#panels-container");
        let tween;

        /* Panels */
        const panels = gsap.utils.toArray("#panels-container .panel");
        tween = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#panels-container",
                pin: true,
                start: "top top",
                scrub: 1,
                snap: {
                    snapTo: 1 / (panels.length - 1),
                    inertia: false,
                    duration: { min: 0.1, max: 0.1 }
                },
                end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
            }
        });


        const menu = document.getElementById('toggle')
        const btn = document.getElementById('overlay')
        const topmenus = document.querySelector('.topmenu');

        const navbar = document.querySelector('.mainmenu');
        const logotext = document.querySelector('.logotext');
        const logo = document.querySelector('.Logo');
        const subject = document.querySelector('.subject');
        const social = document.querySelector('.sticky-icon');

        let second = document.querySelector('.second').offsetTop;
        let third = document.querySelector('.third').offsetTop;
        let fourth = document.querySelector('.fourth').offsetTop;
        let fifth = document.querySelector('.fifth').offsetTop;
        //let sixth = document.querySelector('.sixth').offsetTop;


        const scrollContainer = document.querySelector("main");




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
                if (window.scrollY > 300) {
                    navbar.classList.add('nav-active');

                    btn.style.cssText = 'margin-top:-30px';
                    navbar.style.cssText = 'margin-top:0';
                    logo.style.cssText = 'margin-top:-30px';
                }
                if (window.scrollY < 300) {
                    navbar.classList.remove('nav-active');
                    btn.style.cssText = 'margin-top:30px';
                    navbar.style.cssText = 'margin-top:30px';
                    logo.style.cssText = 'margin-top:-30px';
                }

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

            function mouseOver() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin-top:30px';
            }

            function mouseOut() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin:0';
            }

            topmenus.addEventListener("mouseover" ,mouseOver );
            topmenus.addEventListener("mouseout" ,mouseOut );
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

            topmenus.addEventListener("mouseover" ,mouseOver );
            topmenus.addEventListener("mouseout" ,mouseOut );
        }


    }, []);

    return (
        <>
        <Layout>


            <Head title="Home" />
            <Helmet>
                <meta name='title' property='og:title' content='Italic - Sawtruboost' />
                <meta name='og:description' property='og:description' content='Sawtruboost is a Digital Marketing Agency, Created in 2022, it brings your business to the World with their Profissional Skills and Experience' />
                <meta name='description' property='description' content='Sawtruboost is a Digital Marketing Agency, Created in 2022, it brings your business to the World with their Profissional Skills and Experience' />
            </Helmet>
            {/*
            ***  for dark mode
            ***  dark:bg-gray-900 dark:text-white
            */}
            <div className="relative items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0 ">
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
                <section className='w-full first customYellowbg'>

                    <div className='bground'>
                        <h2 className="heading">
                            MARKETING <br />SOLUTIONS PIONEERS
                        </h2>
                        <button className='btn'>
                            <h1>
                                Boost Now !
                            </h1>
                        </button>
                    </div>
                    <div className="bird-container bird-container--one">
                        <div className="bird bird--one"></div>
                    </div>

                    <div className="bird-container bird-container--two">
                        <div className="bird bird--two"></div>
                    </div>

                    <div className="bird-container bird-container--three">
                        <div className="bird bird--three"></div>
                    </div>

                    <div className="bird-container bird-container--four">
                        <div className="bird bird--four"></div>
                    </div>

                    {/* boosts */}
                    <div className="boost-container boost-container--one">
                        <div className="boost boost--one"></div>
                    </div>

                    <div className="boost-container boost-container--two">
                        <div className="boost boost--two"></div>
                    </div>

                    <div className="boost-container boost-container--three">
                        <div className="boost boost--three"></div>
                    </div>

                    <div className="boost-container boost-container--four">
                        <div className="boost boost--four"></div>
                    </div>
                </section>

                <section className='w-full second'>
                    <div>
                        <center>
                            <h2 className='socilaword text-xxl font-bold'>With our expert digital marketing services and solutions, get a BOOST and watch as your company reaches its pinnacle of success.</h2>
                        </center>
                    </div>
                </section>

                <section className="yellowbg third">
                    <section id="panels">

                        <div id="panels-container" >
                            <article id="panel-1" className="panel full-screen red">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">

                                            <img src="" alt="" />

                                        </div>
                                        <div className="col-6 ">

                                            <h2 className='text-xxl fontBlont discription text-custom-gray'>OUR MAGICAL BOOSTS</h2>

                                            <p className="step-description">
                                                INVADE THE DIGITAL WORD WITH SAWTRU BOOST.
                                            </p>


                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article id="panel-2" className="panel full-screen orange">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">

                                            <img src="" alt="" />

                                        </div>
                                        <div className="col-6 ">

                                            <h2 className='text-xxl fontBlont discription text-custom-gray'>DIGITAL MARKETING</h2>

                                            <p className="step-description">
                                                Going digital is not just a cliché when you do it with SAWTRU BOOST.
                                            </p>


                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article id="panel-3" className="panel full-screen purple">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">

                                            <img src="" alt="" />

                                        </div>
                                        <div className="col-6 ">

                                            <h2 className='text-xxl fontBlont discription text-custom-gray'>GROWTH STUDIES</h2>

                                            <p className="step-description">
                                                Have you ever given your future any thought? Let us work together on this.
                                            </p>


                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article id="panel-4" className="panel full-screen green">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">

                                            <img src="" alt="" />

                                        </div>
                                        <div className="col-6 ">

                                            <h2 className='text-xxl fontBlont discription text-custom-gray'>CONSULTANCY</h2>

                                            <p className="step-description">
                                                Getting a second opinion is indeed the wisest course of action in business.
                                            </p>


                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article id="panel-5" className="panel full-screen gray">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">

                                            <img src="" alt="" />

                                        </div>
                                        <div className="col-6 ">

                                            <h2 className='text-xxl fontBlont discription text-custom-gray'>INNOVATION & CREATIVITY</h2>

                                            <p className="step-description">
                                                Intelligent, robust, and impactful invention
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                </section>

                <section className='w-full py-20 fourth'>
                    <div>
                        <center>
                            <Container>
                                <Row className="py-4">
                                    <Col sm><img src={client2} width="160px" alt="" /></Col>
                                    <Col sm><img src={client3} width="160px" alt="" /></Col>
                                    <Col sm><img src={client1} width="160px" alt="" /></Col>
                                    <Col sm><img src={client4} width="160px" alt="" /></Col>
                                </Row>

                            </Container>
                        </center>
                    </div>
                </section>

                <section className='w-full yellowbg fifth'>
                    <div className="blog-home5 py-5">

                        <div className=" justify-content-center">
                            <div className="">
                                <center>
                                    <h3 className="mb-2">LATEST INSIGHTS</h3>
                                </center>
                                {/*<h6 className="subtitle font-weight-normal">You can relay on our amazing features list and also our customer services will be great experience for you without doubt</h6>*/}
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                    <img className="card-img" src={blg1} alt="Card image" />
                                    <div className="card-img-overlay overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Admin</span>
                                            <div className="ml-2">
                                                <span className="ml-2">Nov 18, 2022</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title my-3 font-weight-normal">Which strategy is better for your company: In-House versus outsourcing</h5>
                                        <p className="card-text">Explore the fundamentals of marketing to identify whether you should hire a professional or handle your own marketing: Do it yourself or buy it.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                    <img className="card-img" src={blg2} alt="Card image" />
                                    <div className="card-img-overlay overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Admin</span>
                                            <div className="ml-2">
                                                <span className="ml-2">Nov 18, 2022</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title my-3 font-weight-normal">Online Consumption: Growing Continually or Just Striking a Plateau?</h5>
                                        {/*<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card b-h-box position-relative font-14 border-0 mb-4">
                                    <img className="card-img" src={blg3} alt="Card image" />
                                    <div className="card-img-overlay overflow-hidden">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-danger-gradiant badge overflow-hidden text-white px-3 py-1 font-weight-normal">Charity, Ngo</span>
                                            <div className="ml-2">
                                                <span className="ml-2">Feb 18, 2018</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title my-3 font-weight-normal">Help out the people who really need it on time.</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className='w-full pt-16 px-16 pb-2 customYellowbg'>



                <div className='footerTitle'>
                    <h2 className='text-xxl font-bold'>Ready To Boost Now?</h2>
                    <p>Explore your growth opportunities by contacting one of our ofces whichever way you prefer.</p>

                </div>
                <section>
                    <div id="grid1" className="grid1">
                        <div className="grid__item  numbers">
                            <ul>
                                <li>
                                    <div className='grid '>
                                        <div className='row '>
                                            <div className='align-items-end'>
                                                Belgium:
                                            </div>
                                            <div className='align-items-start'>
                                                <Link>+32 537 913 04 51</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='grid '>
                                        <div className='row '>
                                            <div className='align-items-end'>
                                                Saudi Arabia:
                                            </div>
                                            <div className='align-items-start'>
                                                <Link>+966 537 913 04 51</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='grid '>
                                        <div className='row '>
                                            <div className='align-items-end'>
                                                UAE:
                                            </div>
                                            <div className='align-items-start'>
                                                <Link>+971 537 913 04 51</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='grid '>
                                        <div className='row '>
                                            <div className='align-items-end'>
                                                Turkiye:
                                            </div>
                                            <div className='align-items-start'>
                                                <Link>+90 537 913 04 51</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__item">
                            <h4 className='text-l font-bold'>
                                Contact
                            </h4>
                            <ul className='align-items-center'>
                                <li>
                                    <Link>Careers</Link>
                                </li>
                                <li>
                                    <Link>Partners</Link>
                                </li>
                                <li>
                                    <Link>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__item">
                            <h4 className='text-l font-bold'>
                                Condetions
                            </h4>
                            <ul className='align-items-center'>
                                <li>
                                    <Link>Terms</Link>
                                </li>
                                <li>
                                    <Link>Privacy</Link>
                                </li>
                                <li>
                                    <Link>Cookies</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className='languages'>
                    <Container>
                        <Row className="py-4 inline-flex">
                            <Col sm><Link><img className='inline-flex' width='22px' src={en} alt="" /> En</Link></Col>
                            <Col sm><Link><img className='inline-flex' width='22px' src={ar} alt="" /> Ar</Link></Col>
                        </Row>
                    </Container>
                </div>
                <div className='copyright'>
                    <div className=" px-6 py-4 sm:block footerLogo">
                        <Link href="/">
                            <img src={logos} width="200" alt="" />
                        </Link>
                    </div>
                    <div className='rights'>
                        <center>
                            <p>SAWTRU BOOST ® 2022 All Rights Reserved</p>
                        </center>
                    </div>
                </div>
            </footer>
            <div className="sticky-icon">
                <a href="#" className="Tiktok"> {/*Tiktok*/} <i className="fab fa-tiktok"></i></a>
                <a href="https://www.linkedin.com/company/sawtruboost/" className="linkedin"> {/*LinkedIn*/} <i className="fab fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/sawtruboost/" className="Instagram"> {/*Instagram*/} <i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/sawtruboost/" className="Facebook"> {/*Facebook*/} <i className="fab fa-facebook-f"> </i></a>
                <a href="https://twitter.com/sawtruboost" className="Twitter"> {/*Twitter*/} <i className="fab fa-twitter"> </i></a>
                <a href="https://tr.pinterest.com/SAWTRUBOOST/" className="pinterest"> {/*Twitter*/} <i className="fab fa-pinterest"> </i></a>
            </div>
            </Layout>
        </>
    );
}
