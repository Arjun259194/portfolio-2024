import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  title: string;
}

const MacWindow: React.FC<Props> = ({ children, className, title }) => {
  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden bg-zinc-900 border-2 border-violet-800 w-full h-max",
        className,
      )}
    >
      <div className="py-3 px-5 flex justify-between">
        <div className="space-x-2 flex">
          <div className="w-5 h-5 rounded-full bg-red-500" />
          <div className="w-5 h-5 rounded-full bg-yellow-500" />
          <div className="w-5 h-5 rounded-full bg-green-500" />
        </div>
        <h2 className="text-gray-200 font-semibold">{ title}</h2>
        <div />
      </div>
      <div className="p-5 bg-gray-700 rounded-xl">{children}</div>
    </div>
  );
};

export default MacWindow;
