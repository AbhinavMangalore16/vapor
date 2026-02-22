import { MutationCtx, QueryCtx } from "./_generated/server";

export const verifyIdent = async (ctx: QueryCtx | MutationCtx) =>{
    const ident = await ctx.auth.getUserIdentity();
    if (!ident){
        throw new Error("Unauthorized!");
    }
    return ident;
}