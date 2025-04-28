import React from 'react'


const TeamMemberCard = ({data}) => {
   
   
  return (
    <>
   
    <div>
        <h2>Team Member's name : {data.name}</h2>
        <h3>Job Title : {data.title}  </h3>

    </div>
    </>
  )
}

export default TeamMemberCard