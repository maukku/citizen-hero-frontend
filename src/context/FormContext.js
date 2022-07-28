import { createContext, useState } from "react";

const FormContext = createContext();
export function FormProvider({ children }) {
  const [values, setValues] = useState({
    role: "",
    location: "",
    reason: "",
    contact: "",
    name:""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleRoleInputChange = (event) => {
    setValues({ ...values, role: event.target.value });
  };
  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleLocationInputChange = (event) => {
    setValues({ ...values, location: event.target.value });
  };
  const handleReasonInputChange = (event) => {
    setValues({ ...values, reason: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <FormContext.Provider
      value={{
        values,
        setValues,
        submitted,
        setSubmitted,
        handleRoleInputChange,
        handleNameInputChange,
        handleLocationInputChange,
        handleReasonInputChange,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
export default FormContext;
