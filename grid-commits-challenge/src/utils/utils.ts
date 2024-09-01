export const commitColor = "#49CA11";

export const getOpacity = (value: number) => {
  let opacity = 0.1;
  if (value >= 63) opacity = 1;
  else if (value >= 42 && value <= 62) opacity = 0.8;
  else if (value >= 21 && value <= 41) opacity = 0.5;
  else if (value >= 1 && value <= 20) opacity = 0.3;
  return opacity;
};
