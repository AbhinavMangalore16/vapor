"use client";

import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { FaGithub } from "react-icons/fa";
import { AlertCircleIcon, ArrowRightIcon, Globe2Icon } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useTraceLimits } from "../hooks/useTrace";
import { Doc } from "../../../../convex/_generated/dataModel";

interface TracesListProps {
  onViewAllTraces: () => void;
}

const formatTimeAgo = (timestamp: number) =>
  formatDistanceToNow(new Date(timestamp), { addSuffix: true });

const getTraceIcon = (trace: Doc<"traces">) => {
  if (trace.importStatus === "Importing")
    return <Spinner className="size-4 text-ring" />;
  if (trace.importStatus === "Success")
    return <FaGithub className="size-4 text-ring" />;
  if (trace.importStatus === "Failure")
    return <AlertCircleIcon className="size-4 text-red-500" />;

  return <Globe2Icon className="size-4 text-green-500" />;
};

const TraceItem = ({ trace }: { trace: Doc<"traces"> }) => (
  <Link
    href={`/traces/${trace._id}`}
    className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors"
  >
    <div className="flex items-center gap-2 truncate">
      {getTraceIcon(trace)}
      <span className="truncate font-medium">{trace.name}</span>
    </div>

    <span className="text-xs text-muted-foreground whitespace-nowrap">
      {formatTimeAgo(trace.updatedAt)}
    </span>
  </Link>
);

const LastRecentTrace = ({ data }: { data: Doc<"traces"> }) => (
  <div className="flex flex-col gap-2">
    <span className="text-xs text-muted-foreground">Last Edited</span>

    <Button
      variant="outline"
      asChild
      className="p-6 bg-background hover:border-primary/50 hover:bg-accent/50 transition-all border-2 rounded-xl shadow-sm group"
    >
      <Link
        href={`/traces/${data._id}`}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-3 truncate">
          {getTraceIcon(data)}
          <span className="font-medium truncate">{data.name}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap">
          {formatTimeAgo(data.updatedAt)}
          <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </Button>
  </div>
);

export const TracesList = ({ onViewAllTraces }: TracesListProps) => {
  const traces = useTraceLimits(5);

  if (!traces) return <Spinner className="size-8 text-ring" />;
  if (traces.length === 0)
    return (
      <div className="text-sm text-muted-foreground">
        No traces yet.
      </div>
    );

  const [mostRecent, ...rest] = traces;

  return (
    <div className="flex flex-col gap-6">
      <LastRecentTrace data={mostRecent} />

      {rest.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h2 className="text-lg font-semibold tracking-tight">
              Recent Workspaces
            </h2>

            <button
              onClick={onViewAllTraces}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View All
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {rest.map((trace) => (
              <TraceItem key={trace._id} trace={trace} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};