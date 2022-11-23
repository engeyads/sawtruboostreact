import React from 'react';
import { useEffect } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

import Footer from '@/Components/Footer';
import Header from '@/Components/Header';

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


import Layout from '@/Layouts/Layout';


export default function Welcome(props) {


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

        const logotext = document.querySelector('.logotext');
        const subject = document.querySelector('.subject');
        const logo = document.querySelector('.Logo');
        const btn = document.getElementById('overlay')
        const navbar = document.querySelector('.mainmenu');

        let second = document.querySelector('.second').offsetTop;
        let third = document.querySelector('.third').offsetTop;
        let fourth = document.querySelector('.fourth').offsetTop;
        let fifth = document.querySelector('.fifth').offsetTop;
        //const scrollContainer = document.querySelector("main");
        //const social = document.querySelector('.sticky-icon');

        if (!isMobile) {


        window.onresize = () => {
            second = document.querySelector('.second').offsetTop;
            third = document.querySelector('.third').offsetTop;
            fourth = document.querySelector('.fourth').offsetTop;
            fifth = document.querySelector('.fifth').offsetTop;
        };

        window.onscroll = () => {
            if (window.scrollY > 300) {
                navbar.classList.add('nav-active');
            }
            if (window.scrollY < 300) {
                navbar.classList.remove('nav-active');
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


    }


    }, []);

    return (
        <>
        <Layout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About</h2>}
        >
            <Head title="About" />
            <Helmet>
                <meta name='title' property='og:title' content='Italic - Sawtruboost' />
                <meta name='og:description' property='og:description' content='Sawtruboost is a Digital Marketing Agency, Created in 2022, it brings your business to the World with their Profissional Skills and Experience' />
                <meta name='description' property='description' content='Sawtruboost is a Digital Marketing Agency, Created in 2022, it brings your business to the World with their Profissional Skills and Experience' />
            </Helmet>


            </Layout>
        </>
    );
}
