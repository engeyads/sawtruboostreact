import React from 'react';
import logo from '../../images/SVG/Logo.svg';
import logotext from '../../images/SVG/Logo_Text.svg';

export default function ApplicationLogo({ className }) {
    return (
        <>
            <img src={logo} className={className} />
            <img src={logotext} className="logotext" />
        </>
    );
}
