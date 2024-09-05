import {enhance} from "@repo/database";
import {PrismaClient} from "@repo/database";

export default async function IndexPage() {
    const prismaClient = new PrismaClient();
    // this.db is typed `any` because the module is missing
    const db = enhance(prismaClient);
    const users = await db.user.findMany();

    return (
        <div>
            <h1>Hello World</h1>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    );
}
