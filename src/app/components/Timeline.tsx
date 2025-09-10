import { TimelineStep } from "./TimelineStep";

interface TimelineProps {
  steps: {
    title: string;
    description: string;
    date: string;
  }[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="flex flex-col border-l border-gray-200 pl-4 space-y-4">
      {steps.map((step, idx) => (
        <TimelineStep
          key={idx}
          title={step.title}
          description={step.description}
          date={step.date}
          isLast={idx === steps.length - 1}
        />
      ))}
    </div>
  );
}
