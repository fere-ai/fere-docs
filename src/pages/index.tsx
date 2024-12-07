import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { useColorMode } from "@docusaurus/theme-common";
import BlackSVG from "../../static/img/black.svg";
import WhiteSVG from "../../static/img/white.svg";
import styles from "./index.module.css";
import Logo from "@theme/Logo";

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const [savedTheme, setSavedTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setSavedTheme(storedTheme);
  }, [colorMode]);

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        {savedTheme === "dark" ? (
          <BlackSVG className={clsx(styles.heroLogo)} />
        ) : (
          <WhiteSVG className={clsx(styles.heroLogo)} />
        )}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="heroButtons">
          <Link className="button button--secondary" to="/docs/intro">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="FereAI is your ultimate crypto research assistant."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
