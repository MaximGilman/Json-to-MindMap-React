import React, { FC } from "react";
import "./Node.css";
import block from "bem-cn-lite";
import { NodeLevel } from "../../models/node-level";

const b = block("node");

interface Props {
  title: string;
  level: NodeLevel;
}

const NodeComponent: FC<Props> = ({ title, level }) => {
  return (
    <div className={b({ level })}>
      <span className={b("title")}>{title}</span>
    </div>
  );
};

export default NodeComponent;
