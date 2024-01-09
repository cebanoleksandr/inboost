import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { updateNodeAC } from './redux/nodeReducer';
import { getNodes, setNodes } from './utils/helpers';
import { Node } from './components/Node/Node';

export const App = () => {
  const nodes = useAppSelector(state => state.nodes.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateNodeAC(getNodes()));
  }, []);

  const setNode = (value: number, index: number) => {
    let newNodes = getNodes();
    
    newNodes = [...newNodes.slice(0, index), value];
    setNodes(newNodes);
    dispatch(updateNodeAC(newNodes));
  }

  return (
    <div className="app py-4">
      <div className="container">
        <div className="node-block">
          <div className="white mb-1"></div>
          <div className="select">
            <select
              value={nodes[0]?.toString()}
              onChange={(e) => setNode(+e.target.value, 0)}
            >
              <option value={'1'}>Варiант 1</option>
              <option value={'2'}>Варiант 2</option>
              <option value={'3'}>Варiант 3</option>
              <option value={'4'}>Варiант 4</option>
              <option value={'5'}>Варiант 5</option>
            </select>
          </div>
        </div>

        {nodes.map((node, index) => (
          <Node 
            node={node}
            index={index}
            setNode={setNode}
            key={node}
          />
        ))}
      </div>
    </div>
  );
}
