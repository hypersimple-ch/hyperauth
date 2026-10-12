import type { Metadata } from "next";
export const metadata: Metadata = { title: "Politique de confidentialité", alternates: { canonical: "/privacy" } };
export default function Privacy() {
  return <article><h1>Politique de confidentialité</h1>
    <p>Publié le <time dateTime="2026-10-12">12 octobre 2026</time>.</p>
    <p>Contact : <a href="mailto:mateo.tiedra@hypersimple.ch">mateo.tiedra@hypersimple.ch</a>.</p>
    <h2>Données concernées et finalités</h2><p>Les autorisations Google Drive peuvent permettre à votre agent de traiter les fichiers et métadonnées accessibles à votre compte, ainsi que les autorisations OAuth et les tokens nécessaires à cet accès. Ce traitement vise uniquement les tâches que vous demandez, dans la limite des droits accordés.</p>
    <p>Le principe de minimisation s’applique : limitez les données partagées et les accès aux besoins de chaque tâche, en particulier pour les données personnelles ou confidentielles.</p>
    <h2>Qui traite les données ?</h2><p>Hyperauth ne centralise ni fichiers ni tokens. Le composant OAuth et l’agent déployés par l’utilisateur les traitent. Leur stockage, leur sécurité et leur suppression relèvent de l’opérateur de ce déploiement.</p>
    <p>Selon la configuration de l’agent, du contenu peut être transmis à ses fournisseurs de modèles ou à d’autres composants tiers pour exécuter votre demande. Leurs politiques s’appliquent. Vérifiez les destinataires, les paramètres de conservation et les conditions de traitement avant de partager des données.</p>
    <p>Ce site n’ajoute aucun tracking applicatif ni cookie. Des journaux techniques éventuels dépendent de l’hébergement choisi lors de sa publication. Les durées de conservation, la localisation des traitements et les transferts propres à l’hébergement ou au déploiement de l’agent ne sont pas définis par ce site.</p>
    <h2>Utilisation limitée des données Google</h2><p>Hyperauth s’engage à respecter la <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, y compris ses exigences Limited Use. Les données Google ne doivent être utilisées ou transférées que pour les fonctionnalités demandées par l’utilisateur, dans les limites autorisées par cette politique ; elles ne doivent pas servir à l’entraînement généralisé de modèles d’intelligence artificielle.</p>
    <p>Cet engagement ne constitue pas une vérification technique du comportement de tous les agents tiers. L’opérateur doit s’assurer que son agent et ses fournisseurs respectent ces exigences.</p>
    <h2>Révocation et suppression</h2><p>Vous pouvez révoquer l’accès depuis <a href="https://myaccount.google.com/connections">les connexions de votre compte Google</a>. Pour supprimer les tokens et les données conservés dans votre déploiement, adressez-vous à l’opérateur de l’agent et aux fournisseurs concernés.</p>
    <p>La révocation empêche les futurs accès autorisés par cette connexion, mais ne supprime pas automatiquement les copies ou les résultats déjà créés. Pour toute question relative à Hyperauth, utilisez le contact ci-dessus.</p>
  </article>;
}
