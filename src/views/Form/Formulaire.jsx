import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import './Formulaire.css';
import { titles } from '../../mock/titles';
import { FormService } from '../../services/formServices';

const Form = () => {
  const [storedata, setstoredata] = useState({
    title: '',
    fname: '',
    lname: '',
    email: '',
    phoneNumber: '',
    cv: '',
    coverLetter: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; /* .files[0] */
    setstoredata((prevState) => ({
      ...prevState,
      [name]: value
    }));
    /* if (e.target && e.target.files[0]){
            FormData.append('file', e.target.files[0])
        } */
  };

  const handleCVChange = (e) => {
    setstoredata((prevState) => ({
      ...prevState,
      cv: e.target.files[0]
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    await FormService.store(storedata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <a className="quizbutton" href="/quiz">
            Take a Test (Quiz)
          </a>
          <h1>Apply for a Position :</h1>
        </div>
      </div>
      <Divider style={{ maxWidth: '1000px', marginLeft: '250px' }} />
      <div id="content">
        <div id="formWrapper">
          <form
            id="msform"
            method="post"
            action="/uploadFile"
            enctype="multipart/form-data"
          >
            <fieldset id="fieldset3">
              <h2 class="fs-title">
                Please complete the form below for a position with us.
              </h2>
              <h3 class="fs-subtitle">Reference 0001</h3>
              {/* <div class="fs-error"></div> */}

              <div class="wrapper">
                <label for="title">Title :</label>
                <select
                  name="title"
                  value={storedata.title}
                  onChange={handleChange}
                >
                  <option hidden></option>
                  {titles.map((c, i) => {
                    return (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    );
                  })}
                </select>

                <label for="fname">
                  First Name<span>*</span> :
                </label>
                <input
                  type="text"
                  name="fname"
                  value={storedata.fname}
                  onChange={handleChange}
                  id="fname"
                  placeholder="Please enter your first name"
                  required
                />

                <label for="lname">
                  Last Name<span>*</span> :
                </label>
                <input
                  type="text"
                  name="lname"
                  value={storedata.lname}
                  onChange={handleChange}
                  id="lname"
                  placeholder="Please enter your last name"
                  required
                />

                <label for="email">
                  Email<span>*</span> :
                </label>
                <input
                  type="email"
                  name="email"
                  value={storedata.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Please enter your email"
                  required
                />

                <label for="phoneNumber">Phone N° :</label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={storedata.phoneNumber}
                  onChange={handleChange}
                  id="phoneNumber"
                  placeholder="Phone number"
                />

                <label for="CV">
                  Upload CV <span>*</span>:
                </label>
                <input
                  type="file"
                  name="myFile"
                  id="cv"
                  onChange={handleCVChange}
                  accept="application/msword, application/pdf"
                  placeholder="Cover Letter"
                  required
                />

                <label for="coverLetter">Cover Letter :</label>
                <textarea
                  type="text"
                  name="coverLetter"
                  value={storedata.coverLetter}
                  onChange={handleChange}
                  id="coverLetter"
                  placeholder="cover Letter"
                />
              </div>

              <br />
              <input
                type="submit"
                name="submit"
                class="submit action-button"
                value="Submit"
                onClick={submit}
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
