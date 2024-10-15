import React from 'react'
import RemoteJobsCard from '../RemoteJobsCard'
import Hero from '../Hero'

function RemoteJobs() {
  return (
    <>
      <div className='mt-[6.6rem]'>
        <Hero title="Remote Jobs"/>
        <RemoteJobsCard />
      </div>
    </>
  )
}

export default RemoteJobs
