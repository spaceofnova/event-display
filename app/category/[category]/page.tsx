"use client";
import Loading from "@/app/loading";
import DateDisplay from "@/components/dateDisplay";
import { createClient } from "@/utils/supabase/client";
import moment from "moment";
import * as React from "react";

export default function Page({ params }: { params: any }) {
  const [events, setEvents] = React.useState<any>([]);
  const supabase = createClient();
  React.useEffect(() => {
    supabase
      .from("events")
      .select("*")
      .eq("category", category)
      .order("begins", { ascending: true })
      .then((res) => {
        setEvents(res.data);
      });
  }, []);
  // asynchronous access of `params.id`.
  // @ts-expect-error since React.use has type of unknown
  const { category } = React.use(params);
  return (
    <ul className="flex flex-col items-center justify-center w-screen p-3">
      {events.length === 0 && <Loading />}
      {events.map((event: any) => (
        <li key={event.id} className="w-full flex flex-col gap-2">
          <h1 className="text-xl font-bold">
            {moment(event.begins).format("dddd, MMMM Do YYYY")}
          </h1>
          <button className="flex items-center gap-2 bg-white/10 rounded-2xl w-full p-2">
            <DateDisplay begins={event.begins} ends={event.ends} />
            <div className="flex flex-col gap-1 text-left">
              <h2>{event.name}</h2>
              <p>
                {event.description
                  ? event.description
                  : "No description provided."}
              </p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
