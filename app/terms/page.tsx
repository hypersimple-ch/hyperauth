import type { Metadata } from "next";
export const metadata: Metadata = { title: "Conditions d’utilisation", alternates: { canonical: "/terms" } };
export default function Terms() {
  return <article><h1>Conditions d’utilisation</h1>
    <p>Publié le <time dateTime="2026-10-12">12 octobre 2026</time>.</p>
    <h2>Objet</h2><p>Hyperauth fournit une configuration d’autorisation Google destinée aux connexions d’agents, notamment Hermes, au Drive d’un compte consentant. Ce site présente cette configuration et les informations associées ; il ne fournit ni connexion ni infrastructure d’agent.</p>
    <h2>Consentement et responsabilités</h2><p>Le titulaire du compte décide d’accorder ou de refuser les autorisations OAuth et les tâches confiées à l’agent. Il doit disposer des droits nécessaires sur les données utilisées et respecter les obligations applicables aux personnes concernées.</p>
    <p>L’opérateur de l’agent est responsable de son déploiement, de la protection des identifiants et tokens, des paramètres des fournisseurs tiers et des actions exécutées. Il doit limiter les accès aux besoins de l’utilisateur et vérifier les conséquences des modifications de fichiers.</p>
    <h2>Règles Google et services tiers</h2><p>L’utilisation doit respecter les règles Google, notamment la <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a> et Limited Use, ainsi que les conditions des services tiers employés. Les autorisations OAuth ne remplacent pas les permissions Drive ni les règles IAM du projet.</p>
    <h2>Révocation</h2><p>Le titulaire peut retirer son consentement depuis <a href="https://myaccount.google.com/connections">les connexions de son compte Google</a>. La suppression des tokens et des copies conservées doit aussi être effectuée auprès du déploiement de l’agent. Consultez la <a href="/privacy/">politique de confidentialité</a>.</p>
    <h2>Disponibilité et vérification</h2><p>La disponibilité dépend de Google, des conditions d’accès à ses services et des composants tiers déployés. Aucune validation Google, acceptation au programme Preview ou disponibilité continue n’est garantie. Hyperauth n’est pas un service Google officiel.</p>
    <h2>Contact</h2><p>Pour toute question : <a href="mailto:mateo.tiedra@hypersimple.ch">mateo.tiedra@hypersimple.ch</a>.</p>
  </article>;
}
