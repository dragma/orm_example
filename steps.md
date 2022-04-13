### Initialisation prisma

`yarn prisma init`

### Renseigner prisma connexion string

`DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"`

## Pull current schema

`yarn prisma db pull`


## Créer le schéma

```
model Mesure {
  id Int @id @default(autoincrement())

  temperature Float
  pression Int
  altitude Int
  taux_humidite Float
  latitide Float
  longitude Float

  date_mesure DateTime @default(now())
  date_reception DateTime
}


model Ballon {
  id Int @id @default(autoincrement())
  mesures Mesure[]
}
```

## Formater le code

`yarn prisma format`

## Générer le sql de ma migration

`yarn prisma migrate dev --create-only`

## Appliquer le script de migration

`yarn prisma migrate dev`

## Ajouter le poste de commande

```
model PosteCommande {
  id      Int      @id @default(autoincrement())
  name    String

  Ballons Ballon[]
}
```

## Modifier ballon et lui ajouter un nom

`name String`

## Générer les relation avec ballon avec format

`yarn prisma format`

## Générer le sql de ma migration

`yarn prisma migrate dev --create-only`

## Appliquer le script de migration

`yarn prisma migrate dev`

## Service créer un poste de commande

```
const posteCommande = await prisma.posteCommande.create({
  data: {
    name,
  },
});
```

## Creer via postman

url : `localhost:3000/posteCommande/create`

methode : `POST`

data : 
```
{
    "name": "pc1"
}
```

## Service créer un ballon

```
const ballon = await prisma.ballon.create({
  data: { name },
  select: { id: true, name: true },
});
```

## Créer un ballon


url : `localhost:3000/ballon/create`

methode : `POST`

data : 
```
{
    "name": "ballon1"
}
```

## Service retrouver un ballon par son id

```
const ballon = await prisma.ballon.findUnique({
  where: { id: Number(req.params.id) },
});
```

## Récupérer un ballon

url : `localhost:3000/ballon/1`

methode : `GET`

hohoh ! un lien avec le poste de commande !!!


## Service "lier un ballon à un poste de commande"

```
const ballon = await prisma.ballon.update({
  where: { id: Number(id) },
  data: {
    PosteCommande: {
      connect: {
        id: posteCommandeId,
      },
    },
  },
});
```

## Lier un poste de commande

url : `localhost:3000/ballon/1/posteCommande`

methode : `PUT`

data :
```
{
    "posteCommandeId": 1
}
```

## Modifier getBallon pour ne renvoyer que cetains champs

```
const fields = req.query?.fields?.split(',');
const select = fieldsToSelect(fields);

{
  data: { ... },
  select,
}
```

## Service poste commande depuis ballon

```
const posteCommande = await prisma.posteCommande.findFirst({
  where: {
    Ballons: {
      some: {
        id: {
          in: [Number(id)],
        },
      },
    },
  },
});
```