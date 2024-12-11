import React, { useEffect, useRef, useState } from "react";
import modal from "./modal3.png";
import cloth from "./cloth.png";
import image from "./image8.png";
import video from "./fusionvr.mp4";
import image2 from "./cloth2.avif";
import video2 from "./man.mp4";
import image14 from "./image14.svg";
import image15 from "./image15.svg";
import image16 from "./image16.svg";
import image17 from "./image17.png";
import image18 from "./image18.svg";

import roadmapf from "./image22.jpg";
import roadmaps from "./image23.jpg";
import roadmapt from "./image24.avif";
import roadmapl from "./image25.avif";
import image28 from "./image28.png";
import image34 from "./image34.jpg";
import whitepaper from "./whitepaper.png";

import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { LiaArrowCircleUpSolid } from "react-icons/lia";

import { RiArrowUpDoubleFill } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

function Homepage() {
  const scrollRef = useRef(null);
  const [images, setImages] = useState([cloth, cloth, cloth]); // Initial images
  const [centerIndex, setCenterIndex] = useState(1); // Index of the centered image
 const [selectedCategory, setSelectedCategory] = useState("Platform Overview");
 const [openQuestions, setOpenQuestions] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);
const homeSectionRef = useRef(null);
const aboutSectionRef = useRef(null);
const exploreSectionRef = useRef(null);
const tokenomicsSectionRef = useRef(null);
const roadMapSectionRef = useRef(null);
const whitepaperSctionRef = useRef(null);
 const [isOpen, setIsOpen] = useState(false);
 const [Open, setOpen] = useState(false);
   const [isVisible, setIsVisible] = useState(false);
  const scrollToSection = (sectionRef) => {
    // Check if the ref exists, then scroll
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(!isOpen);
    }
  };

  const toggleQuestion = (category, index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };
  const faqData = {
    "Platform Overview": [
      {
        question: "01. What is Grabit Shop?",
        answer:
          "Grabit Shop is a next-generation shopping platform that combines Augmented Reality (AR), Virtual Reality (VR), and blockchain technology to offer an immersive, interactive shopping experience. Users can explore virtual showrooms, interact with products as if they were in a physical store, and purchase items using various payment methods, including cryptocurrencies.",
      },
      {
        question:
          "02. How does Grabit Shop enhance the traditional shopping experience?",
        answer:
          "Grabit Shop provides an immersive experience where users can walk through virtual showrooms, examine products from all angles, and even visualize how items would look in their personal space. This interactive environment replicates the in-store experience while offering the convenience of online shopping.",
      },
      {
        question:
          "03. What is the difference between the Immersive Showroom Experience and Personal Virtual Space?",
        answer:
          "The Immersive Showroom Experience allows users to explore and interact with products in a virtual store setting, similar to visiting a physical showroom. The Personal Virtual Space, on the other hand, is a customizable digital area where users can store, organize, and interact with their purchased items, such as trying on clothes or arranging furniture.",
      },
      {
        question: "04. Who is the target audience for Grabit Shop?",
        answer:
          "Grabit Shop is designed for tech-savvy consumers, online shoppers looking for a more engaging experience, and cryptocurrency enthusiasts. It's ideal for anyone who values a blend of convenience, technology, and immersive shopping.",
      },
    ],
    "Blockchain Integration": [
      {
        question: "01. How does Grabit Shop use blockchain technology?",
        answer:
          "Grabit Shop integrates blockchain technology to ensure secure, transparent, and decentralized transactions. This technology provides a tamper-proof record of all purchases and enhances user trust in the platform by protecting their data.",
      },
      {
        question:
          "02. What is Grabit Coin, and how does it function within the platform?",
        answer:
          "Grabit Coin is the native cryptocurrency of the Grabit Shop platform. It facilitates transactions, enables users to earn rewards, and unlocks exclusive features within the ecosystem. Grabit Coin also plays a key role in the platform’s reward and incentive programs.",
      },
      {
        question: "03. Can users make payments using other currencies?",
        answer:
          "Can users make payments using other currencies?** Yes, Grabit Shop supports multiple currencies, including both fiat and cryptocurrencies. This multi-currency support ensures that users can transact using the payment method they prefer, making the platform accessible to a global audience.",
      },
      {
        question:
          "04. Why is blockchain integration important for Grabit Shop?",
        answer:
          "Blockchain integration provides a secure and transparent framework for all transactions, ensuring that users’ data is protected and that transactions are tamper-proof. It also enables the use of Grabit Coin, which enhances the platform's functionality and user experience.",
      },
    ],
    "User Experience": [
      {
        question:
          "01. What kind of products can users purchase on Grabit Shop?",
        answer:
          "Users can purchase a wide range of products, including fashion, electronics, home goods, and more. The platform partners with various brands to offer a diverse selection of items that can be explored in virtual showrooms.",
      },
      {
        question:
          "02. How does AR enhance the shopping experience on Grabit Shop?",
        answer:
          "How does AR enhance the shopping experience on Grabit Shop?** Augmented Reality (AR) allows users to visualize how products will look in their real-world environment. For example, users can try on clothes virtually or see how a piece of furniture fits in their home, providing a more informed and confident shopping decision.",
      },
      {
        question: "03. What is the VR showroom experience like?",
        answer:
          "The VR showroom experience is highly immersive, allowing users to navigate through virtual stores, interact with products as if they were physically present, and make purchases based on a realistic preview. This experience closely mimics the feeling of shopping in a physical store.",
      },
      {
        question: "04. How does the Personal Virtual Space benefit users?",
        answer:
          "The Personal Virtual Space allows users to store, organize, and interact with their purchased items. This space is customizable, offering users the ability to revisit their purchases, try on items, or showcase them in different settings, enhancing the overall user experience",
      },
    ],
    "Tokenomics & Roadmap": [
      {
        question: "01. How will Grabit Coins be distributed?",
        answer:
          "Grabit Coins will be allocated across several key areas, including early investors, the development team, marketing efforts, and community rewards. The distribution is designed to support the platform’s growth and ensure long-term sustainability.",
      },
      {
        question: "02. What incentives are available for Grabit Shop users?",
        answer:
          "Users can earn Grabit Coins through various activities on the platform, such as making purchases, referring friends, and participating in platform events. These rewards can be used for future purchases or traded on supported exchanges.",
      },
      {
        question: "03. What are the key milestones in the Grabit Shop roadmap?",
        answer:
          "The Grabit Shop roadmap includes the development of the AR/VR platform, the beta launch with select brands, the full platform launch with multi-currency support, and the introduction of Grabit Coin. Each phase is designed to expand the platform’s capabilities and user base.",
      },
      {
        question: "04. When will Grabit Coin be available to the public?",
        answer:
          "Grabit Coin will be introduced during Phase 2 of the roadmap, following the full launch of the Grabit Shop platform. This phase will also include integration with external cryptocurrency exchanges, allowing users to trade Grabit Coins.",
      },
      // {
      //   question: "05. How does Grabit Shop plan to sustain long-term growth?",
      //   answer:
      //     "Grabit Shop plans to sustain long-term growth by continuously enhancing platform features, expanding brand partnerships, and growing its user base. The platform’s innovative use of AR, VR, and blockchain technology positions it for sustained success in the evolving retail landscape.",
      // },













      // {
      //   question: "06. How will Grabit Shop expand its brand ecosystem?",
      //   answer:
      //     "Grabit Shop will expand its brand ecosystem by partnering with a diverse range of brands and retailers, offering users an ever-growing selection of products. This expansion will also include adding new features and functionalities to enhance the shopping experience.",
      // },
      // {
      //   question:
      //     "07. What role does the community play in the Grabit Shop ecosystem?",
      //   answer:
      //     "The community plays a vital role in the Grabit Shop ecosystem. Users are encouraged to engage with the platform, provide feedback, and participate in events. The platform’s reward system is designed to incentivize active community participation, fostering a vibrant and engaged user base.",
      // },
      // {
      //   question:
      //     "08. What future developments can users expect from Grabit Shop?",
      //   answer:
      //     "Future developments for Grabit Shop include the introduction of new AR/VR features, expanded payment options, and additional brand partnerships. The platform will continue to innovate, offering users an increasingly immersive and convenient shopping experience.",
      // },
    ],
  };  

  const [currentIndex, setCurrentIndex] = useState(0);
  const boxdata = [
    {
      name: "Virtual Stores",
      details:
        "Explore virtual showrooms as if you were actually there. Walk through a path, check out products closely, and get a feel for what you’re buying.",
      number: "01",
      image: image14,
    },
    {
      name: "Digital Try-Ons",
      details:
        "See how items look on you or in your space before you buy. Whether it’s clothes, furniture, or accessories, you can try them out easily.",
      number: "02",
      image: image15,
    },
    {
      name: "Easy Payments",
      details:
        "Pay using various methods, including cryptocurrencies. It’s fast, secure, and flexible, making your shopping experience smooth and hassle-free.",

      number: "03",
      image: image16,
    },
  ];


  //  const [activeIndex, setActiveIndex] = useState(null);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % boxdata.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      // Scroll the container slightly to the right
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;

        // Check the center image
        const { scrollLeft, clientWidth } = scrollRef.current;
        const newCenterIndex = Math.round(scrollLeft / (250 + 16)); // Adjust for image width and margin

        if (newCenterIndex !== centerIndex) {
          setCenterIndex(newCenterIndex);
        }
      }

      // Add a new image to the end of the images array for continuous scroll
      setImages((prevImages) => [...prevImages, cloth]);
    }, 30); // Adjust scroll speed

    return () => clearInterval(interval); // Cleanup
  }, [centerIndex]);
useEffect(() => {
  AOS.init({ duration: 1000, offset: 200 });
}, []);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
// const backToTop = () => {
//   document.documentElement.style.scrollBehavior = "smooth";
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// };
  return (
    <div className="overflow-hidden ">
      <div className="bg-[#070a29] font  ">
        {/* header */}

        <div className="h-[80px] grid items-center xl:grid-cols-[20%_60%] md:grid-cols-[20%_60%] lg:grid-cols-[34%_60%] sm:grid-cols-[30%_60%] sml:grid-cols-[30%_60%] sms:grid-cols-[30%_60%] xl:justify-center md:justify-center sm:justify-center sml:justify-center sms:justify-center pt-[40px]">
          <div>
            <img src="https://grabitshop.io/assets/images/logo/logo.png" />
          </div>
          <div className="relative flex  justify-end">
            {/* Hamburger Icon (Only visible on mobile screens) */}
            <button
              className="block text-white lg:hidden p-3 xl:text-2xl md:text-3xl lg:text-2xl sm:text-3xl sml:text-3xl sms:text-3xl"
              onClick={() => setOpen(!Open)}
            >
              <TiThMenu />
            </button>
            <div
              className={`fixed top-0 left-0 h-full w-[250px] bg-[#070a29] p-6 transition-transform duration-300 z-50 ${
                Open ? "translate-x-0" : "-translate-x-full"
              } lg:hidden`}
            >
              <div>
                <div className="flex flex-row justify-between">
                  {" "}
                  <div className="flex items-center">
                    {/* <div className=" text-4xl text-white">
                    <TbWorldCode />
                  </div> */}

                    {/* <div className=" text-2xl ml-[10px] text-white">BRIJESH</div> */}

                    <div>
                      <img src="https://grabitshop.io/assets/images/logo/logo.png" />
                    </div>
                  </div>
                  <button
                    className="text-white  justify-center  text-4xl"
                    onClick={() => setOpen(!Open)}
                  >
                    <IoCloseCircleSharp />
                  </button>
                </div>
                {/* <p className="mt-[20px] text-white">
                A Web Developer is responsible for building and maintaining
                websites and web applications. They work across various
                technologies to ensure that sites are functional, interactive,
                and user-friendly
              </p> */}
                <div className="border-t-2 mt-[20px]">
                  <ul className="flex flex-col gap-6 mt-[40px] text-xl">
                    <button
                      className="text-white hover:text-[#2166b0] hover:from-[#2166b0] hover:to-[#19c1f2]"
                      onClick={() => {
                        scrollToSection(homeSectionRef);
                        setOpen(!Open);
                      }}
                    >
                      Home
                    </button>

                    <button
                      className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2]"
                      onClick={() => {
                        scrollToSection(aboutSectionRef);
                        setOpen(!Open);
                      }}
                    >
                      About
                    </button>
                    <button
                      className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2]"
                      onClick={() => {
                        scrollToSection(exploreSectionRef);
                        setOpen(!Open);
                      }}
                    >
                      Explore
                    </button>
                    <button
                      className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2]"
                      onClick={() => {
                        scrollToSection(tokenomicsSectionRef);
                        setOpen(!Open);
                      }}
                    >
                      Tokenomics
                    </button>
                    <button
                      className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2] "
                      onClick={() => {
                        scrollToSection(roadMapSectionRef);
                        setOpen(!Open);
                      }}
                    >
                      RoadMap
                    </button>
                    <button
                      className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2]"
                      onClick={() => {
                        scrollToSection(whitepaperSctionRef);
                        setOpen(!Open);
                      }}
                    >
                      Whitepaper
                    </button>
                  </ul>
                </div>
                {/* <div className="mt-[20px] text-xl text-white">
                  <p>FIND WITH ME</p>
                </div>
                <div className="flex  flex-col mt-[0px] xl:justify-start md:justify-start lg:justify-start sm:justify-evenly sms:justify-evenly sml:justify-evenly xl:mr-[0px] md:mr-[0px] lg:mr-[0px] sm:mr-[40px]">
                  <a href="https://x.com/?lang=en" target="_blank">
                    <button className=" w-[50px] h-[50px] mt-[20px] text-2xl grid hover:transition openbutton  transition-all duration-700 justify-center items-center  rounded-md bg-[#E6EBEE] ">
                      <FaLinkedinIn />
                    </button>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <button className=" w-[50px] h-[50px] mt-[20px] text-2xl grid hover:transition openbutton  transition-all duration-700 justify-center items-center  rounded-md bg-[#E6EBEE] ">
                      <FaTelegramPlane />
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/brijesh-dobariya-09a299214/"
                    target="_blank"
                  >
                    <button className=" w-[50px] h-[50px] mt-[20px] text-2xl grid hover:transition  openbutton transition-all duration-700 justify-center items-center  rounded-md bg-[#E6EBEE] ">
                      <FaInstagram />
                    </button>
                  </a>
                </div> */}
              </div>
            </div>
            <div className=" hidden lg:flex ">
              <div className=" flex gap-[40px] font-extrabold text-[16px]">
                <button
                  className="text-white hover:text-[#2166b0] hover:from-[#2166b0] hover:to-[#19c1f2]"
                  onClick={() => scrollToSection(homeSectionRef)}
                >
                  {" "}
                  Home
                </button>

                <button
                  className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2]"
                  onClick={() => scrollToSection(aboutSectionRef)}
                >
                  About
                </button>
                <button
                  className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2]"
                  onClick={() => scrollToSection(exploreSectionRef)}
                >
                  Explore
                </button>
                <button
                  className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2]"
                  onClick={() => scrollToSection(tokenomicsSectionRef)}
                >
                  Tokenomics
                </button>
                <button
                  className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2] "
                  onClick={() => scrollToSection(roadMapSectionRef)}
                >
                  RoadMap
                </button>
                <button
                  className="text-white hover:text-[#19c1f2] hover:from-[#2166b0] hover:to-[#19c1f2]"
                  onClick={() => scrollToSection(whitepaperSctionRef)}
                >
                  Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* home */}

        <div
          className="frist xl:h-[100vh] md:h-[60vh] lg:h-[60vh] xxl:h-[70vh] sm:h-[120vh] sml:h-[120vh] sms:h-[120vh] mt-[60px] "
          ref={homeSectionRef}
        >
          <div className="grid xl:grid-cols-[33%_66%] md:grid-cols-[99%]  pt-[60px] gap-[0px]">
            <div
              className="xl:ml-[40px] md:ml-[40px] lg:ml-[40px] sm:ml-[40px] sml:ml-[10px] sms:ml-[10px] "
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="text-white  xl:text-[60px] md:text-[60px] lg:text-[60px] xxl:text-[60px] sm:text-[40px] sml:text-[40px] sms:text-[30px] font-bold leading-[80px]">
                <h2 className="xl:w-[600px] md:w-[600px] lg:w-[600px] xxl:w-[600px] sm:w-[360px] sml:w-[360px] sms:w-[300px]">
                  Get ready to experience
                </h2>
                <div className="xl:w-[600px] md:w-[700px] lg:w-[700px] xxl:w-[600px] sm:w-[360px] sml:w-[360px] sms:w-[300px]">
                  <span
                    className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] "
                    style={{
                      color:
                        "linear-gradient(264.28deg, #19c1f2 -38.2%, #2166b0 104.12%)",
                      // Replace 'YourFont' with the actual font name
                    }}
                  >
                    shopping
                  </span>
                  <span className="ml-[20px] w-[80px]">like never before!</span>
                </div>
              </div>
              <div className="mt-[46px]">
                <p className=" text-white xl:w-[600px] md:w-[700px] lg:w-[700px] xxl:w-[600px] sm:w-[360px]  sml:w-[320px] sms:w-[300px] ">
                  Our platform combines Augmented Reality (AR), Virtual Reality
                  (VR), and blockchain technology to offer something truly
                  unique.
                </p>
              </div>

              <div className="mt-[40px] coin ">
                <img
                  src="https://grabitshop.io/assets/images/layouts/grabit-coinLogo.png"
                  className="w-[80px]"
                  alt="Coin"
                />
              </div>
            </div>
            {/* <div className="border-2"></div> */}
            {/* <div className="flex  justify-center">
              <div className="border-2 arvrmodal h-[600px] w-[800px] pl-[40px] ">
               
                <div className="flex border-2  mt-[200px]">
                  <img src={cloth} />
                  <img src={cloth} />
                  <img src={cloth} />
                </div>
              </div>
            </div> */}
            <div
              className="flex justify-center xl:ml-[200px] md:ml-[0px] xl:block md:hidden sm:block sml:block   sms:block xl:mt-[0px] md:mt-[0px] lg:mt-[0px] xxl:mt-[0px] sm:mt-[40px] sml:mt-[40px] sms:mt-[40px]"
              // data-aos="flip-left"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="2000"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <div className="arvrmodal h-[600px] w-[800px] overflow-hidden">
                <div
                  className="overflow-x-auto flex  mt-[200px] "
                  ref={scrollRef}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {/* {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      className={`h-auto mx-2 object-cover transition-transform duration-300 ${
                        index === centerIndex + 1 || index === centerIndex + 2
                          ? "w-[300px]"
                          : "w-[200px]"
                      }`} // Center image larger, others smaller
                      alt={`Cloth ${index}`}
                      style={{
                        transform:
                          index === centerIndex + 1 || index === centerIndex + 2
                            ? "scale(1.2)"
                            : "scale(1)", // Scale for center image
                        opacity:
                          index === centerIndex + 1 || index === centerIndex + 2
                            ? 1
                            : 0.8, // Faint others for focus effect
                      }}
                    />
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about*/}

        <div className=" about  " ref={aboutSectionRef}>
          <div className="grid xl:grid-cols-[50%_50%]  md:grid-cols-[99%] lg:grid-cols-[99%] sm:grid-cols-[99%] sml:grid-cols-[99%] sms:grid-cols-[99%] xl:h-[100vh] md:h-[140vh] sm:h-[80vh] sml:h-[80vh] sms:h-[80vh]">
            <div
              className=" xl:flex md:flex lg:flex xxl:flex sm:hidden sml:hidden sms:hidden justify-center items-center"
              data-aos="fade-up-right"
            >
              <div className=" absolute">
                <img src={image} className=" h-[600px]  opacity-70" />
              </div>

              <div className="flex justify-center items-center relative ring">
                <div className="rounded-full w-[80px] h-[80px] bottom-to-top absolute bottom-[34px] left-[260px]">
                  <img
                    src={image2}
                    className="rounded-full w-[80px] h-[80px]"
                  />
                </div>
                <div className="rounded-full w-[80px] h-[80px] top-to-bottom absolute top-[20px] right-[200px]">
                  <img
                    src={image2}
                    className="rounded-full w-[80px] h-[80px]"
                  />
                </div>
              </div>
            </div>
            <div
              className=" flex flex-col   justify-center   xl:ml-[40px] md:ml-[40px] lg:ml-[240px] sm:ml-[40px] sml:ml-[40px] sms:ml-[40px] xl:w-[600px] md:w-[600px] lg:w-[600px] xxl:w-[600px]  sm:w-[360px] sml:w-[320px] sms:w-[280px] "
              data-aos="fade-up-left"
            >
              <div className="">
                <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl xl:w-[120px] md:w-[120px] lg:w-[140px] sm:w-[140px] sml:w-[140px] sms:w-[140px] h-[30px] ">
                  About us
                </button>
              </div>
              <div className="text-white xl:text-[50px] md:text-[50px] lg:text-[50px] xxl:text-[50px] sm:text-[40px] sml:text-[30px] sms:text-[30px] ">
                <p>Welcome to</p>
                <p> GrabIT Shop</p>
              </div>
              <div className="text-white mt-[20px] flex flex-col gap-[20px]">
                <p>where we’re revolutionizing the shopping experience!</p>
                <p className="text-[12px]">
                  Unlike traditional shopping, GrabIT Shop introduces an
                  entirely new way of shopping. You can interact with products
                  in detail and pay with various methods, including
                  cryptocurrencies. So, Get ready to experience shopping like
                  never before!
                </p>
              </div>
              <div className="mt-[30px]">
                <p className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] text-[20px]">
                  Vision
                </p>
                <p className="text-white text-[12px] mt-[10px]">
                  Our vision is to create an exceptional shopping experience
                  where users can explore virtual stores, try on items
                  digitally, and make payments seamlessly with cryptocurrencies.
                </p>
              </div>

              <div className="mt-[30px]">
                <p className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] text-[20px]">
                  Mission
                </p>
                <p className="text-white text-[12px] mt-[10px]">
                  Our mission is to redefine how consumers interact with brands
                  and products by creating a platform that makes shopping more
                  engaging, immersive, and accessible to everyone, anywhere in
                  the world.
                </p>
              </div>
            </div>

            {/* <div>
              <video src={video} type="video/mp4" className="w-[400px]" loop autoPlay muted playsInline/>
            </div> */}
          </div>
        </div>
        {/* Platform Overview */}
        <div
          className="xl:h-[100vh] md:h-[50vh] lg:h-[80vh] xxl:h-[100vh] sm:h-[20vh]  sml:h-[20vh] sms:h-[20vh]"
          ref={exploreSectionRef}
        >
          {/* <div className="flex items-center flex-col">
            <div>
              <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[220px] h-[32px]">
                Platform Overview
              </button>
            </div>
            <div className=" flex  items-center flex-col text-white text-[40px] mt-[20px]">
              <p>Explore the Future of</p>
              <p>Immersive Experiences</p>
            </div>
            <div className=" mt-[20px]">
              <p className="px-[600px] text-[10px] text-white ">
                Our Platform Empowers Creators to Build Immersive Worlds,
                Merging Virtual and Augmented Realities Seamlessly.
              </p>

            </div>
          </div> */}
          <div>
            <div className="absolute w-full  md:overflow-hidden sm:overflow-hidden sml:overflow-hidden sms:overflow-hidden">
              <video
                src={video2}
                type="video/mp4"
                className="w-[100] xl:max-w-[100%] md:max-w-[140%] sm:max-w-[250%] sml:max-w-[300%] sms:max-w-[400%]"
                loop
                autoPlay
                muted
                playsInline
              />
            </div>

            <div
              className="relative xl:top-[80px] md:top-[40px] lg:top-[80px] sm:top-[60px] sml:top-[80px] sms:top-[80px] xl:right-[400px] md:right-[180px]"
              data-aos="zoom-in-down"
            >
              <div className="flex items-center flex-col">
                <div>
                  <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[220px] h-[32px] xl:ml-[0px] md:ml-[0px] lg:ml-[40px] ">
                    Platform Overview
                  </button>
                </div>
                <div className=" flex items-center flex-col text-white xl:text-[40px] md:text-[24px] lg:text-[30px] xl:ml-[0px] md:ml-[0px] lg:ml-[80px]  mt-[20px]">
                  <p>Explore the Future of</p>
                  <p>Immersive Experiences</p>
                </div>
                <div className="mt-[20px]">
                  <p className="xl:px-[600px] md:px-[180px] lg:px-[260px] sm:px-[40px] sml:px-[50px] sms:px-[50px] xl:ml-[0px] md:ml-[40px] lg:ml-[100px]  text-[10px] text-white ">
                    Our Platform Empowers Creators to Build Immersive Worlds,
                    Merging Virtual and Augmented Realities Seamlessly.
                  </p>
                </div>
                <div className="xl:mt-[70px] md:mt-[40px] lg:mt-[60px] sm:mt-[60px] sml:mt-[60px]   sms:mt-[60px] flex justify-center ">
                  <div className="relative xl:w-[440px] md:w-[440px] lg:w-[440px] xxl:w-[440px] sm:w-[340px] sml:w-[340px] sms:w-[300px] xl:h-[280px] md:h-[280px] lg:h-[280px] xxl:h-[280px] sm:h-[280px] sml:h-[280px] sms:h-[280px]    grid  justify-items-center items-center box rounded-2xl xl:ml-[0px] md:ml-[90px]">
                    {boxdata.map((data, index) => (
                      <div
                        key={index}
                        className={`absolute  rounded-2xl text-white grid justify-items-center   transition-opacity duration-500 ${
                          index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="w-[90px] broder-2 border-white mb-[0px] relative bottom-[45px] rounded-full round h-[90px]">
                          <img src={data.image} />
                        </div>
                        <p className="xl:text-[26px] md:text-[16px] font-semibold flex ">
                          {data.name}
                        </p>
                        <div className="mt-[20px] text-[10px]  flex  justify-center  items-center xl:w-[380px] xxl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[300px] sml:w-[300px] sms:w-[280px]">
                          {data.details}
                        </div>
                        <p className="mt-[20px] text-[40px] font-bold">
                          {data.number}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blockchain Integration */}
        <div
          className="xl:h-[96vh] md:h-[100vh]  lg:h-[100vh]  sm:h-[160vh]   sml:h-[160vh] sms:h-[160vh] xl:mt-[200px]  md:mt-[0px]  lg:mt-[0px]  sm:mt-[0px] sml:mt-[0px] sms:mt-[0px]   flex items-center"
          ref={tokenomicsSectionRef}
        >
          {/* <div className="bg-black mt-[200px]  ">
            <p className="text-white ">dfghsdf</p>
          </div> */}

          <div className="absolute md:overflow-hidden sm:overflow-hidden sml:overflow-hidden sms:overflow-hidden xl:mb-[0px] md:mb-[0px] lg:mb-[0px] sm:mb-[400px] sml:mb-[340px] sms:mb-[340px]">
            <img
              src={image17}
              className="move-image xl:h-[600px] md:h-[600px] lg:h-[600px] xxl:h-[600px] sm:h-[400px] sml:h-[340px] sms:h-[340px]"
              alt="Moving Image"
            />
          </div>

          {/* <div className=" relative  left-[700px] explore">
            <div className=" w-[700px]  relative left-[100px]   h-[200px] bg-[#1C0E40]">
              <div>
                <div>
               
                  <img src={image18} className=" h-[200px]" />
                </div>


                
              </div>
              <div className=" grid grid-cols-[0%_30%_30%]">
                <div>
                  <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[180px] h-[32px]">
                    Step 1
                  </button>
                </div>
                <div className="border-r-2">

                </div>
                <div>djkg</div>
              </div>
              <div>
                <div className=" relative bottom-[180px] left-[200px]">
                  <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[280px] h-[32px]">
                    Blockchain Integration
                  </button>
                </div>
                <div className=" relative bottom-[160px] left-[80px]">
                  <p className="text-white text-[34px] ">
                    Where Immersive Reality
                  </p>



                  <p className="text-white text-[34px] ">
                    Meets Immutable Security
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className=" relative xl:bottom-[00px] md:bottom-[-700px] xl:left-[1160px]  md:left-[200px] lg:left-[360px] xxl:left-[1160px] sm:left-[60px] sml:left-[60px] sms:left-[30px] xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[800px] sml:mt-[800px] sms:mt-[800px]   ">
            <div>
              <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[280px] h-[32px]">
                Blockchain Integration
              </button>
              <div className=" relative  xl:right-[120px]  md:right-[120px] lg:right-[120px] sm:right-[40px] sml:right-[40px] sms:right-[20px]">
                <p className="text-white xl:text-[34px] md:text-[34px] lg:text-[34px] sm:text-[22px] sml:text-[22px] sms:text-[18px]">
                  Where Immersive Reality
                </p>
                <p className="text-white xl:text-[34px] md:text-[34px] lg:text-[34px] sm:text-[20px] sml:text-[20px] sms:text-[18px]">
                  Meets Immutable Security
                </p>
              </div>

              {/* <div className=" border-r-2 h-[80px] relative  right-[40px]"></div> */}
              <div
                className="mt-[40px] xl:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:ml-[55px] sml:ml-[45px] sms:ml-[65px]"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className=" relative right-[80px] boxsec xl:w-[500px] md:w-[500px] lg:w-[490px] sm:w-[340px] sml:w-[320px] sms:w-[280px] text-white p-[20px]">
                  <p>Grabit Coin</p>
                  <p className="text-[10px]">
                    The platform introduces Grabit Coin, a native cryptocurrency
                    for the Grabit ecosystem. Users can use Grabit Coins for
                    purchases. They can also earn rewards and access exclusive
                    features.
                  </p>
                </div>
                <div className="  xl:ml-[100px]  md:ml-[100px] lg:ml-[100px] sm:ml-[60px] sml:ml-[60px] sms:ml-[60px] xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[-30px] sml:mt-[-30px]  sms:mt-[-45px] relative bottom-[125px] ">
                  <button className="moving text-[#2166b0] rounded-2xl w-[100px] h-[32px]">
                    Step 1
                  </button>
                </div>
              </div>

              <div
                className="mt-[40px]  xl:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:ml-[55px] sml:ml-[45px] sms:ml-[65px]"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className=" relative right-[80px] boxsecxl xl:w-[500px] md:w-[500px] lg:w-[490px] sm:w-[340px] sml:w-[320px] sms:w-[280px] text-white p-[20px]">
                  <p>Seamless and Secure Transactions</p>
                  <p className="text-[10px]">
                    Grabit Shop uses blockchain technology to secure all
                    transactions. It ensures that transactions are transparent
                    and decentralized. This protects user data and provides a
                    verifiable, reliable record of all purchases.
                  </p>
                </div>
                <div className=" xl:ml-[100px]  md:ml-[100px] lg:ml-[100px] sm:ml-[60px] sml:ml-[60px] sms:ml-[60px]  xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[-45px] sml:mt-[-45px] sms:mt-[-60px]  relative bottom-[145px] ">
                  <button className="moving text-[#2166b0] rounded-2xl w-[100px] h-[32px]">
                    Step 2
                  </button>
                </div>
              </div>

              <div
                className="mt-[40px] xl:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:ml-[55px] sml:ml-[45px] sms:ml-[65px]"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className=" relative right-[80px] boxsec xl:w-[500px] md:w-[500px] lg:w-[490px] sm:w-[340px] sml:w-[320px] sms:w-[280px] text-white p-[20px]">
                  <p>Multi-Currency Support</p>
                  <p className="text-[10px]">
                    In addition to Grabit Coin, the platform supports various
                    fiat and cryptocurrency payment options. This makes it
                    accessible to a global audience. Users can transact in the
                    currency they prefer.
                  </p>
                </div>
                <div className=" xl:ml-[100px]  md:ml-[100px] lg:ml-[100px] sm:ml-[60px] sml:ml-[60px] sms:ml-[60px] xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[-30px] sml:mt-[-30px] sms:mt-[-70px]  relative bottom-[125px] ">
                  <button className="moving text-[#2166b0] rounded-2xl w-[100px] h-[32px]">
                    Step 3
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Road Map */}

        <div
          className="xl:h-[200vh] md:h-[160vh] lg:h-[180vh] xxl:h-[200vh] sm:h-[250vh]  sml:h-[250vh]  sms:h-[250vh] xl:mt-[40px] md:mt-[700px]  "
          ref={roadMapSectionRef}
        >
          <div className=" ">
            <div className="flex flex-col justify-center items-center">
              <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[160px] h-[32px]">
                Road Map
              </button>
              <p className="text-white xl:text-[40px] mf:text-[40px] lg:text-[40px] sm:text-[40px] sml:text-[30px] sms:text-[30px]">
                The Journey of
              </p>
              <p className="text-white xl:text-[40px] mf:text-[40px] lg:text-[40px] sm:text-[40px] sml:text-[30px] sms:text-[30px]">
                Grabit Shop
              </p>
            </div>
            <div>
              {/* <div className=" absolute  w-[100%] ">
              <div className="mt-[80px] grid grid-cols-[25%_25%_25%_25%] justify-center   ">
                <div className=" flex flex-col  items-center">
                  <div></div>
                  <div className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] text-[26px]">
                    <p>Phase 1</p>
                  </div>
                  <div className=" text-white mt-[60px]  text-[26px]">
                    <p className=" text-white text-[26px]">3rd Quarter 2024</p>
                    <div className="text-[14px] mt-[10px]">
                      <p>Social Media Launching</p>
                      <p>Website Launching</p>
                      <p>Whitepaper</p>
                      <p>Social Media Marketing</p>
                      <p>Community Growth</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div></div>
                  <div className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] text-[26px]">
                    <p>Phase 2</p>
                  </div>
                  <div className=" text-white mt-[60px]  text-[26px]">
                    <p className=" text-white text-[26px]">4th Quarter 2024</p>
                    <div className="text-[14px] mt-[10px]">
                      <p>Audit Report</p>
                      <p>KYC Completion & Doxxed Team</p>
                      <p>Website Final Version</p>
                      <p>1st Phase Presale</p>
                      <p>Beta Grabitshop App Version</p>
                      <p>2nd Phase Presale & launching</p>
                    </div>
                  </div>
                </div>
















                <div className=" flex flex-col items-center">
                  <div className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] text-[26px]">
                    <p>Phase 3</p>
                  </div>
                  <div className=" text-white mt-[60px]  text-[26px]">
                    <p className=" text-white text-[26px]">1nd Quarter 2025</p>
                    <div className="text-[14px] mt-[10px]">
                      <p>CG & CMC Listing</p>
                      <p>Final Grabit App Version</p>

                      <p>Launch in Playstore & Appstore</p>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col items-center">
                  <div className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] text-[26px]">
                    <p>Phase 4</p>
                  </div>

                  <div className=" text-white mt-[60px]  text-[26px]">
                    <p className=" text-white text-[26px]">2nd Quarter 2025</p>
                    <div className="text-[14px] mt-[10px]">
                      <p>Partnership with Worldwide</p>{" "}
                      <p>Top Brand and Bring Together</p>
                      <p>Tier 1 Cex Listing</p>
                      <p>More Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center relative top-[140px]">
              
              <div className="w-[97%] h-[7px] border-white bg-[#1f223e] relative overflow-hidden">
               
                <div className="growing-line absolute top-0 left-0 h-full rounded-3xl"></div>
              
              </div>



























              
            </div>

            
            


            <div className="w-[25px] h-[25px]  rounded-full relative top-[124px]  left-[200px] bg-[#1f223e]"></div> */}
            </div>

            <div className="grid xl:mt-[80px] md:mt-[0px] lg:mt-[60px] absolute w-[100%]  ">
              <div className=" ">
                <div className=" grid xl:grid-cols-[30%_8%_20%] md:grid-cols-[30%_25%_20%] lg:grid-cols-[30%_25%_20%] xxl:grid-cols-[30%_8%_20%] sm:grid-cols-[99%] sml:grid-cols-[99%] sms:grid-cols-[99%]  xl:justify-center md:justify-start  xl:p-[0px] md:p-[00px]">
                  <div
                    className="xl:w-[400px]  md:w-[330px] lg:w-[400px] sm:w-[360px]  sml:w-[320px] sms:w-[280px] rounded-2xl xl:px-[0px] md:pl-[40px] xl:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:ml-[34px] sml:ml-[20px] sms:ml-[20px] xl:mb-[0px] md:mb-[0px] lg:mb-[0px] sm:mb-[20px] sml:mb-[20px] sms:mb-[20px]"
                    // data-aos="fade-right"
                    // data-aos-offset="400"
                    // data-aos-easing="ease-in-sine"
                    // data-aos-duration="500"
                    data-aos="zoom-in-right"
                  >
                    <img
                      src={roadmapf}
                      className=" rounded-3xl move-roadmapimage"
                    />
                  </div>

                  <div className="w-[16px] h-[16px] z-10 rounded-full  xl:mt-[105px] md:mt-[100px] pt-[] xl:ml-[0px] md:ml-[122px] lg:ml-[160px] sm:ml-[208px] sml:ml-[173px] sms:ml-[154px]  roadmapround bg-[#2166b0] from-[#19c1f2] to-[#19c1f2] "></div>

                  <div className="xl:w-[400px] md:w-[300px] lg:w-[400px] sm:w-[360px]  sml:w-[320px] sms:w-[280px] rounded-2xl py-[30px] text-white flex flex-col justify-center items-center roadmapbox  relative  xl:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:ml-[34px] sml:ml-[20px] sms:ml-[20px] xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[100px] sml:mt-[100px] sms:mt-[100px]">
                    <div>
                      <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[260px] h-[32px]">
                        3rd Quarter 2024
                      </button>
                    </div>
                    <div className="mt-[20px] text-[14px]">
                      <li>Social Media Launching</li>
                      <li>Website Launching</li>
                      <li>Whitepaper</li>
                      <li>Social Media Marketing</li>
                      <li>Community Growth</li>
                    </div>
                    <div className="xl:w-[120px] md:w-[60px] lg:w-[90px]  h-[2px]   absolute xl:left-[-122px] md:left-[-60px] lg:left-[-90px]   bg-[#1f223e]"></div>
                    <div className=" xl:hidden md:hidden lg:hidden sm:block sml:block sms:block w-[2px]   h-[100px]   absolute xl:left-[-122px] md:left-[-60px] lg:left-[-90px] sm:left-[180px] sml:left-[160px] sms:left-[140px] bottom-[220px]   bg-[#1f223e]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-[100px] ">
                <div className=" grid xl:grid-cols-[30%_8%_20%] md:grid-cols-[30%_25%_20%] lg:grid-cols-[30%_25%_20%] xxl:grid-cols-[30%_8%_20%] sm:grid-cols-[99%]  sml:grid-cols-[99%] sms:grid-cols-[99%]  xl:justify-center md:justify-start  xl:p-[0px] md:px-[0px] ">
                  <div className="xl:w-[400px]  md:w-[320px] lg:w-[400px] sm:w-[360px] sml:w-[320px] sms:w-[280px] xl:ml-[0px] md:ml-[10px] sm:ml-[30px] sml:ml-[20px]  sms:ml-[20px]  rounded-2xl py-[30px] text-white flex flex-col justify-center items-center roadmapbox  relative ">
                    <div>
                      <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[260px] h-[32px]">
                        4th Quarter 2024
                      </button>
                    </div>
                    <div className="mt-[20px] text-[14px]">
                      <li>Audit Report</li>
                      <li>KYC Completion & Doxxed Team</li>
                      <li>Website Final Version</li>
                      <li>1st Phase Presale</li>
                      <li>Beta Grabitshop App Version</li>
                      <li>2nd Phase Presale & launching</li>
                    </div>
                    <div className="xl:w-[120px] md:w-[30px] lg:w-[60px]  h-[2px]     absolute xl:right-[-122px] md:right-[-30px] lg:right-[-60px]    bg-[#1f223e]"></div>
                    <div className=" xl:hidden md:hidden lg:hidden sm:block sml:block  sms:block w-[2px]  h-[100px]   absolute xl:left-[-122px] md:left-[-60px] lg:left-[-90px] sm:left-[180px] sml:left-[160px]  sms:left-[140px]  sm:top-[240px] sml:top-[240px] sms:top-[300px]   bg-[#1f223e]"></div>
                  </div>
                  <div className="w-[16px] h-[16px] z-10 rounded-full  xl:mt-[125px] md:mt-[112px]  lg:mt-[125px] sm:mt-[100px] sml:mt-[100px] sms:mt-[100px] xl:ml-[0px] md:ml-[122px] lg:ml-[160px] sm:ml-[203px] sml:ml-[173px] sms:ml-[154px] roadmapround bg-[#2166b0] from-[#19c1f2] to-[#19c1f2] "></div>

                  <div
                    className="xl:w-[400px]  md:w-[300px] lg:w-[400px] sm:w-[360px]  sml:w-[320px] sms:w-[280px] rounded-2xl xl:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:ml-[34px]  sml:ml-[20px] sms:ml-[20px] xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[0px]  sml:mt-[0px]  sms:mt-[0px] "
                    // data-aos="fade-left"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                  >
                    <img
                      src={roadmaps}
                      className=" rounded-3xl move-roadmapimage "
                    />
                  </div>
                </div>
              </div>

              <div className="xl:mt-[100px] md:mt-[100px] lg:mt-[100px] sm:mt-[10px] sml:mt-[10px] sms:mt-[10px]">
                <div className=" grid xl:grid-cols-[30%_8%_20%] md:grid-cols-[30%_25%_20%] lg:grid-cols-[30%_25%_20%] sm:grid-cols-[99%] sml:grid-cols-[99%] sms:grid-cols-[99%]  xl:justify-center md:justify-start  xl:p-[0px] md:p-[0px]  xl:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:ml-[34px] sml:ml-[20px] sms:ml-[20px] xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[100px] sml:mt-[100px] sms:mt-[100px]">
                  <div
                    className="xl:w-[400px]  md:w-[300px] lg:w-[400px] sm:w-[360px] sml:w-[320px] sms:w-[280px] rounded-2xl xl:ml-[0px] md:ml-[20px]"
                    // data-aos="fade-right"
                    // data-aos-offset="400"
                    // data-aos-easing="ease-in-sine"
                    // data-aos-duration="500"
                    data-aos="zoom-in-right"
                  >
                    <img
                      src={roadmapt}
                      className=" rounded-3xl move-roadmapimage"
                    />
                  </div>

                  <div className="w-[16px] h-[16px] z-10 rounded-full  xl:mt-[105px] md:mt-[90px] lg:mt-[104px] sm:mt-[20px] sml:mt-[20px] sms:mt-[20px] xl:ml-[0px] md:ml-[123px] lg:ml-[160px] sm:ml-[173px] sml:ml-[154px] sms:ml-[140px] roadmapround bg-[#2166b0] from-[#19c1f2] to-[#19c1f2] "></div>

                  <div className="xl:w-[400px]  md:w-[300px] lg:w-[400px] sm:w-[360px] sml:w-[320px]  sms:w-[280px] rounded-2xl py-[30px] text-white flex flex-col justify-center items-center roadmapbox  relative xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[105px] sml:mt-[105px] sms:mt-[105px]">
                    <div>
                      <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[260px] h-[32px]">
                        1nd Quarter 2025
                      </button>
                    </div>
                    <div className="mt-[20px] text-[14px] xl:px-[0px] md:px-[20px]">
                      <li>CG & CMC Listing</li>
                      <li>Final Grabit App Version</li>
                      <li>Launch in Playstore & Appstore</li>
                    </div>
                    <div className="xl:w-[120px] md:w-[55px] lg:w-[80px]  h-[2px]   absolute xl:left-[-122px] md:left-[-55px] lg:left-[-80px]  bg-[#1f223e]"></div>
                    <div className=" xl:hidden md:hidden lg:hidden sm:block sml:block sms:block w-[2px]  h-[100px]   absolute xl:left-[-122px] md:left-[-60px] lg:left-[-90px] sm:left-[180px] sml:left-[160px] sms:left-[145px] sm:bottom-[180px]  sml:bottom-[180px] sms:bottom-[200px]   bg-[#1f223e]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-[100px] ">
                <div className=" grid xl:grid-cols-[30%_8%_20%] md:grid-cols-[30%_25%_20%] lg:grid-cols-[30%_25%_20%] sm:grid-cols-[99%] sml:grid-cols-[99%] sms:grid-cols-[99%]  xl:justify-center md:justify-start  xl:p-[0px] md:p-[0px] ">
                  <div className="xl:w-[400px]  md:w-[300px] lg:w-[400px]  sm:w-[360px] sml:w-[320px] sms:w-[280px] xl:ml-[0px] md:ml-[10px]  sm:ml-[30px] sml:ml-[20px] sms:ml-[20px] rounded-2xl py-[30px] text-white flex flex-col justify-center items-center roadmapbox  relative">
                    <div>
                      <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[260px] h-[32px]">
                        2nd Quarter 2025
                      </button>
                    </div>
                    <div className="mt-[20px] text-[14px] xl:px-[0px] md:px-[6px] ">
                      <li>
                        Partnership with Worldwide{" "}
                        <span className="xl:ml-[0px] md:ml-[20px] lg:ml-[0px]  ">
                          Top
                        </span>{" "}
                      </li>
                      <p className="ml-[20px]"> Brand and Bring Together</p>
                      <li>1st Phase Presale</li>

                      <li>More Coming Soon</li>
                    </div>
                    <div className="xl:w-[120px] md:w-[60px] lg:w-[60px]  h-[2px]   absolute xl:right-[-122px] md:right-[-60px] bg-[#1f223e]"></div>
                    <div className=" xl:hidden md:hidden lg:hidden sm:block sml:block sms:block w-[2px]  h-[100px]   absolute xl:left-[-122px] md:left-[-60px] lg:left-[-90px] sm:left-[180px] sml:left-[160px] sms:left-[145px] sm:top-[200px]  sml:top-[200px] sms:top-[220px]  bg-[#1f223e]"></div>
                  </div>
                  <div className="w-[16px] h-[16px] z-10 rounded-full  xl:mt-[124px] md:mt-[100px] lg:mt-[125px] sm:mt-[100px] sml:mt-[100px] sms:mt-[100px] xl:ml-[0px] md:ml-[123px] lg:ml-[160px] sm:ml-[203px] sml:ml-[173px] sms:ml-[159px] roadmapround bg-[#2166b0] from-[#19c1f2] to-[#19c1f2] "></div>

                  <div
                    className="xl:w-[400px]  md:w-[300px] lg:w-[400px] sm:w-[360px] sml:w-[320px] sms:w-[280px] rounded-2xl xl:ml-[0px] md:ml-[0px] lg:ml-[0px] sm:ml-[30px] sml:ml-[20px] sms:ml-[20px] xl:mt-[0px] md:mt-[0px] lg:mt-[0px] sm:mt-[0px] sml:mt-[0px] sms:mt-[0px] "
                    // data-aos="fade-left"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                  >
                    <img
                      src={roadmapl}
                      className=" rounded-3xl move-roadmapimage"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[2px] xl:h-[1040px] md:h-[950px] lg:h-[1020px] border-[#1f223e] border relative  xl:bottom-[1170px] md:bottom-[1060px] lg:bottom-[1160px] xl:left-[890px] md:left-[360px] lg:left-[474px] "></div>
            </div>
          </div>
        </div>
        {/* whitepaper */}

        <div
          className="xl:h-[40vh] md:h-[40vh] lg:h-[40vh] sm:h-[70vh] sml:h-[70vh] sms:h-[70vh] mt-[80px]"
          ref={whitepaperSctionRef}
        >
          {/* <div>
          
            <div className="flex flex-col  items-center justify-center">
              <button className="text-[#2166b0] from-[#19c1f2] to-[#19c1f2] border border-[#2C2F49] rounded-2xl w-[100px] h-[32px]">
                FAQs
              </button>
              <div className="flex  flex-col justify-center items-center text-white text-[40px]">
                <p>Frequently</p>
                <p>Aksed Questions</p>
              </div>
              <p className="text-white text-[12px] mt-[20px]">
                Get the Facts: All About Our Immersive Technology of AR/VR in
                our Grabit Shop
              </p>
             


              <div>
                {Object.keys(faqData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-[250px] hat py-2 mt-5 text-sm rounded-md transition-colors duration-300
            ${
              selectedCategory === category
                ? "bg-[#19c1f2] text-white"
                : "bg-[#ffffff1a] text-white"
            }`}
                  >


                    {category}
                  </button>
                ))}
              </div>





              <div className=" space-y-6">
                {faqData[selectedCategory].map((faq, index) => (
                  <div
                    key={index}
                    className=" border border-[#19c1f2] shadow-[#19c1f2] p-5 rounded-lg mb-5 shadow-sm"
                  >
                    <h3
                      onClick={() => toggleQuestion(selectedCategory, index)}
                      className="text-xl text-white hat font-semibold cursor-pointer flex justify-between"
                    >
                      {faq.question}
                      <span
                        className={`transform transition-transform duration-300 `}
                      >
                        {openQuestions[selectedCategory] === index ? "-" : "+"}
                      </span>
                    </h3>



                    
                    <div
                      className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                        openQuestions[selectedCategory] === index
                          ? "max-h-40"
                          : "max-h-0"
                      }`}
                    >
                      <p className="text-white mt-2">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div className="mt-[160px]">
            <div className="flex justify-center relative ">
              <div className="xl:w-[1000px] md:w-[1000px] lg:w-[1000px] sm:w-[360px] sml:w-[340px] sms:w-[280px] xl:h-[200px] md:h-[200px] lg:h-[200px] sm:h-[660px] sml:h-[660px] sms:h-[660px] rounded-2xl boxfinal p-[40px] border-2 moving ">
                {/* <img src={image18}/> */}
                <div>
                  <p className="text-white text-[26px]">
                    Become a Pioneer in Virtual Finance
                  </p>
                  <p className="text-white text-[12px] mt-[10px]">
                    Invest in the Next Generation of AR/VR Currency and Shape
                    the Future of the Metaverse.
                  </p>
                  <div className="mt-[20px]">
                    <div>
                      <button className=" py-[10px] px-[20px] rounded-xl  text-white buttoncontact moving ">
                        Contact Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" xl:overflow-x-hidden md:overflow-hidden">
                <img
                  src={image28}
                  className=" absolute xl:right-[220px] md:right-[-200px] sm:right-[0px] sml:right-[0px] sms:right-[0px]  bottom-[-60px] move-contactimage   "
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className=" xl:h-[60vh] md:h-[60vh] lg:h-[60vh] sm:h-[50vh] sml:h-[50vh] sms:h-[50vh] xl:mt-[80px] md:mt-[20px] lg:mt-[20px] xxl:mt-[0px] sm:mt-[] sml:mt-[] sms:mt-[] grid  "
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="2000"
        >
          <div></div>
          <div className=" grid  justify-center items-center">
            {/* <div className=" flex items-center mt-[80px] ">
              <img src={image34} className=" rounded-xl move-images " />
            </div>
            <div></div> */}
            <div className=" xl:ml-[40px] md:ml-[40px] lg:ml-[40px] sm:ml-[0px] sml:ml-[0px] sms:ml-[0px] flex flex-col items-center ">
              <div className="text-white flex flex-col justify-center items-center">
                <p className="xl:text-[40px] md:text-[40px] lg:text-[40px] sm:text-[40px] sml:text-[40px] sms:text-[30px]">
                  Whitepaper
                </p>
                <p className="xl:text-[10px] md:text-[10px] lg:text-[10px] sm:text-[10px] sml:text-[10px] sms:text-[16px]">
                  comprehensive overview of the Grabit Shop platform
                </p>
              </div>
              <div className="mt-[10px] border border-[#19c2f4] rounded-xl overflow-hidden moving xl:w-[540px] md:w-[540px] lg:w-[540px] sm:w-[360px] sml:w-[320px] sms:w-[280px]">
                <div className="p-[20px] flex justify-center">
                  <img
                    src={whitepaper}
                    className="rounded-xl imagelast transform  transition-transform duration-300 hover:scale-110 w-[460px] "
                  />
                </div>
              </div>
              <div className="relative ">
                <a
                  href="GrabitShop_WhitePaper_V1.pdf"
                  download="GrabitShop_WhitePaper_V1.pdf"
                >
                  <div className="group bg-[#19c1f2] w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl text-white absolute xl:right-[-200px] md:right-[-200px] lg:right-[-200px] sm:right-[-150px] sml:right-[-140px] sms:right-[-120px] bottom-6 cursor-pointer transition-all duration-300 overflow-hidden hover:w-[160px]">
                    <MdOutlineDownloadForOffline />
                    <span className="hidden ml-3 text-white text-sm font-semibold transition-opacity duration-300 group-hover:block hat">
                      Download
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div>
          <div className="h-[80px] grid items-center xl:grid-cols-[20%_40%_20%] md:grid-cols-[50%_50%] lg:grid-cols-[50%_50%] xxl:grid-cols-[20%_50%_20%] sm:grid-cols-[40%_40%] sml:grid-cols-[40%_40%] sms:grid-cols-[40%_40%] justify-center  xl:ml-[0px] md:ml-[90px] lg:ml-[200px] ">
            <div
              // data-aos="fade-zoom-in"
              // data-aos-easing="ease-in-back"
              // data-aos-delay="400"
              // data-aos-offset="0"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              <img src="https://grabitshop.io/assets/images/logo/logo.png" />
            </div>

            <div className=" xl:flex   md:hidden sm:hidden sml:hidden sms:hidden gap-[40px] font-extrabold text-[14px]">
              <button
                className="text-white hover:text-[#2166b0] hover:from-[#2166b0] hover:to-[#19c1f2]"
                onClick={() => scrollToSection(homeSectionRef)}
              >
                {" "}
                Home
              </button>

              <button
                className="text-white hover:text-[#2166b0] hover:from-[#2166b0] hover:to-[#19c1f2]"
                onClick={() => scrollToSection(aboutSectionRef)}
              >
                About
              </button>
              <button
                className="text-white hover:text-[#2166b0] hover:from-[#2166b0] hover:to-[#19c1f2]"
                onClick={() => scrollToSection(exploreSectionRef)}
              >
                Explore
              </button>
              <button
                className="text-white hover:text-[#2166b0] hover:from-[#2166b0] hover:to-[#19c1f2]"
                onClick={() => scrollToSection(tokenomicsSectionRef)}
              >
                Tokenomics
              </button>
              <button
                className="text-white hover:text-[#2166b0] hover:from-[#2166b0] hover:to-[#19c1f2]"
                onClick={() => scrollToSection(roadMapSectionRef)}
              >
                RoadMap
              </button>
              <button
                className="text-white hover:text-[#2166b0] hover:from-[#2166b0] hover:to-[#19c1f2]"
                onClick={() => scrollToSection(whitepaperSctionRef)}
              >
                Whitepaper
              </button>
            </div>

            <div className="flex flex-row xl:ml-[80px] md:ml-[80px] lg:ml-[80px] sm:ml-[20px] sml:ml-[20px]  sms:ml-[20px] ">
              <div
                className="w-[40px] h-[40px] border-2 border-[#1f223e] rounded-full  ml-[20px]  text-white flex justify-center items-center icon "
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <FaLinkedinIn />
              </div>

              <div
                className="w-[40px] h-[40px] border-2 border-[#1f223e] rounded-full   text-white flex justify-center items-center ml-[20px] icon"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <FaTelegramPlane />
              </div>

              <div
                className="w-[40px] h-[40px] border-2     border-[#1f223e] rounded-full  text-white flex justify-center items-center ml-[20px] icon"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="500"
              >
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        {/* bottom to top button */}
        <div>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-10 xl:right-10 md:right-[20px] sm:right-[20px] sml:right-[20px] sms:right-[20px] text-[26px] p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-700 transition-all"
              style={{ zIndex: 1000 }}
            >
              <RiArrowUpDoubleFill />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
