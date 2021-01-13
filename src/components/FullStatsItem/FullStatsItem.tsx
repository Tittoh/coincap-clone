import React from "react";
import { FullStatsItemWrap, FullStatsTitle, FullStatsValue } from "./FullStatsItemStyle";

export interface FullStatsItemProp {
  title: string,
  value: string,
}

const FullStatsItem: React.FC<FullStatsItemProp> = ({ title, value }) => {
  return (
    <FullStatsItemWrap>
      <FullStatsTitle>{ title }</FullStatsTitle>
      <FullStatsValue>{ value }</FullStatsValue>
    </FullStatsItemWrap>
  );
};

export { FullStatsItem };
