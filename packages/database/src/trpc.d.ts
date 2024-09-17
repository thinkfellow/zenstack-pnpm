export declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        headers: Headers;
        db: any;
    };
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    user: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: {
            headers: Headers;
            db: any;
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, {
        create: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    headers: Headers;
                    db: any;
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: any;
            _ctx_out: any;
            _input_in: import("../generated/prisma").Prisma.UserCreateArgs<import("../generated/prisma/runtime/library").DefaultArgs>;
            _input_out: import("../generated/prisma").Prisma.UserCreateArgs<import("../generated/prisma/runtime/library").DefaultArgs>;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            id: string;
            name: string | null;
            email: string | null;
            emailVerified: Date | null;
        } | undefined>;
        findMany: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    headers: Headers;
                    db: any;
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: any;
            _ctx_out: any;
            _input_in: import("../generated/prisma").Prisma.UserFindManyArgs<import("../generated/prisma/runtime/library").DefaultArgs>;
            _input_out: import("../generated/prisma").Prisma.UserFindManyArgs<import("../generated/prisma/runtime/library").DefaultArgs>;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            id: string;
            name: string | null;
            email: string | null;
            emailVerified: Date | null;
        }[]>;
        findUnique: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    headers: Headers;
                    db: any;
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: any;
            _ctx_out: any;
            _input_in: import("../generated/prisma").Prisma.UserFindUniqueArgs<import("../generated/prisma/runtime/library").DefaultArgs>;
            _input_out: import("../generated/prisma").Prisma.UserFindUniqueArgs<import("../generated/prisma/runtime/library").DefaultArgs>;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            id: string;
            name: string | null;
            email: string | null;
            emailVerified: Date | null;
        } | null>;
        update: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    headers: Headers;
                    db: any;
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: any;
            _ctx_out: any;
            _input_in: import("../generated/prisma").Prisma.UserUpdateArgs<import("../generated/prisma/runtime/library").DefaultArgs>;
            _input_out: import("../generated/prisma").Prisma.UserUpdateArgs<import("../generated/prisma/runtime/library").DefaultArgs>;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            id: string;
            name: string | null;
            email: string | null;
            emailVerified: Date | null;
        } | undefined>;
    }>;
}>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=trpc.d.ts.map