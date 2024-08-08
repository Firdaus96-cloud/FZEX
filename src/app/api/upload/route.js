import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    await fs.mkdir('./public/uploads', { recursive: true });
    const link = `./public/uploads/${file.name}`;
    await fs.writeFile(link, buffer);
    const newNamePath = `/uploads/${file.name}`;

    revalidatePath("/");

    return NextResponse.json({ status: "success", link: newNamePath });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}