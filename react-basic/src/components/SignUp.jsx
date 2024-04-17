import React, {useState} from 'react'
import '../form.css'

const SignUp = () => {
    // const [first, setFirst] = useState("");
    // const [last, setLast] = useState("");
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        dob : "",
        zodiac : "",
        phone : "",
        gender : "",
        username : "",
        email : "",
        password : "",
        address : "",
        skills : []

    });

    const handleChange = (event) =>{
        console.log(event);

        setFormData(()=>{
            // key : value
            return {...formData,
            [event.target.name] : event.target.value}

        })
        console.log(formData);
    }
  return (
    <div className="form-container">
      <h1>Create Your Account 😁</h1>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <section className="personal-details form-section">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              required
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              id="dob"
              min={"1990-01-01"}
              max={"2030-01-01"} //how to get it for current
              required
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="zodiac">Zodiac Sign </label>
            <select name="zodiac" id="zodiac" value={formData.zodiac} onChange={handleChange}>
              <option value="aries">Aries - (Mar 21 - Apr 19)</option>
              <option value="taurus">Taurus - (Apr 20 - May 20)</option>
              <option value="gemini">Gemini - (May 21 - Jun 21)</option>
              <option value="cancer">Cancer - (Jun 22 - Jul 22)</option>
              <option value="leo">Leo - (Jul 23 - Aug 22)</option>
              <option value="virgo">Virgo - (Aug 23 - Sep 22)</option>
              <option value="libra">Libra - (Sep 23 - Oct 23)</option>
              <option value="scorpio">Scorpio - (Oct 24 - Nov 21)</option>
              <option value="sagittarius">
                Sagittarius - (Nov 22 - Dec 21)
              </option>
              <option value="capricorn">Capricorn - (Dec 22 - Jan 19)</option>
              <option value="aquarius">Aquarius - (Jan 20 - Feb 18)</option>
              <option value="pisces">Pisces - (Feb 19 - Mar 20)</option>
            </select>
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Gender</label>
            <div className="gender">
              <input type="radio" name="gender" id="male" value="male" onChange={handleChange} />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" onChange={handleChange}/>
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" onChange={handleChange} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </section>
        <div className="left-side">
          <section className="login-credentials form-section">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="john_doe69"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Its a secret"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </section>
        </div>

        <div className="right-side">
          <section className="contact-details form-section">
            <div>
              <label htmlFor="address">Address</label>
              <textarea
                name="address"
                id="address"
                placeholder="177A Bleecker Street, New York City, NY 10012-1406, on the corner of Bleecker Street and Fenno Place in the heart of Greenwich Village."
                maxLength={200}
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="skills">
              <label htmlFor="skills">Skills I have : </label>
              <div className="skills-wrapper">
                <div>
                  <input type="checkbox" name="skills" id="html" value="html" onChange={handleChange} />
                  <label htmlFor="html">HTML</label>
                </div>
                <div>
                  <input type="checkbox" name="skills" id="css3" value="css3" onChange={handleChange} />
                  <label htmlFor="css3">CSS3</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="skills"
                    id="javascript"
                    value="javascript"
                    onChange={handleChange}
                  />
                  <label htmlFor="javascript">JAVASCRIPT</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="skills"
                    id="react"
                    value="react"
                    onChange={handleChange}
                  />
                  <label htmlFor="react">REACT</label>
                </div>
                <div>
                  <input type="checkbox" name="skills" id="git" value="git" onChange={handleChange} />
                  <label htmlFor="git">GIT</label>
                </div>
                <div>
                  <input type="checkbox" name="skills" id="node" value="node" onChange={handleChange} />
                  <label htmlFor="node">NODE</label>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="controls form-section">
          <button type="submit" id="submit">
            Submit
          </button>
          <button type="reset" id="reset">
            Reset
          </button>
        </section>
      </form>
    </div>
  )
}

export default SignUp