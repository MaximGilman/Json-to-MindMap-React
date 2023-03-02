/* eslint-disable */
import { NodeLevel } from '../../models/node-level';
import NodeComponent from './Node';

export default {
  title: "Node",
};

export const Default = () => <NodeComponent title='Заголовок' level={NodeLevel.Root}/>;

Default.story = {
  name: 'default',
};
