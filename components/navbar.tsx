"use client";
import { useEventsStore } from "@/store/events";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Links = [{ name: "All", href: "/" }];

export default function Navbar() {
  const pathname = usePathname();
  const fetchEvents = useEventsStore((state) => state.fetchEvents);

  const [categories, setCategories] = useState<Set<string>>(new Set());

  const mergedLinks = [
    ...Links,
    ...Array.from(categories).map((category) => ({
      name: category,
      href: `/category/${category}`,
    })),
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      await fetch("/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const newCategories = new Set(categories);
          data.data.forEach(({ category }: any) => {
            newCategories.add(category);
          });
          setCategories(newCategories);
        });
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    fetchEvents();
  });
  return (
    <div className="flex items-center justify-center w-full h-16 gap-6">
      {mergedLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`${
            pathname === link.href
              ? "bg-white/10 text-white"
              : "text-white/50 hover:text-white"
          } rounded-2xl px-3 py-1 font-bold`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
