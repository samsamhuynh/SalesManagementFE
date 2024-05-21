import { CheckBox, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const FormInput = (props: any) => {
  const { name, label, value } = props;

  const [open, openChange] = useState(true);

  const [title, titleChange] = useState("Create");

  const [agreeTerm, agreeTermChange] = useState(true);

  const closepopup = () => {
    openChange(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    closepopup();
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    closepopup();
  };

  return (
    <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
      <DialogTitle>
        <span>{title}</span>
        <IconButton style={{ float: "right" }} onClick={closepopup}>
          <Close color="action" />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box
            name="basic"
            autoComplete="off"
            component="form"
            noValidate
            sx={{ margin: "2", letterSpacing: "2" }}
          >
            <TextField
              value={value}
              label={label}
              name={name}
              required={false}
              autoFocus
              variant="outlined"
              fullWidth
              margin="normal"
            ></TextField>

            <TextField
              value={value}
              label={label}
              name={name}
              required={false}
              autoFocus
              variant="outlined"
              fullWidth
              margin="normal"
            ></TextField>

            <TextField
              value={value}
              label={label}
              name={name}
              required={false}
              autoFocus
              variant="outlined"
              fullWidth
              margin="normal"
            ></TextField>

            <RadioGroup>
              <FormControlLabel
                control={<Radio color="success"></Radio>}
                label={label}
              ></FormControlLabel>

              <FormControlLabel
                control={<Radio></Radio>}
                label={label}
              ></FormControlLabel>
            </RadioGroup>

            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  checked={agreeTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    agreeTermChange(e.target.checked);
                  }}
                  name="agreeTerm"
                  color="success"
                />
              }
              label="I agree to the terms"
            ></FormControlLabel>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#ff9800",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#af2cc5",
                  },
                }}
                disabled={!agreeTerm}
              >
                Save
              </Button>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#555555",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#af2cc5",
                  },
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormInput;
