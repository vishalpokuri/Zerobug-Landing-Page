import React from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  Position,
  Handle,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// Custom Node Component
const CustomNode = ({ data }: { data: any }) => {
  return (
    <div
      style={{
        background: data.background,
        border: data.border,
        borderRadius: "1.5rem",
        padding: "1.25rem",
        backdropFilter: "blur(20px)",
        maxWidth: data.maxWidth || "350px",
        width: "100%",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow: data.boxShadow || "none",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {data.icon != null && (
          <div
            style={{
              minWidth: "60px",
              minHeight: "60px",
              width: "70px",
              height: "70px",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              padding: "8px",
            }}
          >
            <img
              src={data.icon}
              alt=""
              className="rounded-full object-contain w-full h-full"
            />
          </div>
        )}
        <div>
          <h3
            style={{
              fontSize: data.titleSize || "1.25rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            {data.title}
          </h3>
          <p
            style={{
              color: data.subtitleColor || "#9CA3AF",
              fontSize: data.subtitleSize || "0.875rem",
              maxWidth: data.subtitleMaxWidth || "auto",
            }}
          >
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Source handle for nodes that connect to others */}
      {data.hasSource && (
        <Handle
          type="source"
          position={Position.Right}
          style={{
            background: "#FFC107",
            border: "2px solid #FFC107",
            width: "12px",
            height: "12px",
          }}
        />
      )}

      {/* Target handle for nodes that receive connections */}
      {data.hasTarget && (
        <Handle
          type="target"
          position={Position.Left}
          style={{
            background: "#FFC107",
            border: "2px solid #FFC107",
            width: "12px",
            height: "12px",
          }}
        />
      )}
    </div>
  );
};

// Define node types
const nodeTypes = {
  custom: CustomNode,
};

const WhatIncludesSection: React.FC = () => {
  const initialNodes: Node[] = [
    {
      id: "canvas",
      type: "custom",
      position: { x: 0, y: 0 },
      data: {
        icon: "/Icons/figmaIcon.png",
        title: "Figma-like",
        subtitle: "Infinite canvas to see all your backend endpoints",
        background:
          "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.05))",
        border: "1px solid rgba(139, 92, 246, 0.3)",
        hoverShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
        hasSource: true,
      },
      sourcePosition: Position.Right,
    },
    {
      id: "api",
      type: "custom",
      position: { x: 0, y: 150 },
      data: {
        icon: "/Icons/postmanIcon.svg",
        title: "Postman-like",
        subtitle: "Autofilled endpoint testing and monitoring",
        background:
          "linear-gradient(135deg, rgba(245, 101, 101, 0.1), rgba(251, 146, 60, 0.05))",
        border: "1px solid rgba(245, 101, 101, 0.3)",
        hoverShadow: "0 20px 40px rgba(245, 101, 101, 0.2)",
        hasSource: true,
      },
      sourcePosition: Position.Right,
    },
    {
      id: "ai",
      type: "custom",
      position: { x: 0, y: 300 },
      data: {
        icon: "/Icons/aiIcon.avif",
        title: "AI Assistant",
        subtitle: "Ask anything you need, it will figure it out",
        background:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.05))",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        hoverShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
        hasSource: true,
      },
      sourcePosition: Position.Right,
    },
    {
      id: "zerobug",
      type: "custom",
      position: { x: 600, y: 150 },
      data: {
        title: "Zerobug",
        subtitle:
          "All three capabilities seamlessly integrated into one powerful debugging environment",
        background:
          "linear-gradient(135deg, rgba(255, 204, 0, 0.2), rgba(255, 193, 7, 0.1))",
        border: "2px solid rgba(255, 204, 0, 0.6)",
        titleSize: "2rem",
        subtitleColor: "#D1D5DB",
        subtitleSize: "1.1rem",
        maxWidth: "450px",
        boxShadow: "0 0 60px rgba(255, 204, 0, 0.3)",
        hoverShadow: "0 0 80px rgba(255, 204, 0, 0.4)",
        hasTarget: true,
      },
      targetPosition: Position.Left,
    },
  ];

  const initialEdges: Edge[] = [
    {
      id: "canvas-zerobug",
      source: "canvas",
      target: "zerobug",
      type: "default",
      style: {
        stroke: "#FFC107",
        strokeWidth: 1,
      },

      animated: true,
    },
    {
      id: "api-zerobug",
      source: "api",
      target: "zerobug",
      type: "default",
      style: {
        stroke: "#FFC107",
        strokeWidth: 2,
      },

      animated: true,
    },
    {
      id: "ai-zerobug",
      source: "ai",
      target: "zerobug",
      type: "default",
      style: {
        stroke: "#FFC107",
        strokeWidth: 2,
      },
      animated: true,
    },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-5xl lg:text-6xl font-black pb-6 gradient-text">
          Inspired from
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Three powerful capabilities unified into one revolutionary platform
        </p>
      </div>

      <div
        style={{
          height: "500px",
          width: "100%",
          background: "transparent",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnDrag={false}
          // Still not working TODO
          preventScrolling={false}
          style={{
            background: "transparent",
            pointerEvents: "none",
          }}
          proOptions={{ hideAttribution: true }}
        >
          {/* Remove background and controls as requested */}
        </ReactFlow>
      </div>
    </section>
  );
};

export default WhatIncludesSection;
