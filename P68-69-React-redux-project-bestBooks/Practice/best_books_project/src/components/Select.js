const Select = ({ label, id, children, error, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest} className = 'form-select mb-3'>
        {children}
      </select>
      {error && <p className = 'text-danger'>{error}</p>}
    </div>
  );

  export default Select