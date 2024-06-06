import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { Controller, useForm } from "react-hook-form";
import { Logo } from "./Logo";
import { Fragment } from "react";
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData) => {
    console.log(userData);
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
        defaultValue={null}
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
        defaultValue={null}
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
