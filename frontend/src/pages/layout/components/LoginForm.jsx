import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import sign from "jwt-encode";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useActions } from "../../../store/AuthStore";
import { Logo } from "./Logo";

export const LoginForm = ({ onClose }) => {
  const navigate = useNavigate();
  const actions = useActions();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData) => {
    const token = sign(userData, "secret");

    actions.setAccessToken(token);

    toast.success("Login Success");
    navigate("/dashboard");
    onClose();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Paper
        className="flex flex-row flex-nowrap gap-4 justify-center items-center"
        shadow="md"
      >
        <Logo w={80} h={80} isCircle={true} />
        <div className="font-bold uppercase text-3xl">Future HRM</div>
      </Paper>
      <Controller
        name="email"
        defaultValue={""}
        control={control}
        rules={{ required: "Email must not be blank" }}
        render={({ field, fieldState }) => {
          return (
            <TextInput
              {...field}
              label="Email"
              placeholder="Input Email"
              error={fieldState.error?.message}
            />
          );
        }}
      />
      <Controller
        name="password"
        defaultValue={""}
        control={control}
        rules={{ required: "Password must not be blank" }}
        render={({ field, fieldState }) => {
          return (
            <Fragment>
              <PasswordInput
                {...field}
                label="Your password"
                placeholder="Input password"
                id="your-password"
                error={fieldState.error?.message}
              />
            </Fragment>
          );
        }}
      />
      <Group justify="flex-end">
        <Anchor
          href="#"
          onClick={(event) => event.preventDefault()}
          pt={2}
          fw={500}
          fz="xs"
        >
          Forgot your password?
        </Anchor>
      </Group>
      <Button className="rounded-lg h-14" fullWidth type="submit">
        Login
      </Button>
    </form>
  );
};
