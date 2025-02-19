import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import SVG from "react-inlinesvg";
import classnames from "classnames";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import BlackLogo from "../../../static/img/black.svg";
import WhiteLogo from "../../../static/img/white.svg";
import { useColorMode } from "@docusaurus/theme-common";

interface FooterLinkProps {
  to?: string;
  href?: string;
  label: string;
  savedTheme: string;
  [key: string]: any;
}

function FooterLink({
  to,
  href,
  label,
  savedTheme,
  ...props
}: FooterLinkProps) {
  const toUrl = useBaseUrl(to);
  return (
    <Link
      className="footer__link-item"
      style={{
        color: savedTheme === "dark" ? "#eaedf1" : "#4e6077",
      }}
      {...(href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
}

interface FooterLogoProps {
  url: string;
  alt: string;
}

const FooterLogo = ({ url, alt }: FooterLogoProps) => (
  <SVG className="footer__logo" src={url} />
);

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context as { siteConfig: { themeConfig: any } };
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;
  const { colorMode } = useColorMode();
  const [savedTheme, setSavedTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setSavedTheme(storedTheme);
  }, [colorMode]);

  const { copyright, links = [], logo = {} } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={classnames("footer", {
        "footer--dark": footer.style === "dark",
      })}
      style={{
        backgroundColor: savedTheme === "dark" ? "#03060c" : "#FFFFFF",
        color: savedTheme === "dark" ? "#FFFFFF" : "#000000",
        borderTop:
          savedTheme === "dark" ? "1px solid #2f2f2f" : "1px solid #f3f3f3",
      }}
    >
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            <div
              className="col col--5 footer__col"
              style={{
                marginLeft: "100px",
              }}
            >
              <div className="margin-bottom--md">
                {savedTheme !== "dark" ? (
                  <WhiteLogo
                    style={{
                      marginTop: "-90px",
                      marginBottom: "-90px",
                      marginRight: "-60px",
                      marginLeft: "-110px",
                      width: "350px",
                      clipPath: "inset(30% 20% 30% 20%)",
                    }}
                  />
                ) : (
                  <BlackLogo
                    style={{
                      marginTop: "-90px",
                      marginBottom: "-90px",
                      marginRight: "-60px",
                      marginLeft: "-110px",
                      width: "350px",
                      clipPath: "inset(30% 20% 30% 20%)",
                    }}
                  />
                )}
              </div>
              <div className="margin-bottom--md">
                <p
                  style={{
                    color: savedTheme === "dark" ? "#cdcdd4" : "#334964",
                    marginBottom: "1.5rem",
                    lineHeight: "1.5",
                  }}
                >
                  The Ultimate AI Web3 Assistant powered by specialized agents
                  for all your need in crypto.
                </p>
              </div>
            </div>
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <h4
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    {linkItem.title}
                  </h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul
                    style={{ listStyle: "none", padding: 0 }}
                  >
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li
                          key={item.href || item.to}
                        >
                          <FooterLink {...item} savedTheme={savedTheme} />
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(75, 85, 99, 0.3)",
              textAlign: "center",
            }}
          >
            {logo && logo.src && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLogoLink}
                  >
                    <FooterLogo alt={logo.alt} url={logoUrl} />
                  </a>
                ) : (
                  <FooterLogo alt={logo.alt} url={logoUrl} />
                )}
              </div>
            )}
            <small>{copyright}</small>
            <br />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
