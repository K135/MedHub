
"use client"

import UseSticky from '@/hooks/UseSticky';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import MarqueeOne from '@/common/MarqueeOne';
import Search from '@/common/Search';
import OffCanvas from '@/common/OffCanvas';

const HeaderOne = () => {

  const { sticky } = UseSticky()


  const [open, setOpen] = useState(false)
  const [openCanvas, setOpenCanvas] = useState(false)


  return (
    <>
    <MarqueeOne />
     <header id="header-sticky" className={`header-1 ${sticky ? "sticky" : ""}`}>
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="header-left" style={{ flex: 1, maxWidth: "none" }}>
                            <div className="logo">
                                <Link href="/" className="header-logo">
                                    <img src="assets/img/logo/medhub logo.png" alt="logo-img" style={{maxHeight: "50px", width: "auto"}} />
                                </Link>
                            </div>
                        </div>
                        <div className="mean__menu-wrapper d-none d-xl-block">
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <NavMenu />
                                </nav>
                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center" style={{ flex: 1 }}>
                            <div className="header-search">
                                <button 
                                onClick={ () => setOpen(!open)}
                                className="d-flex align-items-center search-toggle"><i className="fas fa-search"></i></button>
                            </div>
                            <div className="header-button">
                                <Link href="/sign-in" className="theme-btn style-2"><i className="far fa-user"></i> Admin</Link>
                            </div>
                            <div className="header__hamburger d-xl-none my-auto">
                                <div className="sidebar__toggle">
                                    <div className="header-bar" onClick={ () => setOpenCanvas(!openCanvas)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Search open={open} setOpen={setOpen} />
        <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
      
    </>
  );
};

export default HeaderOne;