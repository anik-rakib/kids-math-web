-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2020 at 05:33 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kids_math`
--

-- --------------------------------------------------------

--
-- Table structure for table `career_result`
--

CREATE TABLE `career_result` (
  `total_coin` int(100) DEFAULT NULL,
  `total_match` int(100) DEFAULT NULL,
  `best_score` int(100) DEFAULT NULL,
  `uid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `career_result`
--

INSERT INTO `career_result` (`total_coin`, `total_match`, `best_score`, `uid`) VALUES
(NULL, NULL, NULL, '837294ee'),
(NULL, NULL, NULL, '891c3b44');

-- --------------------------------------------------------

--
-- Table structure for table `user_information`
--

CREATE TABLE `user_information` (
  `uid` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `age` int(5) DEFAULT NULL,
  `image` blob
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_information`
--

INSERT INTO `user_information` (`uid`, `name`, `email`, `password`, `phone`, `age`, `image`) VALUES
('837294ee', 'Rakib Hasan', 'anikrakib1998@gmail.com', 'anik', '01622633203', 12, NULL),
('891c3b44', 'Rakib Anik', 'anikrakib19@gmail.com', 'anik', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `career_result`
--
ALTER TABLE `career_result`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `user_information`
--
ALTER TABLE `user_information`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
