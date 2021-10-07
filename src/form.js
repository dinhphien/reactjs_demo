import React from "react";
import classNames from "classnames";
import "./style/Form.css";

export const renderField = ({ input, label, type, meta: { error } }) => {
  const classes = classNames("form-input", {
    "is-invalid": error,
  });
  return (
    <div className="form-group">
      {label !== null && label !== "" && <label>{label}</label>}
      {type !== "textarea" && (
        <input {...input} type={type} className={classes}></input>
      )}
      {type === "textarea" && <textarea {...input} className={classes} />}
      {error && <small className="text-error">{error}</small>}
    </div>
  );
};
