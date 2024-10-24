"use client";
import { useEventsStore } from "@/store/events";
import moment from "moment";
import DateDisplay from "../dateDisplay";
import Loading from "@/app/loading";

export default function AllEvents() {
  const events = useEventsStore((state) => state.events);
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
