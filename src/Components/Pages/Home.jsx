import React from 'react';
import uiux from '../../Assets/uiux.jpg';
import JobCard from '../Jobcard';
import Image1 from '../../Assets/1 (3).jpg'
import Image4 from '../../Assets/4.png'
import Image6 from '../../Assets/6 (3).jpg'
function Home() {
  const steps = [
    { id: 1, title: "Step 1", description: "Clearly understand your desired job role, industry, and location." },
    { id: 2, title: "Step 2", description: "Tailor your resume to each specific job application, highlighting relevant skills and experiences. Write a personalized cover letter explaining your interest in the position and how your qualifications match the job requirements." },
    { id: 3, title: "Step 3", description: "Fill out the online application form accurately and completely. Carefully read and follow the application instructions provided by the employer." },
    { id: 4, title: "Step 4", description: "Express gratitude for considering your application. Build relationships with people in the company to increase your visibility. Reinforce your interest in the position and reiterate your qualifications." },
    { id: 5, title: "Step 5", description: "Respond promptly to any communication from the employer." },
  ];

  return (
    <>
      {/* Part One */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-4xl mx-auto my-28">
        <p className="text-3xl font-semibold text-gray-800">
          Read and follow 5 steps Before Applying for a Job
        </p>
        <div className="mt-4">
          <hr className="border-purple-500" />
        </div>
      </div>

      {/* Part Two */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-start max-w-5xl mx-auto my-28">
        {/* Top image */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
            src={uiux}
            alt="Job"
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Center text */}
        <div className="w-full md:w-2/3 px-4 md:px-6">
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            UI/UX Designer Internship
          </p>
          <p className="text-gray-600 mt-2">₹ 6000 - 12000</p>
          <p className="text-gray-600 mt-2">Mimansa Kids, Figma, AdobeXD, InVision, UI Design, UX Research</p>
          <p className="text-gray-600 mt-2">Min Stipend: 6,000/Month, Max Stipend: 12,000/Month, 6 Month</p>
          <p className="text-gray-600 mt-2">5-6 Hours / Day, Internship Type: Work From Home, Internship Timing: Full Time, Working Days: 5 Days, Beginner</p>
          <button className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-600 transition my-5">
            Apply Job
          </button>
        </div>
      </div>
      <div className='flex justify-center'>
        <a href='https://392.play.pokiigame.com/' target='_blank'>
          <img src={Image6} alt="" className='w-[800px]'/>
        </a>
      </div>
      {/* Part Three */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {steps.map((step) => (
          <div key={step.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center mr-4">
                {step.id}
              </div>
              <h2 className="text-2xl font-semibold">{step.title}</h2>
            </div>
            <p className="mt-4 text-gray-700">{step.description}</p>
          </div>
        ))}
        <div className="text-center">
          <button className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-600 transition">
            Apply Now
          </button>
        </div>
      </div>
      <div className='flex justify-center'>
        <a href='https://392.play.pokiigame.com/' target='_blank'>
          <img src={Image1} alt="" className='w-[800px]'/>
        </a>
      </div>
      {/* Part Four */}
      <div className="max-w-6xl mx-auto px-4 my-10">
        <h1 className='my-12 text-center text-3xl font-bold'>Apply Related Jobs</h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <JobCard
            title="Software Developer"
            company="DXC Technology"
            positionCount="20"
            salaryRange="₹800000 - ₹1000000"
            location="India, Faridabad"
            jobType="Full-Time"
            logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyO8Mi285PxQ4e5Z8NMC98DrNujcbEYurcqZfQRftG9WAfmJsj"
          />
          <JobCard
            title="Work from Home"
            company="Achiever's Club"
            positionCount="20"
            salaryRange="₹20000 - ₹30000"
            location="India"
            jobType="Work From Home Jobs"
            logoUrl="https://images.contactout.com/companies/5aaabb33f7855e5181ffe89ca1cb6f4b"
          />
          <JobCard
            title="Data Analyst"
            company="Adobe"
            positionCount="15"
            salaryRange="₹50000 - ₹80000"
            location="India, Bangalore"
            jobType="Full-Time"
            logoUrl="https://static.cdnlogo.com/logos/a/90/adobe.png"
          />
          <JobCard
            title="Product Manager"
            company="Google"
            positionCount="10"
            salaryRange="₹90000 - ₹120000"
            location="India, Hyderabad"
            jobType="Full-Time"
            logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2qA2C7_fU5hAhs04cKig1LoENHMDNw4pCw&s"
          />
          <JobCard
            title="Software Engineer"
            company="Microsoft"
            positionCount="25"
            salaryRange="₹70000 - ₹100000"
            location="India, Chennai"
            jobType="Full-Time"
            logoUrl="https://download.logo.wine/logo/Microsoft/Microsoft-Logo.wine.png"
          />
          <JobCard
            title="Web Developer"
            company="Amazon"
            positionCount="30"
            salaryRange="₹60000 - ₹90000"
            location="India, Pune"
            jobType="Full-Time"
            logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          />
          <JobCard
            title="UI/UX Designer"
            company="Apple"
            positionCount="5"
            salaryRange="₹80000 - ₹120000"
            location="India, Delhi"
            jobType="Full-Time"
            logoUrl="https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys"
          />
        </div>
      </div>
      <div className='flex justify-center mb-5'>
        <a href='https://392.play.pokiigame.com/' target='_blank'>
          <img src={Image4} alt="" />
        </a>
      </div>
    </>
  );
}

export default Home;
