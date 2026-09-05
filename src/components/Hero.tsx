import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//@ts-ignore
import Computer from "./Computer";

type LineType = "whoami" | "cat" | "output-name" | "output-text";

const LINES: { prefix: string; text: string; delay: number; type: LineType }[] =
  [
    { prefix: "$ ", text: "whoami", delay: 400, type: "whoami" },
    { prefix: "> ", text: "Anees Haroon", delay: 900, type: "output-name" },
    { prefix: "$ ", text: "cat role.txt", delay: 1600, type: "cat" },
    {
      prefix: "> ",
      text: "Software Engineer",
      delay: 2100,
      type: "output-text",
    },
    { prefix: "$ ", text: "cat focus.txt", delay: 2900, type: "cat" },
    {
      prefix: "> ",
      text: "Robust, extensible architecture.",
      delay: 3400,
      type: "output-text",
    },
  ];

const CHAR_SPEED = 38;

function useTypewriter(text: string, active: boolean) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, CHAR_SPEED);
    return () => clearInterval(interval);
  }, [text, active]);

  return displayed;
}

const TOKEN: Record<LineType, string> = {
  // commands
  whoami: "text-violet-400 font-mono",
  cat: "text-blue-400 font-mono",
  // outputs
  "output-name": "text-stone-100 font-semibold font-mono tracking-tight",
  "output-text": "text-amber-300 font-mono",
};

/** For `cat foo.txt` lines, colour the command and filename separately */
const CatLine = ({ typed }: { typed: string }) => {
  const space = typed.indexOf(" ");
  if (space === -1) {
    return <span className="text-blue-400 font-mono">{typed}</span>;
  }
  const cmd = typed.slice(0, space); // "cat"
  const file = typed.slice(space); // " role.txt"
  return (
    <>
      <span className="text-blue-400 font-mono">{cmd}</span>
      <span className="text-teal-400 font-mono">{file}</span>
    </>
  );
};

const TerminalLine = ({
  prefix,
  text,
  delay,
  type,
}: {
  prefix: string;
  text: string;
  delay: number;
  type: LineType;
}) => {
  const [visible, setVisible] = useState(false);
  const typed = useTypewriter(text, visible);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className="flex gap-1 leading-6">
      <span className="text-stone-500 select-none font-mono">{prefix}</span>
      {type === "cat" ? (
        <CatLine typed={typed} />
      ) : (
        <span className={TOKEN[type]}>{typed}</span>
      )}
    </div>
  );
};

const ASCII_NAME = [
  `   _    _  _  ___  ___  ___ `,
  `  /_\\  | \\| || __|| __|/ __|`,
  ` / _ \\ | .\` || _| | _| \\__ \\`,
  `/_/ \\_\\|_|\\_||___||___||___/`,
  ` _  _    _    ___   ___    ___   _  _ `,
  `| || |  /_\\  | _ \\ / _ \\  / _ \\ | \\| |`,
  `| __ | / _ \\ |   /| (_) || (_) || .\` |`,
  `|_||_|/_/ \\_\\|_|_\\ \\___/  \\___/ |_|\\_|`,
];

const Terminal = () => {
  const [mounted, setMounted] = useState(false);
  const [blink, setBlink] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-[32rem] rounded-lg overflow-hidden border border-stone-700/60 bg-stone-950 shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900 border-b border-stone-800">
        <span className="font-mono text-xs text-stone-500">
          portfolio - bash
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
        </div>
      </div>

      {/* Terminal body */}
      <div className="px-5 py-5 font-mono text-sm space-y-1.5 min-h-[220px]">
        <pre className="text-stone-400 leading-[1.25] mb-4 select-none whitespace-pre overflow-hidden">
          {ASCII_NAME.join("\n")}
        </pre>

        {mounted && LINES.map((line, i) => <TerminalLine key={i} {...line} />)}

        {mounted && (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-stone-500 font-mono">$ </span>
            <span
              className={`inline-block w-2 h-4 bg-stone-400 transition-opacity duration-75 ${
                blink ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1.5 border-t border-stone-800 bg-stone-900">
        <span className="font-mono text-[10px] text-stone-500 select-none">
          bash
        </span>
        <span className="font-mono text-[10px] text-stone-500 select-none">
          UTF-8
        </span>
      </div>
    </div>
  );
};

const ResponsiveCanvas = () => {
  return (
    <Canvas
      camera={{ position: [1, 3, 10] }}
      //@ts-ignore
      style={{ height: `450px`, pointerEvents: "auto" }}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={1.2}
        maxPolarAngle={1.2}
      />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-5, 2, -5]} intensity={0.8} color="#a8a29e" />
      <Computer />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <section className="max-w-[70rem] mx-auto lg:mt-20 flex flex-col lg:flex-row items-center min-h-[50vh]">
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-8 lg:px-1 gap-6">
        <Terminal />
      </div>
      <div className="lg:w-1/2 w-full mt-10">
        <ResponsiveCanvas />
      </div>
    </section>
  );
};

export default Hero;
