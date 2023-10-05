import styles from "@/styles/Home.module.css";
import Layout from "@/components/ui/layout/layout";
import About from "@/components/pages/about/about";
import Experience from "@/components/pages/experience/experience";
import Work from "@/components/pages/work/work";
import Contact from "@/components/pages/contact/contact";
import Bio from "@/components/pages/bio/bio";

export default function Home() {
  return (
    <Layout>
      <Bio />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Layout>
  );
}
