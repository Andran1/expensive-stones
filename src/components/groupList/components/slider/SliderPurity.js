import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: { width: 620 },
  margin: { height: 10 },
}));

const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "orange",
    marginTop: -12,
    marginLeft: -13,
    "& .bar": {
      height: 0,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
    backgroundColor: "orange",
  },
  rail: {
    color: "silver",
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

const CustomizedSlider = (props) => {
  const { onChange, value, marks, ...restProps } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom style={{ color: "white" }}>
        Чистота
      </Typography>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        value={value}
        marks={marks}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
};

export default CustomizedSlider;
