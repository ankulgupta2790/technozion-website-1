import React from "react";
import LOGO from "./LOGOS-04.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className=" footer-section w-full h-auto bg-pink relative pt-2rounded-4xl md:h-[500px] lg:h-[480px]">
        <div className=" w-full h-auto bg-cover bg-center ">
          <div className=" w-full h-auto ">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={LOGO}
                className="w-96 h-auto flex items-center justify-center relative opacity-10"
                alt="logo"
              />
              <div className="w-auto h-auto flex flex-col absolute heading absolute top-0">
                <div className="flex-col justify-center mt-6 items-center sm:mt-2 xsm:mt-2">
                  <div className="flex-col justify-center items-center mb-8">
                    <span className="flex justify-center font-futura items-center block uppercase text-purple font-semibold my-2 footer-venue">
                      Venue
                    </span>
                    <div>
                      <ul className="flex-col justify-center items-center text-center list-unstyled xsm:text-center sm:text-left mx-2">
                        <li className="flex footer-clg-name font-futura justify-center text-center tracking-wide text-purple font-medium ">
                          National Institute of Technology Warangal, Hanamkonda
                          Road, 506004
                        </li>
                        <li className=" flex font-futura justify-center text-purple font-medium">
                          `official mail
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*---------------------------------RazorPay links---------------------------------*/}
                  {/* <div className="flex justify-center items-center mb-8">
										<div id="horz-list">
											<ul>
												<li className="rounded-full overflow-hidden">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/privacy"
														className="block font-futura py-2 px-4"
													>
														Privacy Policy
													</a>
												</li>
												<li className="rounded-full overflow-hiddenmt-2">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/terms"
														className="block font-futura py-2 px-4"
													>
														Terms & Conditions
													</a>
												</li>
												<li className="rounded-full overflow-hiddenmt-2">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/refund"
														className="block font-futura py-2 px-4"
													>
														Cancellation & Refund
													</a>
												</li>
												<li className="rounded-full overflow-hiddenmt-2">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/shipping"
														className="block font-futura py-2 px-4"
													>
														Shipping & Delivery
													</a>
												</li>
												<li className="rounded-full overflow-hiddenmt-2">
													<a
														href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/contact_us"
														className="block font-futura py-2 px-4"
													>
														Contact Us
													</a>
												</li>
											</ul>
										</div>
									</div> */}

                  <hr className="w-full my-2 border-black"></hr>
                  <div className="flex justify-center items-center">
                    <div className="text-sm text-purple mx-1 font-futura font-semibold py-1 footer-last">
                      All rights reserved ©{" "}
                      <span id="get-current-year">2024</span>
                      <span className="text-purple font-futura hover:text-gray-800">
                        {" "}
                        Technozion'24 Dev Team{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
