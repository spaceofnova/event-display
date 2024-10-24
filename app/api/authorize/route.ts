import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic"; // defaults to auto

// Authorizes the user based on loginid and password (both are int8) and uses supabase
// returns if attempt succefull or not; and if not, returns false (not authorized)
// uses db accounts instead of supabase default auth.

export async function POST(request: Request) {
  const { loginid, password } = await request.json();
  const supabase = createClient();

  const { data, error } = await supabase
    .from("accounts")
    .select("*")
    .eq("loginid", loginid)
    .eq("password", password)
    .single();

  if (error || !data) {
    console.log(error);
    return Response.json({ error: "Not authorized - " + error });
  }

  const { error: updateLastLoginError } = await supabase
    .from("accounts")
    .update({ last_logged_in: new Date().toUTCString() })
    .eq("loginid", loginid);

  if (updateLastLoginError) {
    console.log(updateLastLoginError);
    return Response.json({ error: "Update error - " + updateLastLoginError });
  }

  return Response.json({ data });
}
