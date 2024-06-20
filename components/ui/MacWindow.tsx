import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  title: string;
}

const WindowButtons = () => (
  <div className="space-x-2 flex">
    {["FF3333", "33FF4F", "E0FF33"].map((color, index) => (
      <div
        key={index}
        className={`w-5 h-5 rounded-full brightness-90 hover:brightness-150`}
        style={{
          backgroundColor: `#${color}`,
        }}
      />
    ))}
  </div>
);

const TitleBar = ({ title }: { title: string }) => (
  <div className="py-2.5 px-5 flex items-center  justify-between">
    <WindowButtons />
    <h2 className="text-gray-200 font-semibold">{title}</h2>
    <div />
  </div>
);

const MacWindow: React.FC<Props> = ({ children, className, title }) => {
  return (
    <div
      className={cn(
        "rounded-xl shadow-md border-4 border-orange-200/20 shadow-gray-500 overflow-hidden bg-zinc-900 w-full h-full",
        className,
      )}
    >
      <TitleBar title={title} />
      <div className="p-5 bg-gray-950 h-full">{children}</div>
    </div>
  );
};

export default MacWindow;
