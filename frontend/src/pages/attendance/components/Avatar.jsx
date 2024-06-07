import { Image } from "@mantine/core";

export const Avatar = ({ w, h, isCircle = false, src }) => {
  return (
    <Image
      src={
        src != null
          ? "src/assets/Logo_Circle_FutureHRM.svg"
          : "src/assets/LogoOnly_FutureHRM.svg"
      }
      h={w}
      w={h}
      className={"p-2"}
    />
  );
};