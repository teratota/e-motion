-- --------------------------------------------------------
-- Hôte :                        hoprikoma.myds.me
-- Version du serveur:           10.3.11-MariaDB - Source distribution
-- SE du serveur:                Linux
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Export de la structure de la base pour emotion
CREATE DATABASE IF NOT EXISTS `emotion` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `emotion`;

-- Export de la structure de la table emotion. adresse
CREATE TABLE IF NOT EXISTS `adresse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code_postal` varchar(50) NOT NULL,
  `rue` varchar(50) NOT NULL,
  `pays` varchar(50) NOT NULL,
  `villes` varchar(50) NOT NULL,
  `ref_id_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_adresse_user` (`ref_id_user`),
  CONSTRAINT `FK_adresse_user` FOREIGN KEY (`ref_id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.adresse : ~0 rows (environ)
/*!40000 ALTER TABLE `adresse` DISABLE KEYS */;
INSERT INTO `adresse` (`id`, `code_postal`, `rue`, `pays`, `villes`, `ref_id_user`) VALUES
	(3, '94562', '55 rue test', 'allemagne', 'perdue', 7),
	(4, '94500', '55 rue hello', 'france', 'champigny sur marne', 9);
/*!40000 ALTER TABLE `adresse` ENABLE KEYS */;

-- Export de la structure de la table emotion. commentaire
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

-- Export de données de la table emotion.commentaire : ~0 rows (environ)
/*!40000 ALTER TABLE `commentaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentaire` ENABLE KEYS */;

-- Export de la structure de la table emotion. couleur
CREATE TABLE IF NOT EXISTS `couleur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.couleur : ~6 rows (environ)
/*!40000 ALTER TABLE `couleur` DISABLE KEYS */;
INSERT INTO `couleur` (`id`, `nom`) VALUES
	(1, 'rouge'),
	(2, 'jaune'),
	(3, 'noire'),
	(4, 'vert'),
	(5, 'bleu'),
	(6, 'blanc'),
	(7, 'violet');
/*!40000 ALTER TABLE `couleur` ENABLE KEYS */;

-- Export de la structure de la table emotion. marque
CREATE TABLE IF NOT EXISTS `marque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.marque : ~2 rows (environ)
/*!40000 ALTER TABLE `marque` DISABLE KEYS */;
INSERT INTO `marque` (`id`, `nom`) VALUES
	(1, 'Citroen'),
	(2, 'Opel'),
	(3, 'Renault'),
	(4, 'Tesla');
/*!40000 ALTER TABLE `marque` ENABLE KEYS */;

-- Export de la structure de la table emotion. model
CREATE TABLE IF NOT EXISTS `model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `ref_id_marque` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1` (`ref_id_marque`),
  CONSTRAINT `FK1` FOREIGN KEY (`ref_id_marque`) REFERENCES `marque` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.model : ~0 rows (environ)
/*!40000 ALTER TABLE `model` DISABLE KEYS */;
INSERT INTO `model` (`id`, `nom`, `ref_id_marque`) VALUES
	(1, 'Zoe', 3),
	(2, 'Model S', 4);
/*!40000 ALTER TABLE `model` ENABLE KEYS */;

-- Export de la structure de la table emotion. promotion
CREATE TABLE IF NOT EXISTS `promotion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id_vehicule` int(11) NOT NULL,
  `pourcentage` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_promotion_vehicule` (`ref_id_vehicule`),
  CONSTRAINT `FK_promotion_vehicule` FOREIGN KEY (`ref_id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.promotion : ~0 rows (environ)
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion` ENABLE KEYS */;

-- Export de la structure de la table emotion. reservation
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id_user` int(11) NOT NULL,
  `ref_id_vehicule` int(11) NOT NULL,
  `date_fin` datetime NOT NULL,
  `date_debut` datetime NOT NULL,
  `prix` float NOT NULL,
  `facture` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_reservation_user` (`ref_id_user`),
  KEY `FK_reservation_vehicule` (`ref_id_vehicule`),
  CONSTRAINT `FK_reservation_user` FOREIGN KEY (`ref_id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reservation_vehicule` FOREIGN KEY (`ref_id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.reservation : ~4 rows (environ)
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;

-- Export de la structure de la table emotion. role
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.role : ~2 rows (environ)
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` (`id`, `role`) VALUES
	(1, 'admin'),
	(2, 'user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;

-- Export de la structure de la table emotion. token
CREATE TABLE IF NOT EXISTS `token` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `ref_id_user` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_token_user` (`ref_id_user`),
  CONSTRAINT `FK_token_user` FOREIGN KEY (`ref_id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.token : ~25 rows (environ)
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
/*!40000 ALTER TABLE `token` ENABLE KEYS */;

-- Export de la structure de la table emotion. type
CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.type : ~2 rows (environ)
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` (`id`, `nom`) VALUES
	(1, 'scooter'),
	(2, 'voiture');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;

-- Export de la structure de la table emotion. user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `point` int(11) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `anniversaire` date NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `npermis` varchar(50) NOT NULL,
  `ref_id_role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_role` (`ref_id_role`),
  CONSTRAINT `FK_user_role` FOREIGN KEY (`ref_id_role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.user : ~2 rows (environ)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `nom`, `prenom`, `mail`, `password`, `point`, `genre`, `anniversaire`, `telephone`, `npermis`, `ref_id_role`) VALUES
	(7, 'adminName', 'adminFirst', 'admin@mail.com', '$2y$10$bL3KnhqGsR8EzGjxWvd8AutZR0k6kIGVrKEsJ8ViXB39eutZcI7kS', 20, 'autre', '2019-08-14', '455122122', '15611165', 1),
	(9, 'userName', 'userFirst', 'user@mail.com', '$2y$10$QP9dgqkKB71.MBgwpiVZ9O3nI7G/1qdHSRRDHx4KGq4R/rbMOAh5S', 10, 'homme', '2019-08-21', '25634589', '56456165616', 2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- Export de la structure de la table emotion. vehicule
CREATE TABLE IF NOT EXISTS `vehicule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id_marque` int(11) NOT NULL,
  `ref_id_user` int(11) NOT NULL,
  `ref_id_model` int(11) NOT NULL,
  `plaque` varchar(50) NOT NULL,
  `ref_id_couleur` int(11) NOT NULL,
  `ref_id_type` int(11) NOT NULL,
  `coffre` int(11) NOT NULL,
  `personne` int(11) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `recommendation` int(11) DEFAULT NULL,
  `prix` float NOT NULL,
  `autonomie` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_vehicule_marque` (`ref_id_marque`),
  KEY `FK_vehicule_model` (`ref_id_model`),
  KEY `FK_vehicule_couleur` (`ref_id_couleur`),
  KEY `FK_vehicule_type` (`ref_id_type`),
  KEY `FK_vehicule_user` (`ref_id_user`),
  CONSTRAINT `FK_vehicule_couleur` FOREIGN KEY (`ref_id_couleur`) REFERENCES `couleur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_marque` FOREIGN KEY (`ref_id_marque`) REFERENCES `marque` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_model` FOREIGN KEY (`ref_id_model`) REFERENCES `model` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_type` FOREIGN KEY (`ref_id_type`) REFERENCES `type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_vehicule_user` FOREIGN KEY (`ref_id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- Export de données de la table emotion.vehicule : ~2 rows (environ)
/*!40000 ALTER TABLE `vehicule` DISABLE KEYS */;
INSERT INTO `vehicule` (`id`, `ref_id_marque`, `ref_id_user`, `ref_id_model`, `plaque`, `ref_id_couleur`, `ref_id_type`, `coffre`, `personne`, `kilometrage`, `recommendation`, `prix`, `autonomie`, `img`) VALUES
	(3, 3, 7, 1, '88-ff-55', 5, 2, 200, 4, 50000, NULL, 20, 400, '../../../assets/images/renault-zoe-400-km-620x413.jpg'),
	(10, 3, 7, 1, '44-ff-55', 3, 2, 200, 4, 40000, NULL, 20, 400, '../../../assets/images/renault-zoe-400-km-620x413.jpg'),
	(21, 3, 7, 1, '22-ff-88', 2, 2, 200, 4, 30000, NULL, 20, 400, '../../../assets/images/renault-zoe-400-km-620x413.jpg');
/*!40000 ALTER TABLE `vehicule` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
