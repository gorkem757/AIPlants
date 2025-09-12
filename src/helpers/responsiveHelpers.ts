import { Dimensions } from "react-native";

export const DESIGN_DIMENSIONS = {
  WIDTH: 375,
  HEIGHT: 812,
};

export const DEVICE_DIMENSIONS = {
  WIDTH: Dimensions.get("screen").width,
  HEIGHT: Dimensions.get("screen").height,
};

export const calcHeight = (height: number) =>
  height * (DEVICE_DIMENSIONS.HEIGHT / DESIGN_DIMENSIONS.HEIGHT);

export const calcWidth = (width: number) =>
  width * (DEVICE_DIMENSIONS.WIDTH / DESIGN_DIMENSIONS.WIDTH);

