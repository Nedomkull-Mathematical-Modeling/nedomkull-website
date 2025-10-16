import type { Route } from "./+types/home";
import { LandingPage } from "../landing/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nedomkull Mathematical Modeling" },
    { name: "description", content: "TBD: Catchy slogan to be thought out..." },
  ];
}

export default function Home() {
  return <LandingPage />;
}
