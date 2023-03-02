import React, { FC } from "react";
import "./Node.css";
import block from "bem-cn-lite";
import { NodeLevel } from "../../models/node-level";

const b = block("node");

interface IProps {
  title: string;
  level: NodeLevel;
}

const NodeComponent: FC<IProps> = ({ title, level }) => {
  return (
    <div className={b({ level })}>
      <span className={b("title", { level })}>{title}</span>
    </div>
  );
};

export default NodeComponent;
