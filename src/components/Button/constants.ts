import { ButtonVariants } from "./types";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]: "bg-blue-500 text-white hover:bg-blue-600",
  [ButtonVariants.RED]: "bg-red-600 text-white hover:bg-red-700",
  [ButtonVariants.RED_SECONDARY]:
    "text-red-700 border border-red-700 hover:bg-red-700 hover:text-white",
  [ButtonVariants.DEFAULT]: "",
};
