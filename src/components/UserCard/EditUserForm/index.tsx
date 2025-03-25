import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUserMutation } from "@/redux/users/api";
import { FormField } from "@/components/FormField";
import { Input } from "@/components/FormField/Input";
import { Button } from "@/components/Button";
import { ButtonVariants } from "@/components/Button/types";
import { IUser } from "@/@types/users";
import { EDIT_USER_VALIDATION_SCHEMA } from "./constants";
import { EditUserSchemaType } from "./types";

interface Props {
  user: IUser;
}

export const EditUserForm: FC<Props> = ({ user }) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const form = useForm<EditUserSchemaType>({
    resolver: zodResolver(EDIT_USER_VALIDATION_SCHEMA),
    defaultValues: {
      name: `${user.first_name} ${user.last_name}`,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: EditUserSchemaType) => {
    updateUser({ id: user.id, ...data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <FormField label="Name" error={errors.name?.message}>
          <Input {...register("name")} type="text" placeholder="Enter name" />
        </FormField>

        <FormField label="Job" error={errors.job?.message}>
          <Input {...register("job")} type="text" placeholder="Enter job" />
        </FormField>
      </div>

      <Button
        className="w-full mt-6 py-1.5"
        variant={ButtonVariants.PRIMARY}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? "Updating..." : "Save Changes"}
      </Button>
    </form>
  );
};
