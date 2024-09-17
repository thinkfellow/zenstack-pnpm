import {initTRPC} from '@trpc/server';
import { createRouter } from '../generated/trpc/routers';
import {getEnhance} from './client';
import { TRPCClientError, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
// todo swap in
import { createTRPCNext } from '../generated/trpc/client/next';
import {CreateTRPCNext} from '@trpc/next';

const createTRPCContext = async (opts: { headers: Headers }) => {
    return {
        db: await getEnhance(),
        ...opts
    }
}

const t = initTRPC.context<typeof createTRPCContext>().create();

export const appRouter = createRouter(t.router, t.procedure);
export type AppRouter = typeof appRouter;

// export const trpc = createTRPCNext<AppRouter>({
//     config({ ctx }) {
//         return {
//             links: [
//                 httpBatchLink({
//                     url: `/api/trpc`
//                 }),
//             ],
//         }
//     }
// });
