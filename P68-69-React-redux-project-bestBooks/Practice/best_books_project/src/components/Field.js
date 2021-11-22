const Field = ({ label, id, error, ...rest }) => (
    <div className = 'form-group'>
      <label htmlFor={id}>{label}</label>
      <input id={id} className = 'form-control mb-3' {...rest} />
      {error && <p className = 'text-danger'>{error}</p>}
    </div>
  );

 export default Field