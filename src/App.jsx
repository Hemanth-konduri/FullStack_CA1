
import { useState } from 'react'
import './App.css'
import TeamMemberCard from './components/TeamMemberCard'
import data from "../data.json"

function App() {
  const[teamMember, setTeamMember] = useState(data);
  
 

  return (
    <>
    <div style={{display:"flex", flexWrap:"wrap", padding:"20px", gap:"25px"}}>
      {
        teamMember.map((ele)=>(
          <TeamMemberCard data={ele}/>
        ))

      }
      </div>
    </>
  )
}

export default App
