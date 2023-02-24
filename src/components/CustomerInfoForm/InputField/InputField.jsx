import { TextField } from "@mui/material";

function InputField({ setCustomerInfo, customerInfo, type, customerInfoKey }) {
  const id = `${type}-input`;

  const handleChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      [customerInfoKey]: event.target.value,
    });
  };

  return (
    <TextField
      id={id}
      label={type}
      variant="outlined"
      onChange={handleChange}
    />
  );
}

export default InputField;
