import { createFileRoute } from '@tanstack/react-router'
import { AboutSection } from "../../components"

const About = () => (
  <>
    <AboutSection />
  </>
);

export const Route = createFileRoute("/about/")({
  component: About,
});