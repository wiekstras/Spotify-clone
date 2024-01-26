import {twMerge} from "tailwind-merge";

interface BoxProps{
    children: React.ReactNode;
    ClassName?: string;
}
const Box: React.FC<BoxProps> = ({
    children,
    ClassName
}) => {
  return(
      <div
      className={twMerge(`
      bg-neutral-900
      rounded-lg
      h-fit
      w-full
      `, ClassName)}>
          {children}
      </div>
  )
}
export default Box;