import { ComponentProps, ComponentType} from "react";
import clsx from "clsx";

interface Props {
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  count?: number; 
  color?: "blue" | "red" | "green";
}


export function TweetAction({ icon: Icon, count, color = "blue"}: Props) {
  return (
    <div className={clsx(
      "flex items-center space-x-2 text-sm text-gray-500 group",
      color === 'blue' && 'hover:text-blue-400',
    )} >
      <Icon className="h-6 w-5 p-1 rounded-full group-hover:bg-blue-500 group-hover:bg-opacity-10 "/>
      {count && <span>{count}</span>}
    </div>
  );
}