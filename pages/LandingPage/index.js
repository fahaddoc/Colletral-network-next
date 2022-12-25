import React, { useState } from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
Chart.register(ArcElement);

const LandingPage = () => {

    const isSmallScreen = useMediaQuery({ query: '(max-width:991.98px)' });
    const [init, setInit] = useState({
        slideOne: true,
        slideTwo: false,
        slideThree: false,
        slideFour: false,
        headOne: true,
        headTwo: false,
        headThree: false,
    });


    let { slideOne, slideTwo, slideThree, slideFour, headOne, headTwo, headThree } = init;

    const labels = [
        'Presale',
        'Exchange Listings',
        'Reserve Capital',
        'Marketing',
        'Development Wallet',
        'Advisors & Partnerships',
        'Charity (Community choice)'];

    const chartData = {

        plugins: [
            {
                beforeDraw: function beforeDraw(chart) {
                    var datasetMeta = chart.getDatasetMeta(0);
                    var innerRadius = datasetMeta.controller.innerRadius;
                    var outerRadius = datasetMeta.controller.outerRadius;
                    var heightOfItem = outerRadius - innerRadius;

                    var countOfData = chart.getDatasetMeta(0).data.length;
                    var additionalRadius = Math.floor(heightOfItem / countOfData);

                    var weightsMap = datasetMeta.data.
                        map(function (v) { return v.circumference; }).
                        sort(function (a, b) { return a - b; }).
                        reduce(function (a, c, ci) {
                            a.set(c, ci + 1);
                            return a;
                        }, new Map());

                    datasetMeta.data.forEach(function (dataItem) {
                        var weight = weightsMap.get(dataItem.circumference);
                        dataItem.outerRadius = innerRadius + additionalRadius * weight;
                    });
                }
            }],
        labels: labels,
        datasets: [{
            backgroundColor: ['#9444A4', '#BF65D1', '#EFCAEF', '#510760', '#BA2CBA', '#DD7CF0', '#8D2F8D'],
            borderColor: 'rgb(255, 255, 255)',
            data: [50, 15, 13, 12, 5, 3, 2]
        }],
        // options: {
        //     borderWidth: 1,
        //     responsive: true,
        //     plugins: {
        //         legend: {
        //             display: false
        //         }
        //     }
        // }
    }

    const handleAccordion = (type) => {
        if (type === 1) {
            setInit({
                ...init,
                headOne: !headOne
            })
        }
        if (type === 2) {
            setInit({
                ...init,
                headTwo: !headTwo
            })
        }
        if (type === 3) {
            setInit({
                ...init,
                headThree: !headThree
            })
        }
    }

    const handleSlider = (type) => {

        if (isSmallScreen) {
            if (type === 1) {
                setInit({
                    ...init,
                    slideOne: true,
                    slideTwo: false,
                    slideThree: false,
                    slideFour: false,
                });
                let a = document.getElementById('collateral-slider');
                a.style.transform = "translate3d(-0px, 0px, 0px)";

            }
            if (type === 2) {
                setInit({
                    ...init,
                    slideOne: false,
                    slideTwo: true,
                    slideThree: false,
                    slideFour: false,
                });
                let a = document.getElementById('collateral-slider');
                a.style.transform = "translate3d(-300px, 0px, 0px)";
            }
            if (type === 3) {
                setInit({
                    ...init,
                    slideOne: false,
                    slideTwo: false,
                    slideThree: true,
                    slideFour: false,
                });
                let a = document.getElementById('collateral-slider');
                a.style.transform = "translate3d(-600px, 0px, 0px)";
            }
            if (type === 4) {
                setInit({
                    ...init,
                    slideOne: false,
                    slideTwo: false,
                    slideThree: false,
                    slideFour: true,
                });
                let a = document.getElementById('collateral-slider');
                a.style.transform = "translate3d(-900px, 0px, 0px)";
            }
        }

        if (!isSmallScreen) {
            if (type === 1) {
                setInit({
                    ...init,
                    slideOne: true,
                    slideTwo: false
                });
                let a = document.getElementById('collateral-slider');
                a.style.transform = "translate3d(-0px, 0px, 0px)";

            }
            if (type === 2) {
                setInit({
                    ...init,
                    slideOne: false,
                    slideTwo: true
                });
                let a = document.getElementById('collateral-slider');
                a.style.transform = "translate3d(-885px, 0px, 0px)";
            }
        }
    }

    return (
        <main class="main">
            {/* <!-- delete during development --> */}
            <section class="main-banner d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-xl-7">
                            <h1 class="text-center main-banner__title">Unlocking Liquidity For <span class="highlight">Real World Assets</span>
                            </h1>
                            <div class="coin-info d-flex flex-column">
                                <div class="coin-info__exchange-rate">
                                    <span class="bold">USDT Raised:</span><span>1 USDT = 50 RWAX</span>
                                </div>
                                <div class="coin-info__bar">
                                    <span class="coin-info__bar-status" style={{ width: "50%" }}></span>
                                </div>
                                <div class="coin-info__data">
                                    <span>$3,181,573.18</span>
                                    <span>$5,000,000</span>
                                </div>
                            </div>
                            <div class="main-banner__btn-row">
                                <button class="btn white bold">Buy Now</button>
                                <Link href="/HowToBuy" class="btn white border">How to buy?</Link>
                                <button class="btn white border">Win $100K</button>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 d-flex flex-column align-items-center main-banner__join">
                            <div class="main-banner__join-title">Join Our Community</div>
                            <ul class="main-banner__join-list">
                                <li class="main-banner__join-item">
                                    <a class="main-banner__join-link" href="#">
                                        <i class="icomoon-twitter"></i>
                                    </a>
                                </li>
                                <li class="main-banner__join-item">
                                    <a class="main-banner__join-link" href="#">
                                        <i class="icomoon-telegram"></i>
                                    </a>
                                </li>
                                <li class="main-banner__join-item">
                                    <a class="main-banner__join-link" href="#">
                                        <i class="icomoon-insta"></i>
                                    </a>
                                </li>
                                <li class="main-banner__join-item">
                                    <a class="main-banner__join-link" href="#">
                                        <i class="icomoon-reddit"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section collateral-network">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5 col-md-12">
                            <h2 class="section__title collateral-network__title">Collateral Done <span class="highlight">Differently</span>
                            </h2>
                            <p class="section__description collateral-network__description">Collateral Network is a Defi
                                protocol that enables borrow against real world assets using
                                blockchain and NFT technology.</p>
                            <div class="collateral-network__buttons">
                                <a href="#" class="btn bold">Get started</a>
                                <a href="#" class="btn border">Learn more</a>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="img-wrapper collateral-network__video-wrap">
                                <img src="img/video-prew-img.jpg" alt="" />
                                <button type="button" class="collateral-network__video-link" data-bs-toggle="modal"
                                    data-bs-target="#videoModalCenter">
                                    <i class="icomoon-play"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section how-it-work">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-12 text-center">
                            <h2 class="section__title how-it-work__title">How does it <span class="highlight">work?</span></h2>
                            <p class="section__description">Example lets say John from
                                Germany has a house he would like to use as collateral to get a loan. Collateral Network
                                would NFT John’s house and fractionalise the NFTs allowing John to quickly borrower
                                fund.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10 how-it-work__img">
                            <img src="img/how-it-work.png" alt="" />
                        </div>
                        <div class="col-lg-10 d-flex mt-4 justify-content-center">
                            <a href="#" class="btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section features">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <h2 class="section__title features__title"><span class="highlight">Features</span></h2>
                            <p class="section__description features__description">Users of the collateral network, will be
                                able to stake their tokens and generate a passive income.</p>
                            <div class="features__list">
                                <div class="features__item">
                                    <div class="features__item-icon">
                                        <img src="img/icons/feature-icon.svg" alt="" />
                                    </div>
                                    <div class="features__item-text">
                                        <h4 class="features__item-title">Import and combine data of any type</h4>
                                        <p class="features__item-description">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et. </p>
                                    </div>
                                </div>
                                <div class="features__item">
                                    <div class="features__item-icon">
                                        <img src="img/icons/feature-icon.svg" alt="" />
                                    </div>
                                    <div class="features__item-text">
                                        <h4 class="features__item-title">Import and combine data of any type</h4>
                                        <p class="features__item-description">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et. </p>
                                    </div>
                                </div>
                                <div class="features__item">
                                    <div class="features__item-icon">
                                        <img src="img/icons/feature-icon.svg" alt="" />
                                    </div>
                                    <div class="features__item-text">
                                        <h4 class="features__item-title">Import and combine data of any type</h4>
                                        <p class="features__item-description">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et. </p>
                                    </div>
                                </div>
                                <div class="features__item">
                                    <div class="features__item-icon">
                                        <img src="img/icons/feature-icon.svg" alt="" />
                                    </div>
                                    <div class="features__item-text">
                                        <h4 class="features__item-title">Import and combine data of any type</h4>
                                        <p class="features__item-description">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et. </p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="btn border">Learn More</a>
                        </div>
                        <div class="col-lg-6 offset-lg-1">
                            <div class="features__images">
                                <div class="img-wrapper">
                                    <img src="img/feature-img-1.jpeg" alt="" />
                                </div>
                                <div class="img-wrapper">
                                    <img src="img/feature-img-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section why-collateral">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <h2 class="section__title why-collateral__title">Why Collateral?
                                {/* <span class="highlight">Network?</span> */}
                            </h2>
                            <p class="section__description why-collateral__description">Unlike a traditional loan that takes your credit score into account, a Collateral Network loan is an asset-backed loan in which your physical assets act as collateral for your line of credit.
                                Collateral is a network that increases access to financial opportunities and gives people more control over their ability to generate wealth over the long term </p>
                            <div class="collateral-slider__controls">
                                <button style={{ display: 'flex' }} onClick={() => handleSlider(1)} className={`${slideOne && "tns-nav-active"}`}></button>
                                <button style={{ display: 'flex' }} onClick={() => handleSlider(2)} className={`${slideTwo && "tns-nav-active"}`}></button>
                                <button style={{ display: 'none' }} onClick={() => handleSlider(3)} className={`${slideThree && "tns-nav-active"}`}></button>
                                <button style={{ display: 'none' }} onClick={() => handleSlider(4)} className={`${slideFour && "tns-nav-active"}`}></button>
                                {/* <button style={{ display: 'none' }}></button>
                                <button style={{ display: 'none' }}></button> */}
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="collateral-slider">
                                <div className='tns-ovh'>
                                    <div id="collateral-slider" class="collateral-slider__wrapper tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal">
                                        <div class="collateral-slider__item tns-item tns-slide-active">
                                            <div class="slider-card">
                                                <div class="slider-card__icon">
                                                    <img src="img/icons/source.svg" alt="" />
                                                </div>
                                                <h5 class="slider-card__title">Source</h5>
                                                <p class="slider-card__text">Collateral Network is a marketplace that
                                                    enables users to trade fractional NFTs that are backed.</p>
                                            </div>
                                        </div>
                                        <div class="collateral-slider__item tns-item tns-slide-active" style={{ backgroundColor: "transparent" }}>
                                            <div class="slider-card black">
                                                <div class="slider-card__icon">
                                                    <img src="img/icons/fractionalize.svg" alt="" />
                                                </div>
                                                <h5 class="slider-card__title">Fractionalize</h5>
                                                <p class="slider-card__text">Collateral Network is a marketplace that enables
                                                    users to trade fractional NFTs that are backed.</p>
                                            </div>
                                        </div>
                                        <div class="collateral-slider__item tns-item tns-slide-active">
                                            <div class="slider-card">
                                                <div class="slider-card__icon">
                                                    <img src="img/icons/trade.svg" alt="" />
                                                </div>
                                                <h5 class="slider-card__title">Trade</h5>
                                                <p class="slider-card__text">Collateral Network is a marketplace that
                                                    enables users to trade fractional NFTs that are backed.</p>
                                            </div>
                                        </div>
                                        <div class="collateral-slider__item tns-item tns-slide-active">
                                            <div class="slider-card">
                                                <div class="slider-card__icon">
                                                    <img src="img/icons/trade.svg" alt="" />
                                                </div>
                                                <h5 class="slider-card__title">Trade</h5>
                                                <p class="slider-card__text">Collateral Network is a marketplace that
                                                    enables users to trade fractional NFTs that are backed.</p>
                                            </div>
                                        </div>
                                        <div class="collateral-slider__item tns-item tns-slide-active">
                                            <div class="slider-card">
                                                <div class="slider-card__icon">
                                                    <img src="img/icons/trade.svg" alt="" />
                                                </div>
                                                <h5 class="slider-card__title">Trade</h5>
                                                <p class="slider-card__text">Collateral Network is a marketplace that
                                                    enables users to trade fractional NFTs that are backed.</p>
                                            </div>
                                        </div>
                                        <div class="collateral-slider__item tns-item tns-slide-active">
                                            <div class="slider-card">
                                                <div class="slider-card__icon">
                                                    <img src="img/icons/trade.svg" alt="" />
                                                </div>
                                                <h5 class="slider-card__title">Trade</h5>
                                                <p class="slider-card__text">Collateral Network is a marketplace that
                                                    enables users to trade fractional NFTs that are backed.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 d-flex mt-5 justify-content-center">
                            <a href="#" class="btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section assets-for-borrow">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10 text-center">
                            <h2 class="section__title assets-for-borrow__title">Assets you can <span
                                class="highlight">borrow against</span></h2>
                            <p class="section__description assets-for-borrow__description">Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et. </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/home.svg" alt="" />
                                </div>
                                <h5 class="assets-item__title">Real Estate</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/cars.png" alt="" />
                                </div>
                                <h5 class="assets-item__title">Cars</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/image.svg" alt="" />
                                </div>
                                <h5 class="assets-item__title">Fine Art</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/wine.svg" alt="" />
                                </div>
                                <h5 class="assets-item__title">Fine Wines</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/nfts.svg" alt="" />
                                </div>
                                <h5 class="assets-item__title">NFTs</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/watch.svg" alt="" />
                                </div>
                                <h5 class="assets-item__title">Watches</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/diamond.svg" alt="" />
                                </div>
                                <h5 class="assets-item__title">Diamonds</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/gold-bar.svg" alt="" />
                                </div>
                                <h5 class="assets-item__title">Gold Bars</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="assets-item">
                                <div class="assets-item__icon">
                                    <img src="img/icons/whisky.png" alt="" />
                                </div>
                                <h5 class="assets-item__title">Whisky</h5>
                                <p class="assets-item__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section tokens-features">
                <div class="container">
                    <div class="row">
                        <div class="col"><h2 class="section__title tokens-features__title text-center">Collateral <span
                            class="highlight">Token features</span></h2></div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="tokens-features__item text-center">
                                        <div class="tokens-features__item-icon">
                                            <img src="img/icons/database_light.svg" alt="" />
                                        </div>
                                        <h5 class="tokens-features__item-title">Stacking</h5>
                                        <p class="tokens-features__item-description">
                                            Collateral Network is a marketplace that enables users to trade fractional NFTs that
                                            are backed.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="tokens-features__item text-center">
                                        <div class="tokens-features__item-icon">
                                            <img src="img/icons/group_share_light.svg" alt="" />
                                        </div>
                                        <h5 class="tokens-features__item-title">Governance</h5>
                                        <p class="tokens-features__item-description">
                                            Collateral Network is a marketplace that enables users to trade fractional NFTs that
                                            are backed.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="tokens-features__item text-center">
                                        <div class="tokens-features__item-icon">
                                            <img src="img/icons/briefcase.svg" alt="" />
                                        </div>
                                        <h5 class="tokens-features__item-title">Utility</h5>
                                        <p class="tokens-features__item-description">
                                            Collateral Network is a marketplace that enables users to trade fractional NFTs that
                                            are backed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 d-flex mt-5 justify-content-center">
                            <a href="#" class="btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section swappable-features">
                <div class="container">
                    <div class="row">
                        <h2 class="section__title tokens-features__title text-center">Multi-Chain Swappable Features</h2>
                    </div>
                </div>
                <div class="swappable-features__list">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 swappable-features__list-wrapper">
                                <div class="swappable-features__list-item">
                                    <img src="img/frame-9387.svg" alt="" />
                                </div>
                                <div class="swappable-features__list-item">
                                    <img src="img/group8816.svg" alt="" />
                                </div>
                                <div class="swappable-features__list-item">
                                    <img src="img/froup-8817.svg" alt="" />
                                </div>
                                <div class="swappable-features__list-item">
                                    <img src="img/group8818.svg" alt="" />
                                </div>
                                <div class="swappable-features__list-item">
                                    <img src="img/group-8815.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="section__black">
                <section class="section tokenomics">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="section__title tokenomics__title text-center"><span
                                    class="highlight">Tokenomics</span></h2>
                                <p class="section__description tokenomics__description">In the following segment you can see
                                    exactly how we plan to distribute the funds we raise from the token sale.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="chart">
                                    <div class="chart__doughnut">
                                        <Doughnut
                                            // type='line'
                                            data={chartData}
                                        />
                                        {/* <canvas id="doughnutChart"></canvas> */}
                                    </div>
                                    <div class="chart__data">
                                        <h5 class="chart__data-title">Details</h5>
                                        <ul class="chart__data-list">
                                            <li class="chart__data-item">
                                                <div class="icon" style={{ borderColor: '#9444A4' }}></div>
                                                <div class="name">Presale</div>
                                                <div class="val">30.0 %</div>
                                            </li>
                                            <li class="chart__data-item">
                                                <div class="icon" style={{ borderColor: '#BF65D1' }}></div>
                                                <div class="name">Exchange Listings</div>
                                                <div class="val">19.5 %</div>
                                            </li>
                                            <li class="chart__data-item">
                                                <div class="icon" style={{ borderColor: '#EFCAEF' }}></div>
                                                <div class="name">Reserve Capital</div>
                                                <div class="val">14.0 %</div>
                                            </li>
                                            <li class="chart__data-item">
                                                <div class="icon" style={{ borderColor: '#510760' }}></div>
                                                <div class="name">Marketing</div>
                                                <div class="val">15.0 %</div>
                                            </li>
                                            <li class="chart__data-item">
                                                <div class="icon" style={{ borderColor: '#BA2CBA' }}></div>
                                                <div class="name">Development Wallet</div>
                                                <div class="val">17.0 %</div>
                                            </li>
                                            <li class="chart__data-item">
                                                <div class="icon" style={{ borderColor: '#DD7CF0' }}></div>
                                                <div class="name">Advisors & Partnerships</div>
                                                <div class="val">3.5 %</div>
                                            </li>
                                            <li class="chart__data-item">
                                                <div class="icon" style={{ borderColor: '#8D2F8D' }}></div>
                                                <div class="name">Charity (Community choice)</div>
                                                <div class="val">1.0 %</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section token-price">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section__title token-price__title">Token <span class="highlight">Price Phases</span>
                            </h2>
                            <p class="section__description token-price__description">Only 800,000,000.00 $CNT Will Be Issued
                                During Pre-Sale</p>
                        </div>
                        <div class="phase-item-container">
                            <div class="phase-item-list">
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 1</div>
                                    <div class="phase-item__val">$0.01</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                                <div class="phase-item">
                                    <div class="phase-item__num">Phase 2</div>
                                    <div class="phase-item__val">$0.02</div>
                                    <div class="phase-item__available">Amount Available 200m</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <button class="btn white">Get started</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section class="section token-details">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="token-details__wrapper">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12 token-details__top-row">
                                            <div class="token-details__header">
                                                <h2 class="section__title features__title">Token <span
                                                    class="highlight">Details</span>
                                                </h2>
                                            </div>
                                            <div class="token-details__bonus">
                                                <div class="item">
                                                    <div class="item__val">30%</div>
                                                    <div class="item__text">Solid Proof Symbol</div>
                                                </div>
                                                <div class="item">
                                                    <div class="item__val">15%</div>
                                                    <div class="item__text">Interfi Network Symbol</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 data-container">
                                            <ul class="data-list">
                                                <li class="data-list__item">
                                                    <div class="data-list__item-name">Name:</div>
                                                    <div class="data-list__item-val">Collateral Network</div>
                                                </li>
                                                <li class="data-list__item">
                                                    <div class="data-list__item-name">Ticker:</div>
                                                    <div class="data-list__item-val">Mavalow labs</div>
                                                </li>
                                                <li class="data-list__item">
                                                    <div class="data-list__item-name">Total Supply:</div>
                                                    <div class="data-list__item-val">1,000,000,000</div>
                                                </li>
                                            </ul>
                                            <ul class="data-list">
                                                <li class="data-list__item">
                                                    <div class="data-list__item-name">Presale Round 1:</div>
                                                    <div class="data-list__item-val">Ends 31/05/2022</div>
                                                </li>
                                                <li class="data-list__item">
                                                    <div class="data-list__item-name">Presale Round 2:</div>
                                                    <div class="data-list__item-val">Ends 31/05/2022</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4 mechanism">
                                            <ul class="mechanism__list">
                                                <li class="mechanism__list-item">Anti-whale mechanism</li>
                                                <li class="mechanism__list-item">Anti-bot mechanism</li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-12 footer">
                                            <div class="footer__title">Currencies Accepted</div>
                                            <ul class="footer__list">
                                                <li class="footer__list-item">
                                                    <div class="icon">
                                                        <img src="img/icons/bitcoin_logo.svg" alt="" />
                                                    </div>
                                                    <div class="name">BTC</div>
                                                </li>
                                                <li class="footer__list-item">
                                                    <div class="icon">
                                                        <img src="img/icons/eth_logo.svg" alt="" />
                                                    </div>
                                                    <div class="name">ETH</div>
                                                </li>
                                                <li class="footer__list-item">
                                                    <div class="icon">
                                                        <img src="img/icons/xrp-logo.svg" alt="" />
                                                    </div>
                                                    <div class="name">XRP</div>
                                                </li>
                                                <li class="footer__list-item">
                                                    <div class="icon">
                                                        <img src="img/icons/bnp-logo.svg" alt="" />
                                                    </div>
                                                    <div class="name">BNP</div>
                                                </li>
                                                <li class="footer__list-item">
                                                    <div class="icon">
                                                        <img src="img/icons/usdt-icon.svg" alt="" />
                                                    </div>
                                                    <div class="name">USDT</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section roadmap">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="section__title roadmap__title"><span class="highlight">Roadmap</span></h2>
                            <p class="section__description roadmap__description">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                        <div class="col-12">
                            <div class="container">
                                <div class="row roadmap__container">
                                    <div class="col-lg-3 col-md-6 roadmap__item">
                                        <div class="roadmap__item-title">Phase 1</div>
                                        <ul class="roadmap__list">
                                            <li class="roadmap__list-item">Launch website, and social communities</li>
                                            <li class="roadmap__list-item">Create token smart contract</li>
                                            <li class="roadmap__list-item">Certik Audit</li>
                                            <li class="roadmap__list-item">Launch Pre-sale</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 col-md-6 roadmap__item">
                                        <div class="roadmap__item-title">Phase 2</div>
                                        <ul class="roadmap__list">
                                            <li class="roadmap__list-item">Platform and APP development</li>
                                            <li class="roadmap__list-item">CoinMarket Cap listing</li>
                                            <li class="roadmap__list-item">CoinGecko listing</li>
                                            <li class="roadmap__list-item">Launch on pancake swap</li>
                                            <li class="roadmap__list-item">Bug bounty program</li>
                                            <li class="roadmap__list-item">2nd smart contract audit</li>
                                            <li class="roadmap__list-item">Launch Pre-sale</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 col-md-6 roadmap__item">
                                        <div class="roadmap__item-title">Phase 3</div>
                                        <ul class="roadmap__list">
                                            <li class="roadmap__list-item">Launch on CEX</li>
                                            <li class="roadmap__list-item">NFT Marketplace launch</li>
                                            <li class="roadmap__list-item">Develop multi-chain bridge</li>
                                            <li class="roadmap__list-item">Introduce watch concierge service
                                                (Chronowealthclub)
                                            </li>
                                            <li class="roadmap__list-item">Expand influencer outreach</li>
                                            <li class="roadmap__list-item">Strategic Partnerships</li>
                                            <li class="roadmap__list-item">Launch lending protocol (chronolend)</li>
                                            <li class="roadmap__list-item">Global marketing push</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 col-md-6 roadmap__item">
                                        <div class="roadmap__item-title">Phase 4</div>
                                        <ul class="roadmap__list">
                                            <li class="roadmap__list-item">Platform and APP development</li>
                                            <li class="roadmap__list-item">CoinMarket Cap listing</li>
                                            <li class="roadmap__list-item">CoinGecko listing</li>
                                            <li class="roadmap__list-item">Launch on pancake swap</li>
                                            <li class="roadmap__list-item">Bug bounty program</li>
                                            <li class="roadmap__list-item">2nd smart contract audit</li>
                                            <li class="roadmap__list-item">Launch Pre-sale</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section member-club">
                <div class="container">
                    <h1 class="section__title text-center">
                        VIP Members Club
                    </h1>
                    <p class="section__description text-center mb-5">Join now and purchase you collateral network tokens</p>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="member-club__item">
                                <h3 class="member-club__item-title">Tier 1</h3>
                                <div class="member-club__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div class="member-club__item-investors">25 Investors</div>
                                <div class="member-club__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                                <div class="member-club__item-list">
                                    <li>Platform and APP development</li>
                                    <li>CoinMarket Cap listing</li>
                                    <li>CoinGecko listing</li>
                                    <li>Launch on pancake swap</li>
                                    <li>Bug bounty program</li>
                                    <li>2nd smart contract audit</li>
                                    <li>Launch Pre-sale</li>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="member-club__item">
                                <h3 class="member-club__item-title">Tier 1</h3>
                                <div class="member-club__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div class="member-club__item-investors">25 Investors</div>
                                <div class="member-club__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                                <div class="member-club__item-list">
                                    <li>Platform and APP development</li>
                                    <li>CoinMarket Cap listing</li>
                                    <li>CoinGecko listing</li>
                                    <li>Launch on pancake swap</li>
                                    <li>Bug bounty program</li>
                                    <li>2nd smart contract audit</li>
                                    <li>Launch Pre-sale</li>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="member-club__item">
                                <h3 class="member-club__item-title">Tier 1</h3>
                                <div class="member-club__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div class="member-club__item-investors">25 Investors</div>
                                <div class="member-club__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                                <div class="member-club__item-list">
                                    <li>Platform and APP development</li>
                                    <li>CoinMarket Cap listing</li>
                                    <li>CoinGecko listing</li>
                                    <li>Launch on pancake swap</li>
                                    <li>Bug bounty program</li>
                                    <li>2nd smart contract audit</li>
                                    <li>Launch Pre-sale</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section question">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section__title question__title">Frequently Asked <span class="highlight">Questions</span>
                            </h2>
                            <p class="section__description question__description">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                        <div class="col-lg-12">
                            <ul class="nav nav-question" id="question-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="btn border active" id="general-questions-tab" data-bs-toggle="pill"
                                        data-bs-target="#question-general" type="button" role="tab"
                                        aria-controls="question-general" aria-selected="true">General questions
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="btn border" id="question-ICO-tab" data-bs-toggle="pill"
                                        data-bs-target="#question-ICO" type="button" role="tab" aria-controls="question-ICO"
                                        aria-selected="false">ICO questions
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="btn border" id="tokens-sales-tab" data-bs-toggle="pill"
                                        data-bs-target="#tokens-sales" type="button" role="tab" aria-controls="tokens-sales"
                                        aria-selected="false">Tokens sales
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="btn border" id="clients-releted-tab" data-bs-toggle="pill"
                                        data-bs-target="#clients-releted" type="button" role="tab"
                                        aria-controls="clients-releted" aria-selected="false">Tokens sales
                                    </button>
                                </li>
                            </ul>
                            <div class="d-flex justify-content-center">
                                <div class="tab-content col-lg-10" id="question-tabContent">
                                    <div class="tab-pane fade show active" id="question-general" role="tabpanel"
                                        aria-labelledby="general-questions-tab">
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h4 class="accordion-header" id="headingOne" onClick={() => {
                                                    handleAccordion(1)
                                                }}>
                                                    <button class={`accordion-button ${!headOne && "collapsed"}`} type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded={headOne}
                                                        aria-controls="collapseOne">
                                                        Lorem ipsum dolor sit amet?
                                                    </button>
                                                </h4>
                                                <div id="collapseOne" class={`accordion-collapse collapse ${headOne && "show"}`}
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <p>Chronoly is a platform that allows the everyday person to buy,
                                                            sell and invest in rare multimillion-dollar timepieces in the
                                                            same way you would buy a share. This is achieved through the
                                                            fractionalisation of our asset-backed NFTs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h4 class="accordion-header" id="headingTwo" onClick={() => {
                                                    handleAccordion(2)
                                                }}>
                                                    <button class={`accordion-button  ${!headTwo && "collapsed"}`} type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded={headTwo} aria-controls="collapseTwo">
                                                        Accordion Item #2
                                                    </button>
                                                </h4>
                                                <div id="collapseTwo" class={`accordion-collapse collapse ${headTwo && "show"}`}
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <strong>This is the second item's accordion body.</strong> It is
                                                        hidden by default, until the collapse plugin adds the appropriate
                                                        classes that we use to style each element. These classes control the
                                                        overall appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that just
                                                        about any HTML can go within the <code>.accordion-body</code>,
                                                        though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h4 class="accordion-header" id="headingThree" onClick={() => {
                                                    handleAccordion(3)
                                                }}>
                                                    <button class={`accordion-button ${!headThree && "collapsed"}`} type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded={headThree} aria-controls="collapseThree">
                                                        Accordion Item #3
                                                    </button>
                                                </h4>
                                                <div id="collapseThree" class={`accordion-collapse collapse ${headThree && "show"}`}
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <strong>This is the third item's accordion body.</strong> It is
                                                        hidden by default, until the collapse plugin adds the appropriate
                                                        classes that we use to style each element. These classes control the
                                                        overall appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that just
                                                        about any HTML can go within the <code>.accordion-body</code>,
                                                        though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="question-ICO" role="tabpanel"
                                        aria-labelledby="question-ICO-tab">
                                        <div class="accordion" id="accordionICO">
                                            <div class="accordion-item">
                                                <h4 class="accordion-header" id="headingOneICO">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOneICO" aria-expanded="true"
                                                        aria-controls="collapseOneICO">
                                                        Lorem ipsum dolor sit amet?
                                                    </button>
                                                </h4>
                                                <div id="collapseOneICO" class="accordion-collapse collapse show"
                                                    aria-labelledby="headingOneICO" data-bs-parent="#accordionICO">
                                                    <div class="accordion-body">
                                                        <p>Chronoly is a platform that allows the everyday person to buy,
                                                            sell and invest in rare multimillion-dollar timepieces in the
                                                            same way you would buy a share. This is achieved through the
                                                            fractionalisation of our asset-backed NFTs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tokens-sales" role="tabpanel"
                                        aria-labelledby="tokens-sales-tab">
                                        <div class="accordion" id="accordionSales">
                                            <div class="accordion-item">
                                                <h4 class="accordion-header" id="headingOneSales">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOneSales" aria-expanded="true"
                                                        aria-controls="collapseOneSales">
                                                        Lorem ipsum dolor sit amet?
                                                    </button>
                                                </h4>
                                                <div id="collapseOneSales" class="accordion-collapse collapse show"
                                                    aria-labelledby="headingOneSales" data-bs-parent="#accordionSales">
                                                    <div class="accordion-body">
                                                        <p>Chronoly is a platform that allows the everyday person to buy,
                                                            sell and invest in rare multimillion-dollar timepieces in the
                                                            same way you would buy a share. This is achieved through the
                                                            fractionalisation of our asset-backed NFTs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="clients-releted" role="tabpanel"
                                        aria-labelledby="clients-releted-tab">
                                        <div class="accordion" id="accordionReleted">
                                            <div class="accordion-item">
                                                <h4 class="accordion-header" id="headingOneReleted">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOneReleted" aria-expanded="true"
                                                        aria-controls="collapseOneReleted">
                                                        Lorem ipsum dolor sit amet?
                                                    </button>
                                                </h4>
                                                <div id="collapseOneReleted" class="accordion-collapse collapse show"
                                                    aria-labelledby="headingOneReleted" data-bs-parent="#accordionReleted">
                                                    <div class="accordion-body">
                                                        <p>Chronoly is a platform that allows the everyday person to buy,
                                                            sell and invest in rare multimillion-dollar timepieces in the
                                                            same way you would buy a share. This is achieved through the
                                                            fractionalisation of our asset-backed NFTs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section call-to-action">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1 class="section__title call-to-action__title">Enter The Pre-Sale</h1>
                            <p class="section__description call-to-action__description">Join now and purchase you collateral network tokens</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <form class="form" action="#">
                                <div class="call-to-action__control d-flex align-items-center">
                                    <input type="text" class="form-control is-invalid" placeholder="Phone number" />
                                    <div class="invalid-feedback">
                                        Please use correct number.
                                    </div>
                                    <button class="btn white bold" data-bs-toggle="modal" data-bs-target="#successSendModalCenter">Get started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- delete during development END --> */}
        </main>
    );
};

export default LandingPage;