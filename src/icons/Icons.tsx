import React, { FC, SVGProps } from "react";
import { ReactComponent as CircleSvg } from "./circle.svg";
import clsx from "clsx";

const createIcon = (SvgComponent: FC<React.SVGProps<SVGSVGElement>>) => {
  const Icon = (props: SVGProps<SVGSVGElement> & { title?: string }) => {
    const { className, ...otherProps } = props;
    return (
      <SvgComponent
        className={clsx(className, "inline-block")}
        {...otherProps}
      />
    );
  };
  return Icon;
};

export const CircleIcon = createIcon(CircleSvg);
