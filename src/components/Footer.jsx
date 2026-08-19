import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span className="footer-wordmark">XXI</span>
        <p>© {new Date().getFullYear()} {siteConfig.companyName}</p>
        <span>iPhone · Puerto Madero</span>
      </div>
    </footer>
  );
}
