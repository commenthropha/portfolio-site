interface EducationCardProps {
  years: string;
  institution: string;
  qualification: string;
  grades: string[];
  dissertation?: {
    title: string;
    grade: string;
  };
}

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-400 font-mono">{children}</span>
);
const Type = ({ children }: { children: React.ReactNode }) => (
  <span className="text-teal-400 font-mono">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-amber-400 font-mono">{children}</span>
);
const Annotation = ({ children }: { children: React.ReactNode }) => (
  <span className="text-green-500 font-mono">{children}</span>
);
const Field = ({ children }: { children: React.ReactNode }) => (
  <span className="text-violet-400 font-mono">{children}</span>
);

const EducationCard = ({
  years,
  institution,
  qualification,
  grades,
  dissertation,
}: EducationCardProps) => {
  const className = qualification.replace(/[\s-]+/g, "");

  return (
    <div className="rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-100 dark:bg-stone-800/60 border-b border-stone-200 dark:border-stone-800">
        <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
          {className}.java
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-600" />
        </div>
      </div>

      <div className="px-5 py-4 font-mono text-sm leading-7 text-stone-600 dark:text-stone-400 space-y-0.5">
        {/* @Education(years = "…") */}
        <div>
          <Annotation>@Education</Annotation>
          <span className="text-stone-500">(</span>
          <Field>years</Field>
          <span className="text-stone-500"> = </span>
          <Str>"{years}"</Str>
          <span className="text-stone-500">)</span>
        </div>

        {/* public class Institution extends Qualification { */}
        <div>
          <Keyword>public class </Keyword>
          <Type>{className} </Type>
          <Keyword>extends </Keyword>
          <Type>{institution} </Type>
          <span className="text-stone-500">{"{"}</span>
        </div>

        <div className="ml-4 mt-2 space-y-1">
          {grades.map((grade, i) => {
            const [label, ...rest] = grade.split(":");
            const value = rest.join(":").trim();
            const camelCaseName = label
              .trim()
              .toLowerCase()
              .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
            const rawValue = value || label.trim();
            const formattedValue = qualification === "GCSEs" ? rawValue : `"${rawValue}"`;

            return (
              <div key={i}>
                <Type>
                  {qualification === "GCSEs" ? "int " : "String "}
                </Type>
                <Field>{camelCaseName}</Field>
                <span className="text-stone-500"> = </span>
                <Str>{formattedValue}</Str>
                <span className="text-stone-500">;</span>
              </div>
            );
          })}
        </div>
        {dissertation && (
          <div className="ml-4 mt-3 space-y-0.5 pt-3">
            <div>
              <Annotation>@Dissertation</Annotation>
              <span className="text-stone-500">(</span>
              <Field>grade</Field>
              <span className="text-stone-500"> = </span>
              <Str>"{dissertation.grade}"</Str>
              <span className="text-stone-500">)</span>
            </div>
            <div>
              <Type>String </Type>
              <Field>title</Field>
              <span className="text-stone-500"> = </span>
              <Str>"{dissertation.title}"</Str>
              <span className="text-stone-500">;</span>
            </div>
          </div>
        )}

        <div className="mt-2">
          <span className="text-stone-500">{"}"}</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-1.5 border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800/60">
        <span className="font-mono text-[10px] text-stone-400 dark:text-stone-500 select-none">
          Java
        </span>
        <span className="font-mono text-[10px] text-stone-400 dark:text-stone-500 select-none">
          {years}
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
