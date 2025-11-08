"use client"

import Link from 'next/link';
import NavMenu from './NavMenu';
import React, { useState } from 'react';
import UseSticky from '@/hooks/UseSticky';
import OffCanvas from '@/common/OffCanvas';

const HeaderFive = () => {
  const { sticky } = UseSticky()
  const [openCanvas, setOpenCanvas] = useState(false)


  return (
    <>
      <header className="header-section-3">
            <div id="header-sticky" className={`header-3 style-2 header-5 ${sticky ? "sticky" : ""}`}>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <Link href="/" className="header-logo">
                                <img src="assets/img/logo/medhub logo.png" alt="logo-img" style={{maxHeight: "50px", width: "auto"}} />
                            </Link>
                            <Link href="/" className="header-logo-2">
                                <img src="assets/img/logo/medhub logo.png" alt="logo-img" style={{maxHeight: "50px", width: "auto"}} />
                            </Link>
                            <div className="header-left">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <NavMenu />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="header-button">
                                    <Link href="/sign-in" className="theme-btn">Login</Link>
                                </div>
                                <div className="header-button ms-2">
                                    <Link href="/register" className="theme-btn theme-btn-white">Join Now</Link>
                                </div>
                                <div className="header__hamburger d-xl-none my-auto">
                                    <div className="sidebar__toggle" onClick={ () => setOpenCanvas(!openCanvas)}>
                                        <i className="fas fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />

    </>
  );
};

export default HeaderFive;