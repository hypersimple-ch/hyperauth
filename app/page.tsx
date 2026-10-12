import type { Metadata } from "next";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return <article><h1>Vos agents, votre Google Drive, votre autorisation.</h1>
    <p className="lead">Hyperauth est une configuration d’autorisation Google permettant à des agents tels qu’Hermes de se connecter au Drive du compte qui donne son consentement.</p>
    <p>Vous choisissez les tâches confiées à votre agent. L’accès dépend des autorisations OAuth accordées et des permissions Drive de votre compte : il ne donne aucun droit sur les fichiers d’un autre compte.</p>
    <h2>Deux autorisations, des usages distincts</h2>
    <ul><li><code>https://www.googleapis.com/auth/drive.readonly</code> : lire les fichiers accessibles au compte et leurs métadonnées.</li>
    <li><code>https://www.googleapis.com/auth/drive.file</code> : créer des fichiers et modifier les fichiers utilisés avec l’application, notamment ceux sélectionnés ou partagés avec elle.</li></ul>
    <p>Leur combinaison permet la lecture des fichiers accessibles et l’écriture sur les fichiers utilisés avec l’application. Elle n’autorise pas une modification générale de tout votre Drive.</p>
    <h2>Un site d’information, pas un point de connexion</h2>
    <p>Ce site n’offre ni connexion, ni serveur OAuth, ni serveur MCP. Le composant OAuth et l’agent sont déployés par l’utilisateur ; ils gèrent les autorisations et réalisent les actions demandées.</p>
    <p className="note">Hyperauth n’est pas une application Google officielle. Sa présentation ici ne signifie pas qu’elle est approuvée ou vérifiée par Google. L’accès effectif dépend aussi des règles IAM, de la disponibilité du service Google et des prérequis Preview.</p>
    <h2>Garder le contrôle</h2><p>Consultez notre <a href="/privacy/">politique de confidentialité</a> et les <a href="/terms/">conditions d’utilisation</a>. Vous pouvez révoquer votre autorisation depuis les <a href="https://myaccount.google.com/connections">connexions de votre compte Google</a>.</p>
  </article>;
}
