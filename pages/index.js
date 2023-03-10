import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css';
import DefaultHeader from './components/DefaultHeader';
import DefaultFooter from './components/DefaultFooter';
import LandingPage from './LandingPage';
import { useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  // useEffect(() => {

  //   function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it["return"] != null) it["return"]();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}
  //   // HAMBURGER MENU
  //   var initOffcanvas = function initOffcanvas() {
  //     var offcanvasMenu = document.getElementById('offcanvasMenu'),
  //       offcanvasMenuToggler = document.querySelectorAll('[href="#offcanvasMenu"]')[0];

  //     if (typeof offcanvasMenu != 'undefined' && offcanvasMenu != null) {
  //       offcanvasMenu.addEventListener('show.bs.offcanvas', function (event) {
  //         offcanvasMenuToggler.classList.add('active');
  //       });

  //       offcanvasMenu.addEventListener('hide.bs.offcanvas', function (event) {
  //         offcanvasMenuToggler.classList.remove('active');
  //       });
  //     }

  //     var offcanvasNavLink = offcanvasMenu.querySelectorAll('a'); var _iterator = _createForOfIteratorHelper(

  //       offcanvasNavLink), _step; try {
  //         for (_iterator.s(); !(_step = _iterator.n()).done;) {
  //           var link = _step.value;
  //           link.addEventListener('click', clickHandler);
  //         }
  //       } catch (err) { _iterator.e(err); } finally { _iterator.f(); }

  //     function clickHandler() {
  //       var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasMenu);
  //       bsOffcanvas.hide();
  //     }
  //   };

  //   var initSliders = function initSliders() {
  //     var sliderPhoneElement = document.querySelectorAll('#collateral-slider')[0];

  //     if (sliderPhoneElement) {
  //       // var slider = tns({
  //       //   container: '#collateral-slider',
  //       //   navContainer: '.collateral-slider__controls',
  //       //   controls: false,
  //       //   autoplay: false,
  //       //   mouseDrag: true,
  //       //   gutter: 40,
  //       //   "fixedWidth": 260,
  //       //   "speed": 400
  //       // });
  //     }
  //   };

  //   // SCROLL TOP BUTTON
  //   var initScrollTopButton = function initScrollTopButton() {
  //     var scrollTopButton = document.getElementsByClassName('js-scroll-top')[0];

  //     scrollTopButton.addEventListener('click', function (e) {
  //       e.preventDefault();

  //       window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //       });
  //     });
  //   };


  //   // SCROLL TOP Next
  //   var initScrollTopNext = function initScrollTopNext() {
  //     var scrollTopNext = document.getElementsByClassName('read-more-js')[0];

  //     if (scrollTopNext) {
  //       scrollTopNext.addEventListener('click', function (e) {
  //         e.preventDefault();

  //         document.querySelectorAll('.step1')[0].scrollIntoView({
  //           behavior: 'smooth'
  //         });
  //       });
  //     }
  //   };

  //   //phone number code

  //   var input = document.querySelector(".phone");
  //   if (input) {
  //     intlTelInput(input, {});
  //   }

  //   initOffcanvas();
  //   initSliders();
  //   initScrollTopButton();
  //   initScrollTopNext();

  // }, [])

  return (
    <>
      <Head>
        <title>Name of the site - Main</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* connection FAVICONS */}
        {/* <link rel="icon" href="img/favicon/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon-180x180.png"></link>
      </Head>
      <main className={styles.main}>
        <DefaultHeader />

        <LandingPage />

        <DefaultFooter />
      </main>
    </>
  )
}
