import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(imageUrl: string) {
    try {
        const file = await fs.readFile(imageUrl);

        const { base64 } = await getPlaiceholder(file);

        // console.log(`base64: ${base64}`);

        return base64;
    } catch (e) {
        if (e instanceof Error) console.log(e.stack);
    }
}
