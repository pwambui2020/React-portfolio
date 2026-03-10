import React from 'react'
import './MyWork.css'
import mywork_data from "../../assets/mywork_data"
import arrow from "../../assets/arrow.svg"

const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt={work.w_name}  />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow} alt="" />
        </div>
      
    </div>
  )
}

export default MyWork

//style={{width:'400px', height:'280px'}}