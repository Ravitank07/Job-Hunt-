import React from 'react';

const JobCard = ({ title, company, positionCount, salaryRange, location, jobType, logoUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
      <div className="w-full bg-gray-100 p-4 flex items-center justify-center">
        <img
          src={logoUrl}
          alt={company}
          className="h-24 object-contain"
        />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-lg mb-1">{company}</p>
          <p className="text-gray-600 mb-1">Positions Available: <span className="font-semibold">{positionCount}</span></p>
          <p className="text-gray-600 mb-1">Salary Range: <span className="font-semibold">{salaryRange}</span></p>
          <p className="text-gray-600 mb-1">Location: <span className="font-semibold">{location}</span></p>
          <p className="text-gray-600 mb-1">Job Type: <span className="font-semibold">{jobType}</span></p>
        </div>
        <div className="mt-4 text-center">
          <button className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-600 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
