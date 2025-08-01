import { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type OnConnect,
  type Node,
  type Edge,
  BackgroundVariant,
  SelectionMode,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { CustomNode } from "../demo/CustomNode";
import { BufferNode } from "../demo/BufferNode";
import {
  mockEndpoints,
  parseEndpointsToTree,
  treeToFlowNodes,
} from "../demo/utils/endpointParser";

import { getNodeColor } from "../demo/utils/utilityFunctions";
import SectionHeader from "./ui/SectionHeader";

// Node types configuration
const nodeTypes = {
  customNode: CustomNode,
  bufferNode: BufferNode,
};

// Generate nodes and edges from parsed endpoints (TODO: learn how these work)
const endpointTree = parseEndpointsToTree(mockEndpoints);
const { nodes: generatedNodes, edges: generatedEdges } =
  treeToFlowNodes(endpointTree);

const initialNodes: Node[] = generatedNodes;
const initialEdges: Edge[] = generatedEdges;

function DemoCanvas() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <>
      <SectionHeader
        title="Interactive Demo"
        description="⚠️ Demo preview only"
      />
      <div className="h-[80vh] w-[80vw] bg-[#141414] justify-self-center rounded-xl border-[#262626] border-2">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          selectionMode={SelectionMode.Partial}
          connectionRadius={25}
          preventScrolling={false}
          fitView
          connectionLineStyle={{
            stroke: "#F98866",
            strokeWidth: 2,
            strokeDasharray: "5,5",
          }}
        >
          <Controls style={{ color: "#000" }} />
          <MiniMap
            bgColor="#333"
            pannable
            draggable
            maskColor="#14141499"
            nodeColor={getNodeColor}
          />
          <Background
            variant={BackgroundVariant.Cross}
            gap={64}
            size={0.7}
            color="#fff"
          />
        </ReactFlow>
      </div>
    </>
  );
}

export default DemoCanvas;
