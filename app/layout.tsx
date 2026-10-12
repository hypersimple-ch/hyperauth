import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gauth.hypersimple.ch"),
  title: { default: "Hyperauth — Autorisations Google Drive", template: "%s | Hyperauth" },
  description: "Informations sur Hyperauth, les autorisations Google Drive et leur utilisation par vos agents.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="fr"><body>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <header className="shell"><a className="brand" href="/">Hyperauth</a><nav aria-label="Navigation principale"><a href="/">Accueil</a><a href="/privacy/">Confidentialité</a><a href="/terms/">Conditions</a></nav></header>
    <main id="contenu" className="shell">{children}</main>
    <footer className="shell"><p>Hyperauth · Autorisations pour vos agents</p><nav aria-label="Liens utiles"><a href="/">Accueil</a><a href="/privacy/">Confidentialité</a><a href="/terms/">Conditions</a><a href="mailto:mateo.tiedra@hypersimple.ch">Contact</a></nav></footer>
  </body></html>;
}
