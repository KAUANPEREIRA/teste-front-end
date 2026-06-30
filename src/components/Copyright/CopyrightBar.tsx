export interface CopyrightBarProps {
  text?: string;
}

export function CopyrightBar({
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
}: CopyrightBarProps) {
  return (
    <div className="w-full border-t border-[#F4F4F4] bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-3">
        <p className="text-xs text-center text-[#B7B7B7]">{text}</p>
      </div>
      <div className="h-2 bg-[#1E1E1E]" />
    </div>
  );
}
