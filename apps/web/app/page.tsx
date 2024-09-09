import {enhance} from "@repo/database";
import {PrismaClient} from "@repo/database";

export default async function IndexPage() {
    const prismaClient = new PrismaClient();
    // this.db is typed `any` because the module is missing
    const pusers = await prismaClient.user.findMany();
    const zenstack = enhance(prismaClient);
    const zusers = await zenstack.user.findMany();

    return (
        <div>
            <h1>Prisma Users</h1>
            <pre>{JSON.stringify(pusers, null, 2)}</pre>
            <h1>ZenStack Users</h1>
            <pre>{JSON.stringify(zusers, null, 2)}</pre>
        </div>
    );
}
