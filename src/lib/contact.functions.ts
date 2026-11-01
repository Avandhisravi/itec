import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  first_name: z.string().trim().min(1).max(100),
  last_name: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().default(""),
  phone: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(1).max(5000),
  website: z.string().max(0).optional(), // honeypot
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("contact_submissions")
      .select("id", { count: "exact", head: true })
      .eq("email", data.email)
      .gte("created_at", since);
    if ((count ?? 0) >= 3) throw new Error("Too many enquiries. Please try again later.");
    const { website: _w, ...row } = data;
    const { error } = await supabaseAdmin.from("contact_submissions").insert(row);
    if (error) throw new Error("Could not send enquiry");
    return { ok: true };
  });
