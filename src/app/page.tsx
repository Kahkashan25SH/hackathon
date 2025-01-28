'use client';
import Cards from "@/components/LandingPage/Cards";
import OurBlog from "@/components/LandingPage/Our-Blog";
import Section from "@/components/LandingPage/Section";

// import Link from "next/link";
export default function Home() {
  return (
    <div >
      <Section />
      <Cards  />
      <OurBlog />
    </div>
  );
}
