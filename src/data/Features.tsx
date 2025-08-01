export const features: Feature[] = [
  {
    id: 1,
    title: "CLI + WebClient Bridge",
    desc: "Connect your backend using the CLI and visualize everything live on the WebClient—zero config needed.",
    video: "/videos/cli-webclient-bridge.mp4",
    icon: "🌉",
    upcoming: false,
  },
  {
    id: 2,
    title: "Live Endpoint Sync",
    desc: "Connect the CLI tool to auto-reflect all backend code changes in the Web Client—no rewriting routes manually.",
    video: "/videos/live-endpoint-sync.mp4",
    icon: "🔁",
    upcoming: false,
  },
  {
    id: 3,
    title: "Postman-style Testing",
    desc: "Pass values directly to test endpoints and see instant responses in a Postman-like interface.",
    video: "/videos/postman-testing.mp4",
    icon: "📮",
    upcoming: false,
  },
  {
    id: 4,
    title: "Type Inference",
    desc: "Auto-detect field types like TypeScript—no more checking backend schemas for input formats.",
    video: "/videos/type-inference.mp4",
    icon: "📐",
    upcoming: false,
  },
  {
    id: 5,
    title: "Frontend State Mirroring",
    desc: "Connect to your local frontend and monitor states and props live inside the platform.",
    video: "/videos/frontend-state.mp4",
    icon: "🔍",
    upcoming: true,
  },
  {
    id: 6,
    title: "Flow Linking",
    desc: "Chain node outputs as inputs for the next node—simulate full user flows with one click.",
    video: "/videos/flow-linking.mp4",
    icon: "🔗",
    upcoming: true,
  },
  {
    id: 7,
    title: "Sandbox Variables",
    desc: "Store values from previous responses and reuse them in future test nodes easily.",
    video: "/videos/sandbox-vars.mp4",
    icon: "🧪",
    upcoming: true,
  },
  {
    id: 8,
    title: "AI Companion",
    desc: "Paste fetch chains from frontend `useEffect()` hooks and auto-generate connected backend test flows.",
    video: "/videos/ai-companion.mp4",
    icon: "🤖",
    upcoming: true,
  },
];

export interface Feature {
  id: number;
  title: string;
  desc: string;
  video: string;
  icon: string;
  upcoming: boolean;
}
