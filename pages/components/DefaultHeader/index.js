import Link from 'next/link';
import React from 'react';

const DefaultHeader = () => {
    return (
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-2 col-xs-6 d-flex">
                        <Link href="/" class="logo">
                            <img alt="mainLogo" src="/img/logo.svg"/>
                        </Link>
                    </div>
                    <div class="col col-lg-10 col-xs-6 d-flex align-items-center justify-content-end">
                        <div id="offcanvasMenu"
                            class="header-nav d-flex align-items-center justify-content-end offcanvas-lg offcanvas-end"
                            tabindex="-1"
                            aria-labelledby="offcanvasRightLabel">
                            <ul class="nav">
                                <li class="nav__item">
                                    <a href="#" class="nav__item-link">Get Started</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__item-link">Whitepaper</a>
                                </li>
                            </ul>
                            <button class="btn white light">Claim</button>
                            <Link href="/ConnectWallet" class="btn light border white">Connect Wallet</Link>
                        </div>
                        <a class="hamburger-menu d-inline-block d-lg-none js-no-scroll" href="#offcanvasMenu"
                            data-bs-toggle="offcanvas" aria-label="Toggle menu" role="button" aria-controls="offcanvasMenu">
                            <span class="hamburger-menu__wrap">
                                <span class="hamburger-menu__bars"></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DefaultHeader;