import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image11 from '../Assets/7.png';
import Image12 from '../Assets/12.jpg';
import Image13 from '../Assets/13.png';
import Image14 from '../Assets/17.jpg';
import Image15 from '../Assets/18.png';
import Image16 from '../Assets/21.jpg';
import Image17 from '../Assets/24.png';
import Image18 from '../Assets/26.jpg';
import Image19 from '../Assets/28.png';
import Image20 from '../Assets/31.png';
import Image21 from '../Assets/32.png';
import Image22 from '../Assets/38.jpg';
import Image23 from '../Assets/47.png';
import Image24 from '../Assets/48.png';
import Image25 from '../Assets/49.png';
import Image26 from '../Assets/51.png';
import Image27 from '../Assets/52.png';
import Image28 from '../Assets/54.jpg';
import Image29 from '../Assets/55.png';
import Image30 from '../Assets/56.png';
import Image31 from '../Assets/57.png';
import Image32 from '../Assets/58.png';
import Image33 from '../Assets/59.png';
import Image34 from '../Assets/60.png';
import Image35 from '../Assets/61.jpg';
import Image36 from '../Assets/62.jpg';
import Image38 from '../Assets/63.png';
import Image39 from '../Assets/64.png';
import Image40 from '../Assets/65.png';
import Image41 from '../Assets/66.png';
import Image42 from '../Assets/67.png';
import Image43 from '../Assets/68.png';
import Image44 from '../Assets/76.jpg';
import Image45 from '../Assets/80.jpg';
import Image46 from '../Assets/82.jpg';
import Image47 from '../Assets/84.jpg';
import Image48 from '../Assets/90.jpg';
import Image49 from '../Assets/91.jpg';
import Image50 from '../Assets/93.jpg';
import Image51 from '../Assets/95.jpg';
import Image52 from '../Assets/96.jpg';
import Image53 from '../Assets/98.jpg';
import Image54 from '../Assets/101.jpg';
import Image55 from '../Assets/100.jpg';
import Image56 from '../Assets/103.jpg';
import Image57 from '../Assets/105.jpg';
import Image58 from '../Assets/106.jpg';
import Image59 from '../Assets/107.jpg';
import Image60 from '../Assets/110.jpg';
import Image61 from '../Assets/117.jpg';
import Image62 from '../Assets/120.jpg';
import Image63 from '../Assets/121.jpg';
import Image64 from '../Assets/122.jpg';

// Ṇew
import Image65 from '../Assets/7.png';
import Image66 from '../Assets/12.jpg';
import Image67 from '../Assets/13.png';
import Image68 from '../Assets/17.jpg';
import Image69 from '../Assets/18.png';
import Image70 from '../Assets/21.jpg';
import Image71 from '../Assets/24.png';
import Image72 from '../Assets/26.jpg';
import Image73 from '../Assets/28.png';
import Image74 from '../Assets/31.png';
import Image75 from '../Assets/32.png';
import Image76 from '../Assets/38.jpg';
import Image77 from '../Assets/47.png';
import Image78 from '../Assets/48.png';
import Image79 from '../Assets/49.png';
import Image80 from '../Assets/51.png';
import Image81 from '../Assets/52.png';
import Image82 from '../Assets/54.jpg';
import Image83 from '../Assets/55.png';
import Image84 from '../Assets/56.png';
import Image85 from '../Assets/57.png';
import Image86 from '../Assets/58.png';
import Image87 from '../Assets/59.png';
import Image88 from '../Assets/60.png';
import Image89 from '../Assets/61.jpg';
import Image90 from '../Assets/62.jpg';

// Reusable Card Component
const TabCard = ({ imageUrl, title, tabItems, price }) => {
    const handleButtonClick = () => {
        window.open("https://392.play.pokiigame.com/", "_blank");
    };
    return (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col items-center my-20">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>

            {/* Price */}
            <div className="text-xl font-bold text-purple-500 mb-4">{price}</div>

            {/* Grid of Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
                {tabItems.map((tab) => (
                    <div
                        key={tab.id}
                        className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-200"
                    >
                        {/* Icon */}
                        <IoMdInformationCircleOutline className="text-black text-lg" />
                        {/* Tab Text */}
                        <span className="text-gray-700 text-sm">{tab.text}</span>
                    </div>
                ))}
            </div>

            {/* Apply Now Button */}
            <button onClick={handleButtonClick} className="mt-8 bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300">
                Apply Now
            </button>
        </div>
    );
};

// Parent Component to Render Multiple Cards with Pagination
const CardList = () => {
    // Define data for each card
    const cardData = [
        // Page 1 Data
        // Card 21
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 9000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Noida, India"
                },
                {
                    "id": 2,
                    "text": "Company:- Dextech"
                },
                {
                    "id": 3,
                    "text": "HTML"
                },
                {
                    "id": 4,
                    "text": "CSS"
                },
                {
                    "id": 5,
                    "text": "JavaScript"
                },
                {
                    "id": 6,
                    "text": "React"
                },
                {
                    "id": 7,
                    "text": "Angular"
                },
                {
                    "id": 8,
                    "text": "Vue.js"
                },
                {
                    "id": 9,
                    "text": "Problem-Solving Skills"
                },
                {
                    "id": 10,
                    "text": "Stipend : 9,000/Month"
                },
                {
                    "id": 11,
                    "text": "Hybrid"
                },
                {
                    "id": 12,
                    "text": "Full Time"
                }
            ],
            image: Image32
        },
        // Card 22
        {
            title: "UI / UX Designing Internship",
            price: "₹ 8000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Jobs Territory" },
                { id: 2, text: "Experience" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Strong Understanding" },
                { id: 7, text: "UI/UX Design" },
                { id: 8, text: "Testing" },
                { id: 9, text: "Excellent Communication" },
                { id: 10, text: "Collaboration Skills" },
                { id: 11, text: "Perks" },
                { id: 12, text: "Certificate Of Completion" },
                { id: 13, text: "Letter Of Recommendation" },
                { id: 14, text: "Min Stipend: 8,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
                { id: 17, text: "Job Type: Remote" }
            ],
            image: Image31
        },
        // Card 23
        {
            "title": "Front End Developer",
            "price": "₹ 30000 - ₹ 100000",
            "tabItems": [
                { "id": 1, "text": "Softius Internet Services" },
                { "id": 2, "text": "React" },
                { "id": 3, "text": "Angular" },
                { "id": 4, "text": "Vue.Js" },
                { "id": 5, "text": "HTML" },
                { "id": 6, "text": "CSS" },
                { "id": 7, "text": "JavaScript" },
                { "id": 8, "text": "Responsive Design" },
                { "id": 9, "text": "Flexible Hours" },
                { "id": 10, "text": "Hybrid Working" },
                { "id": 11, "text": "Working Days: 5 Days" },
                { "id": 12, "text": "Job Type: Remote" },
                { "id": 13, "text": "EXP:- 3+ Year" }
            ],
            image: Image33
        },
        // Card 24
        {
            "title": "UX/UI Designer Internship",
            "price": "₹ 5000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Inupgro" },
                { "id": 2, "text": "UX/UI Design" },
                { "id": 3, "text": "Graphic Design" },
                { "id": 4, "text": "Interaction Design" },
                { "id": 5, "text": "Related Field" },
                { "id": 6, "text": "Design Process" },
                { "id": 7, "text": "Problem-Solving Skills" },
                { "id": 8, "text": "Figma" },
                { "id": 9, "text": "Adobe XD" },
                { "id": 10, "text": "Sketch" },
                { "id": 11, "text": "Similar" },
                { "id": 12, "text": "HTML/CSS Is A Plus" },
                { "id": 13, "text": "User-Friendly Designs" },
                { "id": 14, "text": "Teamwork Skills" },
                { "id": 15, "text": "Internship Timing: Full Time" },
                { "id": 16, "text": "Min Stipend: ₹5,000/Month" },
                { "id": 17, "text": "Max Stipend: ₹10,000/Month" },
                { "id": 18, "text": "Duration: 3 Months" },
                { "id": 19, "text": "Full Time" },
                { "id": 20, "text": "Internship Type: Work From Home" },
                { "id": 21, "text": "Job Offer" },
                { "id": 22, "text": "Certificate Of Completion" },
                { "id": 23, "text": "Letter Of Recommendation" },
                { "id": 24, "text": "Medical Insurance" }
            ],
            image: Image34
        },
        //   Card 25
        {
            "title": "UI / UX Designing Internship",
            "price": "₹ 5000 - ₹ 5000",
            "tabItems": [
                { "id": 1, "text": "Company: Conversely" },
                { "id": 2, "text": "UI/UX Design Tools" },
                { "id": 3, "text": "Adobe XD" },
                { "id": 4, "text": "Figma" },
                { "id": 5, "text": "Similar Software" },
                { "id": 6, "text": "CSS" },
                { "id": 7, "text": "JavaScript" },
                { "id": 8, "text": "Strong Understanding" },
                { "id": 9, "text": "Mobile App Design" },
                { "id": 10, "text": "User Interactions" },
                { "id": 11, "text": "Stipend: ₹5,000/Month" },
                { "id": 12, "text": "Working Days: 5 Days" },
                { "id": 13, "text": "Duration: 6 Months" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image35
        },
        //   Card 26
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Dextech" },
                { "id": 2, "text": "Skills: Responsive Design" },
                { "id": 3, "text": "Skills: HTML" },
                { "id": 4, "text": "Skills: CSS" },
                { "id": 5, "text": "Skills: JavaScript" },
                { "id": 6, "text": "Skills: Problem-Solving Skills" },
                { "id": 7, "text": "Skills: Collaboration Skills" },
                { "id": 8, "text": "Skills: React" },
                { "id": 9, "text": "Skills: Angular" },
                { "id": 10, "text": "Skills: Vue.js" },
                { "id": 11, "text": "Stipend: ₹9,000/Month" },
                { "id": 12, "text": "Working Days: 5 Days" },
                { "id": 13, "text": "Duration: 3 Months" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image36
        },
        //   Card 27
        {
            "title": "UI/UX Designer Internship",
            "price": "₹ 6000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Company: Mimansa Kids" },
                { "id": 2, "text": "Skills: Figma" },
                { "id": 3, "text": "Skills: AdobeXD" },
                { "id": 4, "text": "Skills: InVision" },
                { "id": 5, "text": "Skills: UI Design" },
                { "id": 6, "text": "Skills: UX Research" },
                { "id": 7, "text": "Stipend: ₹6,000/Month" },
                { "id": 8, "text": "Stipend: ₹12,000/Month" },
                { "id": 9, "text": "Duration: 6 Months" },
                { "id": 10, "text": "Working Hours: 5-6 Hours/Day" },
                { "id": 11, "text": "Internship Type: Work From Home" },
                { "id": 12, "text": "Internship Timing: Full Time" },
                { "id": 13, "text": "Working Days: 5 Days" },
                { "id": 14, "text": "Experience: Beginner" }
            ],
            image: Image38
        },
        // Card 28
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Dextech" },
                { "id": 2, "text": "Skills: Responsive Design" },
                { "id": 3, "text": "Skills: HTML" },
                { "id": 4, "text": "Skills: CSS" },
                { "id": 5, "text": "Skills: JavaScript" },
                { "id": 6, "text": "Skills: Problem-Solving Skills" },
                { "id": 7, "text": "Skills: Collaboration Skills" },
                { "id": 8, "text": "Skills: React" },
                { "id": 9, "text": "Skills: Angular" },
                { "id": 10, "text": "Skills: Vue.js" },
                { "id": 11, "text": "Stipend: 9,000/Month" },
                { "id": 12, "text": "Duration: 3 Months" },
                { "id": 13, "text": "Working Hours: 5 Days" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image39
        },
        // Card 29
        {
            "title": "Flutter Developer Internship",
            "price": "₹ 10000 - ₹ 15000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Company: Kukbit SL"
                },
                {
                    "id": 2,
                    "text": "Skills: JavaScript"
                },
                {
                    "id": 3,
                    "text": "Skills: HTML"
                },
                {
                    "id": 4,
                    "text": "Skills: CSS"
                },
                {
                    "id": 5,
                    "text": "Skills: Angular"
                },
                {
                    "id": 6,
                    "text": "Skills: React"
                },
                {
                    "id": 7,
                    "text": "Skills: JQuery"
                },
                {
                    "id": 8,
                    "text": "Skills: PHP"
                },
                {
                    "id": 9,
                    "text": "Skills: Node.js"
                },
                {
                    "id": 10,
                    "text": "Skills: Python"
                },
                {
                    "id": 11,
                    "text": "Perks:"
                },
                {
                    "id": 12,
                    "text": "Certificate"
                },
                {
                    "id": 13,
                    "text": "Letter Of Recommendation"
                },
                {
                    "id": 14,
                    "text": "Flexible Work Hours"
                },
                {
                    "id": 15,
                    "text": "Min Stipend: 10,000/Month"
                },
                {
                    "id": 16,
                    "text": "Max Stipend: 15,000/Month"
                },
                {
                    "id": 17,
                    "text": "Work Detail"
                },
                {
                    "id": 18,
                    "text": "Working Days: 5 Days"
                },
                {
                    "id": 19,
                    "text": "Schedule: Day Shift"
                },
                {
                    "id": 20,
                    "text": "Internship Type: Work From Home"
                },
                {
                    "id": 21,
                    "text": "Internship Timing: Part Time"
                }
            ],
            image: Image39
        },
        // Card 30
        {
            "title": "Fullstack Developer Internship",
            "price": "₹ 2000 - ₹ 5000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Company: Claponn Infotech Private Limited"
                },
                {
                    "id": 2,
                    "text": "Skills: HTML, CSS, And JavaScript"
                },
                {
                    "id": 3,
                    "text": "Skills: React.Js"
                },
                {
                    "id": 4,
                    "text": "Skills: Responsive Design"
                },
                {
                    "id": 5,
                    "text": "Skills: Cross-Browser Compatibility"
                },
                {
                    "id": 6,
                    "text": "Skills: Git"
                },
                {
                    "id": 7,
                    "text": "Skills: Communication And Collaboration Skills"
                },
                {
                    "id": 8,
                    "text": "Stipend: 2,000/Month"
                },
                {
                    "id": 9,
                    "text": "Stipend: 5,000/Month"
                },
                {
                    "id": 10,
                    "text": "Duration: 4 Month"
                },
                {
                    "id": 11,
                    "text": "Internship Type: Work From Home"
                },
                {
                    "id": 12,
                    "text": "Internship Timing: Full Time"
                },
                {
                    "id": 13,
                    "text": "Working Days: 5 Days"
                }
            ],
            image: Image40
        },
        // Card 1
        {
            title: "UI/UX Designing Internship",
            price: "₹ 4000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Glance Social" },
                { id: 2, text: "UI/UX Design Principles" },
                { id: 3, text: "Methodologies" },
                { id: 4, text: "Figma Or Similar Design Software" },
                { id: 5, text: "Excellent Communication" },
                { id: 6, text: "Presentation Skills" },
                { id: 7, text: "User-Centric Experiences" },
                { id: 8, text: "Work Independently" },
                { id: 9, text: "Internship Type: Work From Home" },
                { id: 10, text: "Internship Timing: Full Time" },
                { id: 11, text: "Certificate Of Completion" },
                { id: 12, text: "Letter Of Recommendation" },
                { id: 13, text: "Food & Beverages" },
                { id: 14, text: "Flexible Hours" },
                { id: 15, text: "Counseling Support" },
                { id: 16, text: "Min Stipend: 4,000/Month" },
                { id: 17, text: "Max Stipend: 20,000/Month" },
                { id: 18, text: "Working Days: 5 Days" },
            ],
            image: Image11
        },
        // Card 2
        {
            title: "Full Stack Developer Internship",
            price: "₹ 7000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Yugensoft Innovations" },
                { id: 2, text: "Databases" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Web Development Frameworks" },
                { id: 7, text: "Content Management Systems" },
                { id: 8, text: "RESTful API Integration" },
                { id: 9, text: "Problem-Solving" },
                { id: 10, text: "Communication Skills" },
                { id: 11, text: "Git For Version Control" },
                { id: 12, text: "Internship Timing: Full Time" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Min Stipend: 7,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
            ],
            image: Image12,
        },
        // Card 3
        {
            title: "Frontend Developer Internship",
            price: "₹ 12000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Safe Your Web" },
                { id: 2, text: "HTML5" },
                { id: 3, text: "CSS3" },
                { id: 4, text: "JavaScript" },
                { id: 5, text: "Modern Frontend Frameworks" },
                { id: 6, text: "React" },
                { id: 7, text: "Vue.js" },
                { id: 8, text: "Angular" },
                { id: 9, text: "Git" },
                { id: 10, text: "Min Stipend: 12,000/Month" },
                { id: 11, text: "Max Stipend: 20,000/Month" },
                { id: 12, text: "Internship Type: Work From Home" },
                { id: 13, text: "Internship Timing: Full Time" },
                { id: 14, text: "Working Days: 5 Days" },
            ],
            image: Image13,
        },
        // Card 4
        {
            title: "Back End Developer",
            price: "$ 60000 - $ 80000",
            tabItems: [
                { id: 1, text: "Company: Purecode.Ai" },
                { id: 2, text: "Previous Start-Up Experience Is Required" },
                { id: 3, text: "Excellent Communication Skills" },
                { id: 4, text: "Problem-Solving Skills With A Proactive Nature" },
                { id: 5, text: "Excellent Interpersonal Skills" },
                { id: 6, text: "Meticulous Attention To Detail" },
                { id: 7, text: "Impeccable Organization Skills" },
                { id: 8, text: "Strong People Skills" },
                { id: 9, text: "Min Salary: 60,000/Year" },
                { id: 10, text: "Max Salary: 80,000/Year" },
                { id: 11, text: "Job Type: Work From Home" },
                { id: 12, text: "Job Timing: Full Time" },
                { id: 13, text: "Working Days: 5 Days" },
            ],
            image: Image14,
        },
        // Card 5
        {
            title: "Backend Developer Internship",
            price: "₹ 15000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Company:- Time Pilot Software Private Limited" },
                { id: 2, text: "C++" },
                { id: 3, text: "JavaScript" },
                { id: 4, text: "Database Management" },
                { id: 5, text: "Git" },
                { id: 6, text: "Data Structures And Algorithms" },
                { id: 7, text: "Problem-Solving Skills" },
                { id: 8, text: "Excellent Analytical" },
                { id: 9, text: "Min Stipend: 15,000/Month" },
                { id: 10, text: "Max Stipend: 20,000/Month" },
                { id: 11, text: "Duration:- 6 Months" },
                { id: 12, text: "Communication And Interpersonal Skills" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Working Days: 5 Days" },
                { id: 15, text: "Internship Timing: Full Time" },
            ],
            image: Image15,
        },
        // Card 6
        {
            "title": "UI/UX Designer Internship",
            "price": "₹ 6000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Mimansa Kids" },
                { "id": 2, "text": "Figma" },
                { "id": 3, "text": "Adobe XD" },
                { "id": 4, "text": "InVision" },
                { "id": 5, "text": "UI Design" },
                { "id": 6, "text": "UX Research" },
                { "id": 7, "text": "Min Stipend: 6,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "6 Month" },
                { "id": 10, "text": "5-6 Hours / Day" },
                { "id": 11, "text": "Internship Type: Work From Home" },
                { "id": 12, "text": "Internship Timing: Full Time" },
                { "id": 13, "text": "Working Days: 5 Days" },
                { "id": 14, "text": "Beginner" },
            ],
            image: Image16,
        },
        // Card 7
        {
            "title": "Frontend Developer Job",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Latest Front-End Technologies" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image17,
        },
        // Card 8
        {
            "title": "Frontend Developer Job",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Latest Front-End Technologies" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image18,
        },
        // Card 9
        {
            title: "Full Stack Developer Internship",
            price: "₹ 7000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Yugensoft Innovations" },
                { id: 2, text: "Databases" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Web Development Frameworks" },
                { id: 7, text: "Content Management Systems" },
                { id: 8, text: "RESTful API Integration" },
                { id: 9, text: "Problem-Solving" },
                { id: 10, text: "Communication Skills" },
                { id: 11, text: "Git For Version Control" },
                { id: 12, text: "Internship Timing: Full Time" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Min Stipend: 7,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
            ],
            image: Image19,
        },
        // Card 10
        {
            "title": "Frontend Developer Internship",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Angular" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image20,
        },
        // Page One Data End
        // Card 11
        {
            title: "UI / UX Designing Internship",
            price: "₹ 8000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Jobs Territory" },
                { id: 2, text: "Experience" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Strong Understanding" },
                { id: 7, text: "UI/UX Design" },
                { id: 8, text: "Testing" },
                { id: 9, text: "Excellent Communication" },
                { id: 10, text: "Collaboration Skills" },
                { id: 11, text: "Perks" },
                { id: 12, text: "Certificate Of Completion" },
                { id: 13, text: "Letter Of Recommendation" },
                { id: 14, text: "Min Stipend: 8,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
                { id: 17, text: "Job Type: Remote" }
            ],
            image: Image21,
        },
        // Card 12
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 9000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Noida, India"
                },
                {
                    "id": 2,
                    "text": "Company:- Dextech"
                },
                {
                    "id": 3,
                    "text": "HTML"
                },
                {
                    "id": 4,
                    "text": "CSS"
                },
                {
                    "id": 5,
                    "text": "JavaScript"
                },
                {
                    "id": 6,
                    "text": "React"
                },
                {
                    "id": 7,
                    "text": "Angular"
                },
                {
                    "id": 8,
                    "text": "Vue.js"
                },
                {
                    "id": 9,
                    "text": "Problem-Solving Skills"
                },
                {
                    "id": 10,
                    "text": "Stipend : 9,000/Month"
                },
                {
                    "id": 11,
                    "text": "Hybrid"
                },
                {
                    "id": 12,
                    "text": "Full Time"
                }
            ],
            image: Image22
        },
        // Card 13
        {
            "title": "Front End Developer",
            "price": "₹ 30000 - ₹ 100000",
            "tabItems": [
                { "id": 1, "text": "Softius Internet Services" },
                { "id": 2, "text": "React" },
                { "id": 3, "text": "Angular" },
                { "id": 4, "text": "Vue.Js" },
                { "id": 5, "text": "HTML" },
                { "id": 6, "text": "CSS" },
                { "id": 7, "text": "JavaScript" },
                { "id": 8, "text": "Responsive Design" },
                { "id": 9, "text": "Flexible Hours" },
                { "id": 10, "text": "Hybrid Working" },
                { "id": 11, "text": "Working Days: 5 Days" },
                { "id": 12, "text": "Job Type: Remote" },
                { "id": 13, "text": "EXP:- 3+ Year" }
            ],
            image: Image23
        },
        // Card 14
        {
            "title": "UX/UI Designer Internship",
            "price": "₹ 5000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Inupgro" },
                { "id": 2, "text": "UX/UI Design" },
                { "id": 3, "text": "Graphic Design" },
                { "id": 4, "text": "Interaction Design" },
                { "id": 5, "text": "Related Field" },
                { "id": 6, "text": "Design Process" },
                { "id": 7, "text": "Problem-Solving Skills" },
                { "id": 8, "text": "Figma" },
                { "id": 9, "text": "Adobe XD" },
                { "id": 10, "text": "Sketch" },
                { "id": 11, "text": "Similar" },
                { "id": 12, "text": "HTML/CSS Is A Plus" },
                { "id": 13, "text": "User-Friendly Designs" },
                { "id": 14, "text": "Teamwork Skills" },
                { "id": 15, "text": "Internship Timing: Full Time" },
                { "id": 16, "text": "Min Stipend: ₹5,000/Month" },
                { "id": 17, "text": "Max Stipend: ₹10,000/Month" },
                { "id": 18, "text": "Duration: 3 Months" },
                { "id": 19, "text": "Full Time" },
                { "id": 20, "text": "Internship Type: Work From Home" },
                { "id": 21, "text": "Job Offer" },
                { "id": 22, "text": "Certificate Of Completion" },
                { "id": 23, "text": "Letter Of Recommendation" },
                { "id": 24, "text": "Medical Insurance" }
            ],
            image: Image24
        },
        //   Card 15
        {
            "title": "UI / UX Designing Internship",
            "price": "₹ 5000 - ₹ 5000",
            "tabItems": [
                { "id": 1, "text": "Company: Conversely" },
                { "id": 2, "text": "UI/UX Design Tools" },
                { "id": 3, "text": "Adobe XD" },
                { "id": 4, "text": "Figma" },
                { "id": 5, "text": "Similar Software" },
                { "id": 6, "text": "CSS" },
                { "id": 7, "text": "JavaScript" },
                { "id": 8, "text": "Strong Understanding" },
                { "id": 9, "text": "Mobile App Design" },
                { "id": 10, "text": "User Interactions" },
                { "id": 11, "text": "Stipend: ₹5,000/Month" },
                { "id": 12, "text": "Working Days: 5 Days" },
                { "id": 13, "text": "Duration: 6 Months" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image25
        },
        //   Card 16
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Dextech" },
                { "id": 2, "text": "Skills: Responsive Design" },
                { "id": 3, "text": "Skills: HTML" },
                { "id": 4, "text": "Skills: CSS" },
                { "id": 5, "text": "Skills: JavaScript" },
                { "id": 6, "text": "Skills: Problem-Solving Skills" },
                { "id": 7, "text": "Skills: Collaboration Skills" },
                { "id": 8, "text": "Skills: React" },
                { "id": 9, "text": "Skills: Angular" },
                { "id": 10, "text": "Skills: Vue.js" },
                { "id": 11, "text": "Stipend: ₹9,000/Month" },
                { "id": 12, "text": "Working Days: 5 Days" },
                { "id": 13, "text": "Duration: 3 Months" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image26
        },
        //   Card 17
        {
            "title": "UI/UX Designer Internship",
            "price": "₹ 6000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Company: Mimansa Kids" },
                { "id": 2, "text": "Skills: Figma" },
                { "id": 3, "text": "Skills: AdobeXD" },
                { "id": 4, "text": "Skills: InVision" },
                { "id": 5, "text": "Skills: UI Design" },
                { "id": 6, "text": "Skills: UX Research" },
                { "id": 7, "text": "Stipend: ₹6,000/Month" },
                { "id": 8, "text": "Stipend: ₹12,000/Month" },
                { "id": 9, "text": "Duration: 6 Months" },
                { "id": 10, "text": "Working Hours: 5-6 Hours/Day" },
                { "id": 11, "text": "Internship Type: Work From Home" },
                { "id": 12, "text": "Internship Timing: Full Time" },
                { "id": 13, "text": "Working Days: 5 Days" },
                { "id": 14, "text": "Experience: Beginner" }
            ],
            image: Image27
        },
        // Card 18
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Dextech" },
                { "id": 2, "text": "Skills: Responsive Design" },
                { "id": 3, "text": "Skills: HTML" },
                { "id": 4, "text": "Skills: CSS" },
                { "id": 5, "text": "Skills: JavaScript" },
                { "id": 6, "text": "Skills: Problem-Solving Skills" },
                { "id": 7, "text": "Skills: Collaboration Skills" },
                { "id": 8, "text": "Skills: React" },
                { "id": 9, "text": "Skills: Angular" },
                { "id": 10, "text": "Skills: Vue.js" },
                { "id": 11, "text": "Stipend: 9,000/Month" },
                { "id": 12, "text": "Duration: 3 Months" },
                { "id": 13, "text": "Working Hours: 5 Days" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image28
        },
        // Card 19
        {
            "title": "Flutter Developer Internship",
            "price": "₹ 10000 - ₹ 15000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Company: Kukbit SL"
                },
                {
                    "id": 2,
                    "text": "Skills: JavaScript"
                },
                {
                    "id": 3,
                    "text": "Skills: HTML"
                },
                {
                    "id": 4,
                    "text": "Skills: CSS"
                },
                {
                    "id": 5,
                    "text": "Skills: Angular"
                },
                {
                    "id": 6,
                    "text": "Skills: React"
                },
                {
                    "id": 7,
                    "text": "Skills: JQuery"
                },
                {
                    "id": 8,
                    "text": "Skills: PHP"
                },
                {
                    "id": 9,
                    "text": "Skills: Node.js"
                },
                {
                    "id": 10,
                    "text": "Skills: Python"
                },
                {
                    "id": 11,
                    "text": "Perks:"
                },
                {
                    "id": 12,
                    "text": "Certificate"
                },
                {
                    "id": 13,
                    "text": "Letter Of Recommendation"
                },
                {
                    "id": 14,
                    "text": "Flexible Work Hours"
                },
                {
                    "id": 15,
                    "text": "Min Stipend: 10,000/Month"
                },
                {
                    "id": 16,
                    "text": "Max Stipend: 15,000/Month"
                },
                {
                    "id": 17,
                    "text": "Work Detail"
                },
                {
                    "id": 18,
                    "text": "Working Days: 5 Days"
                },
                {
                    "id": 19,
                    "text": "Schedule: Day Shift"
                },
                {
                    "id": 20,
                    "text": "Internship Type: Work From Home"
                },
                {
                    "id": 21,
                    "text": "Internship Timing: Part Time"
                }
            ],
            image: Image29
        },
        // Card 20
        {
            "title": "Fullstack Developer Internship",
            "price": "₹ 2000 - ₹ 5000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Company: Claponn Infotech Private Limited"
                },
                {
                    "id": 2,
                    "text": "Skills: HTML, CSS, And JavaScript"
                },
                {
                    "id": 3,
                    "text": "Skills: React.Js"
                },
                {
                    "id": 4,
                    "text": "Skills: Responsive Design"
                },
                {
                    "id": 5,
                    "text": "Skills: Cross-Browser Compatibility"
                },
                {
                    "id": 6,
                    "text": "Skills: Git"
                },
                {
                    "id": 7,
                    "text": "Skills: Communication And Collaboration Skills"
                },
                {
                    "id": 8,
                    "text": "Stipend: 2,000/Month"
                },
                {
                    "id": 9,
                    "text": "Stipend: 5,000/Month"
                },
                {
                    "id": 10,
                    "text": "Duration: 4 Month"
                },
                {
                    "id": 11,
                    "text": "Internship Type: Work From Home"
                },
                {
                    "id": 12,
                    "text": "Internship Timing: Full Time"
                },
                {
                    "id": 13,
                    "text": "Working Days: 5 Days"
                }
            ],
            image: Image30
        },
        // Card 71
        {
            title: "UI/UX Designing Internship",
            price: "₹ 4000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Glance Social" },
                { id: 2, text: "UI/UX Design Principles" },
                { id: 3, text: "Methodologies" },
                { id: 4, text: "Figma Or Similar Design Software" },
                { id: 5, text: "Excellent Communication" },
                { id: 6, text: "Presentation Skills" },
                { id: 7, text: "User-Centric Experiences" },
                { id: 8, text: "Work Independently" },
                { id: 9, text: "Internship Type: Work From Home" },
                { id: 10, text: "Internship Timing: Full Time" },
                { id: 11, text: "Certificate Of Completion" },
                { id: 12, text: "Letter Of Recommendation" },
                { id: 13, text: "Food & Beverages" },
                { id: 14, text: "Flexible Hours" },
                { id: 15, text: "Counseling Support" },
                { id: 16, text: "Min Stipend: 4,000/Month" },
                { id: 17, text: "Max Stipend: 20,000/Month" },
                { id: 18, text: "Working Days: 5 Days" },
            ],
            image: Image81
        },
        // Card 72
        {
            title: "Full Stack Developer Internship",
            price: "₹ 7000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Yugensoft Innovations" },
                { id: 2, text: "Databases" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Web Development Frameworks" },
                { id: 7, text: "Content Management Systems" },
                { id: 8, text: "RESTful API Integration" },
                { id: 9, text: "Problem-Solving" },
                { id: 10, text: "Communication Skills" },
                { id: 11, text: "Git For Version Control" },
                { id: 12, text: "Internship Timing: Full Time" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Min Stipend: 7,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
            ],
            image: Image82
        },
        // Card 73
        {
            title: "Frontend Developer Internship",
            price: "₹ 12000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Safe Your Web" },
                { id: 2, text: "HTML5" },
                { id: 3, text: "CSS3" },
                { id: 4, text: "JavaScript" },
                { id: 5, text: "Modern Frontend Frameworks" },
                { id: 6, text: "React" },
                { id: 7, text: "Vue.js" },
                { id: 8, text: "Angular" },
                { id: 9, text: "Git" },
                { id: 10, text: "Min Stipend: 12,000/Month" },
                { id: 11, text: "Max Stipend: 20,000/Month" },
                { id: 12, text: "Internship Type: Work From Home" },
                { id: 13, text: "Internship Timing: Full Time" },
                { id: 14, text: "Working Days: 5 Days" },
            ],
            image: Image83
        },
        // Card 74
        {
            title: "Back End Developer",
            price: "$ 60000 - $ 80000",
            tabItems: [
                { id: 1, text: "Company: Purecode.Ai" },
                { id: 2, text: "Previous Start-Up Experience Is Required" },
                { id: 3, text: "Excellent Communication Skills" },
                { id: 4, text: "Problem-Solving Skills With A Proactive Nature" },
                { id: 5, text: "Excellent Interpersonal Skills" },
                { id: 6, text: "Meticulous Attention To Detail" },
                { id: 7, text: "Impeccable Organization Skills" },
                { id: 8, text: "Strong People Skills" },
                { id: 9, text: "Min Salary: 60,000/Year" },
                { id: 10, text: "Max Salary: 80,000/Year" },
                { id: 11, text: "Job Type: Work From Home" },
                { id: 12, text: "Job Timing: Full Time" },
                { id: 13, text: "Working Days: 5 Days" },
            ],
            image: Image84
        },
        // Card 75
        {
            title: "Backend Developer Internship",
            price: "₹ 15000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Company:- Time Pilot Software Private Limited" },
                { id: 2, text: "C++" },
                { id: 3, text: "JavaScript" },
                { id: 4, text: "Database Management" },
                { id: 5, text: "Git" },
                { id: 6, text: "Data Structures And Algorithms" },
                { id: 7, text: "Problem-Solving Skills" },
                { id: 8, text: "Excellent Analytical" },
                { id: 9, text: "Min Stipend: 15,000/Month" },
                { id: 10, text: "Max Stipend: 20,000/Month" },
                { id: 11, text: "Duration:- 6 Months" },
                { id: 12, text: "Communication And Interpersonal Skills" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Working Days: 5 Days" },
                { id: 15, text: "Internship Timing: Full Time" },
            ],
            image: Image85
        },
        // Card 76
        {
            "title": "UI/UX Designer Internship",
            "price": "₹ 6000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Mimansa Kids" },
                { "id": 2, "text": "Figma" },
                { "id": 3, "text": "Adobe XD" },
                { "id": 4, "text": "InVision" },
                { "id": 5, "text": "UI Design" },
                { "id": 6, "text": "UX Research" },
                { "id": 7, "text": "Min Stipend: 6,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "6 Month" },
                { "id": 10, "text": "5-6 Hours / Day" },
                { "id": 11, "text": "Internship Type: Work From Home" },
                { "id": 12, "text": "Internship Timing: Full Time" },
                { "id": 13, "text": "Working Days: 5 Days" },
                { "id": 14, "text": "Beginner" },
            ],
            image: Image86
        },
        // Card 77
        {
            "title": "Frontend Developer Job",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Latest Front-End Technologies" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image87
        },
        // Card 78
        {
            "title": "Frontend Developer Job",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Latest Front-End Technologies" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image88
        },
        // Card 79
        {
            title: "Full Stack Developer Internship",
            price: "₹ 7000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Yugensoft Innovations" },
                { id: 2, text: "Databases" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Web Development Frameworks" },
                { id: 7, text: "Content Management Systems" },
                { id: 8, text: "RESTful API Integration" },
                { id: 9, text: "Problem-Solving" },
                { id: 10, text: "Communication Skills" },
                { id: 11, text: "Git For Version Control" },
                { id: 12, text: "Internship Timing: Full Time" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Min Stipend: 7,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
            ],
            image: Image89
        },
        // Card 80
        {
            "title": "Frontend Developer Internship",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Angular" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image90
        },
        // Card 31
        {
            title: "UI/UX Designing Internship",
            price: "₹ 4000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Glance Social" },
                { id: 2, text: "UI/UX Design Principles" },
                { id: 3, text: "Methodologies" },
                { id: 4, text: "Figma Or Similar Design Software" },
                { id: 5, text: "Excellent Communication" },
                { id: 6, text: "Presentation Skills" },
                { id: 7, text: "User-Centric Experiences" },
                { id: 8, text: "Work Independently" },
                { id: 9, text: "Internship Type: Work From Home" },
                { id: 10, text: "Internship Timing: Full Time" },
                { id: 11, text: "Certificate Of Completion" },
                { id: 12, text: "Letter Of Recommendation" },
                { id: 13, text: "Food & Beverages" },
                { id: 14, text: "Flexible Hours" },
                { id: 15, text: "Counseling Support" },
                { id: 16, text: "Min Stipend: 4,000/Month" },
                { id: 17, text: "Max Stipend: 20,000/Month" },
                { id: 18, text: "Working Days: 5 Days" },
            ],
            image: Image41
        },
        // Card 32
        {
            title: "Full Stack Developer Internship",
            price: "₹ 7000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Yugensoft Innovations" },
                { id: 2, text: "Databases" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Web Development Frameworks" },
                { id: 7, text: "Content Management Systems" },
                { id: 8, text: "RESTful API Integration" },
                { id: 9, text: "Problem-Solving" },
                { id: 10, text: "Communication Skills" },
                { id: 11, text: "Git For Version Control" },
                { id: 12, text: "Internship Timing: Full Time" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Min Stipend: 7,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
            ],
            image: Image42
        },
        // Card 33
        {
            title: "Frontend Developer Internship",
            price: "₹ 12000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Safe Your Web" },
                { id: 2, text: "HTML5" },
                { id: 3, text: "CSS3" },
                { id: 4, text: "JavaScript" },
                { id: 5, text: "Modern Frontend Frameworks" },
                { id: 6, text: "React" },
                { id: 7, text: "Vue.js" },
                { id: 8, text: "Angular" },
                { id: 9, text: "Git" },
                { id: 10, text: "Min Stipend: 12,000/Month" },
                { id: 11, text: "Max Stipend: 20,000/Month" },
                { id: 12, text: "Internship Type: Work From Home" },
                { id: 13, text: "Internship Timing: Full Time" },
                { id: 14, text: "Working Days: 5 Days" },
            ],
            image: Image43
        },
        // Card 34
        {
            title: "Back End Developer",
            price: "$ 60000 - $ 80000",
            tabItems: [
                { id: 1, text: "Company: Purecode.Ai" },
                { id: 2, text: "Previous Start-Up Experience Is Required" },
                { id: 3, text: "Excellent Communication Skills" },
                { id: 4, text: "Problem-Solving Skills With A Proactive Nature" },
                { id: 5, text: "Excellent Interpersonal Skills" },
                { id: 6, text: "Meticulous Attention To Detail" },
                { id: 7, text: "Impeccable Organization Skills" },
                { id: 8, text: "Strong People Skills" },
                { id: 9, text: "Min Salary: 60,000/Year" },
                { id: 10, text: "Max Salary: 80,000/Year" },
                { id: 11, text: "Job Type: Work From Home" },
                { id: 12, text: "Job Timing: Full Time" },
                { id: 13, text: "Working Days: 5 Days" },
            ],
            image: Image44
        },
        // Card 35
        {
            title: "Backend Developer Internship",
            price: "₹ 15000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Company:- Time Pilot Software Private Limited" },
                { id: 2, text: "C++" },
                { id: 3, text: "JavaScript" },
                { id: 4, text: "Database Management" },
                { id: 5, text: "Git" },
                { id: 6, text: "Data Structures And Algorithms" },
                { id: 7, text: "Problem-Solving Skills" },
                { id: 8, text: "Excellent Analytical" },
                { id: 9, text: "Min Stipend: 15,000/Month" },
                { id: 10, text: "Max Stipend: 20,000/Month" },
                { id: 11, text: "Duration:- 6 Months" },
                { id: 12, text: "Communication And Interpersonal Skills" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Working Days: 5 Days" },
                { id: 15, text: "Internship Timing: Full Time" },
            ],
            image: Image45
        },
        // Card 36
        {
            "title": "UI/UX Designer Internship",
            "price": "₹ 6000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Mimansa Kids" },
                { "id": 2, "text": "Figma" },
                { "id": 3, "text": "Adobe XD" },
                { "id": 4, "text": "InVision" },
                { "id": 5, "text": "UI Design" },
                { "id": 6, "text": "UX Research" },
                { "id": 7, "text": "Min Stipend: 6,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "6 Month" },
                { "id": 10, "text": "5-6 Hours / Day" },
                { "id": 11, "text": "Internship Type: Work From Home" },
                { "id": 12, "text": "Internship Timing: Full Time" },
                { "id": 13, "text": "Working Days: 5 Days" },
                { "id": 14, "text": "Beginner" },
            ],
            image: Image46
        },
        // Card 37
        {
            "title": "Frontend Developer Job",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Latest Front-End Technologies" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image47
        },
        // Card 38
        {
            "title": "Frontend Developer Job",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Latest Front-End Technologies" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image48
        },
        // Card 39
        {
            title: "Full Stack Developer Internship",
            price: "₹ 7000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Yugensoft Innovations" },
                { id: 2, text: "Databases" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Web Development Frameworks" },
                { id: 7, text: "Content Management Systems" },
                { id: 8, text: "RESTful API Integration" },
                { id: 9, text: "Problem-Solving" },
                { id: 10, text: "Communication Skills" },
                { id: 11, text: "Git For Version Control" },
                { id: 12, text: "Internship Timing: Full Time" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Min Stipend: 7,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
            ],
            image: Image49
        },
        // Card 40
        {
            "title": "Frontend Developer Internship",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Angular" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image50
        },
        // Card 41
        {
            title: "UI/UX Designing Internship",
            price: "₹ 4000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Glance Social" },
                { id: 2, text: "UI/UX Design Principles" },
                { id: 3, text: "Methodologies" },
                { id: 4, text: "Figma Or Similar Design Software" },
                { id: 5, text: "Excellent Communication" },
                { id: 6, text: "Presentation Skills" },
                { id: 7, text: "User-Centric Experiences" },
                { id: 8, text: "Work Independently" },
                { id: 9, text: "Internship Type: Work From Home" },
                { id: 10, text: "Internship Timing: Full Time" },
                { id: 11, text: "Certificate Of Completion" },
                { id: 12, text: "Letter Of Recommendation" },
                { id: 13, text: "Food & Beverages" },
                { id: 14, text: "Flexible Hours" },
                { id: 15, text: "Counseling Support" },
                { id: 16, text: "Min Stipend: 4,000/Month" },
                { id: 17, text: "Max Stipend: 20,000/Month" },
                { id: 18, text: "Working Days: 5 Days" },
            ],
            image: Image51
        },
        // Card 42
        {
            title: "Full Stack Developer Internship",
            price: "₹ 7000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Yugensoft Innovations" },
                { id: 2, text: "Databases" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Web Development Frameworks" },
                { id: 7, text: "Content Management Systems" },
                { id: 8, text: "RESTful API Integration" },
                { id: 9, text: "Problem-Solving" },
                { id: 10, text: "Communication Skills" },
                { id: 11, text: "Git For Version Control" },
                { id: 12, text: "Internship Timing: Full Time" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Min Stipend: 7,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
            ],
            image: Image52
        },
        // Card 43
        {
            title: "Frontend Developer Internship",
            price: "₹ 12000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Safe Your Web" },
                { id: 2, text: "HTML5" },
                { id: 3, text: "CSS3" },
                { id: 4, text: "JavaScript" },
                { id: 5, text: "Modern Frontend Frameworks" },
                { id: 6, text: "React" },
                { id: 7, text: "Vue.js" },
                { id: 8, text: "Angular" },
                { id: 9, text: "Git" },
                { id: 10, text: "Min Stipend: 12,000/Month" },
                { id: 11, text: "Max Stipend: 20,000/Month" },
                { id: 12, text: "Internship Type: Work From Home" },
                { id: 13, text: "Internship Timing: Full Time" },
                { id: 14, text: "Working Days: 5 Days" },
            ],
            image: Image53
        },
        // Card 44
        {
            title: "Back End Developer",
            price: "$ 60000 - $ 80000",
            tabItems: [
                { id: 1, text: "Company: Purecode.Ai" },
                { id: 2, text: "Previous Start-Up Experience Is Required" },
                { id: 3, text: "Excellent Communication Skills" },
                { id: 4, text: "Problem-Solving Skills With A Proactive Nature" },
                { id: 5, text: "Excellent Interpersonal Skills" },
                { id: 6, text: "Meticulous Attention To Detail" },
                { id: 7, text: "Impeccable Organization Skills" },
                { id: 8, text: "Strong People Skills" },
                { id: 9, text: "Min Salary: 60,000/Year" },
                { id: 10, text: "Max Salary: 80,000/Year" },
                { id: 11, text: "Job Type: Work From Home" },
                { id: 12, text: "Job Timing: Full Time" },
                { id: 13, text: "Working Days: 5 Days" },
            ],
            image: Image54
        },
        // Card 45
        {
            title: "Backend Developer Internship",
            price: "₹ 15000 - ₹ 20000",
            tabItems: [
                { id: 1, text: "Company:- Time Pilot Software Private Limited" },
                { id: 2, text: "C++" },
                { id: 3, text: "JavaScript" },
                { id: 4, text: "Database Management" },
                { id: 5, text: "Git" },
                { id: 6, text: "Data Structures And Algorithms" },
                { id: 7, text: "Problem-Solving Skills" },
                { id: 8, text: "Excellent Analytical" },
                { id: 9, text: "Min Stipend: 15,000/Month" },
                { id: 10, text: "Max Stipend: 20,000/Month" },
                { id: 11, text: "Duration:- 6 Months" },
                { id: 12, text: "Communication And Interpersonal Skills" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Working Days: 5 Days" },
                { id: 15, text: "Internship Timing: Full Time" },
            ],
            image: Image55
        },
        // Card 46
        {
            "title": "UI/UX Designer Internship",
            "price": "₹ 6000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Mimansa Kids" },
                { "id": 2, "text": "Figma" },
                { "id": 3, "text": "Adobe XD" },
                { "id": 4, "text": "InVision" },
                { "id": 5, "text": "UI Design" },
                { "id": 6, "text": "UX Research" },
                { "id": 7, "text": "Min Stipend: 6,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "6 Month" },
                { "id": 10, "text": "5-6 Hours / Day" },
                { "id": 11, "text": "Internship Type: Work From Home" },
                { "id": 12, "text": "Internship Timing: Full Time" },
                { "id": 13, "text": "Working Days: 5 Days" },
                { "id": 14, "text": "Beginner" },
            ],
            image: Image56
        },
        // Card 47
        {
            "title": "Frontend Developer Job",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Latest Front-End Technologies" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image57
        },
        // Card 48
        {
            "title": "Frontend Developer Job",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Latest Front-End Technologies" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image58
        },
        // Card 49
        {
            title: "Full Stack Developer Internship",
            price: "₹ 7000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Yugensoft Innovations" },
                { id: 2, text: "Databases" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Web Development Frameworks" },
                { id: 7, text: "Content Management Systems" },
                { id: 8, text: "RESTful API Integration" },
                { id: 9, text: "Problem-Solving" },
                { id: 10, text: "Communication Skills" },
                { id: 11, text: "Git For Version Control" },
                { id: 12, text: "Internship Timing: Full Time" },
                { id: 13, text: "Internship Type: Work From Home" },
                { id: 14, text: "Min Stipend: 7,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
            ],
            image: Image59
        },
        // Card 50
        {
            "title": "Frontend Developer Internship",
            "price": "₹ 10000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Internship Mela" },
                { "id": 2, "text": "HTML" },
                { "id": 3, "text": "CSS" },
                { "id": 4, "text": "JavaScript" },
                { "id": 5, "text": "React" },
                { "id": 6, "text": "Angular" },
                { "id": 7, "text": "Min Stipend: 10,000/Month" },
                { "id": 8, "text": "Max Stipend: 12,000/Month" },
                { "id": 9, "text": "Communication And Interpersonal Skills" },
                { "id": 10, "text": "Work From Home" },
                { "id": 11, "text": "Part Time" }
            ],
            image: Image60
        },
        // Page One Data End
        // Card 51
        {
            title: "UI / UX Designing Internship",
            price: "₹ 8000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Jobs Territory" },
                { id: 2, text: "Experience" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Strong Understanding" },
                { id: 7, text: "UI/UX Design" },
                { id: 8, text: "Testing" },
                { id: 9, text: "Excellent Communication" },
                { id: 10, text: "Collaboration Skills" },
                { id: 11, text: "Perks" },
                { id: 12, text: "Certificate Of Completion" },
                { id: 13, text: "Letter Of Recommendation" },
                { id: 14, text: "Min Stipend: 8,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
                { id: 17, text: "Job Type: Remote" }
            ],
            image: Image61
        },
        // Card 52
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 9000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Noida, India"
                },
                {
                    "id": 2,
                    "text": "Company:- Dextech"
                },
                {
                    "id": 3,
                    "text": "HTML"
                },
                {
                    "id": 4,
                    "text": "CSS"
                },
                {
                    "id": 5,
                    "text": "JavaScript"
                },
                {
                    "id": 6,
                    "text": "React"
                },
                {
                    "id": 7,
                    "text": "Angular"
                },
                {
                    "id": 8,
                    "text": "Vue.js"
                },
                {
                    "id": 9,
                    "text": "Problem-Solving Skills"
                },
                {
                    "id": 10,
                    "text": "Stipend : 9,000/Month"
                },
                {
                    "id": 11,
                    "text": "Hybrid"
                },
                {
                    "id": 12,
                    "text": "Full Time"
                }
            ],
            image: Image62
        },
        // Card 53
        {
            "title": "Front End Developer",
            "price": "₹ 30000 - ₹ 100000",
            "tabItems": [
                { "id": 1, "text": "Softius Internet Services" },
                { "id": 2, "text": "React" },
                { "id": 3, "text": "Angular" },
                { "id": 4, "text": "Vue.Js" },
                { "id": 5, "text": "HTML" },
                { "id": 6, "text": "CSS" },
                { "id": 7, "text": "JavaScript" },
                { "id": 8, "text": "Responsive Design" },
                { "id": 9, "text": "Flexible Hours" },
                { "id": 10, "text": "Hybrid Working" },
                { "id": 11, "text": "Working Days: 5 Days" },
                { "id": 12, "text": "Job Type: Remote" },
                { "id": 13, "text": "EXP:- 3+ Year" }
            ],
            image: Image63
        },
        // Card 54
        {
            "title": "UX/UI Designer Internship",
            "price": "₹ 5000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Inupgro" },
                { "id": 2, "text": "UX/UI Design" },
                { "id": 3, "text": "Graphic Design" },
                { "id": 4, "text": "Interaction Design" },
                { "id": 5, "text": "Related Field" },
                { "id": 6, "text": "Design Process" },
                { "id": 7, "text": "Problem-Solving Skills" },
                { "id": 8, "text": "Figma" },
                { "id": 9, "text": "Adobe XD" },
                { "id": 10, "text": "Sketch" },
                { "id": 11, "text": "Similar" },
                { "id": 12, "text": "HTML/CSS Is A Plus" },
                { "id": 13, "text": "User-Friendly Designs" },
                { "id": 14, "text": "Teamwork Skills" },
                { "id": 15, "text": "Internship Timing: Full Time" },
                { "id": 16, "text": "Min Stipend: ₹5,000/Month" },
                { "id": 17, "text": "Max Stipend: ₹10,000/Month" },
                { "id": 18, "text": "Duration: 3 Months" },
                { "id": 19, "text": "Full Time" },
                { "id": 20, "text": "Internship Type: Work From Home" },
                { "id": 21, "text": "Job Offer" },
                { "id": 22, "text": "Certificate Of Completion" },
                { "id": 23, "text": "Letter Of Recommendation" },
                { "id": 24, "text": "Medical Insurance" }
            ],
            image: Image64
        },
        //   Card 55
        {
            "title": "UI / UX Designing Internship",
            "price": "₹ 5000 - ₹ 5000",
            "tabItems": [
                { "id": 1, "text": "Company: Conversely" },
                { "id": 2, "text": "UI/UX Design Tools" },
                { "id": 3, "text": "Adobe XD" },
                { "id": 4, "text": "Figma" },
                { "id": 5, "text": "Similar Software" },
                { "id": 6, "text": "CSS" },
                { "id": 7, "text": "JavaScript" },
                { "id": 8, "text": "Strong Understanding" },
                { "id": 9, "text": "Mobile App Design" },
                { "id": 10, "text": "User Interactions" },
                { "id": 11, "text": "Stipend: ₹5,000/Month" },
                { "id": 12, "text": "Working Days: 5 Days" },
                { "id": 13, "text": "Duration: 6 Months" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image65
        },
        //   Card 56
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Dextech" },
                { "id": 2, "text": "Skills: Responsive Design" },
                { "id": 3, "text": "Skills: HTML" },
                { "id": 4, "text": "Skills: CSS" },
                { "id": 5, "text": "Skills: JavaScript" },
                { "id": 6, "text": "Skills: Problem-Solving Skills" },
                { "id": 7, "text": "Skills: Collaboration Skills" },
                { "id": 8, "text": "Skills: React" },
                { "id": 9, "text": "Skills: Angular" },
                { "id": 10, "text": "Skills: Vue.js" },
                { "id": 11, "text": "Stipend: ₹9,000/Month" },
                { "id": 12, "text": "Working Days: 5 Days" },
                { "id": 13, "text": "Duration: 3 Months" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image66
        },
        //   Card 57
        {
            "title": "UI/UX Designer Internship",
            "price": "₹ 6000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Company: Mimansa Kids" },
                { "id": 2, "text": "Skills: Figma" },
                { "id": 3, "text": "Skills: AdobeXD" },
                { "id": 4, "text": "Skills: InVision" },
                { "id": 5, "text": "Skills: UI Design" },
                { "id": 6, "text": "Skills: UX Research" },
                { "id": 7, "text": "Stipend: ₹6,000/Month" },
                { "id": 8, "text": "Stipend: ₹12,000/Month" },
                { "id": 9, "text": "Duration: 6 Months" },
                { "id": 10, "text": "Working Hours: 5-6 Hours/Day" },
                { "id": 11, "text": "Internship Type: Work From Home" },
                { "id": 12, "text": "Internship Timing: Full Time" },
                { "id": 13, "text": "Working Days: 5 Days" },
                { "id": 14, "text": "Experience: Beginner" }
            ],
            image: Image67
        },
        // Card 58
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Dextech" },
                { "id": 2, "text": "Skills: Responsive Design" },
                { "id": 3, "text": "Skills: HTML" },
                { "id": 4, "text": "Skills: CSS" },
                { "id": 5, "text": "Skills: JavaScript" },
                { "id": 6, "text": "Skills: Problem-Solving Skills" },
                { "id": 7, "text": "Skills: Collaboration Skills" },
                { "id": 8, "text": "Skills: React" },
                { "id": 9, "text": "Skills: Angular" },
                { "id": 10, "text": "Skills: Vue.js" },
                { "id": 11, "text": "Stipend: 9,000/Month" },
                { "id": 12, "text": "Duration: 3 Months" },
                { "id": 13, "text": "Working Hours: 5 Days" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image68
        },
        // Card 59
        {
            "title": "Flutter Developer Internship",
            "price": "₹ 10000 - ₹ 15000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Company: Kukbit SL"
                },
                {
                    "id": 2,
                    "text": "Skills: JavaScript"
                },
                {
                    "id": 3,
                    "text": "Skills: HTML"
                },
                {
                    "id": 4,
                    "text": "Skills: CSS"
                },
                {
                    "id": 5,
                    "text": "Skills: Angular"
                },
                {
                    "id": 6,
                    "text": "Skills: React"
                },
                {
                    "id": 7,
                    "text": "Skills: JQuery"
                },
                {
                    "id": 8,
                    "text": "Skills: PHP"
                },
                {
                    "id": 9,
                    "text": "Skills: Node.js"
                },
                {
                    "id": 10,
                    "text": "Skills: Python"
                },
                {
                    "id": 11,
                    "text": "Perks:"
                },
                {
                    "id": 12,
                    "text": "Certificate"
                },
                {
                    "id": 13,
                    "text": "Letter Of Recommendation"
                },
                {
                    "id": 14,
                    "text": "Flexible Work Hours"
                },
                {
                    "id": 15,
                    "text": "Min Stipend: 10,000/Month"
                },
                {
                    "id": 16,
                    "text": "Max Stipend: 15,000/Month"
                },
                {
                    "id": 17,
                    "text": "Work Detail"
                },
                {
                    "id": 18,
                    "text": "Working Days: 5 Days"
                },
                {
                    "id": 19,
                    "text": "Schedule: Day Shift"
                },
                {
                    "id": 20,
                    "text": "Internship Type: Work From Home"
                },
                {
                    "id": 21,
                    "text": "Internship Timing: Part Time"
                }
            ],
            image: Image69
        },
        // Card 60
        {
            "title": "Fullstack Developer Internship",
            "price": "₹ 2000 - ₹ 5000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Company: Claponn Infotech Private Limited"
                },
                {
                    "id": 2,
                    "text": "Skills: HTML, CSS, And JavaScript"
                },
                {
                    "id": 3,
                    "text": "Skills: React.Js"
                },
                {
                    "id": 4,
                    "text": "Skills: Responsive Design"
                },
                {
                    "id": 5,
                    "text": "Skills: Cross-Browser Compatibility"
                },
                {
                    "id": 6,
                    "text": "Skills: Git"
                },
                {
                    "id": 7,
                    "text": "Skills: Communication And Collaboration Skills"
                },
                {
                    "id": 8,
                    "text": "Stipend: 2,000/Month"
                },
                {
                    "id": 9,
                    "text": "Stipend: 5,000/Month"
                },
                {
                    "id": 10,
                    "text": "Duration: 4 Month"
                },
                {
                    "id": 11,
                    "text": "Internship Type: Work From Home"
                },
                {
                    "id": 12,
                    "text": "Internship Timing: Full Time"
                },
                {
                    "id": 13,
                    "text": "Working Days: 5 Days"
                }
            ],
            image: Image70
        },
        // Card 61
        {
            title: "UI / UX Designing Internship",
            price: "₹ 8000 - ₹ 10000",
            tabItems: [
                { id: 1, text: "Jobs Territory" },
                { id: 2, text: "Experience" },
                { id: 3, text: "HTML" },
                { id: 4, text: "CSS" },
                { id: 5, text: "JavaScript" },
                { id: 6, text: "Strong Understanding" },
                { id: 7, text: "UI/UX Design" },
                { id: 8, text: "Testing" },
                { id: 9, text: "Excellent Communication" },
                { id: 10, text: "Collaboration Skills" },
                { id: 11, text: "Perks" },
                { id: 12, text: "Certificate Of Completion" },
                { id: 13, text: "Letter Of Recommendation" },
                { id: 14, text: "Min Stipend: 8,000/Month" },
                { id: 15, text: "Max Stipend: 10,000/Month" },
                { id: 16, text: "Working Days: 5 Days" },
                { id: 17, text: "Job Type: Remote" }
            ],
            image: Image71
        },
        // Card 62
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 9000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Noida, India"
                },
                {
                    "id": 2,
                    "text": "Company:- Dextech"
                },
                {
                    "id": 3,
                    "text": "HTML"
                },
                {
                    "id": 4,
                    "text": "CSS"
                },
                {
                    "id": 5,
                    "text": "JavaScript"
                },
                {
                    "id": 6,
                    "text": "React"
                },
                {
                    "id": 7,
                    "text": "Angular"
                },
                {
                    "id": 8,
                    "text": "Vue.js"
                },
                {
                    "id": 9,
                    "text": "Problem-Solving Skills"
                },
                {
                    "id": 10,
                    "text": "Stipend : 9,000/Month"
                },
                {
                    "id": 11,
                    "text": "Hybrid"
                },
                {
                    "id": 12,
                    "text": "Full Time"
                }
            ],
            image: Image72
        },
        // Card 63
        {
            "title": "Front End Developer",
            "price": "₹ 30000 - ₹ 100000",
            "tabItems": [
                { "id": 1, "text": "Softius Internet Services" },
                { "id": 2, "text": "React" },
                { "id": 3, "text": "Angular" },
                { "id": 4, "text": "Vue.Js" },
                { "id": 5, "text": "HTML" },
                { "id": 6, "text": "CSS" },
                { "id": 7, "text": "JavaScript" },
                { "id": 8, "text": "Responsive Design" },
                { "id": 9, "text": "Flexible Hours" },
                { "id": 10, "text": "Hybrid Working" },
                { "id": 11, "text": "Working Days: 5 Days" },
                { "id": 12, "text": "Job Type: Remote" },
                { "id": 13, "text": "EXP:- 3+ Year" }
            ],
            image: Image73
        },
        // Card 64
        {
            "title": "UX/UI Designer Internship",
            "price": "₹ 5000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Inupgro" },
                { "id": 2, "text": "UX/UI Design" },
                { "id": 3, "text": "Graphic Design" },
                { "id": 4, "text": "Interaction Design" },
                { "id": 5, "text": "Related Field" },
                { "id": 6, "text": "Design Process" },
                { "id": 7, "text": "Problem-Solving Skills" },
                { "id": 8, "text": "Figma" },
                { "id": 9, "text": "Adobe XD" },
                { "id": 10, "text": "Sketch" },
                { "id": 11, "text": "Similar" },
                { "id": 12, "text": "HTML/CSS Is A Plus" },
                { "id": 13, "text": "User-Friendly Designs" },
                { "id": 14, "text": "Teamwork Skills" },
                { "id": 15, "text": "Internship Timing: Full Time" },
                { "id": 16, "text": "Min Stipend: ₹5,000/Month" },
                { "id": 17, "text": "Max Stipend: ₹10,000/Month" },
                { "id": 18, "text": "Duration: 3 Months" },
                { "id": 19, "text": "Full Time" },
                { "id": 20, "text": "Internship Type: Work From Home" },
                { "id": 21, "text": "Job Offer" },
                { "id": 22, "text": "Certificate Of Completion" },
                { "id": 23, "text": "Letter Of Recommendation" },
                { "id": 24, "text": "Medical Insurance" }
            ],
            image: Image74
        },
        //   Card 65
        {
            "title": "UI / UX Designing Internship",
            "price": "₹ 5000 - ₹ 5000",
            "tabItems": [
                { "id": 1, "text": "Company: Conversely" },
                { "id": 2, "text": "UI/UX Design Tools" },
                { "id": 3, "text": "Adobe XD" },
                { "id": 4, "text": "Figma" },
                { "id": 5, "text": "Similar Software" },
                { "id": 6, "text": "CSS" },
                { "id": 7, "text": "JavaScript" },
                { "id": 8, "text": "Strong Understanding" },
                { "id": 9, "text": "Mobile App Design" },
                { "id": 10, "text": "User Interactions" },
                { "id": 11, "text": "Stipend: ₹5,000/Month" },
                { "id": 12, "text": "Working Days: 5 Days" },
                { "id": 13, "text": "Duration: 6 Months" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image75
        },
        //   Card 66
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Dextech" },
                { "id": 2, "text": "Skills: Responsive Design" },
                { "id": 3, "text": "Skills: HTML" },
                { "id": 4, "text": "Skills: CSS" },
                { "id": 5, "text": "Skills: JavaScript" },
                { "id": 6, "text": "Skills: Problem-Solving Skills" },
                { "id": 7, "text": "Skills: Collaboration Skills" },
                { "id": 8, "text": "Skills: React" },
                { "id": 9, "text": "Skills: Angular" },
                { "id": 10, "text": "Skills: Vue.js" },
                { "id": 11, "text": "Stipend: ₹9,000/Month" },
                { "id": 12, "text": "Working Days: 5 Days" },
                { "id": 13, "text": "Duration: 3 Months" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image76
        },
        //   Card 67
        {
            "title": "UI/UX Designer Internship",
            "price": "₹ 6000 - ₹ 12000",
            "tabItems": [
                { "id": 1, "text": "Company: Mimansa Kids" },
                { "id": 2, "text": "Skills: Figma" },
                { "id": 3, "text": "Skills: AdobeXD" },
                { "id": 4, "text": "Skills: InVision" },
                { "id": 5, "text": "Skills: UI Design" },
                { "id": 6, "text": "Skills: UX Research" },
                { "id": 7, "text": "Stipend: ₹6,000/Month" },
                { "id": 8, "text": "Stipend: ₹12,000/Month" },
                { "id": 9, "text": "Duration: 6 Months" },
                { "id": 10, "text": "Working Hours: 5-6 Hours/Day" },
                { "id": 11, "text": "Internship Type: Work From Home" },
                { "id": 12, "text": "Internship Timing: Full Time" },
                { "id": 13, "text": "Working Days: 5 Days" },
                { "id": 14, "text": "Experience: Beginner" }
            ],
            image: Image77
        },
        // Card 68
        {
            "title": "Front End Developer Internship",
            "price": "₹ 9000 - ₹ 10000",
            "tabItems": [
                { "id": 1, "text": "Company: Dextech" },
                { "id": 2, "text": "Skills: Responsive Design" },
                { "id": 3, "text": "Skills: HTML" },
                { "id": 4, "text": "Skills: CSS" },
                { "id": 5, "text": "Skills: JavaScript" },
                { "id": 6, "text": "Skills: Problem-Solving Skills" },
                { "id": 7, "text": "Skills: Collaboration Skills" },
                { "id": 8, "text": "Skills: React" },
                { "id": 9, "text": "Skills: Angular" },
                { "id": 10, "text": "Skills: Vue.js" },
                { "id": 11, "text": "Stipend: 9,000/Month" },
                { "id": 12, "text": "Duration: 3 Months" },
                { "id": 13, "text": "Working Hours: 5 Days" },
                { "id": 14, "text": "Internship Type: Work From Home" },
                { "id": 15, "text": "Internship Timing: Full Time" }
            ],
            image: Image78
        },
        // Card 69
        {
            "title": "Flutter Developer Internship",
            "price": "₹ 10000 - ₹ 15000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Company: Kukbit SL"
                },
                {
                    "id": 2,
                    "text": "Skills: JavaScript"
                },
                {
                    "id": 3,
                    "text": "Skills: HTML"
                },
                {
                    "id": 4,
                    "text": "Skills: CSS"
                },
                {
                    "id": 5,
                    "text": "Skills: Angular"
                },
                {
                    "id": 6,
                    "text": "Skills: React"
                },
                {
                    "id": 7,
                    "text": "Skills: JQuery"
                },
                {
                    "id": 8,
                    "text": "Skills: PHP"
                },
                {
                    "id": 9,
                    "text": "Skills: Node.js"
                },
                {
                    "id": 10,
                    "text": "Skills: Python"
                },
                {
                    "id": 11,
                    "text": "Perks:"
                },
                {
                    "id": 12,
                    "text": "Certificate"
                },
                {
                    "id": 13,
                    "text": "Letter Of Recommendation"
                },
                {
                    "id": 14,
                    "text": "Flexible Work Hours"
                },
                {
                    "id": 15,
                    "text": "Min Stipend: 10,000/Month"
                },
                {
                    "id": 16,
                    "text": "Max Stipend: 15,000/Month"
                },
                {
                    "id": 17,
                    "text": "Work Detail"
                },
                {
                    "id": 18,
                    "text": "Working Days: 5 Days"
                },
                {
                    "id": 19,
                    "text": "Schedule: Day Shift"
                },
                {
                    "id": 20,
                    "text": "Internship Type: Work From Home"
                },
                {
                    "id": 21,
                    "text": "Internship Timing: Part Time"
                }
            ],
            image: Image79
        },
        // Card 70
        {
            "title": "Fullstack Developer Internship",
            "price": "₹ 2000 - ₹ 5000",
            "tabItems": [
                {
                    "id": 1,
                    "text": "Company: Claponn Infotech Private Limited"
                },
                {
                    "id": 2,
                    "text": "Skills: HTML, CSS, And JavaScript"
                },
                {
                    "id": 3,
                    "text": "Skills: React.Js"
                },
                {
                    "id": 4,
                    "text": "Skills: Responsive Design"
                },
                {
                    "id": 5,
                    "text": "Skills: Cross-Browser Compatibility"
                },
                {
                    "id": 6,
                    "text": "Skills: Git"
                },
                {
                    "id": 7,
                    "text": "Skills: Communication And Collaboration Skills"
                },
                {
                    "id": 8,
                    "text": "Stipend: 2,000/Month"
                },
                {
                    "id": 9,
                    "text": "Stipend: 5,000/Month"
                },
                {
                    "id": 10,
                    "text": "Duration: 4 Month"
                },
                {
                    "id": 11,
                    "text": "Internship Type: Work From Home"
                },
                {
                    "id": 12,
                    "text": "Internship Timing: Full Time"
                },
                {
                    "id": 13,
                    "text": "Working Days: 5 Days"
                }
            ],
            image: Image80
        },

    ];

    // State to manage pagination
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;

    // Logic for displaying cards for the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

    // Function to handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(cardData.length / cardsPerPage);

    return (
        <div>
            {currentCards.map((card, index) => (
                <div key={index}>
                    {/* Render the TabCard */}
                    <TabCard
                        title={card.title}
                        tabItems={card.tabItems}
                        price={card.price}
                    />

                    {/* Render an image after each card except the last one */}
                    {index < currentCards.length - 1 && (
                        <div className="flex justify-center">
                            <a href="https://392.play.pokiigame.com/" target="_blank">
                                <img
                                    src={card.image} // Use the image field from the object
                                    alt={`Image for ${card.title}`}
                                    className="w-[800px]"
                                />
                            </a>
                        </div>
                    )}
                </div>
            ))}
            {/* Pagination Component */}
            <div className="flex flex-col md:flex-row justify-center my-8 space-y-4 md:space-y-0 md:space-x-4 items-center">
                {/* Previous Button with Left Arrow */}
                <button
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full transition duration-300
        ${currentPage === 1
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-purple-500 text-white hover:bg-purple-600"
                        }`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaArrowLeft className="text-white" /> {/* Left arrow icon */}
                    <span className="text-sm">Previous</span>
                </button>

                {/* Numeric Pagination Buttons */}
                <div className="flex flex-wrap justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`px-3 py-2 rounded-full transition duration-300 text-sm
                ${currentPage === index + 1
                                    ? "bg-purple-500 text-white hover:bg-purple-600"
                                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                                }`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Next Button with Right Arrow */}
                <button
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full transition duration-300
        ${currentPage === totalPages
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-purple-500 text-white hover:bg-purple-600"
                        }`}
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <span className="text-sm">Next</span>
                    <FaArrowRight className="text-white" /> {/* Right arrow icon */}
                </button>
            </div>
        </div>
    );
};

export default CardList;
