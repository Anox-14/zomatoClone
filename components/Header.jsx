import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

const Header = ({ view }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yyks64j", "template_09cwbmj", form.current, {
        publicKey: "clqY2ik-vfJdHPqNo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      SetDetail(false);
      setLogin(false);
  };
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);
  const [detail, SetDetail] = useState(true);
  return (
    <>
      {view ? (
        <header className="flex relative flex-col  px-[110px] text-white back h-[450px] w-[100vw] py-5">
          {/* //Login */}
          {login && (
            <div
              
              className="h-[20rem] w-[25rem] bg-white top-[20vh] p-5 left-[35vw] rounded-xl absolute border border-blue-200"
            >
              <div className="text-black flex justify-between items-center">
                <h1 className="text-2xl">Log in</h1>
                <i
                  onClick={() => {
                    setLogin(false);
                  }}
                  className="text-2xl cursor-pointer bx bx-x"
                ></i>
              </div>
              <form ref={form}
              onSubmit={sendEmail} className="mt-4 ">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  className="outline-none text-black p-3 border rounded-xl w-full mt-5"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="outline-none text-black p-3 border rounded-xl w-full mt-5"
                />
                <input
                  type="submit"
                  
                  value="Log In"
                  placeholder="Email"
                  className="outline-none bg-pink-600 text-white cursor-pointer hover:scale-105 ease-out duration-300 p-3 border rounded-xl w-full mt-5"
                />
              </form>
            </div>
          )}
          {/* //nav */}
          <nav className="flex justify-between ">
            <div className="flex gap-2 items-center cursor-pointer">
              <i
                className="sc-rbbb40-1 iFnyeo sc-AUpyg hHrzem"
                size="10"
                color="#FFFFFF"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 gvsUip"
                >
                  <title>download-app</title>
                  <path d="M18.5793 9.18939H16.5865H16.3199C15.7307 9.18939 15.2529 9.6672 15.2529 10.2583V10.3742C15.2529 10.9659 15.7307 11.444 16.3207 11.444H18.3156H18.5793C19.1696 11.444 19.6488 10.9639 19.6488 10.3742L19.6477 10.2569C19.6488 9.6672 19.1696 9.18939 18.5793 9.18939Z"></path>
                  <path d="M18.5804 6.52262H18.1097V1.35122C18.1097 0.607964 17.5017 0 16.7582 0H7.84167C7.09841 0 6.49045 0.608249 6.49045 1.35122V5.06151C4.69196 6.07821 2.83696 7.14029 2.83296 7.14286C1.82597 7.5573 0.350586 8.89453 0.350586 12.0522C0.350586 12.3342 0.369139 12.5945 0.395113 12.846C0.40339 12.9197 0.412524 12.9904 0.422514 13.0615C0.448488 13.2462 0.481027 13.4229 0.519845 13.5907C0.533831 13.6506 0.544678 13.7131 0.559805 13.7705C0.612039 13.9646 0.67255 14.1467 0.740482 14.32C0.774733 14.4059 0.811839 14.4841 0.84923 14.5646C0.88919 14.6494 0.929436 14.7327 0.972535 14.8106C1.02249 14.9045 1.07244 14.995 1.12724 15.0809C1.14037 15.1009 1.15464 15.1192 1.16805 15.1394C2.46847 17.1052 4.8675 17.114 4.8675 17.114H6.49045V18.6494C6.49045 19.3918 7.09841 19.9997 7.84167 19.9997H16.7579C17.5014 19.9997 18.1094 19.3915 18.1094 18.6494V16.7767H18.3155V16.7755H18.5784C19.1695 16.7755 19.6487 16.2974 19.6476 15.7063L19.6487 15.5898C19.6476 14.9996 19.1695 14.5229 18.5792 14.5229H18.3155H16.5861H16.3195C15.7292 14.5229 15.2525 15.0007 15.2525 15.5907V15.7091C15.2525 16.2977 15.7304 16.7775 16.3203 16.7775H17.1692V17.5008H7.43036V7.79877C7.91959 7.48851 8.37256 7.18995 8.63088 6.98987C9.93957 5.97774 11.1818 5.17169 11.3499 4.4407C11.5688 3.49222 10.8407 2.69302 9.57765 3.34922C9.17976 3.55587 8.36315 4.00885 7.43036 4.53261V2.14129L17.1692 2.14271V6.52205H16.5861V6.52319H16.3209C15.7304 6.52319 15.2511 7.001 15.2511 7.59269V7.70858C15.2511 8.29999 15.7303 8.77665 16.3195 8.77665H16.5846H18.3141H18.5798C19.1695 8.77665 19.6476 8.29884 19.6476 7.70858V7.58955C19.6487 7.00186 19.1709 6.52262 18.5804 6.52262ZM12.2986 17.9752C12.6731 17.9752 12.9751 18.2774 12.9751 18.6511C12.9751 19.0255 12.6728 19.3267 12.2986 19.3267C11.9256 19.3267 11.6242 19.0247 11.6242 18.6511C11.6247 18.2786 11.927 17.9752 12.2986 17.9752ZM13.7266 1.30098H10.8735C10.7839 1.30098 10.7097 1.2282 10.7097 1.13829C10.7097 1.04695 10.7839 0.974169 10.8735 0.974169H13.7266C13.8163 0.974169 13.8893 1.04667 13.8893 1.13829C13.8893 1.22792 13.8163 1.30098 13.7266 1.30098Z"></path>
                  <path d="M18.5788 11.8561H18.3151H16.3193C15.7302 11.8561 15.251 12.3353 15.251 12.9253V13.0423C15.251 13.6329 15.7291 14.1107 16.3193 14.1107H16.5845H18.3139H18.5782C19.1693 14.1107 19.646 13.6329 19.6474 13.0423V12.9253C19.6472 12.3353 19.1705 11.8561 18.5788 11.8561Z"></path>
                </svg>
              </i>
              <h3 className="text-[10px]">Get the App</h3>
            </div>

            <div>
              <ul className="flex gap-[70px]  items-center">
                <li className="cursor-pointer">Investor Relations</li>
                <li className="cursor-pointer">Add restaurant</li>
                {detail ? (
                  <>
                    <li
                      className="cursor-pointer"
                      onClick={() => {
                        setLogin(true);
                      }}
                    >
                      Log in
                    </li>
                    <li className="cursor-pointer">Sign up</li>{" "}
                  </>
                ) : (
                  <>
                    <li className="bg-pink-600 p-3 text-white font-semibold rounded-2xl">
                      {user}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
          <div className="flex items-center flex-col gap-1">
            <i>
              <h1 className="flex text-[5em] tracking-tigter font-bold h-auto">
                tomoto
              </h1>
            </i>
            <h3 className=" text-[2.5em] ">
              Discover the best food & drinks in Mumbai
            </h3>
          </div>
          <div className="h-[60px] w-[55vw] mt-7  text-black bg-white mx-auto rounded-lg p-3 flex items-center">
            <div className="location p-2 flex gap-4 items-center border-r-2">
              <div className="flex gap-2 items-center">
                <i className="bx bxs-edit-location text-[20px]  text-pink-500"></i>
                <h3>Mumbai</h3>
              </div>
              <i className="bx bxs-down-arrow ml-9 cursor-pointer"></i>
            </div>
            <div className="input flex items-center">
              <i className="bx bx-search-alt-2 ml-2 text-[30px]"></i>
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="ml-2 w-[25vw] p-3 outline-none"
              />
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
};

export default Header;
