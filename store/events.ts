import { createClient } from "@/utils/supabase/client";
import { create } from "zustand";

export const useEventsStore = create<any>()((set) => ({
  events: [],
  fetchEvents: async () => {
    const { data } = await createClient().from("events").select("*");
    set({ events: data });
  },
  subscribeToEvent: () => {
    setInterval(async () => {
      const { data } = await createClient().from("events").select("*");
      set({ events: data });
    }, 5000);
  },
}));
