import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Content from "./Content";

type AppGradientProps = {
  children: any;
  colors: string[];
};

const AppGradient: React.FC<AppGradientProps> = ({ children, colors }) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
