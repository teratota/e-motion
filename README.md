# E-Motion



## Pré-requis

Pour lancer le projet en mode développement il vous faudra d'abord d'installer sur votre machine :

- NodeJS : https://nodejs.org/en/
- PHP : https://www.php.net/releases/index.php
- MYSQL : https://dev.mysql.com/downloads/
- Composer : https://getcomposer.org/doc/00-intro.md


Si vous ne voulez pas installer les programmes si dessus les un après les autres vous pouvez opter pour Laragon, qui regroupe tout les pré-requis. (https://laragon.org/download/)



## Mise en route

Le site fonctionnera correctement à partir du moment où toutes les conditions ci-dessous sont remplies



### Front end

Tout d'abord il faut vous rendre dans le dossier "Front end" du projet.

Il vous faut installer les dépendances, il faudra donc pour cela taper la commande suivante :

```shell
npm install
```

Après la fin de l'installation, il faut lancer Angular pour cela il vous suffira de taper ceci :

```sell
ng serve
```

Angular va maintenant compiler le projet, puis pour vous rendre sur le site il vous faudra aller dans l'url indiquer à la fin de la compilation, par défaut ce sera : http://localhost:4200/



### Back end

Pour le back end il vous faudra vous rendre dans le dossier "Back end".

Il faudra d'abord installer une dépendance PHP avec composer :

```shell
composer require stripe/stripe-php
```

Puis il vous faudra lancer le serveur PHP avec : 

```shell
php -S localhost:8000
```



### Base de données 

Le fichier SQL se trouve dans le dossier suivant :

> Backend/sql/emotion.sql



Ensuite il faudra créer un fichier à cet emplacement :

> Backend/api/config/config_logs.php

Il devra contenir les informations suivantes :

```php
<?php 
$host = "xxx.xxx.xxx.xxx"; //Mettre l'ip ou l'adresse du serveur
$port = "xxxx"; //Mettre le port du serveur de base de données
$database = "xxxxx"; //Mettre le nom de la base de données
$user = "xxxxx"; //Mettre le nom d'utilisateur
$pass = "xxxxx"; //Mettre le mot de passe utilisateur
```



## Connection au site

Le site à deux compte prédéfini dans la BDD,

admin@mail.com : Admin123

user@mail.com : User123

Vous pouvez les utiliser pour vous connecter au site internet

