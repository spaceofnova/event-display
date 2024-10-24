import { createClient } from "@/utils/supabase/client";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  const supabase = createClient();

  const { data, error } = await supabase.from("events").select("category");

  if (error) {
    console.log(error);
    return Response.json({ error: "Failed to fetch categories" });
  }
  return Response.json({ data });
}
