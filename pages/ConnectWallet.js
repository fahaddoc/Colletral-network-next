import React from 'react';
import DefaultFooter from './components/DefaultFooter';
import DefaultHeader from './components/DefaultHeader';

const ConnectWallet = () => {
    return (
        <>
            <DefaultHeader />
            <main class="main">
                {/* <!-- delete during development --> */}
                <section class="wallet-banner d-flex align-items-center">
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-xl-7">
                                <h1 class="wallet-banner__title">Get In Early On The <span
                                    class="highlight">Collateral Network</span> Token Presale.</h1>
                                <div class="wallet-banner__description">
                                    <p>Connect your wallet to purchase $Collateral Network tokens with ETH, USDT or BNB.</p>
                                    <p>Once the Collateral Network presale has finished you will be able to claim your $Collateral
                                        Network tokens from this page by clicking the claim button and connecting your wallet. We
                                        recommend using trust wallet if you are purchasing Collateral Network via a mobile.</p>
                                </div>
                                <p class="wallet-banner__balance">Balance: 0 $RWAX Tokens</p>
                                <div class="wallet-banner__btn-row">
                                    <button class="btn white bold" data-bs-toggle="modal" data-bs-target="#buyTokensModal">
                                        Buy CN With USDT
                                    </button>
                                    <button class="btn white border">Buy CN With BNB</button>
                                    <button class="btn white border">Buy CN With ETH</button>
                                </div>
                            </div>
                            <div class="col-xl-5 statistic">
                                <div class="statistic__wrapper">
                                    <div class="statistic__content-row mb-3"><strong>1 USDT = 50 Collateral Network</strong></div>
                                    <div class="statistic__content-row mb-2">67,542,189</div>
                                    <div class="statistic__content-row mb-4">Collateral Network Tokens Remaining Until Price Increases
                                        to: <strong>$0.04</strong>
                                    </div>
                                    <div class="coin-info d-flex flex-column">
                                        <div class="coin-info__bar white-border">
                                            <span class="coin-info__bar-status" style={{ width: '50%' }}></span>
                                        </div>
                                        <div class="coin-info__data">
                                            <span>$3,181,573.18</span>
                                            <span>$5,000,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section step1">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 text-center">
                                <h2 class="section__title step1__title"><span class="highlight">Step 1</span></h2>
                                <div class="step1__description">
                                    <p>To get started, you'll need either a wallet supported by Wallet Connect or a MetaMask wallet
                                        loaded on your screen (we recommend Trust Wallet).
                                    </p>
                                    <p>You'll have a more streamlined buying experience using a desktop browser. MetaMask is the
                                        perfect tool for this purpose.</p>
                                    <p>We advise using Trust Wallet and linking through the app's built-in browser (simply paste <a
                                        href="https://www.moshnake.io/how-to-buy">https://www.moshnake.io/how-to-buy</a> into
                                        Trust Wallet Browser) for all mobile purchases.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section step2">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 text-center">
                                <h2 class="section__title step2__title"><span class="highlight">Step 2</span></h2>
                                <div class="step2__description">
                                    <p>Once your desired wallet provider is ready, click “Connect Wallet” and choose the
                                        corresponding option. For mobile wallet applications, you must choose “Wallet Connect.”
                                    </p>
                                    <p>Then, you will have some choices:</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="step-item">
                                    <div class="step-item__icons">
                                        <div class="item">
                                            <img src="img/icons/credit-card.svg" alt="" />
                                        </div>
                                    </div>
                                    <h5 class="step-item__title">Buy with card</h5>
                                    <div class="step-item__description">
                                        <p>You can use the Transak widget in order to purchase ETH using your card, which you can
                                            then swap for Collateral Network.</p>
                                        <p>We recommend buying at least $30 of Eth in order to ensure you have enough to buy RWAX
                                            and cover the gas fees.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="step-item">
                                    <div class="step-item__icons">
                                        <div class="item">
                                            <img src="img/icons/eth-icon.svg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="img/icons/bnp-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <h5 class="step-item__title">Buy CNwith ETH or BNB</h5>
                                    <div class="step-item__description">
                                        <p>If you have enough ETH or BNB in your wallet, you can use the purchase RWAX with ETH or
                                            BNB option in order to swap the ETH in your wallet for Collateral Network.</p>
                                        <p>Type in the amount of Collateral Network you wish to purchase and then click “Convert
                                            ETH”. Your wallet provider will ask you to confirm the transaction and will also show
                                            you the cost of gas.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="step-item">
                                    <div class="step-item__icons">
                                        <div class="item">
                                            <img src="img/icons/t-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <h5 class="step-item__title">Buy CNwith ETH or BNB</h5>
                                    <div class="step-item__description">
                                        <p>If you have enough ETH or BNB in your wallet, you can use the purchase RWAX with ETH or
                                            BNB option in order to swap the ETH in your wallet for Collateral Network.</p>
                                        <p>Type in the amount of Collateral Network you wish to purchase and then click “Convert
                                            ETH”. Your wallet provider will ask you to confirm the transaction and will also show
                                            you the cost of gas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section claim">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <h2 class="section__title claim__title">How To <span class="highlight">Claim</span></h2>
                                <p class="section__description claim__description">Once the presale has ended, you’ll be able to
                                    claim your Collateral Network tokens by click the
                                    Claim button, which is located In the top righthand corner of the website.</p>
                            </div>
                            <div class="col-lg-6">
                                <div class="img-wrapper">
                                    <img src="img/claim-img.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section contact-us">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4">
                                <h2 class="section__title contact-us__title text-center">Talk <span class="highlight">To Us</span>
                                </h2>
                                <p class="section__description contact-us__description text-center">Leave your details and we will
                                    contatct you
                                    to discuss purchasing Collateral Network tokens</p>
                                <form class="form" action="#">
                                    <div class="control-wrapper">
                                        <input type="text" class="form-control is-invalid" placeholder="First name" />
                                        <div class="invalid-feedback">
                                            Please use correct first name.
                                        </div>
                                    </div>
                                    <div class="control-wrapper">
                                        <input type="text" class="form-control" placeholder="Last name" />
                                        <div class="invalid-feedback">
                                            Please use correct last name.
                                        </div>
                                    </div>
                                    <div class="control-wrapper">
                                        <input type="email" class="form-control" placeholder="E-mail" />
                                        <div class="invalid-feedback">
                                            E-mail
                                        </div>
                                    </div>
                                    <div class="control-wrapper">
                                        <input type="tel" class="form-control phone" placeholder="Last name" />
                                        <div class="invalid-feedback">
                                            Phone number
                                        </div>
                                    </div>
                                    <div class="control-wrapper">
                                        <select class="form-select" aria-label="Budget">
                                            <option selected>Budget</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            By submitting this form, you agree to our <a href="#">Terms</a> and <a href="#">Privacy
                                                Policy</a>
                                        </label>
                                    </div>
                                    <button class="btn white bold">Get started</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- delete during development END --> */}
            </main>
            <DefaultFooter />
        </>
    );
};

export default ConnectWallet;