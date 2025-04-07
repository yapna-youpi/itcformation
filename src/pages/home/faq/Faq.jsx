import React, { useEffect } from "react";

import faq from "./faq.jpg";

const Faq = () => {
  function openAnsSection(val) {
    var p = document.getElementById("para" + val);
    var svg = document.getElementById("path" + val);

    if (p.classList.contains("hidden")) {
      p.classList.remove("hidden");
      p.classList.add("block");
    } else {
      p.classList.remove("block");
      p.classList.add("hidden");
    }

    if (svg.classList.contains("hidden")) {
      svg.classList.remove("hidden");
      svg.classList.add("block");
    } else {
      svg.classList.remove("block");
      svg.classList.add("hidden");
    }
  }

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
          <div className="">
            <p className="font-normal dark:text-gray-400 text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12">
              Here are few of the most frequently asked questions by our
              valueable customers
            </p>
          </div>

          <div className="border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full">
            <input
              placeholder="Search"
              type="text"
              aria-label="Search"
              className="dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4"
            />
            <svg
              className="cursor-pointer text-gray-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 14L10 10"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
          <div className="md:w-5/12 lg:w-4/12 w-full">
              <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer  relative group">
                <div className=" z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                  <div>
                    <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                      <div className="font-bold">Jessie Watsica</div>

                      <div className="opacity-60 text-sm ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Distinctio dolores error iure, perferendis sequi
                        totam. Ad aliquam aperiam atque deleniti dolor dolorem
                        enim esse et in, inventore itaque, pariatur
                        reprehenderit.
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  alt=""
                  className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                  src={faq}
                />
                </div>
                
          </div>
          <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
            <div>
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-semibold text-xl  dark:text-white leading-5 text-gray-800">
                  Shipping
                </h3>
                <button
                  aria-label="too"
                  className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onclick="openAnsSection(1)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="path1"
                      className=""
                      d="M10 4.1665V15.8332"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="para1"
                className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
              >
                We are covering every major country worldwide. The shipment
                leaves from US as it is our headquarter. Some extra information
                you probably need to add here so that the customer is clear of
                their wanted expectations.
              </p>
            </div>

            <hr className="my-7 bg-gray-200" />

            <div>
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-semibold text-xl dark:text-white  leading-5 text-gray-800">
                  Returns
                </h3>
                <button
                  aria-label="too"
                  className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onclick="openAnsSection(2)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="path2"
                      className=""
                      d="M10 4.1665V15.8332"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="para2"
                className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
              >
                We are covering every major country worldwide. The shipment
                leaves from US as it is our headquarter. Some extra information
                you probably need to add here so that the customer is clear of
                their wanted expectations.
              </p>
            </div>

            <hr className="my-7 bg-gray-200" />

            <div>
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-semibold text-xl dark:text-white  leading-5 text-gray-800">
                  Exchange
                </h3>
                <button
                  aria-label="too"
                  className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onclick="openAnsSection(3)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="path3"
                      d="M10 4.1665V15.8332"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="para3"
                className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
              >
                We are covering every major country worldwide. The shipment
                leaves from US as it is our headquarter. Some extra information
                you probably need to add here so that the customer is clear of
                their wanted expectations.
              </p>
            </div>

            <hr className="my-7 bg-gray-200" />

            <div>
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-semibold text-xl dark:text-white  leading-5 text-gray-800">
                  Tracking
                </h3>
                <button
                  aria-label="too"
                  className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onclick="openAnsSection(4)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="path4"
                      d="M10 4.1665V15.8332"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="para4"
                className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
              >
                We are covering every major country worldwide. The shipment
                leaves from US as it is our headquarter. Some extra information
                you probably need to add here so that the customer is clear of
                their wanted expectations.
              </p>
            </div>

            <hr className="my-7 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
