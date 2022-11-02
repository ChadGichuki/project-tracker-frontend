import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/SignUp.css";
import { Context } from "./Context/Context";

function SignUp() {

const [context, setContext] = useContext(Context)
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword] = useState("");
const [passwordConfirmation,setPasswordConfirmation] = useState("");

  const [image, setImage] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [cohorts, setCohorts] = useState([]);
  const [cohort_id, setCohort_id] = useState(null);

  useEffect(() => {
    fetch("https://project-tracker-phase5.herokuapp.com/cohorts")
      .then((res) => res.json())
      .then((data) => {
        setCohorts(data.cohorts);
        setCohort_id(cohorts[0].id);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://project-tracker-phase5.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        cohort_id,
        image,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setContext(data.user);
          window.localStorage.setItem("token", data.jwt);
        });
        navigate("/cohorts");
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <div className="signUpFlex">
      {/* <div className="signUpPhoto">
        <img src="header.jpg" style={{width: "200px"}}/>
      </div> */}
      <div className="signUpForm">
        <form action="" onSubmit={handleSubmit}>
          <div className="formheadingContainer">
            <h3 className="formheading">Student Sign Up Form</h3>
          </div>
          <div className="mb-3">
          <label htmlFor="name" class="form-label">Name</label>
          <input className="form-control"
            type="text"
            id="name"
            placeholder="Full name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          </div>
          <div className="mb-3">
          <label htmlFor="email" class="form-label">Email</label>
          <br />
          <input className="form-control"
            type="email"
            id="email"
            placeholder="example@student.moringaschool.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" class="form-text">Must be a valid MoringaSchool Email.</div>
          </div>
          <div className="mb-3">
          <label htmlFor="Password" class="form-label">Password</label>
          <input className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          </div>
          <div className="mb-3">
          <label htmlFor="password" class="form-label">Password Confirmation</label>
          <br />
          <input className="form-control"
            type="password"
            id="password-confirmation"
            name="password-confirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
          </div>
          <div className="mb-3">
          <label htmlFor="cohort" class="form-label">Cohort</label>
          <select className="form-select"
            name="selected"
            id="selected"
            onChange={(e) => setCohort_id(e.target.value)}
          >
            {cohorts.map((cohort) => (
              <option key={cohort.id} value={cohort.id}>
                {cohort.name}
              </option>
            ))}
          </select>
          <div id="emailHelp" class="form-text">Select the cohort you belong to.</div>
          </div>
            <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
