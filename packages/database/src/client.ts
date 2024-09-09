// The database client consists of PrismaClient and ZenStack enhance
// export { PrismaClient } from "../generated/client";
// export * from '../generated/zenstack/enhance';
// export * from '../generated/zenstack/model-meta';

import { PrismaClient } from '../generated/client';
// this runs into all kinds of reference problems
// import {enhance} from '../generated/zenstack/enhance';
import {enhance} from '@zenstackhq/runtime';

export const prisma = new PrismaClient();

export function getEnhance() {
    return enhance(prisma);
}
