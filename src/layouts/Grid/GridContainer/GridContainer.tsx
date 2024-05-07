import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const GridContainer = (props: any) => {
  const { children, ...rest } = props;

  return (
    <Grid container {...rest} className="!my-0 !-mx-[15px] w-full">
      {children}
    </Grid>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node,
};

export default GridContainer;
