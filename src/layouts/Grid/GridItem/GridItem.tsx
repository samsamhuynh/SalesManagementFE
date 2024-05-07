import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const GridItem = (props: any) => {
  const { children, ...rest } = props;

  return (
    <Grid item {...rest} className="!py-0 !px-[15px]">
      {children}
    </Grid>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
};

export default GridItem;
