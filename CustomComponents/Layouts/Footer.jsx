import React, { useEffect, useState } from "react";
import "../Styles/Footer.css";
import { ChevronDown, Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = ({ sizebelow }) => {
  const [firstopen, setFirstOpen] = useState(false);
  const [quicktopen, setquickOpen] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);

  return (
    <footer className="Footer">
      <div className="Container">
        <div className="Footer-Content">
          <div className="Column" id="column-first">
            <h3>BE THE FIRST TO KNOW</h3>
            {sizebelow ? (
              <p className="show-on-mobile">
                Lorem Ipsum is simply dummy text of the printing and <br />{" "}
                typesetting industry. This is simply dummy text.
              </p>
            ) : (
              <p className="hide-on-mobile">
                Sign up for updates from mettā muse.
              </p>
            )}
            <form className="Form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="EmailInput"
              />
              <button type="submit" className="SubscribeButton">
                SUBSCRIBE
              </button>
            </form>
          </div>
          <div className="Column" id="column-two">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h4>CURRENCY</h4>
            <p>
              <img src="/Images/USD.png" alt="" /> &nbsp; USD
            </p>
            <p className="transtion">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className="foorte-colum-two">
          <div className="Column">
            {sizebelow ? (
              <>
                <div className="">
                  <div className="mettā-muse-mobile">
                    <h3>mettā muse </h3>
                    <ChevronDown onClick={() => setFirstOpen(!firstopen)} />
                  </div>
                  {firstopen && (
                    <div>
                      <ul className="ExtraLinks">
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <h3>mettā muse </h3>
                <ul className="ExtraLinks">
                  <li>About Us</li>
                  <li>Stories</li>
                  <li>Artisans</li>
                  <li>Boutiques</li>
                  <li>Contact Us</li>
                  <li>EU Compliances Docs</li>
                </ul>
              </>
            )}
          </div>
          <div className="Column">
            {sizebelow ? (
              <>
                <div className="">
                  <div className="mettā-muse-mobile">
                    <h3>QUICK LINKS</h3>
                    <ChevronDown onClick={() => setquickOpen(!quicktopen)} />
                  </div>
                  {quicktopen && (
                    <div>
                      <ul>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <h3>QUICK LINKS</h3>
                <ul>
                  <li>Orders & Shipping</li>
                  <li>Join/Login as a Seller</li>
                  <li>Payment & Pricing</li>
                  <li>Return & Refunds</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </>
            )}
          </div>

          <div className="Column">
            {sizebelow ? (
              <>
                <div className="">
                  <div className="mettā-muse-mobile">
                    <h3>FOLLOW US</h3>
                    <ChevronDown onClick={() => setFollowOpen(!followOpen)} />
                  </div>
                  {followOpen && (
                    <div>
                      <div className="SocialIcons">
                        <Instagram className="insta" /> &nbsp; &nbsp;
                        <Linkedin className="linkdin" />
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <h3>FOLLOW US</h3>
                <div className="SocialIcons">
                  <Instagram className="insta" /> &nbsp; &nbsp;
                  <Linkedin className="linkdin" />
                </div>
                <h3 className="payment-accept">mettā muse ACCEPTS</h3>
                <div className="PaymentIcons">
                  <img src="/Images/gpay.png" alt="Google Pay" />
                  <img src="/Images/paypal.png" alt="Paypal" />
                  <img src="/Images/mastercard.png" alt="Mastercard" />
                  <img src="/Images/amex.png" alt="Amex" />
                  <img src="/Images/applepay.png" alt="Apple Pay" />
                  <img src="/Images/opay.png" alt="Pay" />
                </div>
              </>
            )}
          </div>
          {sizebelow && (
            <div className="column-other">
              <h3 className="payment-accept-open">mettā muse ACCEPTS</h3>
              <div className=" payment-again">
                <img src="/Images/gpay.png" alt="Google Pay" />
                <img src="/Images/paypal.png" alt="Paypal" />
                <img src="/Images/mastercard.png" alt="Mastercard" />
                <img src="/Images/amex.png" alt="Amex" />
                <img src="/Images/applepay.png" alt="Apple Pay" />
                <img src="/Images/opay.png" alt="Pay" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
