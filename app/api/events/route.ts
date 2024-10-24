import { createClient } from "@/utils/supabase/client";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("begins", { ascending: false });

  if (error) {
    console.log(error);
    return Response.json({ error: "Failed to fetch events" });
  }
  return Response.json({ data });
}
