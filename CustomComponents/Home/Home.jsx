"use client"; // Add this line
import "../Styles/Home.css";
import { ChevronDown } from "lucide-react";
import { ChevronLeft } from "lucide-react";

import React, { useState, useEffect } from "react";
import ProductPage from "./ProductPage";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";

const Home = () => {
  const arr = [
    {
      id: 1,
      url: "/Images/blackbag.png",
      name: "PPPXOC Milkyway dress in...",
    },
    {
      id: 2,
      url: "/Images/taddy.png",
      name: "PPPXOC Milkyway dress in...",
    },
    {
      id: 3,
      url: "/Images/keyring.png",
      name: "PRODUCT NAME",
    },
    {
      id: 4,
      url: "/Images/cap.png",
      name: "PRODUCT NAME",
    },
    {
      id: 5,
      url: "/Images/bag.png",
      name: "PRODUCT NAME",
    },
    {
      id: 6,
      url: "/Images/blackbag.png",
      name: "PPPXOC Milkyway dress in...",
    },
    {
      id: 7,
      url: "/Images/taddy.png",
      name: "PPPXOC Milkyway dress in...",
    },
    {
      id: 8,
      url: "/Images/keyring.png",
      name: "PRODUCT NAME",
    },
    {
      id: 9,
      url: "/Images/cap.png",
      name: "PRODUCT NAME",
    },
    {
      id: 10,
      url: "/Images/bag.png",
      name: "PRODUCT NAME",
    },
    {
      id: 11,
      url: "/Images/blackbag.png",
      name: "PPPXOC Milkyway dress in...",
    },
    {
      id: 12,
      url: "/Images/taddy.png",
      name: "PPPXOC Milkyway dress in...",
    },
    {
      id: 13,
      url: "/Images/keyring.png",
      name: "PRODUCT NAME",
    },
    {
      id: 14,
      url: "/Images/cap.png",
      name: "PRODUCT NAME",
    },
    {
      id: 15,
      url: "/Images/bag.png",
      name: "PRODUCT NAME",
    },
    {
      id: 16,
      url: "/Images/blackbag.png",
      name: "PPPXOC Milkyway dress in...",
    },
    {
      id: 17,
      url: "/Images/taddy.png",
      name: "PPPXOC Milkyway dress in...",
    },
    {
      id: 18,
      url: "/Images/keyring.png",
      name: "PRODUCT NAME",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFil, setIsOpenFil] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sizebelow, setsizebelow] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        console.log("objectofwindow size", window.innerWidth);
        if (window.innerWidth <= 768) {
          setsizebelow(true);
        } else {
          setsizebelow(false);
        }
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("object clicked");
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="Home">
      <div>
        <Navbar/>
      </div>
      <div className="Product-heading">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <section className="productsSection">
        <div className="filter">
          <div className="filterOption">
            {sizebelow ? (
              <></>
            ) : (
              <div>
                {" "}
                <h3>3425 Items</h3>
              </div>
            )}
            <div className="filterButton-div">
              {" "}
              <button className="filterButton" onClick={toggleFilter}>
                {" "}
                <div className="ChevronLeft">
                  {!sizebelow && <ChevronLeft />}
                </div>{" "}
                {sizebelow ? "Filter" : "Hide Filter"}
              </button>
            </div>
          </div>
          <div className="dropdown-container">
            <div className="dropdown-selected " onClick={toggleDropdown}>
              <div>
                {selectedOption} <ChevronDown />
              </div>
            </div>
            {isOpen && (
              <div className="dropdown-options  w-[100px]">
                {[
                  "RECOMMENDED",
                  "NEWEST FIRST",
                  "POPULAR",
                  "PRICE : HIGH TO LOW",
                  "PRICE : LOW TO HIGH",
                ].map((option) => (
                  <div
                    key={option}
                    className={`dropdown-option shadow-lg ${selectedOption === option ? "selected" : ""
                      }`}
                    onClick={() => selectOption(option)}
                  >
                    {selectedOption === option && (
                      <span className="checkmark">✓</span>
                    )}
                    <span className="second-child"> {option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="product-page-container">
          {isFilterVisible && (
            <aside className="filter-sidebar">
              <div className="filter-header">
                <button className="hide-filter-btn" onClick={toggleFilter}>
                  {/* HIDE FILTER */}
                </button>
              </div>

              <div className="filter-options">
                {/* CUSTOMIZABLE */}
                <div className="filter-category">
                  {/* <h4>CUSTOMIZABLE</h4> */}
                  <input type="checkbox" id="customizable" />
                  <label className="customizable-label" htmlFor="customizable">
                    {" "}
                    Customizable
                  </label>
                </div>

                {/* IDEAL FOR */}

                <div className="filter-category">
                  <div onClick={() => setIsOpenFil(!isOpenFil)}>
                    <h4>
                      IDEAL FOR <ChevronDown />
                    </h4>

                    <p>All</p>

                    {isOpenFil && <p></p>}
                  </div>

                  {isOpenFil && (
                    <>
                      <a href="#" className="unselect-all">
                        Unselect all
                      </a>
                      <div className="filter-option">
                        <input type="checkbox" id="men" />
                        <label htmlFor="men">Men</label>
                      </div>
                      <div className="filter-option">
                        <input type="checkbox" id="women" />
                        <label htmlFor="women">Women</label>
                      </div>
                      <div className="filter-option">
                        <input type="checkbox" id="baby-kids" />
                        <label htmlFor="baby-kids">Baby & Kids</label>
                      </div>
                    </>
                  )}
                </div>

                {/* OCCASION */}
                <div className="filter-category">
                  <h4>
                    OCCASION <ChevronDown />
                  </h4>
                  <p>All</p>
                </div>

                {/* WORK */}
                <div className="filter-category">
                  <h4>
                    WORK <ChevronDown />
                  </h4>
                  <p>All</p>
                </div>

                {/* FABRIC */}
                <div className="filter-category">
                  <h4>
                    FABRIC <ChevronDown />
                  </h4>
                  <p>All</p>
                </div>

                {/* SEGMENT */}
                <div className="filter-category">
                  <h4>
                    SEGMENT <ChevronDown />
                  </h4>
                  <p>All</p>
                </div>

                {/* SUITABLE FOR */}
                <div className="filter-category">
                  <h4>
                    SUITABLE FOR <ChevronDown />
                  </h4>
                  <p>All</p>
                </div>

                {/* RAW MATERIALS */}
                <div className="filter-category">
                  <h4>
                    RAW MATERIALS <ChevronDown />
                  </h4>
                  <p>All</p>
                </div>

                {/* PATTERN */}
                <div className="filter-category">
                  <h4>
                    PATTERN <ChevronDown />
                  </h4>
                  <p>All</p>
                </div>
              </div>
            </aside>
          )}
          <main
            className={`products-section ${isFilterVisible ? "with-sidebar" : "full-width"
              }`}
          >
            {/* Sort dropdown and product grid */}
            <div className="sort-dropdown">
              {/* Dropdown component from the previous code */}
            </div>
            <div className="products-grid">
              <div
                className={`${isFilterVisible ? "product-card" : "product-card-full"
                  }`}
              >
                {arr.length &&
                  arr.map((item) => <ProductPage item={item} key={item.id} />)}
              </div>
            </div>
          </main>
        </div>
      </section>
      <div className="footer">
        <Footer sizebelow={sizebelow} />
      </div>
    </div>
  );
};

export default Home;
