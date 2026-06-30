import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex justify-center py-20">
      <Loader2
        size={40}
        className="animate-spin text-purple-500"
      />
    </div>
  );
}