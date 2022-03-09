import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="mb-4">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
          />
        </div>
        <div className="col-6">
          <input type="submit" value="Search" className="btn btn-primary" />
          <input
            type="button"
            className="btn btn-primary"
            value="Search Current Location"
          />
        </div>
      </div>
    </form>
  );
}
