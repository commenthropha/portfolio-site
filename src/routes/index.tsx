import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components";

const Home = () => (
  <>
    <Hero />
  </>
);

export const Route = createFileRoute("/")({
  component: Home,
});
