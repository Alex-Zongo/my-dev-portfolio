import React from "react";
import image from "../perspective.jpg";
function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Big tree"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-60 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Welcome. I'm Alex.
        </h1>
      </section>
    </main>
  );
}

export default Home;
