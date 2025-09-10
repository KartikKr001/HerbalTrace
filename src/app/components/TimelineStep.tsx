interface TimelineStepProps {
  title: string;
  description: string;
  date: string;
  isLast?: boolean; // hide vertical line for last step
}

export function TimelineStep({ title, description, date, isLast }: TimelineStepProps) {
  return (
    <div className="relative flex items-start gap-4">
      {/* Left vertical line & circle */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-green-600" />
        {!isLast && <div className="w-0.5 flex-1 bg-gray-300 mt-1" />}
      </div>

      {/* Step content */}
      <div className="flex-1 py-2">
        <p className="text-gray-500 text-sm">{date}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
