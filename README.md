# Hyperauth

Site d’information français pour les autorisations Google Drive des agents, Hermes en premier.
Next.js 16, App Router, TypeScript, React 19 et npm. Export statique, sans backend,
authentification, callback OAuth, analytics ni secret.

## Développement et publication

```sh
npm ci
npm run dev
npm run build
```

Le site est déployé via Dokploy dans l’organisation **Hypersimple**, projet
**Hyperauth**, environnement **production**, application **Hyperauth — site public**
(`eVRAQLwggINZ32gxAABdd`, service `hyperauth-website-quvzlq`).
La source est `hypersimple-ch/hyperauth`, branche `main`, racine du dépôt.
Les déploiements sont manuels (`autoDeploy=false`).

Le `Dockerfile` construit l’export Next.js puis sert uniquement `out/` avec Nginx
sur le port 80. Aucun serveur Node ne tourne dans l’image finale. `nginx.conf`
sert les index de répertoire et conserve de vraies réponses 404 pour les URLs
inconnues. Les URLs `/privacy` et `/terms` redirigent vers les versions avec slash.
Traefik route uniquement `gauth.hypersimple.ch`, redirige HTTP vers HTTPS et
utilise le résolveur de certificats `letsencrypt`. Le routage est une configuration
Traefik personnalisée de l’application, comme pour le site Hypermail ; aucun
enregistrement Domains séparé n’est nécessaire. Aucun DNS n’a été modifié.

Date de publication des politiques : 12 octobre 2026. Les durées de conservation
et traitements de l’agent dépendent des composants choisis par leur opérateur.

## Configuration Google acquise

- Projet : `hypersimple-hyperauth-mcp` (« Hyperauth MCP »), numéro `341445024855`.
- Organisation : `758714305218`.
- Facturation active : `01D5CF-92C3DE-BD1B18`.
- Créateur : `mateo.tiedra@hypersimple.ch`, rôle `roles/owner`.
- API demandées et activées : `drive.googleapis.com`, `drivemcp.googleapis.com`.
  Les services déjà activés par Google ont été conservés ; aucun autre service
  n’a été demandé.
- Branding enregistré et relu : `Hyperauth`, support et contact développeur
  `mateo.tiedra@hypersimple.ch`, domaine autorisé `hypersimple.ch`.
- URLs enregistrées : `https://gauth.hypersimple.ch/`,
  `https://gauth.hypersimple.ch/privacy`, `https://gauth.hypersimple.ch/terms`.
  Leur enregistrement ne prouve ni leur disponibilité ni la propriété du domaine.
- Audience observée : External, Testing. Aucune vérification soumise.

## Blocages et configuration restante

La règle effective `constraints/iam.allowedPolicyMemberDomains` autorise `C018ouk99`.
L’attribution de `roles/mcp.toolUser` à `allAuthenticatedUsers` a été refusée :
`INVALID_ARGUMENT / PROJECT_SET_IAM_DISALLOWED_MEMBER_TYPE`.
La tentative pour `user:mateo.tiedra@balelec.ch` a été refusée :
`FAILED_PRECONDITION / constraints/iam.allowedPolicyMemberDomains`
(« User mateo.tiedra@balelec.ch is not in permitted organization. »).
La politique IAM finale contient uniquement le créateur Owner. L’accès MCP du
compte balelec.ch n’est donc pas configuré. Aucune contrainte d’organisation
n’a été modifiée et aucun compte de remplacement n’a été utilisé.

La console a ensuite exigé une reconnexion Google interactive. Le testeur n’a
pas été enregistré (la dernière lecture affichait zéro ligne). Les scopes et
le client OAuth n’ont pas été configurés. À finaliser dans
[Google Auth Platform](https://console.cloud.google.com/auth/overview?project=hypersimple-hyperauth-mcp) :

1. Pendant Testing uniquement, ajouter `mateo.tiedra@balelec.ch` aux testeurs.
2. Déclarer exclusivement `https://www.googleapis.com/auth/drive.readonly`
   et `https://www.googleapis.com/auth/drive.file`. Cette combinaison donne la
   lecture des fichiers accessibles et l’écriture des fichiers utilisés avec
   l’application, pas l’écriture générale de tout Drive.
3. Créer un client **Web application**, nommé **Hermes manual OAuth**,
   avec l’unique redirect URI `http://127.0.0.1:33333/callback`.
   Ne pas ajouter d’origine JavaScript ni d’autre callback : ce site n’en héberge pas.
4. Récupérer les identifiants dans la console. Conserver le secret hors dépôt
   et hors site, dans un fichier à permissions `0600` ou un coffre de secrets.
   Aucun identifiant client n’a été créé pendant cette exécution.

Le composant distant doit gérer state, PKCE S256, l’échange confidentiel côté
serveur et le stockage chiffré des tokens. Sa modification n’est pas incluse ici.
Ne jamais placer de secret, token ou code OAuth dans Git, dans le site ou dans
une variable `NEXT_PUBLIC`.

## Avant utilisation publique

1. Maintenir les pages publiées et vérifier les trois URLs après chaque déploiement.
2. Confirmer la propriété du domaine auprès de Google.
3. Satisfaire l’adhésion au Workspace Developer Preview Program pour Drive MCP.
   L’activation de l’API ne prouve pas cette adhésion.
4. Résoudre le blocage IAM par une décision explicite du propriétaire ; le site
   et OAuth External ne contournent pas cette restriction.
5. Finaliser les champs OAuth ci-dessus, puis effectuer la publication et la
   vérification Google avec les informations et preuves demandées. Un examen de
   sécurité peut dépendre des scopes restreints et du traitement réel ; aucune
   exemption ni acceptation n’est garantie. La liste de testeurs n’est pas la
   cible publique permanente.
6. Fournir les identifiants au composant distant de manière sûre.
7. Avec intervention du titulaire, effectuer le consentement puis un appel
   à `https://drivemcp.googleapis.com/mcp/v1`.

## Vérifications exécutées

`npm run build` a réussi et produit les trois pages statiques. Un serveur local
temporaire a répondu HTTP 200 sur `/`, `/privacy/` et `/terms/`. Les titres,
les deux navigations, les liens internes, les liens de contact, les canonical
sur l’origine cible et les deux scopes de l’accueil ont été contrôlés.
Les pages ne contiennent aucun formulaire ; aucun motif de secret OAuth, token
ou clé privée n’a été détecté dans les fichiers textuels exportés.
Le serveur temporaire a été arrêté. Revue visuelle laissée au propriétaire.
Aucun consentement tiers, accès à des fichiers Drive ou test end-to-end Hermes
n’a été effectué.
