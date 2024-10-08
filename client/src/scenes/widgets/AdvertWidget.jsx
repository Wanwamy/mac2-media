import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
        Advertisement
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:8080/assets/car.gif"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>advertisement</Typography>
        <Typography color={medium}>advertisement.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae beatae non voluptate, culpa, blanditiis ullam laudantium dolorem reiciendis repudiandae expedita obcaecati. Qui ipsum quia mollitia fugit animi ex quo?
        this is advertisement!!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;