DROP DATABASE IF EXISTS `ausdb`;

CREATE DATABASE  IF NOT EXISTS `ausdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ausdb`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: ausdb
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `facilities`
--

DROP TABLE IF EXISTS `facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facilities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facilities`
--

LOCK TABLES `facilities` WRITE;
/*!40000 ALTER TABLE `facilities` DISABLE KEYS */;
INSERT INTO `facilities` VALUES (1,'Parental Facility','2019-12-31 14:02:31',1),(2,'Resturant','2019-12-31 14:02:31',1),(3,'Stores','2019-12-31 14:02:31',1);
/*!40000 ALTER TABLE `facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility_details`
--

DROP TABLE IF EXISTS `facility_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `locationInfo` varchar(250) NOT NULL,
  `statusMessage` varchar(250) NOT NULL,
  `otherFacilities` varchar(250) NOT NULL,
  `occupancyInfo` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  `cateagory` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility_details`
--

LOCK TABLES `facility_details` WRITE;
/*!40000 ALTER TABLE `facility_details` DISABLE KEYS */;
INSERT INTO `facility_details` VALUES (1,'1 min walk','Facility last cleaned at 10.25 am','Baby Feeding','3 out of 5','2019-12-31 14:02:31',1,'Toilet'),(2,'2 mins walk','Facility last cleaned at 1.25 am','Shower','2 out of 5','2019-12-31 14:02:31',1,'Toilet'),(3,'5 mins walk','Facility last cleaned at 11.00 am','Baby Feeding','1 out of 5','2019-12-31 14:02:31',1,'Toilet');
/*!40000 ALTER TABLE `facility_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parental_facilities`
--

DROP TABLE IF EXISTS `parental_facilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parental_facilities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parental_facilities`
--

LOCK TABLES `parental_facilities` WRITE;
/*!40000 ALTER TABLE `parental_facilities` DISABLE KEYS */;
INSERT INTO `parental_facilities` VALUES (1,'Toilet','2019-12-31 14:02:31',1),(2,'Shower','2019-12-31 14:02:31',1),(3,'Baby Feeding','2019-12-31 14:02:31',1),(4,'Baby Changing Table','2019-12-31 14:02:31',1),(5,'Microwave','2019-12-31 14:02:31',1),(6,'Music','2019-12-31 14:02:31',1);
/*!40000 ALTER TABLE `parental_facilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `rating` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `category` varchar(250) NOT NULL,
  `categoryId` int(25) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'Test User','****','Good','Toilet',1,'2019-12-31 14:02:31',1),(2,'Test User 1','****','Good','Toilet',2,'2019-12-31 14:02:31',1),(3,'Test User 2','****','Cleaned','Toilet',3,'2019-12-31 14:02:31',1),(4,'test1@gmail.com','4','Cleaned facility','Toilet',1,'2019-12-31 14:41:10',0);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `created_date` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test1@gmail.com','test1','2019-12-31 14:02:31',NULL),(2,'test1@gmail.com','test1','2016-04-10 23:50:40',1),(3,'test1@gmail.com','test1','2016-04-10 23:50:40',1),(4,'test2@gmail.com','test1','2016-04-10 23:50:40',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ausdb'
--

--
-- Dumping routines for database 'ausdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-31 20:36:06
