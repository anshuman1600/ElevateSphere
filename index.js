const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");
const server = http.createServer(app);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());

app.use("/client_form", require("./router/Client_form_router"));
app.use("/training_form", require("./router/training_form_router"));
app.use("/contact_us_training", require("./router/contact_us_training_router"));
app.use("/contact_us_client", require("./router/contact_us_client_router"));
app.use("/service_form", require("./router/service_form_router"));


// Path: index.js


// Meta Tag Data Filling

const Meta_Tag = [
  // meta 1
  {
    page: "home",
    pg_title: "Best IT Company in Lucknow - Moundweb IT & Web Development ",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is the Best IT Company in Lucknow. We are a Top-Rated, 6+ yrs old IT Company in India. For more Business and related Query Feel Free to contact Us.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
  },
  //meta 2
  {
    page: "about",
    pg_title: "About Us - Best IT Company in Lucknow ",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is one of the best IT Company in Lucknow. We are the best IT & Software Company in Lucknow. We are the top-rated, 15+ Yrs old IT Company in India.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
  },
  //meta 3
  {
    page: "contact",
    pg_title: "Contact Us - Moundweb IT & Web Development",
    meta_1: {
        name: "description",
        content:
          "Moundweb IT & Web Solutions is one of the best IT Company in Lucknow. We are the best IT & Software Company in Lucknow. We are the top-rated, 15+ Yrs old IT Company in India.",
      },
      meta_2: {
        name: "keywords",
        content:
          "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
      },
    },
    // meta 4
    {
      page: "graphic Design",
      pg_title: "Best Graphic Designing Company in Lucknow - Moundweb IT & Web Development  ",
      meta_1: {
        name: "description",
        content:
          "Moundweb IT & Web Solutions is one of the best Graphic Designing Company in Lucknow. We are the best IT & Graphic Designing Company in Lucknow. We are the top-rated, 15+ Yrs old IT Company in India.",
      },
      meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
  },
  // meta 5
  {
    page: "Digital Marketing Course",
    pg_title: "Digital Marketing - Moundweb IT & Web Development",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is one of the best IT Company in Lucknow. We are the best IT & Graphic Designing Company in Lucknow. We are the top-rated, 15+ Yrs old IT Company in India.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
  },
  // meta 6
  {
    page: "Website Development Course" ,
    pg_title: "Website Development Course - Moundweb IT & Web Development",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is one of the best IT Company in Lucknow. We are the best IT & Graphic Designing Company in Lucknow. We are the top-rated, 15+ Yrs old IT Company in India.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
  },
  // meta 7
  {
    page: "Influencer Marketing" ,
    pg_title: "Influencer Marketing Company - Moundweb IT & Web Development",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is one of the best IT Company in Lucknow. We are the best IT & Influencer Marketing Company in Lucknow. We are the top-rated, 15+ Yrs old IT Company in India.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
  },
  {
    page: "Web Development Services" ,
    pg_title: "Best Website Development Company in Lucknow - Moundweb IT &amp; Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Are you Looking for a Website Development Company in Lucknow? Moundweb IT &amp; Web Solutions is a leading web Development Company in Lucknow, India. For more Information you can contact us.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
  },
  // meta 8
];

// Service Page Dynamic Data Filling

const Development = [
  //1. Website development
  {
   pg_title:
      "Best Website Development Company in Lucknow - Moundweb IT & Web Solutions",
    type: "Development",
    meta_1: {
      name: "description",
      content:
        "Are you Looking for a Website Development Company in Lucknow? Moundweb IT & Web Solutions is a leading web Development Company in Lucknow, India. For more Information you can contact us.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Website Development",
    title: "Best Website Development Company in Lucknow",
    hero_image: "images/banner/banner_web.png",
    description_title: "Best Website Development Company in Lucknow",
    description_desc:
      " Searching For the  Best Website Development Service in Lucknow  To Create a Modern Website For Your Business or Startup? Take Quick Action And Hire Moundweb IT & Web Solutions - A Leading Website Development Company in Lucknow For The Best Website Development Services At Affordable Prices.",
    description_image: "images/common/Web/desc-image.png",
    tagline: "Web Design",
    advantage_title: "Advantages of Website Development Services in Lucknow",
    advantage_desc:
      " A website is a powerful tool for any business. It can be used to generate leads, increase sales, and build brand awareness. But it's not enough to just have a website - you need one that is optimized for search engines and mobile devices. That's where we come in! We offer website development services in Lucknow that will help your business grow online. Our team of experts will work with you every step of the way to ensure that your website is designed to meet your needs and goals. We'll also provide ongoing support so you can focus on running your business instead of worrying about technical issues.",
    advantage_tagline: "Advantages of Website Development Services in Lucknow",
    advantage_card: [
      " Analyse your business needs and goals",
      "Create a website that is optimized for search engines and mobile devices",
      "Provide ongoing support so you can focus on running your business instead of worrying about technical issues",
      "Help you grow your business online with our website development services in Lucknow",
      "A good website design is an ideal tool for business to help increase their sales and revenue.",
    ],
    price_table_title: "Website Development Packages",
    price_table_desc:
      " We offer a wide range of website development packages to suit your needs. Our packages are designed to be affordable and flexible, so you can get the best value for your money. Whether you're looking for a simple website or an e-commerce site, we have the perfect package for you!",
    price_table_card: [
      {
        title: "★ Startup",
        description: "Website Development",
        image: "images/icons/plan-1.svg",
        rate: "₹ 10,000/$ 122",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 5 pages",
          " ✔ Logo",
          " ✔ Slider",
          " ✔ Dynamic Website",
          " ✔ Domain-1st Year Free",
          " ✔ Hosting Free For 1st Year",
          " ✔ 1 Email – 500 MB Quota",
          " ✔ 1 Contact Form",
          " ✔ Free SSL",
          " ✔ Testimonials",
          " ✔ Gallery Section",
          " ✔ Chat Feature",
          " ✔ 300 Rs/Extra Page",
          " ✔ 200 Rs – Content/Page",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ Click to Call/Email",
          " ✔ Mobile Responsive",
          " ✔ Easy to Edit",
          " ✔ Login Details Will Be Given",
          " ✔ Delivery in 5 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " ✔ × Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
        ],
        button: "bg-btn",
      },
      {
        title: "➚Growth",
        description: "Website Development",
        image: "images/icons/plan-2.svg",
        rate: "₹ 15,000/$ 183",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 10 pages",
          " ✔ Logo",
          " ✔ Slider",
          " ✔ Dynamic Website",
          " ✔ Domain-1st Year Free",
          " ✔ Hosting Free For 1st Year",
          " ✔ 2 Email – 500 MB Quota",
          " ✔ 1 Contact Form",
          " ✔ Free SSL",
          " ✔ Testimonials",
          " ✔ Gallery Section",
          " ✔ Chat Feature",
          " ✔ 300 Rs/Extra Page",
          " ✔ 200 Rs – Content/Page",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ Click to Call/Email",
          " ✔ Mobile Responsive",
          " ✔ Easy to Edit",
          " ✔ Login Details Will Be Given",
          " ✔ Delivery in 10 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " ✔ Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕Premium",
        description: "Website Development",
        image: "images/icons/plan-3.svg",
        rate: "₹25,000/$ 305",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 20 pages",
          " ✔ Up to 50 Products",
          " ✔ Logo",
          " ✔ Contact Form – 3",
          " ✔ 5 Email – 500 MB Quota",
          " ✔ Content – Free",
          " ✔ 300 Rs/Extra Page",
          " ✔ WhatsApp Chat Integration",
          " ✔ Social Media Profiles Integration",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ WordPress Login Details Will be Given",
          " ✔ Payment Gateway",
          " ✔ Revisions – 2",
          " ✔ Extra Support – 500 Rs/Hour",
          " ✔ Call/Email/Chat Support",
          " ✔ Delivery in 15 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " ✔ Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
          " ✔ Mobile Responsive",
          " ✔ Easy to Edit",
          " ✔ Login Details Will Be Given",
          " ✔ Delivery in 15 Days",
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Website Development Process",
    process_desc:
      "We have a team of highly skilled professionals having good expertise in website development services in Lucknow. We have worked with various successful startups and large-scale enterprises and delivered world class website design services across various industries.",
    process_card: [
      {
        title: "Analysis",
        content:
          "Our analysis process for web development includes understanding client requirements, identifying target audience, conducting market research, creating sitemaps, wireframing and prototyping. It also includes assessing the technology stack, determining functionality, defining content strategy, and establishing project timelines. Testing, feedback incorporation and optimization complete the analysis phase.",
        image: "images/common/Web/process-1.webp",
      },
      {
        title: "Planning",
        content:
          "Our planning process for web development includes defining project goals, setting project scope, creating a project timeline, allocating resources, and establishing a communications plan. It also involves conducting research, defining user personas, outlining website structure, and creating a content strategy. Documentation and stakeholder alignment are essential during the planning phase.",
        image: "images/common/Web/process-2.webp",
      },
      {
        title: "Design",
        content:
          "Our design process for web development includes gathering client requirements, creating wireframes and mockups, selecting a color scheme and typography, designing a user interface, and creating visual elements. This includes creating responsive layouts, ensuring accessibility, and optimizing for a smooth user experience. Iterative design, feedback and refinement are key components.",
        image: "images/common/Web/process-3.webp",
      },
      {
        title: "Development",
        content:
          "Our development process for web development includes requirements gathering, designing user interface, coding, integrating back-end functionality, and implementing front-end design. It involves using programming languages, frameworks, and databases to build the website, followed by testing, bug fixing, and deployment to ensure a functional and reliable web application.",
        image: "images/common/Web/process-4.webp",
      },
      {
        title: "Testing",
        content:
          "Our testing process for web development includes creating test cases based on project requirements, performing functional and usability testing, checking cross-browser compatibility, performing performance testing, and ensuring responsive design. This includes bug tracking, regression testing, user acceptance testing, and validating accessibility standards to ensure a high-quality and error-free website.",
        image: "images/common/Web/process-5.webp",
      },
      {
        title: "Deployment",
        content:
          "Our deployment process for web development includes configuring the hosting environment, setting up servers, deploying code and databases, ensuring compatibility across browsers and devices, taking security measures, and optimizing performance. This also includes monitoring for issues, testing after deployment, and applying updates or bug fixes as needed.",
        image: "images/common/Web/process-6.webp",
      },
      {
        title: "Maintenance",
        content:
          "Our maintenance process for web development includes monitoring website performance, addressing bugs and issues, implementing security updates, optimizing site speed, managing content updates, and ensuring compatibility across browsers and devices. Regular backups, software updates, and user support are vital to maintaining a secure and functioning website.",
        image: "images/common/Web/process-7.webp",
      },
    ],
    why_us: "Why Choice Moundweb As A Best Web Development Company?",
    why_us_desc:
      " A leading website development company in Lucknow for top-rated mobile responsive and SEO friendly website development services in Lucknow. Our website development services are designed to help businesses of all types, create a professional and effective digital presence. Our expert team of developers has years of experience building custom websites that are tailored to our client's specific needs and goals. We used latest technologies and best practices to ensure that your website is fast, secure, and optimized for search engines and users also.",
    our_project_desc:
      "Welcome to Lucknow's No.1 website development company. With our expertise in website development, we help businesses like yours thrive in the digital world. Moundweb is the best web development company in Lucknow.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },

    ],
  },
  //2. App Development
  {
    type: "Development",
    pg_title:
      "Mobile App Development Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Are you looking for the best mobile app development company in Lucknow? Moundweb IT & Web Solutions is a leading App development company in Lucknow, India. We provide App Development Services across India at Affordable Price.0.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "App Development",
    title: "Top Leading Mobile App Development Company",
    hero_image: "images/banner/banner_app.png",
    description_title: "Best Mobile App Development Company in Lucknow",
    description_desc:
      "If you Searching for the best Mobile App Development Company in Lucknow you can visit Moundweb IT & Web Solutions. The importance of mobile applications is quite evident in today's time. Everyone who uses a smartphone or tablet spends a major part of their daily life fiddling with these gadgets. In fact, the popularity of smartphones is finding new markets with increasing recognition in developing and less-developed countries. For many, mobile applications are a necessity that make important daily tasks extremely convenient for users.",
    description_image: "images/common/App/app-develops.png",
    advantage_title: "Advantages of App Development Services",
    advantage_desc:
      " App development offers numerous advantages in today's digital landscape. Firstly, it provides businesses with a powerful tool to engage and connect with their customers. Mobile apps allow companies to establish direct communication channels, enabling personalized interactions and targeted marketing campaigns. By offering value-added features and functionalities, apps enhance customer experience and build brand loyalty ",
    advantage_tagline: "Advantages of Mobile App  Development Services",
    advantage_card: [
      " Analyse your business needs and goals ",
      " Create a mobile apps that is optimized for devices ",
      "Provide ongoing support so you can focus on running your business instead of worrying about technical issues",
      "Help you grow your business online with our app development services in Lucknow",
    ],
    tagline: "App Design",
    price_table_title: "Mobile App Development Packages",
    price_table_desc:
      "We offer a wide range of mobile app development packages to suit your needs. Our packages are designed to be affordable and flexible, so you can get the best value for your money. Whether you're looking for a simple mobile or complex app, we have the perfect package for you!",
    price_table_card: [
      {
        title: "★ Startup",
        description: "App Development",
        image: "images/icons/plan-1.svg",
        rate: "₹ 10,000/$ 122",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 5 pages",
          " ✔ Logo",
          " ✔ Slider",
          " ✔ 1 Email – 500 MB Quota",
          " ✔ 1 Contact Form",
          " ✔ Free SSL",
          " ✔ Testimonials",
          " ✔ Gallery Section",
          " ✔ Chat Feature",
          " ✔ 300 Rs/Extra Page",
          " ✔ 200 Rs – Content/Page",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ Click to Call/Email",
          " ✔ Easy to Edit",
          " ✔ Native App",
          " ✔ Login Details Will Be Given",
          " ✔ Delivery in 8 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " × Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Growth",
        description: "App Development",
        image: "images/icons/plan-2.svg",
        rate: "₹ 15,000/$ 183",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 10 pages",
          " ✔ Logo",
          " ✔ Slider",
          " ✔ 2 Email – 500 MB Quota",
          " ✔ 1 Contact Form",
          " ✔ Free SSL",
          " ✔ Testimonials",
          " ✔ Gallery Section",
          " ✔ 300 Rs/Extra Page",
          " ✔ 200 Rs – Content/Page",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ Click to Call/Email",
          " ✔ Hybrid App",
          " ✔ Easy to Edit",
          " ✔ Easy to Edit",
          " ✔ Login Details Will Be Given",
          " ✔ Delivery in 13 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " ✔ Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕Premium",
        description: "Website Development",
        image: "images/icons/plan-3.svg",
        rate: "₹25,000/$ 305",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 20 pages",
          " ✔ Up to 50 Products",
          " ✔ Logo",
          " ✔ Contact Form – 3",
          " ✔ 5 Email – 500 MB Quota",
          " ✔ Content – Free",
          " ✔ 300 Rs/Extra Page",
          " ✔ WhatsApp Chat Integration",
          " ✔ Social Media Profiles Integration",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ Payment Gateway",
          " ✔ Extra Support – 500 Rs/Hour",
          " ✔ Call/Email/Chat Support",
          " ✔ Delivery in 21 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " ✔ Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
          " ✔ Hybrid App",
          " ✔ Easy to Edit",
          " ✔ Login Details Will Be Given",
          " ✔ Open Source Code Will Be Given ",
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Mobile App Development Process",
    process_desc:
      " Our team of highly skilled professionals in Lucknow is dedicated to providing exceptional app development services. With extensive expertise in the field, we have successfully collaborated with numerous startups and large-scale enterprises, delivering world-class app design services across diverse industries. ",
    process_card: [
      {
        title: "Analysis",
        content:
          "Our analysis process for mobile app development includes understanding client requirements, identifying target audience, conducting market research, creating sitemaps, wireframing and prototyping. It also includes assessing the technology stack, determining functionality, defining content strategy, and establishing project timelines. Testing, feedback incorporation and optimization complete the analysis phase.",
        image: "images/common/App/process-1.webp",
      },
      {
        title: "Planning",
        content:
          "Our planning process for mobile app development includes defining project goals, setting project scope, creating a project timeline, allocating resources, and establishing a communications plan. It also involves conducting research, defining user personas, outlining website structure, and creating a content strategy. Documentation and stakeholder alignment are essential during the planning phase.",
        image: "images/common/App/process-2.webp",
      },
      {
        title: "Design",
        content:
          "Our design process for mobile app development includes gathering client requirements, creating wireframes and mockups, selecting a color scheme and typography, designing a user interface, and creating visual elements. This includes creating responsive layouts, ensuring accessibility, and optimizing for a smooth user experience. Iterative design, feedback and refinement are key components.",
        image: "images/common/App/process-3.webp",
      },
      {
        title: "Development",
        content:
          "Our development process for mobile app development includes requirements gathering, designing user interface, coding, integrating back-end functionality, and implementing front-end design. It involves using programming languages, frameworks, and databases to build the website, followed by testing, bug fixing, and deployment to ensure a functional and reliable web application.",
        image: "images/common/App/process-4.webp",
      },
      {
        title: "Testing",
        content:
          "Our testing process for mobile app development includes creating test cases based on project requirements, performing functional and usability testing, checking cross-browser compatibility, performing performance testing, and ensuring responsive design. This includes bug tracking, regression testing, user acceptance testing, and validating accessibility standards to ensure a high-quality and error-free website.",
        image: "images/common/App/process-5.webp",
      },
      {
        title: "Deployment",
        content:
          "Our deployment process for mobile app development includes configuring the hosting environment, setting up servers, deploying code and databases, ensuring compatibility across browsers and devices, taking security measures, and optimizing performance. This also includes monitoring for issues, testing after deployment, and applying updates or bug fixes as needed.",
        image: "images/common/App/process-6.webp",
      },
      {
        title: "Maintenance",
        content:
          "Our maintenance process for mobile app development includes monitoring website performance, addressing bugs and issues, implementing security updates, optimizing site speed, managing content updates, and ensuring compatibility across browsers and devices. Regular backups, software updates, and user support are vital to maintaining a secure and functioning website.",
        image: "images/common/App/process-7.webp",
      },
    ],
    why_us: "Why Choice Moundweb As A Best Mobile App Development Company?",
    why_us_desc:
      " Our experts know every nook and corner of the Android/iOS app development platform. We are a leading Mobile App Development Company in Lucknow helping startups and businesses develop robust custom Android/iOS applications.",
    our_project_desc:
      "Welcome to Lucknow's No.1 mobile app development company. With our expertise in mobile app development, we help businesses like yours thrive in the digital world. Moundweb is the best mobile app development company in Lucknow.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },

    ],
  },
  //3. Blockchain Development
  {
    type: "Development",
    pg_title:
      "Best Blockchain Development Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Looking For The Best Blockchain Development Company in Lucknow? Moundweb is the Best Blockchain Development Company in Lucknow. We provide the best Blockchain Development services.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Blockchain Development",
    title: "Top Leading Blockchain  Development Company",
    hero_image: "images/banner/2.jpg",
    description_title: "Best Blockchain Development Company in Lucknow",
    description_desc:
      "Looking For Best Blockchain Development Company in Lucknow? Moundweb is the best Blockchain Development Company in Lucknow. Moundweb provides best Blockchain development services help to create decentralized apps that provide increased traceability and security of data and transactions. Get exclusive solutions using our blockchain app development services. Equip your business with a secure, decentralized and immutable blockchain solution. We help startup's, businesses and enterprises develop more efficient and automated versions of their business with our broad spectrum of blockchain development services. As a leading blockchain development company in Lucknow, we begin by thoroughly examining how blockchain development technology can help your organization and enhance organizational trust and transparency.",
    description_image: "images/common/Blockchain/desc-image.webp",
    advantage_title: "Advantages of Blockchain Development Services in Lucknow",
    advantage_desc:
      " Blockchain development refers to the process of creating and implementing applications, protocols, and solutions based on blockchain technology. Blockchain is a decentralized and distributed ledger technology that allows for secure and transparent recording and verification of transactions across multiple participants in a network.",
    advantage_tagline:
      "Advantages of Blockchain Development Services in Lucknow",
    advantage_card: [
      "Immutable and tamper-proof records for enhanced data integrity",
      "Streamlined financial processes with efficient peer-to-peer transactions and smart contracts.",
      "Supply chain transparency through end-to-end traceability and authentication.",
      "Improved data privacy and security through encrypted transactions and decentralized networks.",
    ],
    tagline: "Blockchain Design",
    price_table_title: "Blockchain Development Packages",
    price_table_desc:
      "We provide an extensive array of blockchain development packages tailored to meet your specific requirements. Our packages are carefully crafted to offer affordability and flexibility, ensuring that you receive the utmost value for your investment. Whether you need a straightforward blockchain solution or a sophisticated decentralized application, we have the ideal package to cater to your needs seamlessly.",
    price_table_card: [
      {
        title: "★ Startup",
        description: "BlockChain Development",
        image: "images/icons/plan-1.svg",
        rate: "₹ 10,000/$ 122",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 5 pages",
          " ✔ Logo",
          " ✔ Slider",
          " ✔ Dynamic Website",
          " ✔ Domain-1st Year Free",
          " ✔ Hosting Free For 1st Year",
          " ✔ 1 Email – 500 MB Quota",
          " ✔ 1 Contact Form",
          " ✔ Free SSL",
          " ✔ Testimonials",
          " ✔ Gallery Section",
          " ✔ Chat Feature",
          " ✔ 300 Rs/Extra Page",
          " ✔ 200 Rs – Content/Page",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ Click to Call/Email",
          " ✔ Mobile Responsive",
          " ✔ Easy to Edit",
          " ✔ Login Details Will Be Given",
          " ✔ Delivery in 7 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " ✔ × Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Growth",
        description: "BlockChain Development",
        image: "images/icons/plan-2.svg",
        rate: "₹ 15,000/$ 183",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 10 pages",
          " ✔ Logo",
          " ✔ Slider",
          " ✔ Dynamic Website",
          " ✔ Domain-1st Year Free",
          " ✔ Hosting Free For 1st Year",
          " ✔ 2 Email – 500 MB Quota",
          " ✔ 1 Contact Form",
          " ✔ Free SSL",
          " ✔ Testimonials",
          " ✔ Gallery Section",
          " ✔ Chat Feature",
          " ✔ 300 Rs/Extra Page",
          " ✔ 200 Rs – Content/Page",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ Click to Call/Email",
          " ✔ Mobile Responsive",
          " ✔ Easy to Edit",
          " ✔ Login Details Will Be Given",
          " ✔ Delivery in 13 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " ✔ Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕ Premium",
        description: "BlockChain Development",
        image: "images/icons/plan-3.svg",
        rate: "₹25,000/$ 305",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Upto 20 pages",
          " ✔ Up to 50 Products",
          " ✔ Logo",
          " ✔ Contact Form – 3",
          " ✔ 5 Email – 500 MB Quota",
          " ✔ Content – Free",
          " ✔ 300 Rs/Extra Page",
          " ✔ WhatsApp Chat Integration",
          " ✔ Social Media Profiles Integration",
          " ✔ Social Profile Link",
          " ✔ Facebook Page Creation",
          " ✔ WordPress Login Details Will be Given",
          " ✔ Payment Gateway",
          " ✔ Revisions – 2",
          " ✔ Extra Support – 500 Rs/Hour",
          " ✔ Call/Email/Chat Support",
          " ✔ Delivery in 15 Days",
          " ✔ Renewal – 2000 Rs + Domain Price Plus GST",
          " ✔ Free 4 Hours Support",
          " ✔ Support – 500 Rs/Hr",
          " ✔ Mobile Responsive",
          " ✔ Easy to Edit",
          " ✔ Login Details Will Be Given",
          " ✔ Delivery in 15 Days",
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Blockchain Development Process",
    process_desc:
      " Our team of highly skilled professionals in Lucknow is dedicated to providing exceptional app development services. With extensive expertise in the field, we have successfully collaborated with numerous startups and large-scale enterprises, delivering world-class app design services across diverse industries. ",
    process_card: [
      {
        title: "Analysis",
        content:
          "Our analysis process for Blockchain development includes understanding client requirements, identifying target audience, conducting market research, creating sitemaps, wireframing and prototyping. It also includes assessing the technology stack, determining functionality, defining content strategy, and establishing project timelines. Testing, feedback incorporation and optimization complete the analysis phase.",
        image: "images/common/Web/process-1.webp",
      },
      {
        title: "Planning",
        content:
          "Our planning process for Bloclchain development includes defining project goals, setting project scope, creating a project timeline, allocating resources, and establishing a communications plan. It also involves conducting research, defining user personas, outlining website structure, and creating a content strategy. Documentation and stakeholder alignment are essential during the planning phase.",
        image: "images/common/Web/process-2.webp",
      },
      {
        title: "Design",
        content:
          "Our design process for Blockchain development includes gathering client requirements, creating wireframes and mockups, selecting a color scheme and typography, designing a user interface, and creating visual elements. This includes creating responsive layouts, ensuring accessibility, and optimizing for a smooth user experience. Iterative design, feedback and refinement are key components.",
        image: "images/common/Web/process-3.webp",
      },
      {
        title: "Development",
        content:
          "Our development process Blockchain app development includes requirements gathering, designing user interface, coding, integrating back-end functionality, and implementing front-end design. It involves using programming languages, frameworks, and databases to build the website, followed by testing, bug fixing, and deployment to ensure a functional and reliable web application.",
        image: "images/common/Web/process-4.webp",
      },
      {
        title: "Testing",
        content:
          "Our testing process for Blockchain development includes creating test cases based on project requirements, performing functional and usability testing, checking cross-browser compatibility, performing performance testing, and ensuring responsive design. This includes bug tracking, regression testing, user acceptance testing, and validating accessibility standards to ensure a high-quality and error-free website.",
        image: "images/common/Web/process-5.webp",
      },
      {
        title: "Deployment",
        content:
          "Our deployment process for Blockchain development includes configuring the hosting environment, setting up servers, deploying code and databases, ensuring compatibility across browsers and devices, taking security measures, and optimizing performance. This also includes monitoring for issues, testing after deployment, and applying updates or bug fixes as needed.",
        image: "images/common/Web/process-6.webp",
      },
      {
        title: "Maintenance",
        content:
          "Our maintenance process for Blockchain development includes monitoring website performance, addressing bugs and issues, implementing security updates, optimizing site speed, managing content updates, and ensuring compatibility across browsers and devices. Regular backups, software updates, and user support are vital to maintaining a secure and functioning website.",
        image: "images/common/Web/process-7.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Blockchain Development Company?",
    why_us_desc:
      " We believe in providing guaranteed results, no matter how complex your project may be. We practice what we preach and deliver what we commit to you. Moundweb offers the first some days of services completely free of cost. During this period, your team gets a chance to observe Modweb's team work and communication strategy. As a blockchain development service provider, we ensure to provide custom made services using state-of-the-art technology. Working with a blockchain software development company like Moundway will change the face of your company.",
    our_project_desc:
      "Welcome to Lucknow's No.1 Blockchain development company. With our expertise in Blockchain development, we help businesses like yours thrive in the digital world. Moundweb is the best Blockchain development company in Lucknow.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },

    ],
  },
  //4. Software Development
  {
    type: "Development",
    pg_title:
      "Best Software Development Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "If You Looking For The Best Software Development Company in Lucknow, you can visit Moundweb. We provide ERP, Microfinance Accounting, Billing Software in Lucknow.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Software Development",
    title: "Top Software Development Company in Lucknow",
    hero_image: "images/banner/banner_softd.png",
    description_title: "Best Software Development Company in Lucknow",
    description_desc:
      "Moundweb is the best Software Development Company in Lucknow. We Provide Best Software Services in Lucknow. We have the best team for software development in Lucknow. We provide best Software development services across Globally.At MoundWeb, we've always been proud to believe in your company and share your vision. At Moundweb, we believe that there is tremendous potential in your business venture, regardless of the scale of your operations or other factors that determine the success of your Lucknow based business. Our business aim is to make your business successful. We strive to create software that can grow your business by combining our latest development and design techniques with your business principles. Moundweb is one of  the best software development Company in Lucknow.",
    description_image: "images/common/Software/desc-image.png",
    advantage_title: "Advantages of Software Development Services",
    advantage_desc:
      "Software development provides businesses with a wide range of advantages in today's technology-driven world. One key advantage is customization. Unlike off-the-shelf software solutions, custom software development allows businesses to create tailored solutions that precisely meet their unique needs and requirements. This customization provides a competitive edge by enabling businesses to address specific pain points, optimize processes, and differentiate themselves in the market.",
    advantage_tagline: "Advantages of Software Development Services",
    advantage_card: [
      " Customization: Tailored software solutions that meet specific business needs.",
      "Efficiency and Automation: Streamlined processes and automated tasks for increased productivity.",
      "Scalability: Ability to accommodate growth and expansion without disruptions.",
      "Integration: Seamless integration with existing systems for efficient data exchange.",
    ],
    tagline: "Software Design",
    price_table_title: "Software Development Packages",
    price_table_desc:
      "We offer a wide range of software development packages to suit your needs. Our packages are designed to be affordable and flexible, so you can get the best value for your money. Whether you're looking for a simple software or complex software, we have the perfect package for you!",
    price_table_card: [
      {
        title: "★Startup",
        description: "Website Development",
        image: "images/icons/plan-1.svg",
        rate: "₹ 10,000/$ 122",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 5 pages",
          "Logo",
          "Slider",
          "Dynamic Website",
          "Domain-1st Year Free",
          "Hosting Free For 1st Year",
          "1 Email – 500 MB Quota",
          "1 Contact Form",
          "Free SSL",
          "Testimonials",
          "Gallery Section",
          "Chat Feature",
          "300 Rs/Extra Page",
          "200 Rs – Content/Page",
          "Social Profile Link",
          "Facebook Page Creation",
          "Click to Call/Email",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 5 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "× Free 4 Hours Support",
          "Support – 500 Rs/Hr",
        ],
        button: "bg-btn",
      },
      {
        title: "➚Growth",
        description: "Website Development",
        image: "images/icons/plan-2.svg",
        rate: "₹ 15,000/$ 183",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 10 pages",
          "Logo",
          "Slider",
          "Dynamic Website",
          "Domain-1st Year Free",
          "Hosting Free For 1st Year",
          "2 Email – 500 MB Quota",
          "1 Contact Form",
          "Free SSL",
          "Testimonials",
          "Gallery Section",
          "Chat Feature",
          "300 Rs/Extra Page",
          "200 Rs – Content/Page",
          "Social Profile Link",
          "Facebook Page Creation",
          "Click to Call/Email",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 10 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "Free 4 Hours Support",
          "Support – 500 Rs/Hr",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕Premium",
        description: "Website Development",
        image: "images/icons/plan-3.svg",
        rate: "₹25,000/$ 305",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 20 pages",
          "Up to 50 Products",
          "Logo",
          "Contact Form – 3",
          "5 Email – 500 MB Quota",
          " Content – Free",
          "300 Rs/Extra Page",
          "WhatsApp Chat Integration",
          "Social Media Profiles Integration",
          "Social Profile Link",
          "Facebook Page Creation",
          " WordPress Login Details Will be Given",
          "Payment Gateway",
          "Revisions – 2",
          "Extra Support – 500 Rs/Hour",
          "Call/Email/Chat Support",
          "Delivery in 15 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "Free 4 Hours Support",
          "Support – 500 Rs/Hr",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 15 Days",


        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Software Development Process",
    process_desc:
      " We understand that every business is unique in many ways, hence we focus on developing a tailored strategy for your business venture in Lucknow. This MoundWeb strategy incorporates your company's strengths and values as well as our experience and expertise in development and marketing processes. The result obtained in the end is a successful business that is highly susceptible to further growth. ",
    process_card: [
      {
        title: "Analysis",
        content:
          "Our analysis process for software development includes understanding client requirements, identifying target audience, conducting market research, creating sitemaps, wireframing and prototyping. It also includes assessing the technology stack, determining functionality, defining content strategy, and establishing project timelines. Testing, feedback incorporation and optimization complete the analysis phase.",
        image: "images/common/App/process-1.webp",
      },
      {
        title: "Planning",
        content:
          "Our planning process for software development includes defining project goals, setting project scope, creating a project timeline, allocating resources, and establishing a communications plan. It also involves conducting research, defining user personas, outlining website structure, and creating a content strategy. Documentation and stakeholder alignment are essential during the planning phase.",
        image: "images/common/App/process-2.webp",
      },
      {
        title: "Design",
        content:
          "Our design process for software development includes gathering client requirements, creating wireframes and mockups, selecting a color scheme and typography, designing a user interface, and creating visual elements. This includes creating responsive layouts, ensuring accessibility, and optimizing for a smooth user experience. Iterative design, feedback and refinement are key components.",
        image: "images/common/App/process-3.webp",
      },
      {
        title: "Development",
        content:
          "Our development process for software development includes requirements gathering, designing user interface, coding, integrating back-end functionality, and implementing front-end design. It involves using programming languages, frameworks, and databases to build the website, followed by testing, bug fixing, and deployment to ensure a functional and reliable web application.",
        image: "images/common/App/process-4.webp",
      },
      {
        title: "Testing",
        content:
          "Our testing process for software development includes creating test cases based on project requirements, performing functional and usability testing, checking cross-browser compatibility, performing performance testing, and ensuring responsive design. This includes bug tracking, regression testing, user acceptance testing, and validating accessibility standards to ensure a high-quality and error-free website.",
        image: "images/common/App/process-5.webp",
      },
      {
        title: "Deployment",
        content:
          "Our deployment process for software development includes configuring the hosting environment, setting up servers, deploying code and databases, ensuring compatibility across browsers and devices, taking security measures, and optimizing performance. This also includes monitoring for issues, testing after deployment, and applying updates or bug fixes as needed.",
        image: "images/common/App/process-6.webp",
      },
      {
        title: "Maintenance",
        content:
          "Our maintenance process for software development includes monitoring website performance, addressing bugs and issues, implementing security updates, optimizing site speed, managing content updates, and ensuring compatibility across browsers and devices. Regular backups, software updates, and user support are vital to maintaining a secure and functioning website.",
        image: "images/common/App/process-7.webp",
      },
    ],
    why_us: "Why Choice Moundweb As A Best Software Development Company?",
    why_us_desc:
      "After years in the industry, we have accumulated valuable knowledge that has given me a better understanding of the dynamics of online marketing. This is the valuable experience we bring to the fore as you develop your business strategy and incorporate it into your daily operations for success. As a result, your Lucknow based company will be able to compete. ",
    our_project_desc:
      "Welcome to Lucknow's No.1 software development company. With our expertise in mobile app development, we help businesses like yours thrive in the digital world. Moundweb is the best software development company in Lucknow.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },

    ],
  },
  //5. E-commerce Development
  {
    type: "Development",
    pg_title:
      "Best E-commerce Website Development Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is the Most Trusted E-commerce Website Development Company in Lucknow. We provide expert E-commerce website development services to help businesses thrive online.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "E-commerce Development",
    title: "E-Commerce Website Development Company in Lucknow",
    hero_image: "images/banner/8.jpg",
    description_title:
      "Best E-commerece Website Development Company in Lucknow",
    description_desc:
      " Moundweb is a leading E-Commerce website development company in Lucknow running since last 15 years. Company has great experience to customised E-Commerce website development services in Lucknow. Company has served more than 10 thousands of clients across  India. Moundweb provides innovative web related services including website design services in Lucknow, E-Commerce Website Development Services Lucknow, Mobile App Development, Website Hosting, SEO (Search Engine Optimization) services in Lucknow and Digital Marketing Services in Lucknow.",
    description_image: "images/common/E-commerce/E-Commerce.webp",
    advantage_title: "Advantages of E-commerce Website Development Services",
    advantage_desc:
      " An e-commerce website offers numerous advantages for businesses. Firstly, it provides a global reach, allowing businesses to connect with customers beyond geographical boundaries and tap into new markets. This expanded customer base leads to increased sales and revenue potential. Secondly, an e-commerce website eliminates the need for physical storefronts, reducing overhead costs associated with rent, utilities, and staffing. This cost-saving aspect enables businesses to offer competitive pricing to customers.",
    advantage_tagline: "Advantages of E-commerce Website Development Services",
    advantage_card: [
      " Global Market Access: E-commerce websites enable businesses to reach customers worldwide, expanding their market reach beyond physical boundaries.",
      "Cost Efficiency: Online stores eliminate the need for physical retail space, reducing costs associated with rent, utilities, and staffing.",
      "Convenient Shopping Experience: E-commerce websites provide customers with the convenience of browsing, comparing, and purchasing products or services from anywhere at any time.",
      "Data Analytics: E-commerce platforms offer valuable data insights on customer behavior, preferences, and purchasing patterns, enabling businesses to make informed decisions and tailor marketing strategies.",
    ],
    tagline: "E-commerce Website  Design",
    price_table_title: "E-commerce Website Development Packages",
    price_table_desc:
      "We offer a wide range of e-commerce webiste  development packages to suit your needs. Our packages are designed to be affordable and flexible, so you can get the best value for your money. Whether you're looking for a simple Website or complex Website, we have the perfect package for you!",
    price_table_card: [
      {
        title: "★Startup",
        description: "Website Development",
        image: "images/icons/plan-1.svg",
        rate: "₹ 10,000/$ 122",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 5 pages",
          "Logo",
          "Slider",
          "Dynamic Website",
          "Domain-1st Year Free",
          "Hosting Free For 1st Year",
          "1 Email – 500 MB Quota",
          "1 Contact Form",
          "Free SSL",
          "Testimonials",
          "Gallery Section",
          "Chat Feature",
          "300 Rs/Extra Page",
          "200 Rs – Content/Page",
          "Social Profile Link",
          "Facebook Page Creation",
          "Click to Call/Email",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 5 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "× Free 4 Hours Support",
          "Support – 500 Rs/Hr",
        ],
        button: "bg-btn",
      },
      {
        title: "➚Growth",
        description: "Website Development",
        image: "images/icons/plan-2.svg",
        rate: "₹ 15,000/$ 183",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 10 pages",
          "Logo",
          "Slider",
          "Dynamic Website",
          "Domain-1st Year Free",
          "Hosting Free For 1st Year",
          "2 Email – 500 MB Quota",
          "1 Contact Form",
          "Free SSL",
          "Testimonials",
          "Gallery Section",
          "Chat Feature",
          "300 Rs/Extra Page",
          "200 Rs – Content/Page",
          "Social Profile Link",
          "Facebook Page Creation",
          "Click to Call/Email",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 10 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "Free 4 Hours Support",
          "Support – 500 Rs/Hr",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕Premium",
        description: "Website Development",
        image: "images/icons/plan-3.svg",
        rate: "₹25,000/$ 305",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 20 pages",
          "Up to 50 Products",
          "Logo",
          "Contact Form – 3",
          "5 Email – 500 MB Quota",
          " Content – Free",
          "300 Rs/Extra Page",
          "WhatsApp Chat Integration",
          "Social Media Profiles Integration",
          "Social Profile Link",
          "Facebook Page Creation",
          " WordPress Login Details Will be Given",
          "Payment Gateway",
          "Revisions – 2",
          "Extra Support – 500 Rs/Hour",
          "Call/Email/Chat Support",
          "Delivery in 15 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "Free 4 Hours Support",
          "Support – 500 Rs/Hr",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 15 Days",


        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our E-commerce Website Development Process",
    process_desc:
      " Moundweb is a leading E-Commerce web designing and website development company in Lucknow. We have a team of highly skilled professionals having good expertise in E-commerce website development services in Lucknow. We have worked with various successful startups and large-scale enterprises and delivered world class E-Commerce website design services across various industries. ",
    process_card: [
      {
        title: "Analysis",
        content:
          "Our analysis process for e-commerce website development includes understanding client requirements, identifying target audience, conducting market research, creating sitemaps, wireframing and prototyping. It also includes assessing the technology stack, determining functionality, defining content strategy, and establishing project timelines. Testing, feedback incorporation and optimization complete the analysis phase.",
        image: "images/common/App/process-1.webp",
      },
      {
        title: "Planning",
        content:
          "Our planning process for e-commerce website development includes defining project goals, setting project scope, creating a project timeline, allocating resources, and establishing a communications plan. It also involves conducting research, defining user personas, outlining website structure, and creating a content strategy. Documentation and stakeholder alignment are essential during the planning phase.",
        image: "images/common/App/process-2.webp",
      },
      {
        title: "Design",
        content:
          "Our design process for e-commerce website development includes gathering client requirements, creating wireframes and mockups, selecting a color scheme and typography, designing a user interface, and creating visual elements. This includes creating responsive layouts, ensuring accessibility, and optimizing for a smooth user experience. Iterative design, feedback and refinement are key components.",
        image: "images/common/App/process-3.webp",
      },
      {
        title: "Development",
        content:
          "Our development process for e-commerce website development includes requirements gathering, designing user interface, coding, integrating back-end functionality, and implementing front-end design. It involves using programming languages, frameworks, and databases to build the website, followed by testing, bug fixing, and deployment to ensure a functional and reliable web application.",
        image: "images/common/App/process-4.webp",
      },
      {
        title: "Testing",
        content:
          "Our testing process for e-commerce website development includes creating test cases based on project requirements, performing functional and usability testing, checking cross-browser compatibility, performing performance testing, and ensuring responsive design. This includes bug tracking, regression testing, user acceptance testing, and validating accessibility standards to ensure a high-quality and error-free website.",
        image: "images/common/App/process-5.webp",
      },
      {
        title: "Deployment",
        content:
          "Our deployment process for e-commerce website development includes configuring the hosting environment, setting up servers, deploying code and databases, ensuring compatibility across browsers and devices, taking security measures, and optimizing performance. This also includes monitoring for issues, testing after deployment, and applying updates or bug fixes as needed.",
        image: "images/common/App/process-6.webp",
      },
      {
        title: "Maintenance",
        content:
          "Our maintenance process for e-commerce website  development includes monitoring website performance, addressing bugs and issues, implementing security updates, optimizing site speed, managing content updates, and ensuring compatibility across browsers and devices. Regular backups, software updates, and user support are vital to maintaining a secure and functioning website.",
        image: "images/common/App/process-7.webp",
      },
    ],
    why_us:
      "Why Choice Moundweb As A Best E-commerce Website Development Company?",
    why_us_desc:
      "After years in the industry, we have accumulated valuable knowledge that has given me a better understanding of the dynamics of online marketing. This is the valuable experience we bring to the fore as you develop your business strategy and incorporate it into your daily operations for success. As a result, your Lucknow based company will be able to compete. ",
    our_project_desc:
      "Welcome to Lucknow's No.1 software development company. With our expertise in mobile app development, we help businesses like yours thrive in the digital world. Moundweb is the best software development company in Lucknow.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },
  //6. Digital Marketing
  {
    type: "Marketing",
    pg_title:
      "Best Digital Marketing Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "If you are searching for the best Digital Marketing & IT Company in Lucknow, you can visit Moundweb IT & Web Solutions. We provide Best Digital Marketing Services in Lucknow. For more information you can visit us.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Digital Marketing",
    title: "Top Leading Digital Marketing Company in Lucknow",
    title_desc:
      "Boost Your Online Presence and Drive Results with Our Dynamic Digital Marketing Solutions",
    hero_image: "images/hero/digital-marketing.png",
    description_title: "Best Digital Marketing Company in Lucknow",
    description_desc:
      "Moundweb is one of the Best Digital Marketing Company in Lucknow. We are passionate about what lies at the core of great businesses. Moundweb, an initiative of Ranker Choice Education Pvt. Ltd. Ltd. which is the best Digital Marketing Company in Lucknow. We provide an integrated full-service approach to digital branding architecture and marketing strategy. We are at the intersection of creativity, technology and strategy, giving our clients the benefit of our expertise.",
    description_image: "images/common/Marketing/desc-image.png",
    advantage_title: "Advantages of Digital Marketing Services",
    advantage_desc:
      " Digital marketing offers numerous advantages in today's digital landscape. It provides a global reach, allowing businesses to connect with a vast audience across different geographical locations. With precise targeting and personalization capabilities, businesses can create highly targeted campaigns, increasing the chances of conversion and customer acquisition. Moreover, digital marketing offers cost-effective strategies compared to traditional channels, with measurable results and real-time analytics to assess campaign performance. Additionally, it enables enhanced interaction and engagement with customers, fostering brand loyalty and lasting relationships. Embracing digital marketing empowers businesses to reach their target audience effectively, stay competitive, and achieve their marketing goals in the digital age.",
    advantage_tagline: "Advantages of Digital Marketing Services",
    advantage_card: [
      " Global Audience Reach: Digital marketing allows businesses to reach a global audience, expanding their market reach beyond physical boundaries.",
      "Targeted Advertising: Precise targeting capabilities enable businesses to reach specific demographics, interests, and behaviors, ensuring that marketing efforts reach the most relevant audience.",
      "Cost-Effectiveness: Digital marketing often requires lower investment compared to traditional marketing channels, providing cost-effective advertising options for businesses of all sizes.",
      "Interactive Engagement: Digital marketing platforms facilitate direct and interactive engagement with customers, fostering brand loyalty, feedback, and long-term relationships.",
    ],
    tagline: "Digital Marketing ",
    price_table_title: "Digital Marketing Packages",
    price_table_desc:
      "We offer a range of affordable and flexible software development packages tailored to meet your needs. Whether you require a simple or complex software solution, we have the perfect package for you. Our Basic Website Development package is designed for small businesses, providing custom website design, responsive layouts, and basic SEO optimization. For businesses looking to sell products online, our E-commerce Solution package offers customized e-commerce websites with secure payment gateways, product catalog management, and SEO optimization. Our Custom Enterprise Software package is ideal for larger organizations, providing tailored software development, integration with existing systems, and ongoing support. If you're targeting mobile users, our Mobile App Development package delivers native or cross-platform app development, user-friendly interfaces, and app store optimization. Lastly, our Digital Marketing Suite combines website development with comprehensive digital marketing services, including SEO, PPC advertising, social media management, email marketing, and analytics. Choose the package that suits you best and get the best value for your money.",
    price_table_card: [
      {
        title: "★Startup",
        description: "Website Development",
        image: "images/icons/plan-1.svg",
        rate: "₹ 10,000/$ 122",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 5 pages",
          "Logo",
          "Slider",
          "Dynamic Website",
          "Domain-1st Year Free",
          "Hosting Free For 1st Year",
          "1 Email – 500 MB Quota",
          "1 Contact Form",
          "Free SSL",
          "Testimonials",
          "Gallery Section",
          "Chat Feature",
          "300 Rs/Extra Page",
          "200 Rs – Content/Page",
          "Social Profile Link",
          "Facebook Page Creation",
          "Click to Call/Email",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 5 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "× Free 4 Hours Support",
          "Support – 500 Rs/Hr",
        ],
        button: "bg-btn",
      },
      {
        title: "➚Growth",
        description: "Website Development",
        image: "images/icons/plan-2.svg",
        rate: "₹ 15,000/$ 183",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 10 pages",
          "Logo",
          "Slider",
          "Dynamic Website",
          "Domain-1st Year Free",
          "Hosting Free For 1st Year",
          "2 Email – 500 MB Quota",
          "1 Contact Form",
          "Free SSL",
          "Testimonials",
          "Gallery Section",
          "Chat Feature",
          "300 Rs/Extra Page",
          "200 Rs – Content/Page",
          "Social Profile Link",
          "Facebook Page Creation",
          "Click to Call/Email",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 10 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "Free 4 Hours Support",
          "Support – 500 Rs/Hr",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕Premium",
        description: "Website Development",
        image: "images/icons/plan-3.svg",
        rate: "₹25,000/$ 305",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "Upto 20 pages",
          "Up to 50 Products",
          "Logo",
          "Contact Form – 3",
          "5 Email – 500 MB Quota",
          " Content – Free",
          "300 Rs/Extra Page",
          "WhatsApp Chat Integration",
          "Social Media Profiles Integration",
          "Social Profile Link",
          "Facebook Page Creation",
          " WordPress Login Details Will be Given",
          "Payment Gateway",
          "Revisions – 2",
          "Extra Support – 500 Rs/Hour",
          "Call/Email/Chat Support",
          "Delivery in 15 Days",
          "Renewal – 2000 Rs + Domain Price Plus GST",
          "Free 4 Hours Support",
          "Support – 500 Rs/Hr",
          "Mobile Responsive",
          "Easy to Edit",
          "Login Details Will Be Given",
          "Delivery in 15 Days",


        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Digital Marketing Process",
    process_desc:
      " Digital marketing is a broad term that encompasses all marketing efforts using digital technologies. Digital marketing strategies can include search engine optimization (SEO), search engine marketing (SEM), social media marketing, email marketing, content marketing, influencer marketing, and more. ",
    process_card: [
      {
        title: "Analysis",
        content:
          "In digital marketing, our analytics process involves collecting and interpreting data to gain insight into consumer behavior, campaign performance, and market trends. This enables marketers to make informed decisions, optimize strategies, and maximize ROI. Through tools such as Google Analytics and social media analytics, valuable data is harnessed to run effective digital marketing campaigns.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: "Strategic",
        content:
          "Content creation and optimization is an important process in digital marketing which involves creating engaging, relevant and valuable content for various online channels. This includes conducting keyword research, creating compelling copy, and optimizing content for search engines. By aligning content with audience needs and search intent, marketers can increase visibility, increase traffic, and boost audience engagement.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: "Content Creation & Optimization",
        content:
          "Our digital advertising process in digital marketing involves creating and delivering targeted advertisements to reach specific audiences across various digital channels. This includes steps such as defining campaign objectives, identifying target audiences, selecting ad formats, setting a budget, creating engaging ad creatives, launching campaigns, and monitoring performance to optimize results.",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: "Digital Advertising",
        content:
          "Our development process for software development includes requirements gathering, designing user interface, coding, integrating back-end functionality, and implementing front-end design. It involves using programming languages, frameworks, and databases to build the website, followed by testing, bug fixing, and deployment to ensure a functional and reliable web application.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: "Analysis & Reporting",
        content:
          "Our testing process for software development includes creating test cases based on project requirements, performing functional and usability testing, checking cross-browser compatibility, performing performance testing, and ensuring responsive design. This includes bug tracking, regression testing, user acceptance testing, and validating accessibility standards to ensure a high-quality and error-free website.",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choice Moundweb As A Best Software Development Company?",
    why_us_desc:
      "After years in the industry, we have accumulated valuable knowledge that has given me a better understanding of the dynamics of online marketing. This is the valuable experience we bring to the fore as you develop your business strategy and incorporate it into your daily operations for success. As a result, your Lucknow based company will be able to compete. ",
    our_project_desc:
      "Welcome to Lucknow's No.1 software development company. With our expertise in mobile app development, we help businesses like yours thrive in the digital world. Moundweb is the best software development company in Lucknow.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },
  //7. Seo Marketing
  {
    type: "Marketing",
    pg_title: "Best SEO Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions has the best search engine optimization team in Lucknow India. We are the best SEO company offering SEO services in Lucknow. For more Information you can contact us.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Seo Marketing",
    title: "Top Leading Search Engine Optimization Company in Lucknow",
    title_desc:
      "Amplify Your Online Visibility and Achieve Measurable Outcomes through Our Cutting-Edge SEO Strategies",
    hero_image: "images/common/Seo/hero_image.webp",
    description_title: "Best SEO Company in Lucknow",
    description_desc:
      "Moundweb is one of the Best SEO Company in Lucknow. We offer SEO services in Lucknow at affordable  prices. As a leading SEO service company in Lucknow, our team at Moundweb has been helping small businesses to rank on the first page of Google for the past 8 years. Moundweb makes proper planning for all types of businesses in many industries in Lucknow. We provide services Across Globally. Moundweb has the best search engine optimization team in Lucknow India. We provide the best SEO services to our clients. Moundweb is a leading name in Lucknow, providing best SEO services in Lucknow. Our SEO experts implement best SEO strategies to increase the ranking of your website on SERP.",
    description_image: "images/common/Seo/desc_image.png",
    advantage_title: "Advantages of Seo Services",
    advantage_desc:
      " In today's digital landscape, businesses can benefit greatly from embracing digital marketing. One of the key advantages is the global reach it offers. Through digital marketing strategies such as search engine optimization (SEO), businesses can connect with a vast audience across different geographical locations. By optimizing their website for search engines, businesses can increase their visibility and attract visitors from around the world.",
    advantage_tagline: "Advantages of Seo Services",
    advantage_card: [
      "Boost Your Online Presence and Drive Results with Our Dynamic Digital Marketing Solutions",
      "Enhance Your Online Visibility and Achieve Outstanding Results through Our Effective SEO Strategies",
      "Boost Your Online Presence and Drive Results with Our Dynamic Digital Marketing Solutions",
      "Get Noticed Online and Achieve Measurable Results with Our Results-Driven SEO Services",
      "Optimize Your Online Presence and Drive Success with Our Cutting-Edge SEO Techniques",
      "Skyrocket Your Online Visibility and Achieve Tangible Outcomes with Our Proven SEO Strategies",
    ],
    tagline: "Seo ",
    price_table_title: "Search Engine Optimization Packages",
    price_table_desc:
      "At Moundweb, we understand the importance of having the right software solutions for your business. That's why we offer a range of affordable and flexible software development packages, tailored to meet your unique needs and objectives. With our expertise in both software development and SEO, we ensure that your online presence is optimized for maximum visibility and results.For small businesses, our Basic Website Development package is the perfect choice. It includes custom website design, responsive layouts, and basic SEO optimization, all geared towards establishing your online presence and attracting potential customers.",
    price_table_card: [
      {
        title: "★ Small Business",
        description: "SEO Packages",
        image: "images/icons/plan-1.svg",
        rate: "₹ 15,000 / $ 250 " + " Month ",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Max 5 Keywords",
          " ✔ Website & Competitor Analysis",
          " ✔ Content Duplicity Check",
          " ✔ Initial Ranking Report",
          " ✔ Keywords Research",
          " ✔ Meta Tags Creation",
          " ✔ Canonicalization",
          " ✔ URL Structure",
          " ✔ Content Optimization",
          " ✔ Image Optimization",
          " ✔ Heading Tag Optimization",
          " ✔ Website Speed Optimization",
          " ✔ Robots.txt",
          " ✔ Sitemap Creation",
          " ✔ Google Analytics & Search Console Setup",
          " ✔ Blog Optimization – 2 Posts",
          " ⨉ Google Map Integration on website",
          " ⨉ Google My Business Page Setup and",
          " ✔ Local Citations – 5",
          " ✔ Local Classifieds – 2",
          " ✔ Blog Posting (500 – 700 words) – 1",
          " ✔ Article Writing(500 – 700 words) – 1",
          " ✔ Onsite Blog (300 – 500 words) – 1",
          " ⨉ Guest Blogging",
          " ⨉ Broken Backlink Building",
          " ⨉ Resource Link Building",
          " ⨉ Alerts and Mention",
          " ⨉ Link Roundups",
          " ⨉ Competitor Backlink Research",
          " ✔ Social Sharing – 30(Total)",
          " ✔ Blog Social Sharing",
          " ✔ Slide Submissions – 1",
          " ✔ Text Infographic Creation – 1",
          " ⨉ Video Creation",
          " ✔ Q & A – 1",
          " ✔ Keyword Ranking Report",
          " ✔ Google Analytics Report",
          " ✔ Acquired Links Report",
          " ✔ Email",
          " ✔ Chat",
          " ⨉ Call"
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Mid Size Business",
        description: "Website Development",
        image: "images/icons/plan-2.svg",
        rate: "₹ 25,000 / $ 400 " + " Month ",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Max 15 Keywords",
          " ✔ Website & Competitor Analysis",
          " ✔ Content Duplicity Check",
          " ✔ Initial Ranking Report",
          " ✔ Keywords Research",
          " ✔ Meta Tags Creation",
          " ✔ Canonicalization",
          " ✔ URL Structure",
          " ✔ Content Optimization",
          " ✔ Image Optimization",
          " ✔ Heading Tag Optimization",
          " ✔ Website Speed Optimization",
          " ✔ Robots.txt",
          " ✔ Sitemap Creation",
          " ✔ Google Analytics & Search Console Setup",
          " ✔ Blog Optimization – 5 Posts",
          " ✔ Google Map Integration on website",
          " ✔ Google My Business Page Setup and",
          " ✔ Local Citations – 10",
          " ✔ Local Classifieds – 5",
          " ✔ Blog Posting (500 – 700 words) – 2",
          " ✔ Article Writing(500 – 700 words) – 2",
          " ✔ Onsite Blog (300 – 500 words) – 2",
          " ✔ Guest Blogging",
          " ✔ Broken Backlink Building",
          " ⨉ Resource Link Building",
          " ✔ Alerts and Mention",
          " ⨉ Link Roundups",
          " ⨉ Competitor Backlink Research",
          " ✔ Social Sharing – 40(Total)",
          " ✔ Blog Social Sharing",
          " ✔ Slide Submissions – 2",
          " ✔ Text Infographic Creation – 2",
          " ⨉ Video Creation",
          " ✔ Q & A – 3",
          " ✔ Keyword Ranking Report",
          " ✔ Google Analytics Report",
          " ✔ Acquired Links Report",
          " ✔ Email",
          " ✔ Chat",
          " ✔ Call"
        ],
        button: "bg-btn3",
      },
      {
        title: "♕ Large Or Ecommerce",
        description: "Website Development",
        image: "images/icons/plan-3.svg",
        rate: "₹ 40,000 /$ 600 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Max 25 Keywords",
          " ✔ Website & Competitor Analysis",
          " ✔ Content Duplicity Check",
          " ✔ Initial Ranking Report",
          " ✔ Keywords Research",
          " ✔ Meta Tags Creation",
          " ✔ Canonicalization",
          " ✔ URL Structure",
          " ✔ Content Optimization",
          " ✔ Image Optimization",
          " ✔ Heading Tag Optimization",
          " ✔ Website Speed Optimization",
          " ✔ Robots.txt",
          " ✔ Sitemap Creation",
          " ✔ Google Analytics & Search Console Setup",
          " ✔ Blog Optimization – 2 Posts",
          " ✔ Google Map Integration on website",
          " ✔ Google My Business Page Setup and",
          " ✔ Local Citations – 15",
          " ✔ Local Classifieds – 10",
          " ✔ Blog Posting (500 – 700 words) – 2",
          " ✔ Article Writing(500 – 700 words) – 4",
          " ✔ Onsite Blog (300 – 500 words) – 2",
          " ✔ Guest Blogging",
          " ✔ Broken Backlink Building",
          " ✔ Resource Link Building",
          " ✔ Alerts and Mention",
          " ✔ Link Roundups",
          " ✔ Competitor Backlink Research",
          " ✔ Social Sharing – 50(Total)",
          " ✔ Blog Social Sharing",
          " ✔ Slide Submissions – 2",
          " ✔ Text Infographic Creation – 3",
          " ✔ Video Creation",
          " ✔ Q & A – 5",
          " ✔ Keyword Ranking Report",
          " ✔ Google Analytics Report",
          " ✔ Acquired Links Report",
          " ✔ Email",
          " ✔ Chat",
          " ✔ Call"
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Seo Process",
    process_desc:
      " Digital marketing is a broad term that encompasses all marketing efforts using digital technologies. Digital marketing strategies can include search engine optimization (SEO), search engine marketing (SEM), social media marketing, email marketing, content marketing, influencer marketing, and more. ",
    process_card: [
      {
        title: "Keyword Research",
        content:
          "Keyword research in search engine optimization (SEO) is an important process of identifying and analyzing popular search terms used by users. It helps in optimizing website content and meta tags to improve search engine rankings and attract organic traffic. Through keyword research, marketers gain insight into user intent, competition, and search volume, allowing them to effectively tailor their SEO strategies.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: "Competitor analysis",
        content:
          "Competitor analysis is an important component of SEO, which involves evaluating competing websites to gain insight into their strategies and performance. This includes checking their keywords, backlinks, content quality and overall site structure. This analysis helps to identify opportunities, refine SEO strategy and stay ahead in the competitive landscape to improve search engine rankings and organic traffic.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: "On-Page",
        content:
          "On-page and technical optimization are important components of SEO. On-page optimization involves optimizing website content, meta tags, titles and internal linking to make it more relevant to search engines and users. Technical optimization focuses on enhancing overall website performance, such as website speed, mobile-friendliness, improving site architecture and ensuring proper indexing by search engines.",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: "Off-Page",
        content:
          "Our off-page performance process in SEO focuses on optimizing external factors of the website that affect search engine rankings. This includes activities such as link building, social media engagement, reaching out to influencers and online reputation management. By improving off-page signals, such as backlinks and brand mentions, websites can increase their authority, credibility, and visibility in search engine results pages.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: "Performance Tracking and Analysis",
        content:
          "Performance tracking and analysis is vital in SEO for evaluating the effectiveness of optimization efforts. This includes monitoring key metrics such as organic traffic, keyword ranking, backlinks, and conversions. By analyzing this data, SEO professionals can identify areas for improvement, measure campaign success, and make data-driven decisions to increase website visibility and organic search performance.",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Best SEO Company?",
    why_us_desc:
      "Due to SEO, any website can get a good rank in search engine result pages; this is what we do for your business websites. All the techniques of SEO are used to rank your business website in a very organic way. We have 15+ years of experienced SEO team who will do relevant keywords research, relevant content and good links to boost and rank a website and use all these methods to help you for growth of your business because Moundweb is the best SEO Company in Lucknow.",
    our_project_desc:
      "Welcome to Lucknow's No.1 software development company. With our expertise in mobile app development, we help businesses like yours thrive in the digital world. Moundweb is the best software development company in Lucknow.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },
  //8. Social Media Marketing
  {
    type: "Marketing",
    pg_title: "Best (SMM) Social Media Marketing Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is the Best Social Media Marketing Company in Lucknow. We provide the best SMM Services across India at Affordable Price. For more Information you can contact us.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Seo Marketing",
    title: "Best Social Media Marketing (SMM) Company in Lucknow",
    title_desc:
      "Engage your audience, expand your reach and drive results with our social media marketing expertise.",
    hero_image: "images/common/SMMarket/hero_image.png",
    description_title: "Best SMM Company in Lucknow",
    description_desc:
      "If you are Looking for the best Social Media Marketing Company in Lucknow, Feel free to contact us. We provide the best social media marketing services in Lucknow. Social media advertising is a powerful tool to reach your target audience and drive traffic to your website. As a digital marketing agency, we specialize in social media advertising on Facebook, Instagram, Twitter, LinkedIn and other platforms. Our team of experts will work with you to create and manage successful social media advertising campaigns that deliver results.",
    description_image: "images/common/SMMarket/desc_image.png",
    advantage_title: "Benefits of Best Social Media Marketing",
    advantage_desc:
      " Overall, social media marketing and advertising can be a highly effective way for businesses to increase brand awareness, connect with their audience, increase website traffic and conversions, and drive measurable results. Moundweb is one of the best Social Media Marketing (SMM) Company in Lucknow. Social media marketing and advertising can provide many benefits to businesses. Here are some benefits of Social Media Marketing:",
    advantage_tagline: "Advantages of Social Media Marketing Services",
    advantage_card: [
      "Increased brand awareness :- Social media platforms provide businesses with the opportunity to increase their brand awareness and reach a wider audience.",
      "Improved engagement :- Social media can help businesses connect with their audiences and build relationships with customers, which can lead to increased loyalty and customer retention.",
      "Boost Your Online Presence and Drive Results with Our Dynamic Digital Marketing Solutions",
      "Targeted advertising :- Social media can help businesses connect with their audiences and build relationships with customers, which can lead to increased loyalty and customer retention.",
      "Cost-effective :- Compared to traditional advertising methods, social media advertising can be a cost-effective way to reach and engage with potential customers.",
      "Measurable results :-  Social media advertising provides detailed analytics and reporting, allowing businesses to measure the success of their campaigns and make data-driven decisions.",
    ],
    tagline: "Social Media Marketing ",
    price_table_title: "Social Media Marketing Packages",
    price_table_desc:
      "Our Social Media Marketing package is designed to elevate your brand's visibility and engagement across popular platforms. We understand that each business has unique goals, and our tailored approach ensures that your social media strategy aligns perfectly with your objectives.Our Social Media Marketing package is designed to elevate your brand's visibility and engagement across popular platforms. We understand that each business has unique goals, and our tailored approach ensures that your social media strategy aligns perfectly with your objectives.",
    price_table_card: [
      {
        title: "★ Basic",
        description: "SMM Packages",
        image: "images/icons/plan-1.svg",
        rate: "₹ 18,000/$ 250" + "Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Ads Spend – Rs.10,000",
          "(It will be paid to ads platform)",
          " ✔ Our Management Fee – Rs. 8,000",
          " ✔ Account Management – 2",
          " ✔ Creation Of Campaign – 1",
          " ▶ Facebook Marketing ◀ ",
          " ✔ Facebook Business Manager Set Up",
          " ⨉ Pixel Installation",
          " ⨉ Custom Conversion Creation",
          " ⨉ Remarketing",
          " ✔ Custom Audience Creation",
          " ⨉ Creation Of Automated Rules",
          " ✔ Facebook Analytics Report Creation",
          " ✔ Ad Campaign Monitoring",
          " ⨉ Catalogue Creation",
          " ⨉ Dynamic Ads Creation",
          " ⨉ Instant Experience Ads Creation",
          " ✔ Customization Of Ad Placements",
          " ⨉ A/B Testing Of Ad Set, Creative & Placement",
          " ⨉ Carousel And Collection Ads",
          " ✔ Traffic Monitoring",
          " ✔ Monthly Report",
          " ▶ Instagram Marketing ◀ ",
          " ✔ Audience Research",
          " ✔ Instagram Ads Creative Creation & Design",
          " ✔ Instagram Ads Monitoring And Management",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Professional",
        description: "SMM Packages",
        image: "images/icons/plan-2.svg",
        rate: "₹ 35,000 /$ 500" + "Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Ads Spend – Rs.20,000",
          "(It will be paid to ads platform)",
          " ✔ Our Management Fee – Rs. 15,000",
          " ✔ Account Management – 3",
          " ✔ Creation Of Campaign – 3",
          " ▶ Facebook Marketing ◀ ",
          " ✔ Facebook Business Manager Set Up",
          " ✔ Pixel Installation",
          " ✔ Custom Conversion Creation",
          " ✔ Remarketing",
          " ✔ Custom Audience Creation",
          " ✔ Creation Of Automated Rules",
          " ✔ Facebook Analytics Report Creation",
          " ✔ Ad Campaign Monitoring",
          " ⨉ Catalogue Creation",
          " ⨉ Dynamic Ads Creation",
          " ✔ Instant Experience Ads Creation",
          " ✔ Customization Of Ad Placements",
          " ⨉ A/B Testing Of Ad Set, Creative & Placement",
          " ⨉ Carousel And Collection Ads",
          " ✔ Traffic Monitoring",
          " ✔ Monthly Report",
          " ▶ Instagram Marketing ◀ ",
          " ✔ Audience Research",
          " ✔ Instagram Ads Creative Creation & Design",
          " ✔ Instagram Ads Monitoring And Management",
          " ▶ LinkedIn Marketing ◀ ",
          " ✔ Campaign Manager Account Set Up",
          " ⨉ LinkedIn Insight Tag Installation",
          " ✔ Creation Of Custom Conversion",
          " ✔ Ads Monitoring",
          " ✔ Monthly Report",
          " ▶ Youtube Marketing ◀ ",
          " ✔ Youtube Ad Account Set Up",
          " ✔ Skippable In-Stream Ads",
          " ✔ Non-Skippable In-Stream Ads",
          " ✔ Bumper Ads",
          " ⨉ Discovery Ads",
          " ⨉ Youtube Video Sequence Ads",
          " ✔ Detailed Audience Crea`tion",
          " ✔ Custom Audience Creation",
          " ✔ A/B Testing Of Targeting",
          " ✔ Remarketing Video Ads",
          " ⨉ Video Ads With Promotion Of Your Products",
          " ✔ Monthly Report",
          " ▶ Twitter Marketing ◀ ",
          " ✔ Tweet Engagement Ads",
          " ⨉ Video Or GIF View Ads",
          " ✔ Awareness Ads",
          " ⨉ Website Conversion Ads",
          " ⨉ In-stream Video View Ads",
          " ✔ Follower Ads",
          " ⨉ App Install Ads",
          " ⨉ App Reengagement",
          " ✔ Audience Creation",
          " ✔ Monthly Report"
        ],
        button: "bg-btn3",
      },
      {
        title: "♕ Advanced",
        description: "SMM Packages",
        image: "images/icons/plan-3.svg",
        rate: "₹ 65,000/$ 900" + "Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Ads Spend – Rs.40,000",
          "(It will not be paid to ads platform)",
          " ✔ Our Management Fee – Rs. 25,000",
          " ✔ Account Management – 5",
          " ✔ Creation Of Campaign – 6",
          " ▶ Facebook Marketing ◀ ",
          " ✔ Facebook Business Manager Set Up",
          " ✔ Pixel Installation",
          " ✔ Custom Conversion Creation",
          " ✔ Remarketing",
          " ✔ Custom Audience Creation",
          " ✔ Creation Of Automated Rules",
          " ✔ Facebook Analytics Report Creation",
          " ✔ Ad Campaign Monitoring",
          " ✔ Catalogue Creation",
          " ✔ Dynamic Ads Creation",
          " ✔ Instant Experience Ads Creation",
          " ✔ Customization Of Ad Placements",
          " ✔ A/B Testing Of Ad Set, Creative & Placement",
          " ✔ Carousel And Collection Ads",
          " ✔ Traffic Monitoring",
          " ✔ Monthly Report",
          " ▶ Instagram Marketing ◀ ",
          " ✔ Audience Research",
          " ✔ Instagram Ads Creative Creation & Design",
          " ✔ Instagram Ads Monitoring And Management",
          " ▶ LinkedIn Marketing ◀ ",
          " ✔ Campaign Manager Account Set Up",
          " ✔ LinkedIn Insight Tag Installation",
          " ✔ Creation Of Custom Conversion",
          " ✔ Ads Monitoring",
          " ✔ Monthly Report",
          " ▶ Youtube Marketing ◀ ",
          " ✔ Youtube Ad Account Set Up",
          " ✔ Skippable In-Stream Ads",
          " ✔ Non-Skippable In-Stream Ads",
          " ✔ Bumper Ads",
          " ✔ Discovery Ads",
          " ✔ Youtube Video Sequence Ads",
          " ✔ Detailed Audience Crea`tion",
          " ✔ Custom Audience Creation",
          " ✔ A/B Testing Of Targeting",
          " ✔ Remarketing Video Ads",
          " ✔ Video Ads With Promotion Of Your Products",
          " ✔ Monthly Report",
          " ▶ Twitter Marketing ◀ ",
          " ✔ Tweet Engagement Ads",
          " ✔ Video Or GIF View Ads",
          " ✔ Awareness Ads",
          " ✔ Website Conversion Ads",
          " ✔ In-stream Video View Ads",
          " ✔ Follower Ads",
          " ✔ App Install Ads",
          " ✔ App Reengagement",
          " ✔ Audience Creation",
          " ✔ Monthly Report"
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our SMM Process",
    process_desc:
      " Our Social Media Marketing process at Moundweb is designed to maximize your brand's online visibility and engagement. We begin by conducting a thorough analysis of your business, target audience, and competitors to develop a comprehensive social media strategy. Our experienced team then creates compelling and shareable content tailored to each platform, ensuring consistent brand messaging and tone. We schedule regular posts and actively engage with your followers, responding to comments and messages to build a strong online community. We continuously monitor and analyze key metrics to track performance, identify trends, and make data-driven optimizations. Through strategic planning, content creation, community management, and performance tracking, our SMM process helps you connect with your audience, boost brand awareness, and drive meaningful results. ",
    process_card: [
      {
        title: "Awareness",
        content:
          "Our awareness process in social media marketing involves creating and sharing content to introduce your brand, product or service to a wider audience. It focuses on building brand awareness, reaching new potential customers, and generating interest through captivating visuals, informative posts, and engaging storytelling.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: "Consideration",
        content:
          "Our thought process in social media marketing involves targeting and engaging potential customers. It focuses on capturing their attention, generating interest and nurturing relationships through strategic content, community management and effective ad targeting.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: "Action/Conversion",
        content:
          "Our action/conversion process in social media marketing involves compelling users to take a desired action, such as making a purchase, signing up for a newsletter or downloading a resource. It focuses on creating persuasive content, using effective calls to action, and optimizing landing pages to increase conversions and achieve marketing objectives.",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: "Engagement",
        content:
          "Our engagement process in social media marketing involves actively interacting with your audience through comments, messages and shares. By fostering meaningful conversations, answering inquiries and encouraging user-generated content, you build a loyal community and increase brand awareness.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: "Advocacy",
        content:
          "Our advocacy process in social media marketing involves empowering and mobilizing your audience to become passionate advocates for your brand. By fostering meaningful relationships, encouraging user-generated content, and leveraging social media platforms, you can inspire and amplify the voices of your brand advocates to drive organic growth",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Best SMM Company?",
    why_us_desc:
      "There are several compelling reasons to choose Moundweb for your Social Media Marketing (SMM) needs. Firstly, our team comprises skilled professionals who possess extensive expertise in SMM strategies and best practices. We stay up-to-date with the latest trends and algorithms to ensure your brand stays ahead in the dynamic social media landscape. Secondly, our tailored approach means we understand your unique business goals and target audience, allowing us to create customized content that resonates and drives engagement. Additionally, our comprehensive SMM packages offer a range of services, including strategic planning, content creation, community management, and performance tracking, providing a holistic solution to enhance your online presence. With our commitment to excellence and delivering measurable results, Moundweb is the ideal partner to elevate your brand's visibility and success in the world of social media marketing.",
    our_project_desc:
      "At Moundweb, we not only excel in software development but also offer top-notch Social Media Marketing (SMM) services to propel your business forward. As Lucknow's premier software development company, we understand the power of social media in today's digital landscape. Our SMM expertise enables us to develop comprehensive strategies tailored to your business objectives. With our strategic planning, engaging content creation, and regular posting across popular platforms, including Facebook, Instagram, Twitter, and LinkedIn, we ensure maximum visibility and engagement for your brand. Our dedicated team manages community interactions, responds to comments and messages, and builds a loyal online following. We also leverage advanced analytics tools to track key metrics and make data-driven optimizations for continuous improvement. ",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },
  //9. Social Media Management
  {
    type: "Marketing",
    pg_title: "Best Social Media Management Company in Lucknow -  Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "If you are searching for the best Social Media Management Company in Lucknow, you can visit Moundweb IT & Web Solutions. We are the best Social Media Management Company in Lucknow.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Social Media Management Marketing",
    title: "Best Social Media Management Company in Lucknow",
    title_desc:
      "Boost your online presence and connect with your audience effortlessly with our expert social media management.",
    hero_image: "images/common/SmManagement/hero_image.png",
    description_title: "Best Social Media Management Company in Lucknow",
    description_desc:
      "As a digital marketing agency, we understand the importance of social media in today's business scenario. Social media platforms have become essential tools for businesses to connect with their audiences and increase brand awareness. However, managing multiple social media platforms can be overwhelming, especially for small businesses with limited resources. If you are searching for the best Social media management company in Lucknow, you can visit Moundweb IT & Web Solutions.",
    description_image: "images/common/SmMAnagement/desc_image.webp",
    advantage_title: "Benefits of Best Social Media Management Services",
    advantage_desc:
      "There are a lot of great social media management companies in Lucknow to choose from. When looking for the best one for your business, consider factors such as experience, expertise, and pricing. Look for a company that has a proven track record of success and can provide case studies or testimonials from satisfied customers. It's also important to find a company that can tailor its services to your specific needs and goals. Don't be afraid to ask for references or talk to past clients to better understand their experience.",
    advantage_tagline: "Advantages of Social Media Management Services",
    advantage_card: [
      "Enhanced Brand Visibility: Our social media management services ensure your brand is consistently visible on popular social platforms, increasing your brand recognition and exposure.",
      "Targeted Audience Engagement: We help you identify and engage with your target audience effectively, creating meaningful connections and driving valuable interactions that lead to increased conversions and customer loyalty.",
      "Strategic Content Creation: Our team of experts crafts engaging and relevant content that resonates with your audience, ensuring that your social media profiles are consistently updated with compelling posts, stories, and videos.",
      "Strategic Content Creation: Our team of experts crafts engaging and relevant content that resonates with your audience, ensuring that your social media profiles are consistently updated with compelling posts, stories, and videos.",
      "Data-Driven Insights: We provide comprehensive analytics and reports that offer valuable insights into the performance of your social media campaigns. This data-driven approach enables us to optimize strategies and maximize results.",
    ],
    tagline: "Social Media Management ",
    price_table_title: "Social Media Management Packages",
    price_table_desc:
      "Unlock the true potential of your brand's social media presence with our comprehensive Social Media Management services. Our expert team is dedicated to elevating your brand's visibility and engagement across popular platforms. We recognize that every business has unique goals, which is why our approach is fully tailored to meet your specific objectives. From strategic content creation to targeted audience engagement, we ensure that your social media strategy is finely tuned to maximize results. With our personalized approach and deep understanding of the ever-evolving social media landscape, we help your brand stand out, connect with your audience, and achieve remarkable online success.",
    price_table_card: [
      {
        title: "★ Basic",
        description: "SMM Packages",
        image: "images/icons/plan-1.svg",
        rate: "₹ 18,000/$ 250" + "Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Ads Spend – Rs.10,000",
          "(It will be paid to ads platform)",
          " ✔ Our Management Fee – Rs. 8,000",
          " ✔ Account Management – 2",
          " ✔ Creation Of Campaign – 1",
          " ▶ Facebook Marketing ◀ ",
          " ✔ Facebook Business Manager Set Up",
          " ⨉ Pixel Installation",
          " ⨉ Custom Conversion Creation",
          " ⨉ Remarketing",
          " ✔ Custom Audience Creation",
          " ⨉ Creation Of Automated Rules",
          " ✔ Facebook Analytics Report Creation",
          " ✔ Ad Campaign Monitoring",
          " ⨉ Catalogue Creation",
          " ⨉ Dynamic Ads Creation",
          " ⨉ Instant Experience Ads Creation",
          " ✔ Customization Of Ad Placements",
          " ⨉ A/B Testing Of Ad Set, Creative & Placement",
          " ⨉ Carousel And Collection Ads",
          " ✔ Traffic Monitoring",
          " ✔ Monthly Report",
          " ▶ Instagram Marketing ◀ ",
          " ✔ Audience Research",
          " ✔ Instagram Ads Creative Creation & Design",
          " ✔ Instagram Ads Monitoring And Management",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Professional",
        description: "SMM Packages",
        image: "images/icons/plan-2.svg",
        rate: "₹ 35,000 /$ 500" + "Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Ads Spend – Rs.20,000",
          "(It will be paid to ads platform)",
          " ✔ Our Management Fee – Rs. 15,000",
          " ✔ Account Management – 3",
          " ✔ Creation Of Campaign – 3",
          " ▶ Facebook Marketing ◀ ",
          " ✔ Facebook Business Manager Set Up",
          " ✔ Pixel Installation",
          " ✔ Custom Conversion Creation",
          " ✔ Remarketing",
          " ✔ Custom Audience Creation",
          " ✔ Creation Of Automated Rules",
          " ✔ Facebook Analytics Report Creation",
          " ✔ Ad Campaign Monitoring",
          " ⨉ Catalogue Creation",
          " ⨉ Dynamic Ads Creation",
          " ✔ Instant Experience Ads Creation",
          " ✔ Customization Of Ad Placements",
          " ⨉ A/B Testing Of Ad Set, Creative & Placement",
          " ⨉ Carousel And Collection Ads",
          " ✔ Traffic Monitoring",
          " ✔ Monthly Report",
          " ▶ Instagram Marketing ◀ ",
          " ✔ Audience Research",
          " ✔ Instagram Ads Creative Creation & Design",
          " ✔ Instagram Ads Monitoring And Management",
          " ▶ LinkedIn Marketing ◀ ",
          " ✔ Campaign Manager Account Set Up",
          " ⨉ LinkedIn Insight Tag Installation",
          " ✔ Creation Of Custom Conversion",
          " ✔ Ads Monitoring",
          " ✔ Monthly Report",
          " ▶ Youtube Marketing ◀ ",
          " ✔ Youtube Ad Account Set Up",
          " ✔ Skippable In-Stream Ads",
          " ✔ Non-Skippable In-Stream Ads",
          " ✔ Bumper Ads",
          " ⨉ Discovery Ads",
          " ⨉ Youtube Video Sequence Ads",
          " ✔ Detailed Audience Crea`tion",
          " ✔ Custom Audience Creation",
          " ✔ A/B Testing Of Targeting",
          " ✔ Remarketing Video Ads",
          " ⨉ Video Ads With Promotion Of Your Products",
          " ✔ Monthly Report",
          " ▶ Twitter Marketing ◀ ",
          " ✔ Tweet Engagement Ads",
          " ⨉ Video Or GIF View Ads",
          " ✔ Awareness Ads",
          " ⨉ Website Conversion Ads",
          " ⨉ In-stream Video View Ads",
          " ✔ Follower Ads",
          " ⨉ App Install Ads",
          " ⨉ App Reengagement",
          " ✔ Audience Creation",
          " ✔ Monthly Report"
        ],
        button: "bg-btn3",
      },
      {
        title: "♕ Advanced",
        description: "SMM Packages",
        image: "images/icons/plan-3.svg",
        rate: "₹ 65,000/$ 900" + "Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Ads Spend – Rs.40,000",
          "(It will not be paid to ads platform)",
          " ✔ Our Management Fee – Rs. 25,000",
          " ✔ Account Management – 5",
          " ✔ Creation Of Campaign – 6",
          " ▶ Facebook Marketing ◀ ",
          " ✔ Facebook Business Manager Set Up",
          " ✔ Pixel Installation",
          " ✔ Custom Conversion Creation",
          " ✔ Remarketing",
          " ✔ Custom Audience Creation",
          " ✔ Creation Of Automated Rules",
          " ✔ Facebook Analytics Report Creation",
          " ✔ Ad Campaign Monitoring",
          " ✔ Catalogue Creation",
          " ✔ Dynamic Ads Creation",
          " ✔ Instant Experience Ads Creation",
          " ✔ Customization Of Ad Placements",
          " ✔ A/B Testing Of Ad Set, Creative & Placement",
          " ✔ Carousel And Collection Ads",
          " ✔ Traffic Monitoring",
          " ✔ Monthly Report",
          " ▶ Instagram Marketing ◀ ",
          " ✔ Audience Research",
          " ✔ Instagram Ads Creative Creation & Design",
          " ✔ Instagram Ads Monitoring And Management",
          " ▶ LinkedIn Marketing ◀ ",
          " ✔ Campaign Manager Account Set Up",
          " ✔ LinkedIn Insight Tag Installation",
          " ✔ Creation Of Custom Conversion",
          " ✔ Ads Monitoring",
          " ✔ Monthly Report",
          " ▶ Youtube Marketing ◀ ",
          " ✔ Youtube Ad Account Set Up",
          " ✔ Skippable In-Stream Ads",
          " ✔ Non-Skippable In-Stream Ads",
          " ✔ Bumper Ads",
          " ✔ Discovery Ads",
          " ✔ Youtube Video Sequence Ads",
          " ✔ Detailed Audience Crea`tion",
          " ✔ Custom Audience Creation",
          " ✔ A/B Testing Of Targeting",
          " ✔ Remarketing Video Ads",
          " ✔ Video Ads With Promotion Of Your Products",
          " ✔ Monthly Report",
          " ▶ Twitter Marketing ◀ ",
          " ✔ Tweet Engagement Ads",
          " ✔ Video Or GIF View Ads",
          " ✔ Awareness Ads",
          " ✔ Website Conversion Ads",
          " ✔ In-stream Video View Ads",
          " ✔ Follower Ads",
          " ✔ App Install Ads",
          " ✔ App Reengagement",
          " ✔ Audience Creation",
          " ✔ Monthly Report"
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Social Media Management Process",
    process_desc:
      " Our Social Media Management process at Moundweb is designed to maximize your brand's online visibility and engagement. We begin by conducting a thorough analysis of your business, target audience, and competitors to develop a comprehensive social media strategy. Our experienced team then creates compelling and shareable content tailored to each platform, ensuring consistent brand messaging and tone. We schedule regular posts and actively engage with your followers, responding to comments and messages to build a strong online community. We continuously monitor and analyze key metrics to track performance, identify trends, and make data-driven optimizations. Through strategic planning, content creation, community management, and performance tracking, our SMM process helps you connect with your audience, boost brand awareness, and drive meaningful results. ",
    process_card: [
      {
        title: "Strategy Development",
        content:
          "Our strategy development process of social media management, we identify target audiences, select platforms and set measurable objectives. To ensure that our efforts are aligned with business goals, we create a content plan and establish key performance indicators (KPIs). Let us create a strong social media presence for your brand.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: " Content Creation and Curation",
        content:
          "Our expert team creates captivating content that your audience will love. We combine creativity and strategy to deliver compelling text, stunning visuals and engaging videos. From informative articles to shareable graphics, we curate the best content to spark conversation and captivate your social media followers.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: "Publishing and Scheduling",
        content:
          "Publishing and scheduling content is an important aspect of social media management. With strategic timing and consistency, your brand can maintain an active online presence. Plan and schedule engaging posts across all platforms to maximize visibility, reach and engagement with your target audience. Stay Connected & Make an Impact!",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: "Community Management and Engagement,",
        content:
          "Build meaningful relationships with your audience. Listen, respond and engage with their comments, messages and mentions. Encourage user-generated content, foster a sense of community and resolve inquiries quickly. By fostering relationships and fostering two-way conversations, you build loyal brand supporters and drive organic growth.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: " Analytics and Reporting",
        content:
          "Analytics and reporting provide valuable insights into your performance in social media management. By tracking key metrics like engagement, reach, and conversions, you can measure the impact of your efforts, identify trends, and make data-driven decisions to optimize your strategy for maximum success.",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Best Social Media Management Company?",
    why_us_desc:
      "Elevate your brand's online presence and achieve remarkable success in the realm of social media marketing with Moundweb. Our team of skilled professionals brings a wealth of expertise and knowledge in SMM strategies and best practices, ensuring that we stay ahead of the curve in this dynamic landscape. By understanding your unique business goals and target audience, we create customized content that resonates and drives engagement, effectively capturing the attention of your online community. Our comprehensive SMM packages offer a range of services, including strategic planning, content creation, community management, and performance tracking, providing a holistic solution to enhance your brand's visibility and reach. With a commitment to excellence and delivering measurable results, Moundweb is your ideal partner to navigate the ever-evolving world of social media management and unlock the full potential of your brand.",
    our_project_desc:
      "Unlock the full potential of your brand's online presence with Moundweb's exceptional Social Media Marketing (SMM) services. As a leading software development company in Lucknow, we possess a deep understanding of the power and influence of social media in today's digital landscape. Our expert team of SMM professionals is dedicated to developing comprehensive strategies that align with your unique business objectives. From strategic planning and content creation to regular posting across popular platforms such as Facebook, Instagram, Twitter, and LinkedIn, we ensure maximum visibility and engagement for your brand. Our community management experts handle interactions, respond to comments and messages, and foster a loyal online following. Leveraging advanced analytics tools, we track key metrics and employ data-driven optimizations to continuously improve your social media performance. Trust Moundweb to elevate your brand's online presence and drive exceptional results through our unrivaled Social Media Management expertise. ",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8jpg",
      },
    ],
  },
  //10. PPC Advertising
  {
    type: "Marketing",
    pg_title: "Best PPC Advertising Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is a well-known PPC advertising Company in Lucknow that provides quality digital marketing services in Lucknow. For more information you can visit us.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Social Media Management Marketing",
    title: "Best PPC Advertising Company in Lucknow",
    title_desc:
      "Unleash the Power of Clicks: Drive Conversions and Outperform Your Competitors with PPC Advertising",
    hero_image: "images/common/Ppc/hero_image.png",
    description_title: "Best PPC Advertising Company in Lucknow",
    description_desc:
      "Looking for the best advertising company in Lucknow? Look no further! We are proud to offer top-notch advertising services that will help your business thrive in the digital age. Our team of experts specializes in creating effective advertising campaigns that boost your brand's visibility and drive targeted traffic to your website. With our comprehensive range of services, we are your one-stop solution for all your advertising needs. At Moundweb, we understand the importance of a strong online presence in today's competitive business landscape. Our skilled professionals are well versed in the latest trends and strategies in digital marketing and advertising. We combine creativity, technical expertise, and industry knowledge to deliver outstanding results for our clients.At Moundweb, we understand the importance of a strong online presence in today's competitive business landscape.",
    description_image: "images/common/Ppc/desc-image.png",
    advantage_title: "Benefits of Best PPC Advertising Services",
    advantage_desc:
      "PPC (pay-per-click) advertising is a digital marketing process that involves creating targeted advertisements and getting paid for each click received. This requires keyword research, ad creation, bid management, and performance tracking. By strategically optimizing campaigns, businesses can drive targeted traffic to their websites, generate leads and efficiently achieve their marketing goals. Our skilled professionals are well versed in the latest trends and strategies in digital marketing and advertising. We combine creativity, technical expertise, and industry knowledge to deliver outstanding results for our clients.",
    advantage_tagline: "Advantages of PPC Advertising Services",
    advantage_card: [
      "Targeted reach to the right audience Immediate visibility on search engine results pages (SERPs).",
      "Cost control with adjustable budgets and bidding strategies.",
      "Measurable results with detailed analytics and tracking.",
      "Remarketing opportunities to re-engage with interested users.",
      "Enhanced brand visibility and recognition Competitive advantage by outranking competitors in ad placements.",
      "Testing and optimization capabilities for continuous improvement."
    ],
    tagline: "PPC Advertisiment ",
    price_table_title: "PPC Advertisiment Packages",
    price_table_desc:
      "Supercharge your digital marketing success with our cutting-edge PPC Advertising solutions. Our expert team is laser-focused on maximizing your return on investment through strategic and targeted ad campaigns. We understand that each business has unique goals, which is why our approach is customized to align perfectly with your objectives. From comprehensive keyword research and ad creation to meticulous campaign optimization, we ensure that your PPC strategy is finely tuned for maximum results. With our in-depth knowledge of digital advertising platforms, constant monitoring, and data-driven optimizations, we help your brand dominate the online landscape and drive exceptional conversions. Experience the power of precision targeting and skyrocket your business growth with our expert PPC Advertising services..",
    price_table_card: [
      {
        title: "★ Basic",
        description: "PPC Packages",
        image: "images/icons/plan-1.svg",
        rate: "₹ 10,000 /$ 140 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Campaign – 1",
          " ✔ AD Groups – 2",
          " ✔ Ad Copies – Maximum 6",
          " ✔ No. of Keywords-50",
          " ✔ Search Ads",
          " ⨉ Display Ads",
          " ⨉ Gmail Ads",
          " ⨉ Video Ads",
          " ⨉ Shopping Ads",
          " ⨉ App Promotion Ads",
          " ⨉ Remarketing List",
          " ✔ Conversion Tracking",
          " ▶ PPC CAMPAIGN MANAGEMENT ◀ ",
          " ✔  Competitor Analysis – Yes",
          " ✔ Keyword Optimization – Yes",
          " ✔ Ad Copy Optimization – Yes",
          " ▶ VALUE ADDS ◀ ",
          " ⨉ ROI Analysis",
          " ⨉ Landing Page Optimization",
          " ▶ REPORTING ◀ ",
          " ✔ Reports – Monthly",
          " ⨉  Dedicated Account Manager",
          " ✔ Support – Email, Chat",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Professional",
        description: "PPC Packages",
        image: "images/icons/plan-2.svg",
        rate: "₹ 18,000 /$ 250 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Campaign – 1",
          " ✔ AD Groups – 6",
          " ✔ Ad Copies – Maximum 15",
          " ✔ No. of Keywords-100",
          " ✔ Search Ads",
          " ✔ Display Ads",
          " ✔ Gmail Ads",
          " ✔ Video Ads",
          " ⨉ Shopping Ads",
          " ✔ App Promotion Ads",
          " ✔ Remarketing List",
          " ✔ Conversion Tracking",
          " ▶ PPC CAMPAIGN MANAGEMENT ◀ ",
          " ✔  Competitor Analysis – Yes",
          " ✔ Keyword Optimization – Yes",
          " ✔ Ad Copy Optimization – Yes",
          " ▶ VALUE ADDS ◀ ",
          " ✔ ROI Analysis",
          " ✔ Landing Page Optimization",
          " ▶ REPORTING ◀ ",
          " ✔ Reports – Monthly",
          " ⨉  Dedicated Account Manager",
          " ✔ Support – Email, Chat",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕ Advanced",
        description: "PPC Packages",
        image: "images/icons/plan-3.svg",
        rate: "₹ 30,000/$ 415 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Campaign – 5",
          " ✔ AD Groups – 10",
          " ✔ Ad Copies – Maximum 50",
          " ✔ No. of Keywords-150",
          " ✔ Search Ads",
          " ✔ Display Ads",
          " ✔ Gmail Ads",
          " ✔ Video Ads",
          " ✔ Shopping Ads",
          " ✔ App Promotion Ads",
          " ✔ Remarketing List",
          " ✔ Conversion Tracking",
          " ▶ PPC CAMPAIGN MANAGEMENT ◀ ",
          " ✔  Competitor Analysis – Yes",
          " ✔ Keyword Optimization – Yes",
          " ✔ Ad Copy Optimization – Yes",
          " ▶ VALUE ADDS ◀ ",
          " ✔ ROI Analysis",
          " ✔ Landing Page Optimization",
          " ▶ REPORTING ◀ ",
          " ✔ Reports – Monthly",
          " ✔  Dedicated Account Manager",
          " ✔ Support – Email, Chat",
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our PPC Advertising Process",
    process_desc:
      "Our PPC Advertising process at Moundweb is designed to deliver targeted and effective online advertising campaigns. We start by understanding your business goals, target audience, and competitors, conducting thorough keyword research and competitor analysis. With this information, our skilled team develops a comprehensive PPC strategy, selecting the most suitable platforms and ad formats for your brand. We create compelling ad copy and design visually appealing creatives that align with your brand messaging. Utilizing advanced targeting options and bid management techniques, we optimize your campaigns for maximum reach and conversions. We continuously monitor and analyze campaign performance, adjusting bids, keywords, and targeting to ensure optimal results. Our data-driven approach enables us to drive qualified traffic, increase conversions, and maximize your return on investment through PPC advertising. ",
    process_card: [
      {
        title: "Keyword Research",
        content:
          "This process involves conducting thorough keyword research to identify relevant keywords and phrases that align with your business proposition. This involves analyzing search volume, competition, and user intent to create a targeted keyword list.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: "Competitive Analysis",
        content:
          "Competitive analysis is an important aspect of PPC advertising. This includes examining the strategies and tactics adopted by competitors to gain insight and improve campaign performance. By analyzing their ad copy, keywords, landing pages and bidding strategies, marketers can identify opportunities, optimize their own campaigns and stay ahead in a competitive PPC landscape.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: "Campaign Setup",
        content:
          "Setting up a PPC campaign involves structuring your ad accounts, creating ad groups and organizing keywords. This process involves defining targeting options such as location or demographics, and setting bid strategies and budgets to optimize campaign performance.",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: "Monitoring and Optimization",
        content:
          "Once your campaigns go live, continuous monitoring and optimization are critical. This process involves analyzing campaign performance, adjusting bids, adding negative keywords, and testing ad variations to improve click-through rates, conversion rates, and overall ROI.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: "Performance Analysis and Reporting",
        content:
          "Regular analytics and reporting helps you measure the success of your PPC campaigns. This process involves tracking key metrics such as impressions, clicks, click-through rate (CTR), conversions and cost per acquisition (CPA). Analyzing data helps identify trends, optimize campaigns, and make data-driven decisions.",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Best PPC Advertisiment Company?",
    why_us_desc:
      "Ignite your brand's online growth and unlock unprecedented success in the realm of PPC advertising with Moundweb. Our team of experienced professionals harnesses cutting-edge strategies and industry best practices to stay ahead in this dynamic landscape. By thoroughly understanding your business objectives and target audience, we craft tailored PPC campaigns that captivate and convert, driving qualified traffic to your website. Our comprehensive PPC packages encompass meticulous keyword research, compelling ad copy, and captivating creatives that resonate with your audience. With our strategic bidding and optimization techniques, we ensure maximum visibility and ROI. Continuously monitoring and analyzing campaign performance, we fine-tune targeting, adjust bids, and implement data-driven optimizations to achieve unparalleled results. Moundweb is your trusted partner, delivering exceptional PPC advertising solutions that propel your brand to new heights and amplify your online presence.",
    our_project_desc:
      "Unleash the untapped potential of your brand's online presence with Moundweb's top-notch PPC advertising services. As a reputable software development company in Lucknow, we understand the immense impact of PPC in the digital realm. Our team of skilled PPC specialists is committed to creating highly targeted and effective campaigns that align with your specific business goals. Through meticulous keyword research, compelling ad copy, and captivating visuals, we ensure your brand stands out among the competition. With precise audience targeting and bid management strategies, we maximize your campaign's reach and conversions. Continual monitoring and analysis of key performance metrics enable us to optimize your campaigns for peak performance, delivering exceptional ROI. Moundweb is your trusted partner in harnessing the power of PPC advertising to propel your brand to new heights and achieve remarkable success in the digital landscape. ",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },
  //11. Bulk SMS
  {
    type: "Marketing",
    pg_title: "Best Bulk SMS Service Provider Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "If you are Looking for the best Bulk SMS Service Provider in Lucknow, you can visit Moundweb IT & Web Solutions. we are the best bulk sms service provider in Lucknow.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Bulk SMS Marketing",
    title: "BULK SMS Service for Lucknow Promotional Bulk SMS | Transactional Bulk SMS | Voice SMS | OTP SMS",
    title_desc:
      "Unlock Limitless Growth: Boost Your Website's Impact with Bulk SMS!",
    hero_image: "images/common/Bulk SMS/hero_image.png",
    description_title: "Best Bulk SMS Service Provider Company in Lucknow",
    description_desc:
      "Moundweb IT & Web Solutions is one of the top providers of Bulk SMS Services in Lucknow. It is one of the SMS gateways used for mass sending of SMS messages, ideal for businesses looking to engage with their customers.In Lucknow, Moundweb IT & Web Solutions is providing Bulk SMS Services since a long time. We are providing services as per TRAI approval. We have a variety of Bulk SMS Packages for every type of business.To send SMS, you do not need a mobile handset; You can do it from your computer instead. All you need is an internet connection to send SMSs online. As a result, this messaging service is often referred to as an online SMS service. Inform your customers about latest launched products, services and upcoming products/deals daily with Bulk SMS Services.",
    description_image: "images/common/Bulk SMS/desc_image.png",
    advantage_title: "Benefits of Best Bulk SMS Services",
    advantage_desc:
      "TRAI (Telecom Regulatory Authority of India) has approved us as Bulk SMS Seller. Vodafone and Airtel, SMS Gateway. We have a variety of Bulk SMS Packages for every type of business in Mumbai. From promotional messages to transactional, voice messages to OTP SMS - we can meet your bulk messaging needs at the lowest possible cost. Contact InfoSky Solutions today for your Bulk SMS delivery needs.Bulk SMS, also known as bulk messaging, offers several advantages for businesses and organizations. Firstly, it provides a cost-effective and efficient communication channel to reach a large audience instantly. With bulk SMS, businesses can send personalized messages to thousands or even millions of recipients simultaneously, saving time and effort. Secondly, it offers high open and read rates, as text messages are typically read within minutes of being received. This ensures that important information, promotions, or notifications are promptly delivered and seen by the intended recipients. Additionally, bulk SMS allows for targeted messaging, enabling businesses to segment their audience and tailor messages based on demographics, preferences, or behaviors. This personalized approach enhances customer engagement and increases the likelihood of desired actions or conversions. ",
    advantage_tagline: "Advantages of Bulk SMS Services",
    advantage_card: [
      "Reach: Bulk SMS enables businesses to reach a large number of people instantly. It allows you to send messages to thousands or even millions of recipients simultaneously.",
      "High Open Rate: SMS messages have a significantly higher open rate compared to emails or other forms of communication. ",
      "Immediate Delivery: Bulk SMS offers instant delivery, ensuring that your message reaches the recipients quickly.",
      "Cost-Effective: Bulk SMS is a cost-effective communication method compared to traditional marketing channels such as print advertisements or direct mail.",
      "Personalization: Bulk SMS can be personalized to include the recipient's name or other relevant information, making the messages more engaging and increasing the chances of a positive response.",
      "Automation: Bulk SMS can be automated to send messages at specific times or based on certain triggers, such as a customer's birthday or anniversary.",
    ],
    tagline: "Bulk SMS",
    price_table_title: "Bulk SMS Services Packages",
    price_table_desc:
      "The Bulk SMS Service Price Table provides a comprehensive description of the pricing structure for sending SMS messages in bulk. It outlines the costs associated with different message volumes, ranging from small to large quantities, and provides transparent details on pricing tiers, such as the cost per SMS or credits required for each message. The price table may also highlight any discounts or promotions available based on the volume of messages sent, ensuring that customers have a clear understanding of the pricing options and can make informed decisions based on their messaging needs and budget constraints.",
    price_table_card: [
      {
        title: "★ Basic",
        description: "Bulk SMS Service Packages",
        image: "images/icons/plan-1.svg",
        rate: "₹ 5000 /$ 75 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Rate/SMS(PS) : 0.23",
          " ✔ Amount : 1,150/- ",
          " ✔ Tax Amount(18%) : 207/- ",
          " ✔ Total Amount : 1,357/- ",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Professional",
        description: "Bulk SMS  Packages",
        image: "images/icons/plan-2.svg",
        rate: "₹ 25,000 /$ 310 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Rate/SMS(PS) : 0.19",
          " ✔ Amount : 4,750/- ",
          " ✔ Tax Amount(18%) : 855/- ",
          " ✔ Total Amount : 5,605/- ",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕ Advanced",
        description: "PPC Packages",
        image: "images/icons/plan-3.svg",
        rate: "₹ 2500/$ 415 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Rate/SMS(PS) : 0.21",
          " ✔ Amount : 2,100/- ",
          " ✔ Tax Amount(18%) : 378/- ",
          " ✔ Total Amount : 2,478/- ",
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Bulk SMS Service Process",
    process_desc:
      "The Bulk SMS Service Process involves selecting a provider, creating an account, preparing SMS content, uploading recipient lists, defining delivery parameters, initiating the campaign, and tracking results. It starts with choosing a provider and creating an account. Then, the SMS content is prepared, recipient lists are uploaded, and delivery parameters are set. The campaign is launched, and results are tracked using reporting tools. ",
    process_card: [
      {
        title: "Provider Selection",
        content:
          " Choose a reliable bulk SMS service provider that meets your requirements in terms of features, pricing, and support.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: "Account Setup",
        content:
          "Create an account with the selected provider, providing necessary details and completing the registration process.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: "Message Preparation",
        content:
          "Prepare the content of the SMS messages, ensuring they are concise, engaging, and relevant to the recipients.",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: "Recipient List Management",
        content:
          "Upload or integrate the recipient list, which can be a database of contacts or obtained through opt-in mechanisms, into the bulk SMS service platform.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: "Campaign Launch",
        content:
          "Define the delivery parameters, such as scheduling the message send time and date or segmenting the audience based on specific criteria. Initiate the campaign to start sending the SMS messages to the intended recipients.",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Best Bulk SMS Service Provider Company?",
    why_us_desc:
      "Choosing MoundWeb Company for bulk SMS services provides businesses and organizations with even more benefits. MoundWeb Company offers a reliable and efficient platform for sending bulk SMS messages. With their expertise and experience in the field, they ensure seamless delivery of messages to a large audience. Their competitive pricing plans make bulk SMS cost-effective for businesses of all sizes. MoundWeb Company also provides advanced features, such as personalized messaging options, detailed analytics, and integration capabilities with CRM systems. By partnering with MoundWeb Company, businesses can leverage their expertise and cutting-edge technology to maximize the impact of their bulk SMS campaigns, ensuring effective communication and engagement with their target audience.",
    our_project_desc:
      "MoundWeb Company has successfully executed numerous projects leveraging bulk SMS technology. Their expertise in this field has enabled them to deliver exceptional results for clients across various industries. From large-scale promotional campaigns to personalized customer engagement initiatives, MoundWeb Company has implemented bulk SMS solutions that drive results. They have helped businesses reach a wide audience, ensuring instant and targeted message delivery. Whether it's sending time-sensitive offers, important updates, or transactional notifications, MoundWeb Company has demonstrated their ability to create effective and engaging SMS campaigns. Their projects have included seamless integration with clients' existing systems, enabling automated and efficient communication processes. With MoundWeb Company's expertise in bulk SMS, clients have experienced increased customer engagement, improved response rates, and ultimately, greater business success.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },
  // 12. Email Marketing
  {
    type: "Marketing",
    pg_title: "Best Email Marketing Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Moundweb IT & Web Solutions is Top leading Email Marketing company in Lucknow. We are offering professional Email Marketing at Affordable price. We provide a complete range of Email marketing services in Lucknow.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Email Marketing",
    title: "Best Email Marketing Company in Lucknow ",
    title_desc:
      "Drive traffic, boost conversions, and conquer search engines with our SEO-savvy email marketing strategies!",
    hero_image: "images/common/Email/hero_image.png",
    description_title: "Best Email Marketing Service Company in Lucknow",
    description_desc:
      "Are you looking for the best email marketing company in Lucknow? Look no further than Moundweb. We offer a wide range of email marketing services that can help you grow your business, including list management, email design, and email campaign delivery.Email marketing is a powerful tool that can help you grow your business. When done correctly, email marketing can help you generate leads, increase sales, and build relationships with your customers. If you're searching for the best email marketing company in Lucknow, you can visit Moundweb IT & web Solutions. We Provide Best Email Marketing Service in Lucknow. We have a team of experienced email marketing professionals who can help you create and execute email marketing campaigns that will help you achieve your business goals.",
    description_image: "images/common/Email/desc-image.png",
    advantage_title: "Benefits of Best Email Marketing Services Company",
    advantage_desc:
      "Email marketing offers numerous advantages for businesses. It provides a cost-effective and efficient way to reach a large audience, allowing businesses to connect with their customers directly in their inbox. With email marketing, businesses can personalize messages, segment their audience, and tailor content based on recipients' preferences, increasing the likelihood of engagement and conversion. It also enables businesses to track and analyze campaign performance, gaining valuable insights to optimize future marketing efforts. Moreover, email marketing facilitates building and nurturing customer relationships, fostering loyalty and repeat business. Overall, email marketing is a powerful tool that offers a wide range of benefits, including scalability, measurability, personalization, and the ability to drive business growth.",
    advantage_tagline: "Advantages of Email Marketing Services",
    advantage_card: [
      "Wide reach, delivering messages to a large audience instantly.",
      "Cost-effective compared to traditional marketing channels. ",
      "Personalization and targeted messaging for better engagement.",
      "Appeal to different segments of your target audience",
      "Measurable results with detailed analytics to track campaign performance.",
      "Builds relationships and improves customer retention through consistent communication.",
      " Drives conversions and increases sales.",
    ],
    tagline: "Email Marketing",
    price_table_title: "Email Marketing Services Packages",
    price_table_desc:
      "The Email Marketing Price Table provides a detailed description of the pricing structure for email marketing services. It outlines the costs associated with different pricing tiers or plans, including the number of subscribers or emails allowed per month. The price table may include information on additional features or services included in each plan, such as advanced segmentation, automation workflows, A/B testing, or analytics. It provides transparency regarding the pricing options available, allowing businesses to choose the plan that aligns with their email marketing needs and budget. The table may also highlight any special offers, discounts, or upgrades available for certain plans, ensuring that customers have a clear understanding of the pricing details and can make informed decisions.",
    price_table_card: [
      {
        title: "★ Basic",
        description: "Email Marketing Service Packages",
        image: "images/icons/plan-1.svg",
        rate: "₹ 2050 /$ 25 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ 40,000 emails per month",
          " ✔ No daily sending ",
          " ✔ Unlimited Contacts",
          " ✔ Email Builder",
          " ✔ Email Templates",
          " ⨉ A/B Testing",
          " ⨉ Remove Sendinblue logo from emails",
          " ⨉ Advanced Statistics",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Professional",
        description: "Email Marketing Packages",
        image: "images/icons/plan-2.svg",
        rate: "₹ 3,200 /$ 40 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "All Basic Features",
          " ✔  A/B Testing",
          " ✔ Remove Sendinblue logo from emails",
          " ✔ Advanced Statistics",
          " ⨉ Facebook Ads",
          " ⨉ Landing Pages",
          " ⨉ Multi-user access",
          " ✔ Phone Support",
          " ⨉ Marketing Automation",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕ Advanced",
        description: "Email Marketing Packages",
        image: "images/icons/plan-3.svg",
        rate: "₹ 5500/$ 66 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          "All Basic Features",
          " ✔  A/B Testing",
          " ✔ Remove Sendinblue logo from emails",
          " ✔ Advanced Statistics",
          " ✔ Facebook Ads",
          " ✔ Landing Pages",
          " ✔ Multi-user access",
          " ✔ Phone Support",
          " ✔ Marketing Automation",
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Email Marketing Service Process",
    process_desc:
      "The best email marketing company in Lucknow offers a streamlined process for executing effective email marketing campaigns. Firstly, they begin by understanding the client's marketing goals and target audience. Next, they assist in building a high-quality email subscriber list through various strategies like lead generation and opt-in forms. Once the list is established, the company helps in designing visually appealing and engaging email templates that align with the client's brand. They provide assistance in crafting compelling email content that resonates with recipients and encourages desired actions. The company ensures compliance with email marketing regulations and best practices, including proper segmentation and personalization. They handle the technical aspects, including email delivery, tracking, and analytics, to monitor campaign performance. Overall, the best email marketing company in Lucknow combines strategy, creativity, and technical expertise to deliver successful email marketing campaigns that drive engagement and generate desired results for their clients. ",
    process_card: [
      {
        title: "Goal Definition",
        content:
          " The company collaborates with the client to understand their marketing objectives and define clear goals for the email campaigns.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: "Target Audience Identification",
        content:
          "The company helps identify and segment the target audience based on demographics, interests, or other relevant factors to ensure precise targeting.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: "Creative Design",
        content:
          "The company creates visually appealing and branded email templates that capture recipients' attention.",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: "Compelling Content Creation",
        content:
          " They assist in crafting personalized and engaging email content that effectively delivers the client's message and encourages desired actions.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: "Performance Tracking and Analytics",
        content:
          "The company provides detailed reporting and analytics to track key metrics and measure the success of the email campaigns.",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Best Email Marketing Service Provider Company?",
    why_us_desc:
      "There are several reasons why choosing the best email marketing company in Lucknow can be a valuable decision. Firstly, our company brings extensive experience and expertise in designing and executing successful email marketing campaigns. We have a deep understanding of industry best practices, trends, and strategies that can help businesses achieve their marketing goals effectively. Furthermore, our company is committed to compliance with email marketing regulations and data protection laws, ensuring that our clients' campaigns are conducted ethically and legally. By choosing us, businesses in Lucknow can benefit from our comprehensive approach, technical proficiency, and a track record of delivering impactful email marketing campaigns that drive engagement, conversions, and business growth.",
    our_project_desc:
      "As the best email marketing company in Lucknow, we have successfully executed numerous projects for our clients, delivering exceptional results and driving their marketing success. Our expertise lies in designing and implementing highly targeted and engaging email campaigns that resonate with the audience. We begin by understanding our clients' goals and target audience, enabling us to develop customized strategies for each project. Our team utilizes creative designs and compelling content to craft visually appealing and impactful email templates that align with the clients' brand identity. We emphasize segmentation and personalization to ensure that the right message reaches the right recipients at the right time.By partnering with us, businesses in Lucknow can expect tailored, results-driven email marketing solutions that boost engagement, conversions, and overall marketing success.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },// 13. Content Marketing
  {
    type: "Marketing",
    pg_title: "Best Content Marketing Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Unlock the potential of your brand with the best Content Marketing Company in Lucknow. We create engaging content that engages your audience and drives results.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Content Marketing",
    title: "Best Content Marketing Company in Lucknow ",
    title_desc:
      "Unlock the potential of your brand with the best Content Marketing Company in Lucknow. We create engaging content that engages your audience and drives results.",
    hero_image: "images/common/Content Marketing/hero_image.png",
    description_title: "Best Content Marketing Service Company in Lucknow",
    description_desc:
      "Are you looking for the best content marketing company to elevate your brand? look no further! Our team of skilled professionals specializes in creating high-quality, engaging content that engages your target audience. From blog posts and articles to social media content and video scripts, we create engaging narratives that drive results. With a strategic approach and a deep understanding of your brand, we'll help you establish thought leadership, increase brand visibility and generate valuable leads. Experience the power of content marketing with our exceptional services. Contact us today to transform your brand story and fuel your business growth.",
    description_image: "images/common/Content Marketing/desc_image.png",
    advantage_title: "Benefits of Best Content Marketing Services Company",
    advantage_desc:
      "The Best Content Marketing Company MoundWeb provides businesses with a strategic approach to content marketing, crafting compelling and relevant content that captivates audiences and drives engagement. Through audience targeting and personalization, they create personalized experiences that resonate with each segment. Their expertise in SEO optimization ensures improved search engine rankings and increased organic visibility. Leveraging various digital channels and platforms, they promote content effectively, maximizing brand exposure. With a data-driven approach, they measure performance and make informed decisions for continuous improvement. Offering cost-effectiveness and tangible results, the best content marketing company in Lucknow empowers businesses to enhance their online presence, engage their target audience, and drive sustainable growth.",
    advantage_tagline: "Advantages of Content Marketing Services",
    advantage_card: [
      "Audience targeting and personalization ensure that content resonates with specific segments, fostering stronger connections and higher engagement rates.",
      " Cost-effectiveness and measurable results make the best content marketing company in Lucknow a valuable investment for businesses seeking to enhance their online presence and drive meaningful conversions. ",
      "Leveraging digital channels and platforms, they maximize brand exposure and reach a wider audience, increasing the potential for customer acquisition and brand recognition.",
      "Leveraging digital channels and platforms, they maximize brand exposure and reach a wider audience, increasing the potential for customer acquisition and brand recognition.",
      "Measurable results with detailed analytics to track campaign performance.",
      "Builds relationships and improves customer retention through consistent communication.",
    ],
    tagline: "Content Marketing",
    price_table_title: "Content Marketing Services Packages",
    price_table_desc:
      "The Content Marketing Price Table provides a comprehensive overview of the pricing structure for content marketing services. It outlines the costs associated with various service packages or tiers, each offering different levels of content creation, strategy development, and promotional activities. The price table may detail the number of blog posts, articles, or social media posts included in each package, along with additional services such as SEO optimization, content distribution, and analytics reporting. It aims to offer transparency by clearly presenting the pricing options and any additional features or benefits included in each package. This allows businesses to choose the most suitable package based on their budget, goals, and desired level of content marketing support. The Content Marketing Price Table ensures that clients have a clear understanding of the pricing structure, enabling them to make informed decisions and invest in content marketing services that align with their needs.",
    price_table_card: [
      {
        title: "★ Basic",
        description: "Content Marketing Service Packages",
        image: "images/icons/plan-1.svg",
        rate: "₹ 13,000 /$ 160 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ 2 Blogs writing &Publishing",
          " ✔ 2 Article writing &Publishing ",
          " ✔ Publishing & Publishing",
          " ✔ DA 25-40",
          " ✔ High Quality Image for Blogs",
          " ✔ Blog: 300 words Article: 500 words Content",
          " ✔ Turnaround Time: 5 Working Days",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Professional",
        description: "Content Marketing Packages",
        image: "images/icons/plan-2.svg",
        rate: "₹ 27,000 /$ 330 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ 4 Blogs writing &Publishing",
          " ✔ 4 Article writing &Publishing ",
          " ✔ Publishing & Publishing",
          " ✔ DA 25-45",
          " ✔ High Quality Image for Blogs",
          " ✔ Blog: 300 words Article: 500 words Content",
          " ✔ Turnaround Time: 10 Working Days",
        ],
        button: "bg-btn3",
      },
      {
        title: "♕ Advanced",
        description: "Content Marketing Packages",
        image: "images/icons/plan-3.svg",
        rate: "₹ 44,000/$ 550 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ 10 Blogs writing &Publishing",
          " ✔ 10 Article writing &Publishing ",
          " ✔ Publishing &Publishing",
          " ✔ DA 25-55",
          " ✔ High Quality Image for Blogs",
          " ✔ Blog: 300 words Article: 500 words Content",
          " ✔ Turnaround Time: 15 Working Days",
        ],
        button: "bg-btn",
      },
    ],
    process_title: "Our Content Marketing Service Process",
    process_desc:
      "Moundweb IT & Web Solutions is the Best Content Marketing Company in Lucknow. We Provide Best Content Maketing Service in Lucknow. We specialize in creating compelling and engaging content that engages audiences and drives results. With a deep understanding of your target market, we create customized strategies that enhance your brand's online presence, drive engagement and generate valuable leads. Our team of skilled professionals combine creativity, industry knowledge and data-driven insights to deliver exceptional content that resonates with your audience and achieves your marketing goals. Experience the power of effective storytelling and transform your brand story with our Best content marketing service in Lucknow. Contact us today to take your content marketing to new heights. ",
    process_card: [
      {
        title: "Strategy Development",
        content:
          " In the strategy development process, we analyze your goals, target audience and competitive landscape. We design a comprehensive content strategy that is tailored to your objectives, ensuring that each piece of content makes maximum impact and effectively engages your audience.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: "Content Creation",
        content:
          "Our content creation process involves creating compelling, high-quality content that engages your audience. From engaging blog posts to informative articles, we create customized content that suits your target market. Rely on our expertise to deliver captivating stories that drive results and strengthen your brand's online presence.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: " Content Distribution",
        content:
          "The content distribution process ensures that your content reaches the right audience. Through strategic placement on websites, social media platforms, newsletters and other relevant channels, we amplify your brand's message, increase visibility and effectively engage your target audience. Maximize the reach of your content with our expert distribution strategies.",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: "Measurement and Analysis",
        content:
          "Measurement and analysis are important in content marketing. By tracking key metrics like engagement, conversions and website traffic, we gain valuable insight. This data driven approach allows us to optimize strategies, refine content creation and drive better results. Unlock the power of data in your content marketing efforts.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: "Iteration and Optimization",
        content:
          "Repetition and optimization are integral parts of content marketing success. By analyzing data, refining strategies and adapting to audience preferences, we continually enhance content creation, distribution channels and messaging. This iterative process ensures maximum impact, engagement and conversion, leading to continued growth for our clients.",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Best Content Marketing Service Provider Company?",
    why_us_desc:
      "Professional content writers have the expertise to create high-quality, well-researched, and engaging content that resonates with your audience.Professional content writers can help you maintain a consistent voice and style across all of your content, ensuring that your brand is easily recognizable.Professional content writers often specialize in specific industries, allowing them to create content that speaks directly to your target audience.",
    our_project_desc:
      " As the best content marketing company in Lucknow, we have successfully executed numerous projects for our clients, delivering exceptional results and driving their marketing success. Our expertise lies in designing and implementing highly targeted and engaging email campaigns that resonate with the audience. We begin by understanding our clients' goals and target audience, enabling us to develop customized strategies for each project. Our team utilizes creative designs and compelling content to craft visually appealing and impactful email templates that align with the clients' brand identity. We emphasize segmentation and personalization to ensure that the right message reaches the right recipients at the right time.By partnering with us, businesses in Lucknow can expect tailored, results-driven email marketing solutions that boost engagement, conversions, and overall marketing success.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },// 14. Video Marketing
  {
    type: "Marketing",
    pg_title: "Best Video Marketing Company in Lucknow - Moundweb IT & Web Solutions",
    meta_1: {
      name: "description",
      content:
        "Are you Looking for the Best Video Marketing Company in Lucknow? Moundweb is the best Video Marketing Company in Lucknow. We Provide Best Video Marketing Service in Lucknow.",
    },
    meta_2: {
      name: "keywords",
      content:
        "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page: "Video Marketing",
    title: "Best Video Marketing Company in Lucknow ",
    title_desc:
      "Lights On, Engagement Up: Drive Results with Dynamic Video Marketing Strategies!",
    hero_image: "images/common/Video Marketing/hero_image.png",
    description_title: "Best Video Marketing Service Company in Lucknow",
    description_desc:
      "Are you looking for the best video marketing company to take your brand to the next level? You are in the right place! Our skilled team of professionals specializes in creating compelling and impactful videos that engage and captivate your target audience. From concept development to screenwriting, filming, editing and distribution, we handle every aspect of the video production process. Whether it's brand storytelling, product demos, testimonials, or animated explainer videos, we'll create a visual masterpiece that drives results and increases your brand's visibility. Experience the power of video marketing with our exceptional services. Contact us today to change the story of your brand and grow your business.",
    description_image: "images/common/Video Marketing/desc_image.png",
    advantage_title: "Benefits of Best Video Marketing Services Company",
    advantage_desc:
      "Video marketing offers numerous advantages for businesses seeking to enhance their online presence and engage their target audience effectively. Firstly, videos have a high engagement factor, capturing attention and conveying information in a dynamic and memorable way. They can effectively communicate complex messages, evoke emotions, and showcase products or services. Video content has a wide reach, as it can be shared across various platforms and social media channels, expanding brand visibility. It also has the potential to improve search engine rankings and increase website traffic. Video marketing allows for storytelling and brand building, creating a deeper connection with the audience. Additionally, videos can boost conversion rates, as they have a persuasive impact and can effectively demonstrate product features or benefits. With its versatility, engagement power, and potential to drive results, video marketing is a valuable tool for businesses to communicate their message, engage their audience, and achieve their marketing goals.",
    advantage_tagline: "Advantages of Video Marketing Services",
    advantage_card: [
      "Video marketing captivates audiences with its high engagement, enabling businesses to convey compelling brand stories and evoke emotions effectively.",
      "With increased reach across platforms and the potential for higher conversion rates, video marketing enhances brand visibility, engages viewers, and drives business growth.",
      "High engagement: Videos captivate and emotionally connect with viewers, increasing audience engagement.",
      "SEO benefits: Video content improves search engine rankings and drives more organic traffic.",
      "Versatility and shareability: Videos are easily shared, potentially going viral and reaching a wider audience.",
      "Effective product/service demonstration: Videos showcase products/services, influencing purchase decisions and building trust.",
    ],
    tagline: "Content Marketing",
    price_table_title: "Video Marketing Services Packages",
    price_table_desc:
      "The Price Table provides a comprehensive overview of the pricing structure for services, detailing the costs associated with different packages or plans. It presents a transparent breakdown of pricing tiers, outlining the features and benefits included in each package, along with corresponding pricing. The Price Table may highlight any special offers, discounts, or additional services available for specific packages, allowing customers to easily compare options and make informed decisions. This pricing resource ensures clarity and enables businesses to choose the most suitable package based on their needs and budget. By providing a clear breakdown of costs and features, the Price Table simplifies the decision-making process and ensures transparency in pricing for customers.",
    price_table_card: [
      {
        title: "★ Basic",
        description: "Video Marketing Service Packages",
        image: "images/icons/plan-1.svg",
        rate: "₹ 32,000 /$ 390 " + " Month",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Total Videos Per Year 12",
          " ✔ Shoots per Year 1 to 4 ",
          " ✔ Video Length 1 to 3 min",
          " ✔ On Camera Subjects per Shoot 1",
          " ✔ Initial Series concept & Topic Planning",
          " ✔ Preproduction Consultation",
          " ✔ Experienced Production Team",
          " ✔ Professional HD Camera, Audio, Lighting & Support Gear",
          " ✔ Professionally Lit Green Screen Studio",
          " ✔ Teleprompter",
          " ✔ Background (from our in house collection)",
          " ✔ Licensed Music (from our in house library)",
          " ✔ Professional Editing",
          " ✔ Add (Client Provided) Photos/Graphics up to 10",
          " ✔ Changes Included 1",
          " ✔ Compressed Video Ready For Posting",
          " ✔ Distribution Instructions",
        ],
        button: "bg-btn",
      },
      {
        title: "➚ Professional",
        description: "Content Marketing Packages",
        image: "images/icons/plan-2.svg",
        rate: "₹ 28,000 /$ 350 " + " Week",
        type: "EXCLUSIVE OF ALL TAXES",
        list: [
          " ✔ Total Videos Per Year 48 to 52",
          " ✔ Shoots per Year 4 to 13 ",
          " ✔ Video Length 1 to 3 min",
          " ✔ On Camera Subjects per Shoot 1",
          " ✔ Initial Series concept & Topic Planning",
          " ✔ Preproduction Consultation",
          " ✔ Experienced Production Team",
          " ✔ Professional HD Camera, Audio, Lighting & Support Gear",
          " ✔ Professionally Lit Green Screen Studio",
          " ✔ Teleprompter",
          " ✔ Background (from our in house collection)",
          " ✔ Licensed Music (from our in house library)",
          " ✔ Professional Editing",
          " ✔ Add (Client Provided) Photos/Graphics up to 10",
          " ✔ Changes Included 1",
          " ✔ Compressed Video Ready For Posting",
          " ✔ Distribution Instructions",
        ],
        button: "bg-btn3",
      },
    ],
    process_title: "Our Video Marketing Service Process",
    process_desc:
      "The Video Marketing Process involves a systematic approach to creating and implementing effective video campaigns. It begins with strategy development, where goals, target audience, and key messages are identified. Next, pre-production activities such as scripting, storyboarding, and location scouting take place. Once the production phase starts, the video is filmed, including any necessary editing, graphics, or animation. Post-production involves adding music, voiceovers, and finalizing the video for distribution. Distribution channels are determined, which may include websites, social media platforms, or video-sharing platforms. Finally, analytics and performance tracking are utilized to measure the success of the video campaign, allowing for adjustments and optimization in future campaigns. Throughout the process, creativity, strategic planning, and technical expertise come together to deliver engaging and impactful video content that drives brand awareness, audience engagement, and ultimately, business growth.",
    process_card: [
      {
        title: "Strategy Development",
        content:
          " As a leading video marketing company in Lucknow, our strategy focuses on in-depth audience analysis, compelling content creation, platform optimization, and data-driven insights. We use captivating visuals, storytelling and strong calls to action to raise brand awareness, maximize conversions and drive exceptional results for our clients.",
        image: "images/common/Marketing/process-1.webp",
      },
      {
        title: "Pre-production Planning",
        content:
          "For the best video marketing company in Lucknow, effective pre-production planning is crucial. This includes defining goals, conducting in-depth research, creating a compelling script, and organizing logistics. By ensuring a well-structured pre-production phase, a company can deliver high-quality videos that engage audiences, align with brand messaging and drive desired results.",
        image: "images/common/Marketing/process-2.webp",
      },
      {
        title: "Production",
        content:
          "As a leading video marketing company in Lucknow, our production process combines creativity, professionalism and technical expertise. From concept to screenwriting, filming, editing and post-production, we ensure high quality videos that grab attention and deliver powerful messages. Our team works closely with clients to create engaging videos that drive results.",
        image: "images/common/Marketing/process-3.webp",
      },
      {
        title: " Post-production",
        content:
          "As a leading video marketing company in Lucknow, our post-production process is top notch. We employ skilled editors, state-of-the-art software and careful attention to detail to ensure seamless transitions, refined visuals and captivating storytelling. Our expertise in color grading, audio enhancement and visual effects guarantees a final product that exceeds expectations.",
        image: "images/common/Marketing/process-4.webp",
      },
      {
        title: "Distribution and Promotion",
        content:
          "Our leading video marketing company in Lucknow excels in the distribution and promotion process. Leveraging targeted platforms, strategic partnerships and social media integration, we ensure maximum visibility for your videos. With our expertise in optimizing content for search engines and using analytics, we drive impactful results and increase your brand's reach.",
        image: "images/common/Marketing/process-5.webp",
      },
    ],
    why_us: "Why Choose Moundweb As Best Video Marketing Service Provider Company?",
    why_us_desc:
      "Moundweb IT & Web Solutions is one of the best Video Marketing Company in Lucknow. We provide best video marketing service in Lucknow. There are multiple benefits of choosing Moundweb as the best video marketing company in Lucknow. With our expertise, we deliver exceptional video campaigns that engage, inform and convert your target audience. Our team of creative professionals combine strategic thinking, captivating visuals and compelling storytelling to create impactful videos that elevate your brand. Trust MoundWeb to deliver outstanding results and help your business thrive in a competitive digital landscape.",
    our_project_desc:
      " As the best video marketing company in Lucknow, we have successfully executed numerous projects for our clients, delivering exceptional results and driving their marketing success. Our expertise lies in designing and implementing highly targeted and engaging email campaigns that resonate with the audience. We begin by understanding our clients' goals and target audience, enabling us to develop customized strategies for each project. Our team utilizes creative designs and compelling content to craft visually appealing and impactful email templates that align with the clients' brand identity. We emphasize segmentation and personalization to ensure that the right message reaches the right recipients at the right time.By partnering with us, businesses in Lucknow can expect tailored, results-driven email marketing solutions that boost engagement, conversions, and overall marketing success.",
    our_project_card: [
      {
        title: "Creative",
        description: "IOS,Design",
        image: "images/portfolio/image-1.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-2.jpg",
      },
      {
        title: "E-Commerce Development",
        description: "Web Application",
        image: "images/portfolio/image-3.jpg",
      },
      {
        title: "Icon Pack",
        description: "Android & IOS,Design",
        image: "images/portfolio/image-4.jpg",
      },
      {
        title: "Swart Watch",
        description: "UI/UX Design",
        image: "images/portfolio/image-5.jpg",
      },
      {
        title: "Broucher Design",
        description: "Graphic, Print",
        image: "images/portfolio/image-6.jpg",
      },
      {
        title: "Product Watch",
        description: "Graphic, Print",
        image: "images/portfolio/image-7.jpg",
      },
      {
        title: "App Design",  
        description: "Android & IOS,Design",
        image: "images/portfolio/image-8.jpg",
      },
    ],
  },
];

const Training = [
  //Web Development Training
  {
    tagline: "Web Development",
    type:"Web Development Training",
    pg_title : "Best Web Development Course in Lucknow - Moundweb IT & Web Solutions",
    meta_1 : {
      name: "description",
      content:  "Moundweb is the best Web Development Training Company in Lucknow. We Provide Best Web Development Training in Lucknow. Join Best Web Development Training Institute in Lucknow.",
    },
    meta_2 : {
      name: "keywords",
      content: "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page : "Web Development Training",
    hero_title : "Best Web Development Course in Lucknow ",
    description_title : "Advance Web Development Course in Lucknow",
    description_desc : " Are you looking for the best web development training company to take your career to the next level? You are in the right place! Our team of skilled professionals specializes in providing comprehensive training in web development. From HTML and CSS to JavaScript, PHP, and MySQL, we cover all the essential skills required to become a successful web developer. With a practical approach and a deep understanding of the latest technologies, we'll help you master the fundamentals of web development and build a strong foundation for your career. Experience the power of web development with our exceptional training. Contact us today to take your career to new heights.", 
    advantage_title : "Benefits of  Web Development Course ",
    advantage_desc : "The Best Web Development Training Company MoundWeb provides businesses with a strategic approach to content marketing, crafting compelling and relevant content that captivates audiences and drives engagement. Through audience targeting and personalization, they create personalized experiences that resonate with each segment. Their expertise in SEO optimization ensures improved search engine rankings and increased organic visibility. Leveraging various digital channels and platforms, they promote content effectively, maximizing brand exposure. With a data-driven approach, they measure performance and make informed decisions for continuous improvement. Offering cost-effectiveness and tangible results, the best content marketing company in Lucknow empowers businesses to enhance their online presence, engage their target audience, and drive sustainable growth.",
    advantage_tagline : "Advantages of Web Development Training",
    advantage_card : [
      "High demand: Web developers are in high demand due to the increasing need for online presence and digital solutions.",
      "Lucrative opportunities: Web development offers competitive salaries and benefits, making it a financially rewarding career choice.",
      "Versatile skills: Web development involves various technologies, enabling developers to create diverse applications and websites.",
      "Remote work and freelancing: Web development allows for remote work and freelancing opportunities, providing flexibility and independence.",
      "Constant growth: The field of web development is continually evolving, ensuring ongoing learning and career advancement potential.",
      "Web development is a highly sought-after skill, with a growing demand for web developers in the job market.",
    ],
    course_title : "Learn 10 + Modules With Our Advance Web Development Course",
    course_desc :" The Web Development Training Course provides a comprehensive overview of the skills and knowledge required to become a successful web developer. It covers the fundamentals of web development, including HTML, CSS, JavaScript, PHP, and MySQL. The course may also include training in other programming languages, such as Python, Ruby, or Java. It aims to equip students with the skills and knowledge required to build dynamic websites and web applications. The Web Development Training Course may also cover topics such as responsive design, user experience, and search engine optimization. It aims to provide students with a solid foundation in web development, enabling them to pursue a career in this field.",
    course_image: "images/service/service-img-3.png",
    course_card : {
      title : "100+ Tools",
      image : "images/service/service-img-2.png",
    },
    why_us_title:" Why Choose Moundweb As Best Web Development Training Company?",
    why_us_desc:"Moundweb IT & Web Solutions is one of the best Web Development Training Company in Lucknow. We provide best web development training in Lucknow. There are multiple benefits of choosing Moundweb as the best web development training company in Lucknow. With our expertise, we deliver exceptional web development training that equips you with the skills and knowledge required to become a successful web developer. Our team of skilled professionals combine creativity, industry knowledge and data-driven insights to deliver exceptional training that resonates with your audience and achieves your marketing goals. Trust MoundWeb to deliver outstanding results and help your business thrive in a competitive digital landscape.",
    why_us_card : [
      {
        title : "HTML",
        image : "images/icons/html-5.png",
        margin_class:"",
      },
      {
        title : "CSS",
        image : "images/icons/css-3.png",
        margin_class:"",
      },
      {
        title : "JavaScript",
        image : "images/icons/stack-icon5.png",
        margin_class:"",
      },
      {
        title : "Jquery",
        image : "images/icons/jquery.png",
        margin_class:"",
      },
      {
        title : "Bootstrap(Css Library)",
        image : "images/icons/bootstrap.png",
        margin_class:"",
      }, 
      {
        title : "Frontend Development",
        image : "images/icons/design.png",
        margin_class:"",
      },
      {
        title : "Backend Development",
        image : "images/icons/backend.png",
        margin_class:"",
      },
      {
        title : "Node.js",
        image : "images/icons/nodejs.png",       
        margin_class:"",
      },
      {
        title : "Express.js",
        image : "images/icons/expressjs.png",
        margin_class:"",
      }
    ]

  },
  // Digital Marketing Training
  {
    tagline: "Digital Marketing",
    type:"Digital Marketing Training",
    pg_title : "Best Digital Marketing Course in Lucknow - Moundweb IT & Web Solutions",
    meta_1 : {
      name: "description",
      content:  "Moundweb is the Top Digital Marketing Training Company in Lucknow. We Provide Best Web Development Training in Lucknow. Join Best Web Development Training Institute in Lucknow.",
    },
    meta_2 : {
      name: "keywords",
      content: "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page : "Digital Marketing Training",
    hero_title : "Top Digital Marketing Course in Lucknow ",
    description_title : "Advance Digital Marketing Course in Lucknow",
    description_desc : " Are you looking for the best digital marketing training company to take your career to the next level? You are in the right place! Our team of skilled professionals specializes in providing comprehensive training in digital marketing. From SEO and PPC to social media marketing and content marketing, we cover all the essential skills required to become a successful digital marketer. With a practical approach and a deep understanding of the latest technologies, we'll help you master the fundamentals of digital marketing and build a strong foundation for your career. Experience the power of digital marketing with our exceptional training. Contact us today to take your career to new heights.", 
    advantage_title : "Benefits of Digital Marketing Training Course ",
    advantage_desc : "The Digital Marketing Training Course provides a comprehensive overview of the skills and knowledge required to become a successful digital marketer. It covers the fundamentals of digital marketing, including SEO, PPC, social media marketing, content marketing, and email marketing. The course may also include training in other digital marketing strategies, such as affiliate marketing, influencer marketing, and video marketing. It aims to equip students with the skills and knowledge required to build dynamic websites and web applications. The Digital Marketing Training Course may also cover topics such as responsive design, user experience, and search engine optimization. It aims to provide students with a solid foundation in digital marketing, enabling them to pursue a career in this field.",
    advantage_tagline : "Advantages of Digital Marketing Training",
    advantage_card : [
      "High demand: Digital marketers are in high demand due to the increasing need for online presence and digital solutions.",
      "Lucrative opportunities: Digital marketing offers competitive salaries and benefits, making it a financially rewarding career choice.",
      "Versatile skills: Digital marketing involves various technologies, enabling marketers to create diverse campaigns and strategies.",
      "Remote work and freelancing: Digital marketing allows for remote work and freelancing opportunities, providing flexibility and independence.",
      "Constant growth: The field of digital marketing is continually evolving, ensuring ongoing learning and career advancement potential.",
    ],
    course_title : "Learn 20 + Modules With Our Advance Digital Marketing Course",
    course_desc :"The Digital Marketing Training Course is designed to offer a comprehensive and in-depth understanding of the core concepts and skills necessary to excel in the digital marketing industry. By providing a well-rounded curriculum, it equips students with the knowledge and tools they need to thrive as successful digital marketers.",
    course_image: "images/service/digitalmarketing.png",
    course_card : {
      title : "100+ Tools",
      image : "images/service/seo.png",
    },
    why_us_title:" Why Choose Moundweb As Best Digital Marketing Training Company?",
    why_us_desc:"Moundweb IT & Web Solutions is one of the best Digital Marketing Training Company in Lucknow. We provide best digital marketing training in Lucknow. There are multiple benefits of choosing Moundweb as the best digital marketing training company in Lucknow. With our expertise, we deliver exceptional digital marketing training that equips you with the skills and knowledge required to become a successful digital marketer. Our team of skilled professionals combine creativity, industry knowledge and data-driven insights to deliver exceptional training that resonates with your audience and achieves your marketing goals. Trust MoundWeb to deliver outstanding results and help your business thrive in a competitive digital landscape.",
    why_us_card : [
      {
        title : "Search Engine Optimization",
        image : "images/service/seo.png",
        margin_class:""
      },
      {
        title : "Social Media Optimization",
        image : "images/service/smo.png",
        margin_class:"mt10  "
      },
      {
        title : "Social Media Marketing",
        image : "images/service/marketing.png",
        margin_class:""
      },
      {
        title : "Search Engine Marketing",
        image : "images/service/service-img-4.png",
        margin_class:"mt30"
      },
      {
        title : "Google Analytics",
        image : "images/service/analytics.png",
        margin_class:""
      }, 
      {
        title : "Google Search Console",
        image : "images/service/console.png",
        margin_class:"mt30"
      },
      {
        title : "Canva Graphic Designing",
        image : "images/service/canva.svg",
        margin_class:"mt30"
      },
      {
        title : "Google Ads",
        image : "images/service/ads.png",
        margin_class:""       
      },
      {
        title : "Web Designing",
        image : "images/service/service-img-2.png",
        margin_class:""
      }
    ]

  },
  // Graphic Designing Training
  {
    tagline: "Graphic Designing",
    type:"Graphic Designing Training",
    pg_title : "Top Graphic Designing Course in Lucknow - Moundweb IT & Web Solutions",
    meta_1 : {
      name: "description",
      content:  "Moundweb is the Best Graphic Designing Training Company in Lucknow. We Provide Best Web Development Training in Lucknow. Join Best Web Development Training Institute in Lucknow.",
    },
    meta_2 : {
      name: "keywords",
      content: "Best IT Company in Lucknow, Best IT Company in India, Top IT Comapany in Lucknow, Top IT Comapany",
    },
    page : "Graphic Designing Training",
    hero_title : "Top Graphic Designing Course in Lucknow ",
    description_title : "Advance Graphic Designing Course in Lucknow",
    description_desc : "Are you looking for the best graphic designing training company to take your career to the next level? You are in the right place! Our team of skilled professionals specializes in providing comprehensive training in graphic designing. From Adobe Photoshop and Illustrator to CorelDraw, we cover all the essential skills required to become a successful graphic designer. With a practical approach and a deep understanding of the latest technologies, we'll help you master the fundamentals of graphic designing and build a strong foundation for your career. Experience the power of graphic designing with our exceptional training. Contact us today to take your career to new heights.", 
    advantage_title : "Benefits of Graphic Designing Training Course ",
    advantage_desc : "The Graphic Designing Training Course provides a comprehensive overview of the skills and knowledge required to become a successful graphic designer. It covers the fundamentals of graphic designing, including Adobe Photoshop, Illustrator, and CorelDraw. The course may also include training in other graphic designing tools, such as Adobe InDesign, Adobe XD, and Adobe After Effects. It aims to equip students with the skills and knowledge required to create visually appealing designs for various purposes. The Graphic Designing Training Course may also cover topics such as typography, color theory, and layout design. It aims to provide students with a solid foundation in graphic designing, enabling them to pursue a career in this field.",
    advantage_tagline : "Advantages of Graphic Designing Training",
    advantage_card : [
      "High demand: Graphic designers are in high demand due to the increasing need for online presence and digital solutions.",
      "Lucrative opportunities: Graphic designing offers competitive salaries and benefits, making it a financially rewarding career choice.",
      "Versatile skills: Graphic designing involves various technologies, enabling designers to create diverse designs and layouts.",
      "Remote work and freelancing: Graphic designing allows for remote work and freelancing opportunities, providing flexibility and independence.",
      "Constant growth: The field of graphic designing is continually evolving, ensuring ongoing learning and career advancement potential.",
    ],
    course_title : "Visualize, Create, Inspire: Unveil the World of Graphic Design",
    course_desc :"The Graphic Designing Training Course is designed to offer a comprehensive and in-depth understanding of the core concepts and skills necessary to excel in the graphic designing industry. By providing a well-rounded curriculum, it equips students with the knowledge and tools they need to thrive as successful graphic designers.",
    course_image: "images/service/graphic-designing.png",
    course_card : {
      title : "50+ Tools",
      image : "images/service/service-img-4.png",
    },
    why_us_title:" Why Choose Moundweb As Best Graphic Designing Training Company?",
    why_us_desc:"Moundweb IT & Web Solutions is one of the best Graphic Designing Training Company in Lucknow. We provide best graphic designing training in Lucknow. There are multiple benefits of choosing Moundweb as the best graphic designing training company in Lucknow. With our expertise, we deliver exceptional graphic designing training that equips you with the skills and knowledge required to become a successful graphic designer. Our team of skilled professionals combine creativity, industry knowledge and data-driven insights to deliver exceptional training that resonates with your audience and achieves your marketing goals. Trust MoundWeb to deliver outstanding results and help your business thrive in a competitive digital landscape.",
    why_us_card : [
      {
        title : "Color Theory",
        image : "images/service/card_1.png",
        margin_class:""
      },
      {
        title : "Logo Design",
        image : "images/service/card_2.png",
        margin_class:""
      },
      {
        title : "Layout and Composition",
        image : "images/service/card_3.png",
        margin_class:""
      },
      {
        title : "Illustration and Icon Design",
        image : "images/service/card_4.png",
        margin_class:"mt30"
      },
      {
        title : "Branding and Identity Design",
        image : "images/service/card_5.png",
        margin_class:""
      }, 
      {
        title : "Portfolio Development",
        image : "images/service/card_6.png",
        margin_class:"mt30"
      },
    ]

  },
];


app.get("/", async (req, res) => {
  res.render("home/index.ejs", Meta_Tag[0]);
});
app.get("/about", (req, res) => {
  res.render("about/index.ejs", Meta_Tag[1]);
});
app.get("/contact-us", (req, res) => {
  res.render("contact-us/index.ejs", Meta_Tag[2]);
});
app.get("/career", (req, res) => {
  res.render("career/index.ejs", Meta_Tag[0]);
});
app.get("/best-website-development-company", (req, res) => {
  res.render("services/website_index.ejs", Development[0]);
});
app.get("/mobile-app-development-company", (req, res) => {
  res.render("services/website_index.ejs", Development[1]);
});
app.get("/blockchain-development-company", (req, res) => {
  res.render("services/website_index.ejs", Development[2]);
});
app.get("/software-development-company", (req, res) => {
  res.render("services/website_index.ejs", Development[3]);
});
app.get("/e-commerce-development-company", (req, res) => {
  res.render("services/website_index.ejs", Development[4]);
});
app.get("/best-digital-marketing-company", (req, res) => {
  res.render("services/website_index.ejs", Development[5]);
});
app.get("/top-seo-company", (req, res) => {
  res.render("services/website_index.ejs", Development[6]);
});
app.get("/top-smm-company", (req, res) => {
  res.render("services/website_index.ejs", Development[7]);
});
app.get("/top-social-media-management-company", (req, res) => {
  res.render("services/website_index.ejs", Development[8]);
});
app.get("/top-ppc-company", (req, res) => {
  res.render("services/website_index.ejs", Development[9]);
});
app.get("/top-bulk-sms-company", (req, res) => {
  res.render("services/website_index.ejs", Development[10]);
});
app.get("/top-email-marketing-company", (req, res) => {
  res.render("services/website_index.ejs", Development[11]);
});
app.get("/top-content-marketing-company", (req, res) => {
  res.render("services/website_index.ejs", Development[12]);
});
app.get("/top-video-marketing-company", (req, res) => {
  res.render("services/website_index.ejs", Development[13]);
});
app.get("/best-Graphic-design-company", (req, res) => {
  res.render("Graphic_Desiging/graphic_index.ejs", Meta_Tag[3]);
});
app.get("/best-digital-marketing-course", (req, res) => {
  res.render("landing/digital_marketing/index.ejs",Meta_Tag[4]);
});
app.get("/best-web-development-course", (req, res) => {
  res.render("landing/website_development/index.ejs",Meta_Tag[5] );
});
app.get("/best-influencer-marketing-company", (req, res) => {
  res.render("influncer-marketing/influencer-index.ejs",Meta_Tag[6]);
});
app.get("/best-web-development-service", (req, res) => {
  res.render("landing/service_all/web_services/index.ejs",Meta_Tag[7]);
});
app.get("/best-web-development-training", (req, res) => {
  res.render("training/training_index.ejs",Training[0]);
});
app.get("/best-digital-marketing-training", (req, res) => {
  res.render("training/training_index.ejs",Training[1]);
});
app.get("/best-graphic-designing-training", (req, res) => {
  res.render("training/training_index.ejs",Training[2]);
});
app.get("/F&Q", (req, res) => {
  res.render("f&q/f&q_index.ejs",Training[2]);
});
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});

app.use("/robots.txt", express.static(path.join(__dirname, "robots.txt")));

app.use((req, res, next) => {
  res.status(404).render("error/404.ejs", { pageTitle: "Page Not Found" });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});


