"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
<div
  className="min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/4k1.jpg')", // place in /public
  }}
>
  <div className="glass-card glass-animate flex items-center justify-center">
    <div className="flex items-end gap-6 px-10 py-6">

      {/* Finder */}
      <img
        src="/icons/logo.png"
        alt="Finder"
        className="w-14 h-14 transition-transform duration-300 hover:scale-125"
      />

      {/* Safari */}
      <img
        src="/icons/messages.png"
        alt="Safari"
        className="w-14 h-14 transition-transform duration-300 hover:scale-125"
      />

      {/* Mail */}
      <img
        src="/icons/photos.png"
        alt="Mail"
        className="w-14 h-14 transition-transform duration-300 hover:scale-125"
      />

      {/* Music */}
      <img
        src="/icons/spotify.png"
        alt="Music"
        className="w-14 h-14 transition-transform duration-300 hover:scale-125"
      />

      {/* Settings */}
      <img
        src="/icons/apple-pay.png"
        alt="Settings"
        className="w-14 h-14 transition-transform duration-300 hover:scale-125"
      />
      <img
        src="/icons/youtube.png"
        alt="Settings"
        className="w-14 h-14 transition-transform duration-300 hover:scale-125"
      />
      <img
        src="/icons/slack.png"
        alt="Settings"
        className="w-14 h-14 transition-transform duration-300 hover:scale-125"
      />
    </div>
  </div>
</div>


    </>
  );
}
