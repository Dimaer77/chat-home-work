import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  console.log("props", props);

  return (
    <Slider
      sx={{
        color: "#00CC22", // стили для слайдера // пишет студент
        width: "150px",
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
