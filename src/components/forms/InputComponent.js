const Input = (props) => {
  const { value, onChange, error, labelName, type, id, name } = props
  return (<>
    <div className="mb-3 ">
      <label htmlFor={name} className="form-label" required>
        {labelName}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-describedby="emailHelp"
      />
    </div>
    <p style={{ color: "red", marginTop: "-16px" }}>
      {error}
    </p>
  </>)
}

export default Input;