import { PowerIcon } from "lucide-react";

export const Logo = () => {
  return (
    <>
      <h2 className="text-2xl font-bold flex items-center">
        <PowerIcon strokeWidth={4} className="size-5" />
        wls
      </h2>
    </>
  );
};

export const LogoIcon = () => {
  return (
    <>
      <PowerIcon className="size-5 text-primary" />
    </>
  );
};
