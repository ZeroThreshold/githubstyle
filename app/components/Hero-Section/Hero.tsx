"use client";
import Image from "next/image";
import { LuRocket } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16">
      <Image
        className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
        width="500"
        height="326"
        src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
        alt=""
      />
      <div className="flex">
        <div className="relative ">
          <Image
            aria-hidden="true"
            className=""
            src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
            width="437"
            height="637"
            alt=""
          />
          <div className="mx-auto my-3 ">
            <span className="relative z-[11]">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                version="1.1"
                width="24"
                data-view-component="true"
                className=" text-white"
              >
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
              <span
                className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
                style={{
                  backgroundColor: "var(--mktg-accent-primary)",
                  filter: "blur(17px)",
                }}
              ></span>
            </span>
          </div>
          <div
            style={{
              background:
                "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
              marginLeft: "11px",
            }}
            className=" max-md:w-[2px] w-[3px] h-[280px] max-md:h-[150px] max-sm:h-[280px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
          ></div>
        </div>
        <div className=" absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
          <div className="relative top-4 left-10 md:left-0 md:top-20 mb-[24px]">
            <div className=" border-[1px] border-neutral-600 copilot rounded-full inline-block">
              <div className="flex items-center p-3 px-5">
                {/* <div className="bg-white rounded-full p-3">
                  <LuRocket />
                </div> */}

                <div className="md:pr-5 pr-3 md:mr-2 md:pl-2">
                  <div className="font-medium text-white text-[16px] max-md:text-[14px] leading-5">
                    Introducing Yuva Mathan
                  </div>
                  <div className="text-neutral-500 max-md:text-[14px] text-[16px]">
                    Career Interest Survey!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white">
            {" "}
            Discover Your Career Passions
          </h1>
          <p className="relative z-1 text-[18px] md:text-[24px]  lg:text-[28px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
            Directions: Tick the items in each box that best describe you. You
            may make as many or as few ticks in each box as you choose. Fill in
            the below form to start
          </p>
          <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col">
            <form action="">
              <div className="gap-3 grid max-md:grid-rows-2 md:grid-cols-2">
                <dl>
                  <dd>
                    <input
                      className="h-12 focus:outline-none max-md:rounded-md md:rounded-md right-0 w-full placeholder:text-[16px] pl-3"
                      placeholder="Email address"
                      type="email"
                      name="user_email"
                      id="user_email"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </dd>
                </dl>
                <dl>
                  <dd>
                    <input
                      className="h-12 focus:outline-none max-md:rounded-md md:rounded-md right-0 w-full placeholder:text-[16px] pl-3"
                      placeholder="Phone"
                      type="email"
                      name="user_email"
                      id="user_email"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </dd>
                </dl>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
