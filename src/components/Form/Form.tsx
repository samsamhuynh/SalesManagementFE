import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const FormInput = (props: any) => {
  const { open, onClose, pen } = props;
  const isUpdateForm = !!pen;

  const handleSubmit = () => {
    // call api
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel} fullWidth maxWidth="md">
      <DialogTitle>
        {isUpdateForm ? "Update" : "Create"}
        <IconButton style={{ float: "right" }} onClick={handleCancel}>
          <Close color="action" />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Box
            name="basic"
            autoComplete="off"
            component="form"
            noValidate
            sx={{ margin: "2", letterSpacing: "2" }}
          >
            <TextField
              variant="outlined"
              label="Product Name"
              name="name"
              fullWidth
              margin="normal"
              autoFocus
            />

            <TextField
              variant="outlined"
              label="Description"
              name="description"
              fullWidth
              margin="normal"
              autoFocus
            />

            <TextField
              variant="outlined"
              label="Slug"
              name="slug"
              fullWidth
              margin="normal"
              autoFocus
            />

            <DialogActions>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#ff9800",
                  "&:hover": {
                    backgroundColor: "#fb8c00",
                  },
                }}
              >
                Save
              </Button>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#333",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormInput;
