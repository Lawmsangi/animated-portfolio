import React from 'react'
import './experience.scss'
import skills from '../../data/skills.json'
import history from '../../data/history.json'

const Experience = () => {
  return (
    <div className='experience'>
      <h2>Experience</h2>
      <div className="experience-content">
        <div className="skills">
          {skills.map((skill,id)=>{
            return (
              <div className="skill"
                key={id}
              >
                <div className="skill-icon">
                  <img src={skill.imageSrc} alt="skill" />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>

        <div className="history">
          {history.map((historyItem,id)=>{
            return (
              <div className="history-item">
                <img src={historyItem.imageSrc} alt="history" />
                <div className="history-details">
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience,id) => {
                      return <li key={id}>{experience}</li>
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience