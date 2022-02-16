import React from 'react'
import InputComponent from './forms/InputComponent'
import ButtonComponent from './forms/ButtonComponent'
import DropdownComponent from './forms/DropdownComponent'
import { roleConstant as roles } from '../lib/constant'

const Signup = (props) => {

  const { handleSubmit, formValues, handleChange, formErrors } = props

  return (
    <div className="container">
      <br />
      <br />
      <h3>welcome to Signup page</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <InputComponent name="username" value={formValues.username} labelName="User Name" type="text" id="username" onChange={handleChange} error={formErrors.username} />

        <div className="mb-3 ">
          <label htmlFor="email" className="form-label" required>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>{formErrors.email}</p>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" required>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.password}
        </p>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label" required>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={formValues.cpassword}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.password}
        </p>
        <DropdownComponent name="role" labelName="Role" value={formValues.role} onChange={handleChange} options={roles} />

        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label">{/* Choose file */}</label>
        </div>
        <ButtonComponent type="submit" className="btn btn-primary my-2" buttonText="Submit" />

      </form>
    </div>
  )
}

export default Signup