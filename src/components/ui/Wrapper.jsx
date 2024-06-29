import { cn } from "../../utils/cn";
export const Wrapper = ({ children, className = "   font-Helvetica" }) => {
  return (
    <div className={cn("mx-auto w-11/12  max-w-[1140px] ", className)}>
      {children}
    </div>
  );
};
