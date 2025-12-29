import React, { useReducer } from "react";

const initialState = {
  step: 1,
  isSubmitted: false,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { step, formData, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Step {step}</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />

          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />

          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <p>{formData.name}</p>
          <p>{formData.email}</p>
          <p>{formData.username}</p>
          <p>{formData.password}</p>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default App;
