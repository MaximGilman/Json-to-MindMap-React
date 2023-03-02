import { NodeLevel } from "./node-level";

export interface Node {
  Id: number;
  Title: string;
  Level: NodeLevel;
  Children?: Array<Node>;
}
