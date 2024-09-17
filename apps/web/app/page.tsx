import {getEnhance} from "@repo/database/client";
import {prisma} from "@repo/database/client";
import { UserCreateSchema } from "@repo/database/validators";
import { appRouter} from '@repo/database/trpc';

export default async function IndexPage() {
    // this.db is typed `any` because the module is missing
    const pusers = await prisma.user.findMany();
    const zenstack = getEnhance();
    const zusers = await zenstack.user.findMany();
    const testValid = UserCreateSchema.parse({ name: 'Me' });

    return (
        <div>
            <h1>Validation runs?</h1>
            { testValid.name }
            <h1>Prisma Users</h1>
            <pre>{JSON.stringify(pusers, null, 2)}</pre>
            <h1>ZenStack Users</h1>
            <pre>{JSON.stringify(zusers, null, 2)}</pre>
        </div>
    );
}
