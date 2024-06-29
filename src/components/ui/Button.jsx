import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const Button = ({ variant, className, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

const buttonVariants = cva("py-2 w-full font-Helvetica", {
  variants: {
    variant: {
      pill: "rounded-full font-Helvetica",
      rectangle:"rounded-lg bg-app-black text-center text-white font-Helvetica inline-flex items-center justify-center whitespace-nowrap font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    },
  },
  defaultVariants: {
    variant: "pill",
  },
});
