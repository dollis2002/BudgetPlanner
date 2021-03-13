import React, { useContext, useState } from "react";
import { AppContext } from "../context/appContext";

const BudgetEdit = () => {
  const { dispatch } = useContext(AppContext);
  const [budget, setBudget] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const budget_ = parseInt(budget);
    dispatch({
      type: "EDIT_BUDGET",
      payload: budget_,
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm-8">
            <label for="budget">Edit Budget</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="budget"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            ></input>
          </div>
          <div className="col-sm-4">
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default BudgetEdit;
