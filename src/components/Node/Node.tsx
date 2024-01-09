import React from "react";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  node: number;
  index: number;
  setNode: (node: number, index: number) => void;
}

export const Node: React.FC<Props> = ({ node, index, setNode }) => {
  const nodes = useAppSelector(state => state.nodes.items);

  return (
    <div
      className="node-block"
      key={node}
      style={{
        top: ((index + 1) * 150) + 'px',
        left: ((index + 1) * 150) + 'px'
      }}
    >
      <div className="white mb-1"></div>
      <div className="select">
        <select
          value={nodes[1 + index]?.toString()}
          onChange={(e) => setNode(+e.target.value, 1 + index)}
        >
          <option value={'1'}>
            Варiант {nodes.slice(0, index + 1).join('-')}-1
          </option>
          <option value={'2'}>
            Варiант {nodes.slice(0, index + 1).join('-')}-2
          </option>
          <option value={'3'}>
            Варiант {nodes.slice(0, index + 1).join('-')}-3
          </option>
          <option value={'4'}>
            Варiант {nodes.slice(0, index + 1).join('-')}-4
          </option>
          <option value={'5'}>
            Варiант {nodes.slice(0, index + 1).join('-')}-5
          </option>
        </select>
      </div>
    </div>
  );
}
