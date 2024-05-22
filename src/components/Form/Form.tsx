import { Box, FormLabel } from "@mui/material";

// const useForm = () => {
//   const [values, setValues] = useState(false);

//   const [errors, setErrors] = useState({});

//   const resetForm = () => {
//     setValues(false);
//     setErrors({});
//   };

//   return {
//     values,
//     setValues,
//     errors,
//     setErrors,
//     resetForm,
//   };
// };

const FormInput = (props: any) => {
  const { children, ...other } = props;

  return (
    <Box>
      <FormLabel autoComplete="off" {...other}>
        {children}
      </FormLabel>
    </Box>
  );
};

export default FormInput;
