import { Button } from "@/components/ui/button";
import { TracesList } from "./traces-list";
import { useCreateTrace } from "../hooks/useTrace";
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";

const TraceView = () => {
    const createTrace = useCreateTrace();
    const handleCreateTrace = () => {
        const traceName = uniqueNamesGenerator({
            dictionaries: [adjectives, colors, animals],
            separator: "-",
            length: 3,
        });
        createTrace({ name: traceName });
    };

    return (
        <div>
            Trace view!
            <Button variant="outline" onClick={handleCreateTrace}>
                New
            </Button>
            <Button>Import</Button>
            <TracesList onViewAllTraces={() => {}} />
        </div>
    );
};

export default TraceView;