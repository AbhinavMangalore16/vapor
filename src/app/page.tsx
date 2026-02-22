"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@base-ui/react";
import TraceView  from "@/modules/traces/components/trace-view";


export default function Page() { 
  return <TraceView/>
}