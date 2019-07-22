-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           5.7.24 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             9.5.0.5332
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour shareloc
DROP DATABASE IF EXISTS `shareloc`;
CREATE DATABASE IF NOT EXISTS `shareloc` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `shareloc`;

-- Listage de la structure de la table shareloc. adresse
DROP TABLE IF EXISTS `adresse`;
CREATE TABLE IF NOT EXISTS `adresse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(50) NOT NULL,
  `code_postal` varchar(50) NOT NULL,
  `rue` varchar(50) NOT NULL,
  `etage` varchar(50) DEFAULT NULL,
  `ref_id_type_adresse` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_adresse_type_adresse` (`ref_id_type_adresse`),
  CONSTRAINT `FK_adresse_type_adresse` FOREIGN KEY (`ref_id_type_adresse`) REFERENCES `type_adresse` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. capacite_coffre
DROP TABLE IF EXISTS `capacite_coffre`;
CREATE TABLE IF NOT EXISTS `capacite_coffre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `capacite` int(11) DEFAULT NULL COMMENT 'en litre',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. capacite_personne
DROP TABLE IF EXISTS `capacite_personne`;
CREATE TABLE IF NOT EXISTS `capacite_personne` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `capacite` int(11) DEFAULT NULL COMMENT 'nombre de personne accepter dans le vehicule',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. carburant
DROP TABLE IF EXISTS `carburant`;
CREATE TABLE IF NOT EXISTS `carburant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. commentaire
DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id_vehicule` int(11) NOT NULL,
  `ref_id_user` int(11) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_commentaire_vehicule` (`ref_id_vehicule`),
  KEY `FK_commentaire_user` (`ref_id_user`),
  CONSTRAINT `FK_commentaire_user` FOREIGN KEY (`ref_id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_commentaire_vehicule` FOREIGN KEY (`ref_id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. couleur
DROP TABLE IF EXISTS `couleur`;
CREATE TABLE IF NOT EXISTS `couleur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. etat
DROP TABLE IF EXISTS `etat`;
CREATE TABLE IF NOT EXISTS `etat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etat` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. etat_reservation
DROP TABLE IF EXISTS `etat_reservation`;
CREATE TABLE IF NOT EXISTS `etat_reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etat` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. marque
DROP TABLE IF EXISTS `marque`;
CREATE TABLE IF NOT EXISTS `marque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. model
DROP TABLE IF EXISTS `model`;
CREATE TABLE IF NOT EXISTS `model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. plaque
DROP TABLE IF EXISTS `plaque`;
CREATE TABLE IF NOT EXISTS `plaque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. promotion
DROP TABLE IF EXISTS `promotion`;
CREATE TABLE IF NOT EXISTS `promotion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id_vehicule` int(11) NOT NULL,
  `pourcentage` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_promotion_vehicule` (`ref_id_vehicule`),
  CONSTRAINT `FK_promotion_vehicule` FOREIGN KEY (`ref_id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. reservation
DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id_user` int(11) NOT NULL,
  `ref_id_vehicule` int(11) NOT NULL,
  `date_fin` datetime NOT NULL,
  `date_debut` datetime NOT NULL,
  `prix` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_reservation_user` (`ref_id_user`),
  KEY `FK_reservation_vehicule` (`ref_id_vehicule`),
  CONSTRAINT `FK_reservation_user` FOREIGN KEY (`ref_id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reservation_vehicule` FOREIGN KEY (`ref_id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. type
DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. type_adresse
DROP TABLE IF EXISTS `type_adresse`;
CREATE TABLE IF NOT EXISTS `type_adresse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `ref_id_adresse` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_adresse` (`ref_id_adresse`),
  CONSTRAINT `FK_user_adresse` FOREIGN KEY (`ref_id_adresse`) REFERENCES `adresse` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
-- Listage de la structure de la table shareloc. vehicule
DROP TABLE IF EXISTS `vehicule`;
CREATE TABLE IF NOT EXISTS `vehicule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id_marque` int(11) NOT NULL,
  `ref_id_model` int(11) NOT NULL,
  `ref_id_plaque` int(11) NOT NULL,
  `ref_id_carburant` int(11) NOT NULL,
  `ref_id_couleur` int(11) NOT NULL,
  `ref_id_type` int(11) NOT NULL,
  `ref_id_etat` int(11) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `recommendation` int(11) DEFAULT NULL,
  `prix` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_vehicule_marque` (`ref_id_marque`),
  KEY `FK_vehicule_model` (`ref_id_model`),
  KEY `FK_vehicule_plaque` (`ref_id_plaque`),
  KEY `FK_vehicule_carburant` (`ref_id_carburant`),
  KEY `FK_vehicule_couleur` (`ref_id_couleur`),
  KEY `FK_vehicule_type` (`ref_id_type`),
  KEY `FK_vehicule_etat` (`ref_id_etat`),
  CONSTRAINT `FK_vehicule_carburant` FOREIGN KEY (`ref_id_carburant`) REFERENCES `carburant` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_couleur` FOREIGN KEY (`ref_id_couleur`) REFERENCES `couleur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_etat` FOREIGN KEY (`ref_id_etat`) REFERENCES `etat` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_marque` FOREIGN KEY (`ref_id_marque`) REFERENCES `marque` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_model` FOREIGN KEY (`ref_id_model`) REFERENCES `model` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_plaque` FOREIGN KEY (`ref_id_plaque`) REFERENCES `plaque` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_type` FOREIGN KEY (`ref_id_type`) REFERENCES `type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Les données exportées n'étaient pas sélectionnées.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
