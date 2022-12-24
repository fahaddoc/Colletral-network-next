import React from 'react';

const DefaultFooter = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <a href="#" class="footer__logo">
                                <img src="img/black-logo.svg" alt="" />
                            </a>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center">
                            <p class="copyright">2022. Collateral Network Inc © All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="to-top js-scroll-top" onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }}>
                <i class="icomoon-play"></i>
            </div>
        </>
    );
};

export default DefaultFooter;