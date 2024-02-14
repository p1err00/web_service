Le projet marche pas forcement du au front qui n'est pas termine.
Au niveau de l'api, celle-ci se compose de 3 elements principaux: 
  - auth (authentification)
  - post (poster un article)
  - publish (publier un article)
L'api est construite directement comme une page, en utilisant la nomenclature de nom de Next afin de faire passer des arguments dans la requete (ex: [id].ts recuperera un id)
Un provider est implemente afin d'avoir une authentification grace a un compte github ou email. Le tout est gere par NextAuth.
Un orm nomme prisma a ete mis en place afin de simplifier la gestion des models. Tous les modeles sont implementes dans un fichier 'schema.prisma', qu'il faut faire migrer par une commande afin que prisma puisse modifier la bdd en fonction du model.
Un client prisma est installe en meme temps que la lib. Il est ensuite exporte pour etre utilise dans les differentes requetes de l'application. Pour se faire :
  Importer le client Prisma, l'implemente suivi du modele que l'ont veut modifier, puis de la methode que l'on veut utiliser:
    Expl: pour trouver tous les posts => prisma.post.findMany();
La requete ressemble ensuite a une requete graphql, dans le sens ou on cree un pbjet avec les differents arguemnts a utiliser
  Expl: Recuperer tous les post en fonction d'un email =>
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { drafts },
  };

  Cette maniere de creer un back est simplifie par l'utilisation de Next. L'api est concidere comme une page simplifiant les routes, il suffit ensuite d'integrer notre requete a la page voulut.
