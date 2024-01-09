export const getNodes = (): number[] => {
  const savedNodesData = localStorage.getItem('nodes');

  return savedNodesData ? JSON.parse(savedNodesData) : [];
};

export const setNodes = (nodes: number[]) => {
  localStorage.setItem(
    'nodes',
    JSON.stringify(nodes),
  );
}
