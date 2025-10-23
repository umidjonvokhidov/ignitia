import { twMerge } from "tailwind-merge";

const PatternDivider = ({className}: {className?: string}) => {
  return (
    <div className={twMerge("bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] border-y border-white/8 bg-repeat h-[40px] md:h-[80px] bg-left-top lg:h-[120px] w-full", className)}/>
  )
}

export default PatternDivider;