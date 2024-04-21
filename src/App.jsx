import { useState } from "react";
import "./App.css";

function PersonalForm({ details, setDetails }) {
  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={details.phone}
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={details.address}
          onChange={(e) => setDetails({ ...details, address: e.target.value })}
        />
      </label>
    </form>
  );
}

function ExperienceForm({ experience, setExperience }) {
  const handleInputChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };
  const expobject = experience.map((exp, index) => {
    return (
      <form key={index}>
        <label>
          Position:
          <input
            type="text"
            value={exp.position}
            onChange={(e) =>
              handleInputChange(index, "position", e.target.value)
            }
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            value={exp.company}
            onChange={(e) =>
              handleInputChange(index, "company", e.target.value)
            }
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={exp.city}
            onChange={(e) => handleInputChange(index, "city", e.target.value)}
          />
        </label>
        <label>
          From:
          <input
            type="text"
            value={exp.from}
            onChange={(e) => handleInputChange(index, "from", e.target.value)}
          />
        </label>
        <label>
          To:
          <input
            type="text"
            value={exp.to}
            onChange={(e) => handleInputChange(index, "to", e.target.value)}
          />
        </label>
        <button
          onClick={() =>
            setExperience(experience.filter((_, i) => i !== index))
          }
        >
          Delete
        </button>
      </form>
    );
  });
  return expobject;
}

function EducationForm({ education, setEducation }) {
  const handleInputChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };
  const eduobject = education.map((edu, index) => {
    return (
      <>
        <form key={index}>
          <label>
            Degree:
            <input
              type="text"
              value={edu.degree}
              onChange={(e) =>
                handleInputChange(index, "degree", e.target.value)
              }
            />
          </label>
          <label>
            Major:
            <input
              type="text"
              value={edu.major}
              onChange={(e) =>
                handleInputChange(index, "major", e.target.value)
              }
            />
          </label>
          <label>
            School:
            <input
              type="text"
              value={edu.school}
              onChange={(e) =>
                handleInputChange(index, "school", e.target.value)
              }
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={edu.city}
              onChange={(e) => handleInputChange(index, "city", e.target.value)}
            />
          </label>
          <label>
            From:
            <input
              type="text"
              value={edu.from}
              onChange={(e) => handleInputChange(index, "from", e.target.value)}
            />
          </label>
          <label>
            To:
            <input
              type="text"
              value={edu.to}
              onChange={(e) => handleInputChange(index, "to", e.target.value)}
            />
          </label>
          {/* delete button */}
          <button
            onClick={() =>
              setEducation(education.filter((_, i) => i !== index))
            }
          >
            Delete
          </button>
        </form>
      </>
    );
  });
  return eduobject;
}

function InputContent({
  details,
  setDetails,
  experience,
  setExperience,
  education,
  setEducation,
}) {
  const [showPersonal, setShowPersonal] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  return (
    <div className="inputcontent">
      <div className="personal-details">
        <div className="flex-cont">
          <h1>Personal Details</h1>
          <button
            onClick={() => setShowPersonal(!showPersonal)}
            className="minimize-button"
          >
            ↓
          </button>
        </div>
        {showPersonal && (
          <PersonalForm details={details} setDetails={setDetails} />
        )}
      </div>

      <div className="experience">
        <div className="flex-cont">
          <h1>Experience</h1>
          <button
            onClick={() => setShowExperience(!showExperience)}
            className="minimize-button"
          >
            ↓
          </button>
        </div>
        {showExperience && (
          <>
            <ExperienceForm
              experience={experience}
              setExperience={setExperience}
            />

            <button onClick={() => setExperience([...experience, {}])}>
              Add Experience
            </button>
          </>
        )}
      </div>

      <div className="education">
        <div className="flex-cont">
          <h1>Education</h1>
          <button
            onClick={() => setShowEducation(!showEducation)}
            className="minimize-button"
          >
            ↓
          </button>
        </div>

        {showEducation && (
          <>
            <EducationForm education={education} setEducation={setEducation} />
            <button>Add Education</button>
          </>
        )}
      </div>
    </div>
  );
}

function Resume({ details, experience, education }) {
  return (
    <div className="resume">
      <h1>{details.name}</h1>
      <div className="contact">
        <p>{details.email}</p>
        <p>{details.phone}</p>
        <p>{details.address}</p>
      </div>
      {/* line across  */}
      
      <h2>Experience</h2>
      <hr />
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            <h3>{exp.position}</h3>
            <p>{exp.company}</p>
            <p>{exp.city}</p>
            <p>
              {exp.from} - {exp.to}
            </p>
          </li>
        ))}
      </ul>

      
      <h2>Education</h2><hr />
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.major}</p>
            <p>{edu.school}</p>
            <p>{edu.city}</p>
            <p>
              {edu.from} - {edu.to}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [details, setDetails] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "1234567890",
    address: "Goa, India",
  });

  const [experience, setExperience] = useState([
    {
      position: "Software Developer",
      company: "Google",
      city: "Mountain View, CA",
      from: "2018",
      to: "2020",
    },
    {
      position: "Software Developer",
      company: "Facebook",
      city: "Menlo Park, CA",
      from: "2016",
      to: "2018",
    },
  ]);

  const [education, setEducation] = useState([
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      school: "MIT",
      city: "Cambridge, MA",
      from: "2012",
      to: "2016",
    },
    {
      degree: "High School Diploma",
      school: "Punahou School",
      city: "Honolulu, HI",
      from: "2008",
      to: "2012",
    },
  ]);

  return (
    <div className="App">
      <div className="form-section">
        <InputContent
          details={details}
          setDetails={setDetails}
          experience={experience}
          setExperience={setExperience}
          education={education}
          setEducation={setEducation}
        />
      </div>

      <div className="resume-section">
        <Resume
          details={details}
          experience={experience}
          education={education}
        />
      </div>
    </div>
  );
}

export default App;
