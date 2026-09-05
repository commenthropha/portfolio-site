import { motion } from "framer-motion";
import { RiComputerLine } from "react-icons/ri";
import { PiFilmSlate, PiBarbell, PiSoccerBall, PiCar } from "react-icons/pi";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Token colour helpers - muted enough to not shout, distinct enough to read as syntax
const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-400 font-mono">{children}</span>
);
const Type = ({ children }: { children: React.ReactNode }) => (
  <span className="text-teal-400 font-mono">{children}</span>
);
const Fn = ({ children }: { children: React.ReactNode }) => (
  <span className="text-violet-400 font-mono">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-amber-400 font-mono">{children}</span>
);
const Comment = ({ children }: { children: React.ReactNode }) => (
  <span className="text-stone-500 font-mono italic">{children}</span>
);
const Annotation = ({ children }: { children: React.ReactNode }) => (
  <span className="text-green-500 font-mono">{children}</span>
);

type Interest = {
  icon: React.ElementType;
  label: string;
  methodName: string;
  annotation: string;
  comment?: string;
  body: React.ReactNode;
};

const interests: Interest[] = [
  {
    icon: PiFilmSlate,
    label: "Cinema",
    methodName: "getCinema",
    annotation: "@Interest",
    body: (
      <>
        I'm an avid lover of <Str>movies</Str>, across all genres, with a soft
        spot for supernatural horror. I try and catch most movies in theatres
        when they release.
      </>
    ),
  },
  {
    icon: PiBarbell,
    label: "Strength Training",
    methodName: "getStrengthTraining",
    annotation: "@Interest",
    body: (
      <>
        As someone who trains regularly, I'm drawn to the tension between{" "}
        <Str>evidence-based methodology</Str> and simply{" "}
        <Str>training hard</Str>. Although online discourse is divisive, I
        believe that the truth exists somewhere in the middle.
      </>
    ),
  },
  {
    icon: PiSoccerBall,
    label: "Football",
    methodName: "getFootball",
    annotation: "@Interest",
    body: (
      <>
        I'm a huge <Str>football</Str> fan - especially the tactical side of
        things; how teams set up, how a press is structured, and how statistics
        inform the modern game.
      </>
    ),
  },
  {
    icon: PiCar,
    label: "Automotive",
    methodName: "getAutomotive",
    annotation: "@Interest",
    body: (
      <>
        I have a deep admiration for the automotive world, particularly{" "}
        <Str>JDM cars</Str> and the engineering philosophy behind
        late-eighties/early-nineties Japanese performance vehicles.
      </>
    ),
  },
];

const CodeCard = ({
  interest,
  index,
}: {
  interest: Interest;
  index: number;
}) => {
  const { icon: Icon, label, methodName, annotation, comment, body } = interest;

  return (
    <AnimatedSection>
      <div className="rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800/60">
          <div className="flex items-center gap-1.5">
            <Icon className="text-stone-400 dark:text-stone-500 text-sm" />
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
              {label}.java
            </span>
          </div>
          {/* Windows-style controls on the right */}
          <div className="ml-auto flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
          </div>
        </div>

        {/* Code body */}
        <div className="px-5 py-4 font-mono text-sm leading-7 text-stone-600 dark:text-stone-400">
          {/* Annotation */}
          <div>
            <Annotation>{annotation}</Annotation>
          </div>
          {/* Comment */}
          <div>
            <Comment>{comment}</Comment>
          </div>
          {/* Method signature */}
          <div className="mt-0.5">
            <Keyword>public </Keyword>
            <Type>String </Type>
            <Fn>{methodName}</Fn>
            <span className="text-stone-500 dark:text-stone-400">() {"{"}</span>
          </div>

          {/* return statement */}
          <div className="mt-1 ml-4">
            <Keyword>return </Keyword>
            <span className="text-stone-500 dark:text-stone-400">(</span>
          </div>

          {/* Prose body - readable sans-serif inside the method */}
          <div className="ml-8 mt-2 mb-2 font-sans text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-prose">
            {body}
          </div>

          <div className="ml-4">
            <span className="text-stone-500 dark:text-stone-400">);</span>
          </div>
          <div className="mt-0.5">
            <span className="text-stone-500 dark:text-stone-400">{"}"}</span>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800/60">
          <span className="font-mono text-[10px] text-stone-400 dark:text-stone-500 select-none">
            Java
          </span>
          <span className="font-mono text-[10px] text-stone-400 dark:text-stone-500 select-none">
            Ln {index + 1}
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-[60rem] mx-auto py-10 px-6 lg:px-10 min-h-screen"
    >
      <div className="max-w-[48rem] mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-5">
          <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-stone-100">
            About.
          </h2>
          <p className="font-mono text-sm tracking-widest text-stone-500 mt-4 uppercase">
            Background
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <div className="rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800/60">
              <div className="flex items-center gap-1.5">
                <RiComputerLine className="text-stone-400 dark:text-stone-500 text-sm" />
                <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
                  Engineering.java
                </span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
              </div>
            </div>

            <div className="px-5 py-4 font-mono text-sm leading-7 text-stone-600 dark:text-stone-400">
              <div>
                <Annotation>@Background</Annotation>
              </div>
              <div className="mt-0.5">
                <Keyword>public </Keyword>
                <Type>String </Type>
                <Fn>getEngineering</Fn>
                <span className="text-stone-500 dark:text-stone-400">
                  () {"{"}
                </span>
              </div>
              <div className="mt-1 ml-4">
                <Keyword>return </Keyword>
                <span className="text-stone-500 dark:text-stone-400">(</span>
              </div>

              <div className="ml-8 mt-2 mb-2 font-sans text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-prose space-y-3">
                <p>
                  I'm a <Str>Java software engineer</Str>, building production
                  software since 2024. Day-to-day I work in an <Str>Agile</Str>{" "}
                  environment, contributing to EPICs within Scrum teams
                  operating across SAFe ARTs.
                </p>
                <p>
                  I believe that an <Str>architecture-focused</Str> approach is
                  pivotal in a contemporary engineering landscape - extensible,
                  microservice-based design isn't just good practice, it's what
                  separates software that scales from software that merely
                  survives.
                </p>
              </div>

              <div className="ml-4">
                <span className="text-stone-500 dark:text-stone-400">);</span>
              </div>
              <div className="mt-0.5">
                <span className="text-stone-500 dark:text-stone-400">
                  {"}"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-1.5 border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800/60">
              <span className="font-mono text-[10px] text-stone-400 dark:text-stone-500 select-none">
                Java
              </span>
              <span className="font-mono text-[10px] text-stone-400 dark:text-stone-500 select-none">
                Ln 1
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="border-t border-stone-200 dark:border-stone-800 mb-14" />
        </AnimatedSection>

        <AnimatedSection className="mb-5">
          <p className="font-mono text-sm tracking-widest text-stone-500 mt-4 uppercase">
            Interests
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {interests.map((interest, i) => (
            <CodeCard key={i} interest={interest} index={i + 2} />
          ))}
        </div>

        {/* Footer */}
        <AnimatedSection className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-800">
          <p className="font-mono text-sm text-stone-400 dark:text-stone-500 italic">
            <Comment>
              {
                "// If any of this resonates, feel free to reach out - I'm always happy to talk."
              }
            </Comment>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
