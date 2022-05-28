import React from 'react'

/*
*   Html input tag inin app için customize edilmiş versiyonu olan bir component tir.
*
*/

const Input = (props) => {
    const { label, error, name, onChange, type, defaultValue } = props;
    const className = error ? "form-control is-invalid" : "form-control";
    return (
        <div className="form-group">
            <label>{label}</label>
            <input className={className} name={name} onChange={onChange} type={type} defaultValue={defaultValue} />
            <div className="invalid-feedback">{error}</div>
        </div>
    );
};

export default Input