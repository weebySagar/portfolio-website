import React from 'react';

async function getSkillsDetails() {
    try {
      const response = await fetch(
        "http://127.0.0.1:1337/api/my-skill?populate=deep"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data in My Skill");
      }
      const { data } = await response.json();
      return data?.attributes;
    } catch (error) {
      throw new Error(error);
    }
  }

const MySkills = () => {
    const data = getSkillsDetails();

    
  return (
    <section className='myskills'>
        <div className="inner-wrapper">
            <div className="container">
                <div className="title-wrap">
                    <h1>My Skills</h1>
                </div>

                <div className="skills-wrapper">

                </div>
            </div>
        </div>
    </section>
  )
}

export default MySkills