import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { loginUserAsync } from "@/redux/auth/actions";
import { selectIsLoading } from "@/redux/auth/selectors";
import { FormField } from "@/components/FormField";
import { Input } from "@/components/FormField/Input";
import { Button } from "@/components/Button";
import { ButtonVariants } from "@/components/Button/types";
import { LOGIN_VALIDATION_SCHEMA } from "./constants";
import { LoginSchemaType } from "./types";

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LOGIN_VALIDATION_SCHEMA),
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: LoginSchemaType) => {
    dispatch(loginUserAsync(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 border rounded-lg"
    >
      <div className="flex flex-col gap-3">
        <FormField label="Email" error={errors.email && errors.email.message}>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
        </FormField>

        <FormField
          label="Password"
          error={errors.email && errors.email.message}
        >
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter password"
          />
        </FormField>
      </div>

      <Button
        className="w-full py-1.5 mt-6"
        variant={ButtonVariants.PRIMARY}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
};
