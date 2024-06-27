"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-center text-neutral-500 max-w-lg mx-auto text-sm my-2">
          {" "}
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form action="" onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            placeholder="Your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border-neutral-800 focus:ring-2 focus:ring-cyan-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          />
          <textarea
            value={message}
            placeholder="Your message"
            required
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-lg border-neutral-800 focus:ring-2 focus:ring-cyan-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
