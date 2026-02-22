import { useMutation, useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"

export const useTrace = () => {
    return useQuery(api.trace.get);
}

export const useTraceLimits = (lim: number) =>{
    return useQuery(api.trace.getQuery, {lim});
}

export const useCreateTrace = () =>{
    return useMutation(api.trace.create);
}