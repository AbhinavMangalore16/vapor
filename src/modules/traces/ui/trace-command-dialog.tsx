"use client";

import { useRouter } from "next/navigation";
import { useTrace, useTraceLimits } from "../hooks/useTrace";
import { AlertCircleIcon, Globe2Icon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Spinner } from "@/modules/auth/components/AuthLoadingView";
import { Doc } from "../../../../convex/_generated/dataModel";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface TraceCommandDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getTraceIcon = (trace: Doc<"traces">) => {
  if (trace.importStatus === "Importing")
    return <Spinner className="size-4 text-ring" />;
  if (trace.importStatus === "Success")
    return <FaGithub className="size-4 text-ring" />;
  if (trace.importStatus === "Failure")
    return <AlertCircleIcon className="size-4 text-red-500" />;

  return <Globe2Icon className="size-4 text-green-500" />;
};

export const TracesCommandDialog = ({
  open,
  onOpenChange,
}: TraceCommandDialogProps) => {
  const router = useRouter();
  const traces = useTraceLimits(10);

  const handleSelect = (traceId: string) => {
    router.push(`/traces/${traceId}`); // adjust if needed
    onOpenChange(false);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search for Traces"
      description="Navigate your projects..."
    >
      <CommandInput placeholder="Search projects..." />

      <CommandList>
        <CommandEmpty>No traces found.</CommandEmpty>

        <CommandGroup heading="Traces">
          {traces?.map((trace) => (
            <CommandItem
              key={trace._id}
              value={`${trace.name}-${trace._id}`}
              onSelect={() => handleSelect(trace._id)}
              className="flex items-center gap-2"
            >
              {getTraceIcon(trace)}
              <span>{trace.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};