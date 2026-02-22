import { Spinner } from "@/components/ui/spinner";
import { useTraceLimits } from "../hooks/useTrace";

interface TracesListProps{
    onViewAllTraces: () => void;
}


export const TracesList = ({onViewAllTraces}: TracesListProps)=>{
    const traces = useTraceLimits(5);
    if (traces === undefined) return <Spinner className="size-8 text-ring"/>
    const [mostRecentTrace, ...rest] = traces;
    return (
        <div className="flex flex-col gap-4">
            {rest.length > 0 && (
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">
                            Recent Traces
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}