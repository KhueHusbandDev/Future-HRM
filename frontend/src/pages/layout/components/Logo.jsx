import { Image } from "@mantine/core";

export const Logo = ({ w, h, isCircle = false }) => {
  return (
    <Image
      src={
        isCircle
          ? "src/assets/Logo_Circle_FutureHRM.svg"
          : "src/assets/Logo-FutureHRM.svg"
      }
      h={w}
      w={h}
      className={"p-2"}
    />
  );
};
