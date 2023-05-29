import React, { useState, useContext } from "react";
import { UserContext } from "../Context";
import { Link , useHistory} from "react-router-dom";
import { TabTitle } from "./GeneralFunctions";
import arcadeclub from '../assets/img/arcadeclub.gif';

const EpicSignIn = () => {
  TabTitle("Sign in to Your Arcade Club Account | Arcade Club")
  const { user, setUser } = useContext(UserContext);


  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  let history = useHistory();



  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(form);
    localStorage.user = JSON.stringify(form);
    history.push("/");
  };

  return (
    <div className="epic-sign-in">
      <div className="box">
        <div className="main-box">
          <div className="epic-logo">
          <div>
          
          <img 
          src={arcadeclub}
          width="200" 
          height="150"
          />
    </div>
          </div>
          <div>
            <h6 className="sign-title">Sign in with an Arcade Club Account</h6>
          </div>
          <div className="submit-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  name="name"
                  type="text"
                  className="form-control email"
                  placeholder="Email Adress"
                  required
                  onChange={(e) =>
                    setForm((state) => ({
                      ...state,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="form-group mb-3 mt-4">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  onChange={(e) =>
                    setForm((state) => ({
                      ...state,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="form-group mb-3 mt-4 text-light d-flex justify-content-between">
                <div className="d-flex gap-2">
                  <input
                    class="jss10"
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                  />

                  <p className="mb-0 t-1">Remember me</p>
                </div>
                <p className="mb-0  t-2">Forgot Your Password</p>
              </div>
              <div className="form-group mb-3 mt-5">
                <button type="submit" className="btnSubmit">
                  Log in now
                </button>
              </div>
            </form>
          </div>
          <div className="mt-4">
            <a
              href="https://www.epicgames.com/site/en-US/privacypolicy?lang=en-US"
              target="_blank"
            >
              {" "}
              <p className="t-3">Privacy Policy</p>
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <p className="t-5">Don't have an Arcade Club Account?</p>
            <Link to="/epic-register" className="ms-1 t-4">
              Sign Up
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <p className="t-5">Back to </p>
            <Link to="/signin" className="ms-1 t-4">
              all sign in options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpicSignIn;
