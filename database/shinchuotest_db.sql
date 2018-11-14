-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 12, 2018 at 07:11 PM
-- Server version: 10.0.33-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shinchuotest_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminauth`
--

CREATE TABLE `adminauth` (
  `auth_id` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL,
  `auction_centre` varchar(100) DEFAULT NULL,
  `createdon` varchar(500) NOT NULL,
  `createdby` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminauth`
--

INSERT INTO `adminauth` (`auth_id`, `email`, `password`, `name`, `contact`, `role_id`, `auction_centre`, `createdon`, `createdby`) VALUES
('admin', 'admin@admin.com', 'admin123', 'admin', '+25214', 1, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `assignauction`
--

CREATE TABLE `assignauction` (
  `a_id` int(11) NOT NULL,
  `b_email` varchar(100) NOT NULL,
  `day` varchar(50) NOT NULL,
  `auction` varchar(100) NOT NULL,
  `fromdate` varchar(50) NOT NULL,
  `statustime` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignauction`
--

INSERT INTO `assignauction` (`a_id`, `b_email`, `day`, `auction`, `fromdate`, `statustime`, `status`) VALUES
(2, 'test1@test.com', '03/08/2018', 'ARAI Oyama VT', 'Saturday', 'Sat Mar 10 2018 19:36:04 GMT 0500 (Pakistan Standard Time)', 1),
(3, 'test1@test.com', '03/08/2018', 'ARAI Oyama VT', 'Saturday', 'Sat Mar 10 2018 19:36:21 GMT 0500 (Pakistan Standard Time)', 1),
(4, 'test@test.com', '03/08/2018', 'ARAI Oyama VT', 'Saturday', 'Sat Mar 10 2018 19:36:21 GMT 0500 (Pakistan Standard Time)', 1),
(5, 'asd', 'Tuesday', 'USS NAGOYA', '03/10/2018', 'Sat Mar 10 2018 19:50:04 GMT 0500 (Pakistan Standard Time)', 1),
(6, 'asd1', 'Friday', 'Isuzu Kobe', '03/08/2018', 'Fri Mar 16 2018 20:26:34 GMT 0500 (Pakistan Standard Time)', 1),
(7, 'asd', 'Wednesday', 'USS Tohoku', '04/04/2018', 'Wed Apr 04 2018 08:35:56 GMT 0500 (Pakistan Standard Time)', 1),
(8, 'clark', 'Tuesday', 'TAA Hiroshima', '05/08/2018', 'Thu May 03 2018 19:29:01 GMT 0500 (Pakistan Standard Time)', 1),
(9, 'clark', 'Tuesday', 'TAA Minami Kyushu', '05/08/2018', 'Thu May 03 2018 19:29:25 GMT 0500 (Pakistan Standard Time)', 1),
(10, 'walt', 'Tuesday', 'TAA Hiroshima', '05/08/2018', 'Thu May 03 2018 19:29:41 GMT 0500 (Pakistan Standard Time)', 1);

-- --------------------------------------------------------

--
-- Table structure for table `auction`
--

CREATE TABLE `auction` (
  `a_id` int(11) NOT NULL,
  `aname` varchar(100) DEFAULT NULL,
  `pos` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `fax` varchar(100) DEFAULT NULL,
  `cname` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `statustime` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auction`
--

INSERT INTO `auction` (`a_id`, `aname`, `pos`, `tel`, `fax`, `cname`, `email`, `statustime`) VALUES
(1, 'USS TOKYO', '74200', '025', '520', 'asd', 'asd@ad.com', 'Wed Mar 07 2018 22:06:07 GMT 0500 (Pakistan Standard Time)'),
(2, 'HAA Kobe', '74200', '025', '520', 'HAA Kobe ', 'HAAKobe @ad.com', 'Thu May 03 2018 19:25:40 GMT 0500 (Pakistan Standard Time)'),
(3, 'JAA', '74200', '025', '520', 'JAA', 'JAA@ad.com', 'Thu May 03 2018 19:26:00 GMT 0500 (Pakistan Standard Time)'),
(4, 'TAA Minami Kyushu', '252', '585858', '2725725', 'TAA Minami Kyushu', 'taa@test.com', 'Thu May 03 2018 19:26:24 GMT 0500 (Pakistan Standard Time)'),
(5, 'TAA Shikoku', '789', '58768', '58353', 'TAA Shikoku', 'shikoku@test.com', 'Thu May 03 2018 19:26:44 GMT 0500 (Pakistan Standard Time)'),
(6, 'TAA Hiroshima', '712', '33873', '38383', 'TAA Hiroshima', 'Hiroshima@test.com', 'Thu May 03 2018 19:27:05 GMT 0500 (Pakistan Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `email` varchar(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` text,
  `port` varchar(100) DEFAULT NULL,
  `calculator` varchar(100) DEFAULT NULL,
  `salesuser` varchar(100) DEFAULT NULL,
  `currency` varchar(50) DEFAULT NULL,
  `showlcc` tinyint(1) DEFAULT NULL,
  `approval` varchar(10) DEFAULT NULL,
  `approvedby` varchar(100) DEFAULT NULL,
  `approvedon` varchar(500) DEFAULT NULL,
  `usercategory` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`email`, `fname`, `lname`, `password`, `country`, `city`, `company`, `phone`, `address`, `port`, `calculator`, `salesuser`, `currency`, `showlcc`, `approval`, `approvedby`, `approvedon`, `usercategory`) VALUES
('a@a.com', 'admin', 'master', '123', 'pakistan', 'karachi', 'rolvotech', '+923122491879', NULL, NULL, 'f-1', 'test1', NULL, 0, 'Pending', 'admin', 'Sat Mar 03 2018 10:11:07 GMT 0500 (Pakistan Standard Time)', 1),
('ab@a.com', 'raza', 'rauf', '123', 'pakistan', 'karachi', 'rolvotech', '03122491879', NULL, NULL, 'Default', 'test1', 'NZD', 1, 'Approved', 'admin', 'Wed Feb 28 2018 07:38:33 GMT 0500 (Pakistan Standard Time)', 2),
('haider@test.com', 'haider', '', '123', 'Pakistan', 'Karachi', 'Rolvotech', '0321', 'as', '74200', 'Default', NULL, 'JPY', 1, NULL, NULL, NULL, NULL),
('tahir@tahir.com', 'Tahir Jan', '', '123', 'Australia', 'Karachi', 'Integnxi', '03471232748', 'Localized Karachi', '74000', 'Default', 'test1', 'JPY', 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bagencycontactperson`
--

CREATE TABLE `bagencycontactperson` (
  `r_id` int(11) NOT NULL,
  `repname` varchar(100) NOT NULL,
  `mob` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `agencyid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bagencycontactperson`
--

INSERT INTO `bagencycontactperson` (`r_id`, `repname`, `mob`, `email`, `agencyid`) VALUES
(9, 'agent1_1', '0123', 'agent1@agent1.com', 2),
(8, 'agent2_2', '01234', 'agent2@agent2.com', 2),
(10, 'agent3_3', '0123456', 'agent3@agent3.com', 2),
(11, 'bagent1', '0123456', 'bagent1@bagency.com', 3);

-- --------------------------------------------------------

--
-- Table structure for table `bagencyservices`
--

CREATE TABLE `bagencyservices` (
  `bs_id` int(11) NOT NULL,
  `serviceid` int(11) NOT NULL,
  `agencyid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bagencyservices`
--

INSERT INTO `bagencyservices` (`bs_id`, `serviceid`, `agencyid`) VALUES
(4, 2, 3),
(3, 1, 2),
(5, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `b_id` int(11) NOT NULL,
  `prodid` varchar(100) NOT NULL,
  `landedvalue` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `for_user` varchar(100) NOT NULL,
  `estprice` varchar(50) NOT NULL,
  `bidmsg` text NOT NULL,
  `datetme` varchar(50) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`b_id`, `prodid`, `landedvalue`, `user_id`, `for_user`, `estprice`, `bidmsg`, `datetme`, `status`) VALUES
(42, '8cBDvjulNMNwR4', '', 'Finn', 'jerry', '720000', 'undefined', 'Thu May 03 2018 18:06:17 GMT 0500 (Pakistan Standa', 3),
(43, '80Hr2T69R0m0VP', '', 'Gary', 'jerry', '650000', 'undefined', 'Thu May 03 2018 18:06:38 GMT 0500 (Pakistan Standa', 3),
(44, 'nAWNcIKpG5LBLU', '', 'Finn', 'jerry', '2880000', 'undefined', 'Thu May 03 2018 18:07:26 GMT 0500 (Pakistan Standa', 3),
(45, 'AaTdIUt6TrtKhw', '', 'jerry', 'jerry', '220000', 'undefined', 'Thu May 03 2018 18:07:44 GMT 0500 (Pakistan Standa', 3),
(46, '23KiNatMbQMWU', '', 'Finn', 'jerry', '320000', 'undefined', 'Thu May 03 2018 18:08:43 GMT 0500 (Pakistan Standa', 3),
(47, '6UKQrr2qyUgQFO', '', 'Gary', 'jerry', '12000', 'undefined', 'Thu May 03 2018 18:09:01 GMT 0500 (Pakistan Standa', 3),
(48, '38JUgPEtQ2tJp', '', 'Finn', 'jerry', '45000', 'undefined', 'Thu May 03 2018 18:10:03 GMT 0500 (Pakistan Standa', 3),
(49, '2eJQVoTCIpCETDS', '', 'Gary', 'jerry', '35000', 'undefined', 'Thu May 03 2018 18:10:19 GMT 0500 (Pakistan Standa', 3),
(50, 'ftr2jkkIXQYM9', '', 'Gary', 'jerry', '15000', 'undefined', 'Thu May 03 2018 18:11:32 GMT 0500 (Pakistan Standa', 3),
(51, 'zXMEwkFI53e6ng', '', 'Finn', '', '190000', 'Bid Placed 1', 'Thu May 03 2018 18:23:03 GMT 0500 (Pakistan Standa', 3),
(52, 'ym6X1DVcx0ZQmK', '', 'Danny', '', '30000', 'undefined', 'Thu May 03 2018 19:10:19 GMT 0500 (Pakistan Standa', 0),
(53, 'kWJ28yQW2j8rL', '', 'Danny', '', '750000', 'undefined', 'Thu May 03 2018 19:12:14 GMT 0500 (Pakistan Standa', 3),
(54, '256bJdQqXMqsNK3', '', 'Danny', '', '15000', 'undefined', 'Thu May 03 2018 19:12:28 GMT 0500 (Pakistan Standa', 0),
(55, 'eSHeL4KR2P8jx', '', 'Danny', '', '15000', 'undefined', 'Thu May 03 2018 19:12:38 GMT 0500 (Pakistan Standa', 0),
(56, '6TOuMNbzeKMXT6', '', 'Danny', '', '25000', 'undefined', 'Thu May 03 2018 19:12:48 GMT 0500 (Pakistan Standa', 0),
(57, 'YEvOshGmCzvZCn', '', 'Kenny', '', '12000', 'undefined', 'Thu May 03 2018 19:16:18 GMT 0500 (Pakistan Standa', 0),
(58, 'YKR99jQ6sPmKN8', '', 'Kenny', '', '20000', 'undefined', 'Thu May 03 2018 19:16:27 GMT 0500 (Pakistan Standa', 0),
(59, '5G7CuSMPgA8YmX', '', 'Kenny', '', '160000', 'undefined', 'Thu May 03 2018 19:16:42 GMT 0500 (Pakistan Standa', 0),
(60, '7ERXyV1znCtMSe', '', 'Kenny', '', '525000', 'undefined', 'Thu May 03 2018 19:16:54 GMT 0500 (Pakistan Standa', 0),
(61, '2fnJcNYk8qn0orG', '', 'Kenny', '', '45000', 'undefined', 'Thu May 03 2018 19:17:05 GMT 0500 (Pakistan Standa', 0),
(62, '5FCmFXoeqRZ044', '', 'jerry', 'jerry', '20000', 'undefined', 'Thu May 03 2018 19:18:38 GMT 0500 (Pakistan Standa', 0),
(63, '6U4CHfSREKlX5w', '', 'jerry', 'jerry', '6000', 'undefined', 'Thu May 03 2018 19:18:49 GMT 0500 (Pakistan Standa', 0),
(64, '4Ooo0Qc0aRazG3', '', 'jerry', 'jerry', '25000', 'undefined', 'Thu May 03 2018 19:19:03 GMT 0500 (Pakistan Standa', 3),
(65, '5FpoKHEgmyHEi0', '', 'jerry', 'jerry', '45000', 'undefined', 'Thu May 03 2018 19:19:16 GMT 0500 (Pakistan Standa', 0),
(66, '686iCDqOwvDs5n', '', 'jerry', 'jerry', '50000', 'undefined', 'Thu May 03 2018 19:19:27 GMT 0500 (Pakistan Standa', 0),
(67, '0gLi6BTFLboh9', '', 'Finn', 'jerry', '5000', 'Bid placed', 'Sat May 12 2018 12:48:44 GMT 0500 (Pakistan Standa', 0),
(68, 'hDeapsu9YfenlKS', '', 'Gary', 'jerry', '5500', 'Test Bid placed', 'Sat May 12 2018 12:52:33 GMT 0500 (Pakistan Standa', 0),
(69, '0gLi6BTFLboh9', '', 'Gary', 'jerry', '6500', 'For Gary!', 'Sat May 12 2018 12:53:39 GMT 0500 (Pakistan Standa', 0),
(70, '4uq6t5v6XIh5RZ', '', 'Finn', '', '500000', 'test bid', 'Wed Jul 18 2018 06:42:07 GMT-0700 (Pacific Dayligh', 0),
(71, 'tBExh4bDNBbfABJ', '', 'Finn', '', '05', 'Test Bid 2', 'Wed Jul 18 2018 06:52:08 GMT-0700 (Pacific Dayligh', 1),
(72, 'sPCyR5zrZns4QHJ', '', 'Finn', '', '6', 'test bid 3', 'Wed Jul 18 2018 06:53:13 GMT-0700 (Pacific Dayligh', 1),
(73, 'trbUPFndvw7yO3', '', 'Durby', '', '250000', 'undefined', 'Thu Jul 19 2018 20:33:43 GMT 0500 (Pakistan Standa', 0),
(74, 'Zio6RmnM1akOIx', '', 'Durby', '', '375000', 'undefined', 'Thu Jul 19 2018 20:34:26 GMT 0500 (Pakistan Standa', 0),
(75, 'Z35HPyycpdRqQl', '', 'Durby', '', '175000', 'undefined', 'Thu Jul 19 2018 20:34:50 GMT 0500 (Pakistan Standa', 0),
(76, '3hwp2elM6DatTek', '', 'Durby', '', '120000', 'undefined', 'Thu Jul 19 2018 20:35:02 GMT 0500 (Pakistan Standa', 0),
(77, '3tgAeHcusoUXeQI', '', 'Durby', '', '220000', 'undefined', 'Thu Jul 19 2018 20:35:21 GMT 0500 (Pakistan Standa', 0),
(78, '0xjq0NyKkHf8hmc', '', 'Durby', '', '180000', 'undefined', 'Thu Jul 19 2018 20:35:31 GMT 0500 (Pakistan Standa', 0),
(79, '3hwR855dm8tknaF', '', 'Durby', '', '140000', 'undefined', 'Thu Jul 19 2018 20:35:42 GMT 0500 (Pakistan Standa', 0),
(80, 'RU6b7kUXNxhfl', '', 'Durby', '', '450000', 'Class A condition', 'Thu Jul 19 2018 20:40:43 GMT 0500 (Pakistan Standa', 0),
(81, '2RcGaug0pHsi9cq', '', 'Durby', '', '2275000', 'Latest', 'Thu Jul 19 2018 20:41:16 GMT 0500 (Pakistan Standa', 0),
(82, '3rp3eZqlEeMRWVK', '', 'Durby', '', '150000', 'undefined', 'Thu Jul 19 2018 20:41:30 GMT 0500 (Pakistan Standa', 0),
(83, '2LFEW3Ff6HluyU2', '', 'Durby', '', '45000', 'White and clean', 'Thu Jul 19 2018 20:41:52 GMT 0500 (Pakistan Standa', 0),
(84, '3uaLU962r1BV8wI', '', 'Durby', '', '655000', 'undefined', 'Thu Jul 19 2018 20:45:49 GMT 0500 (Pakistan Standa', 0),
(85, '24YojI6PZDsN76K', '', 'Durby', '', '225000', 'undefined', 'Thu Jul 19 2018 20:46:04 GMT 0500 (Pakistan Standa', 0),
(86, 't3UFv1U0yi8JaD', '', 'Durby', '', '105000', 'undefined', 'Thu Jul 19 2018 20:46:21 GMT 0500 (Pakistan Standa', 0),
(87, 'sTxkVNuSFxwXVM', '', 'Durby', '', '220000', 'undefined', 'Thu Jul 19 2018 20:46:40 GMT 0500 (Pakistan Standa', 0),
(88, 'sW8fZgjadJqu4y', '', 'Durby', '', '325000', 'undefined', 'Thu Jul 19 2018 20:46:50 GMT 0500 (Pakistan Standa', 0),
(89, '3th3kwUVITdNIN4', '', 'Durby', '', '185000', 'undefined', 'Thu Jul 19 2018 20:51:38 GMT 0500 (Pakistan Standa', 0),
(90, 'bhJGyQlf7Pof6h', '', 'Durby', '', '650000', 'undefined', 'Thu Jul 19 2018 20:51:59 GMT 0500 (Pakistan Standa', 0),
(91, 'Jd3YUKrr1YGp12', '', 'Durby', '', '450000', 'undefined', 'Thu Jul 19 2018 20:53:18 GMT 0500 (Pakistan Standa', 0),
(92, '0xcCKhO0kelcV5Z', '', 'Durby', '', '250000', 'undefined', 'Thu Jul 19 2018 20:53:34 GMT 0500 (Pakistan Standa', 0),
(93, 'E0tRGK8nEhH7Ov', '', 'Durby', '', '345000', 'undefined', 'Thu Jul 19 2018 20:54:58 GMT 0500 (Pakistan Standa', 0),
(94, 'JtOsMgIfXSN0Lq', '', 'Durby', '', '950000', 'undefined', 'Thu Jul 19 2018 20:55:41 GMT 0500 (Pakistan Standa', 0),
(95, '32yLvsVjfooRlxd', '', 'Durby', '', '65000', 'undefined', 'Thu Jul 19 2018 20:55:56 GMT 0500 (Pakistan Standa', 0),
(96, 'ayRQruB225CgJPC', '', 'Durby', '', '120000', 'undefined', 'Thu Jul 19 2018 20:56:11 GMT 0500 (Pakistan Standa', 0),
(97, '9U21DaYxLJqOkR', '', 'Durby', '', '85000', 'undefined', 'Thu Jul 19 2018 20:58:27 GMT 0500 (Pakistan Standa', 0),
(98, '7M8sUo3PbRNW9J', '', 'Durby', '', '450000', 'undefined', 'Thu Jul 19 2018 20:58:37 GMT 0500 (Pakistan Standa', 0),
(99, 'CoJhuIzymdJVJF', '', 'Durby', '', '550000', 'undefined', 'Thu Jul 19 2018 20:58:48 GMT 0500 (Pakistan Standa', 0),
(100, '7aGm1okWhpzVsAU', '', 'Finn', 'jerry', '200000', 'undefined', 'Thu Jul 26 2018 18:12:19 GMT 0500 (Pakistan Standa', 0),
(101, 'trbUPFndvw7yO4', '', 'Durby', '', '20000', 'undefined', 'Thu Jul 26 2018 23:08:47 GMT 0500 (Pakistan Standa', 3),
(102, 'tqhJaeuGwUpAVn', '', 'Durby', '', '225000', 'undefined', 'Thu Jul 26 2018 23:08:55 GMT 0500 (Pakistan Standa', 0),
(103, 'sAaUeNV7jX54Iq', '', 'Durby', '', '350000', 'undefined', 'Thu Jul 26 2018 23:09:04 GMT 0500 (Pakistan Standa', 3),
(104, 'VwPQPR3kHw9zd', '', 'Durby', '', '25000', 'undefined', 'Thu Jul 26 2018 23:09:22 GMT 0500 (Pakistan Standa', 3),
(105, 'VwPQPR3kHw9zd', '', 'Durby', '', '55000', 'undefined', 'Thu Jul 26 2018 23:09:31 GMT 0500 (Pakistan Standa', 0),
(106, 'VwPQPR3kHw9zd', '', 'Durby', '', '65000', 'undefined', 'Thu Jul 26 2018 23:09:49 GMT 0500 (Pakistan Standa', 0),
(107, 'c9kLjcjq0uSBC0', '', 'Durby', '', '55000', 'undefined', 'Thu Jul 26 2018 23:11:07 GMT 0500 (Pakistan Standa', 3),
(108, '2vdF8odjrkbYhvO', '', 'Durby', '', '550000', 'undefined', 'Thu Jul 26 2018 23:12:13 GMT 0500 (Pakistan Standa', 3),
(109, 'YV8w0tCWaZVtqg', '', 'Durby', '', '32000', 'undefined', 'Thu Jul 26 2018 23:12:21 GMT 0500 (Pakistan Standa', 3),
(110, '5jkp4HtbaYeJqT', '', 'Durby', '', '200000', 'undefined', 'Thu Jul 26 2018 23:12:34 GMT 0500 (Pakistan Standa', 0),
(111, 'J1OroozeHjOYid', '', 'Durby', '', '55000', 'undefined', 'Thu Jul 26 2018 23:13:16 GMT 0500 (Pakistan Standa', 0),
(112, 'cRaKE4PQhZkrE1E', '', 'Durby', '', '360000', 'undefined', 'Thu Jul 26 2018 23:13:23 GMT 0500 (Pakistan Standa', 0),
(113, '3th3kwUVITdNIN5', '', 'Ibad', '', '50000', 'undefined', 'Thu Jul 26 2018 23:15:51 GMT 0500 (Pakistan Standa', 0),
(114, '3xcwxbnndR7bmim', '', 'Ibad', '', '1850000', 'undefined', 'Thu Jul 26 2018 23:16:01 GMT 0500 (Pakistan Standa', 0),
(115, 'cTj58D9fWI6CELy', '', 'Ibad', '', '18000', 'undefined', 'Thu Jul 26 2018 23:16:09 GMT 0500 (Pakistan Standa', 3),
(116, '5eEUZgN2eCma', '', 'test', '', '400000', 'need this car!', 'Fri Jul 27 2018 06:43:34 GMT-0700 (Pacific Dayligh', 3),
(117, 'T5zWQu2g7Bks', '', 'test', '', '5', 'testing email', 'Fri Jul 27 2018 06:54:18 GMT-0700 (Pacific Dayligh', 3),
(118, '5eEUZgw45lWk', '', 'Ibad', '', '20000', 'undefined', 'Sat Jul 28 2018 00:32:59 GMT 0500 (Pakistan Standa', 0),
(119, '7aCJfIBq0l1FdBJ', '', 'Ibad', '', '250000', 'undefined', 'Sat Jul 28 2018 00:33:11 GMT 0500 (Pakistan Standa', 0),
(120, 'PMnw3u82zWiK', '', 'Durby', '', '115000', 'undefined', 'Sat Jul 28 2018 00:35:16 GMT 0500 (Pakistan Standa', 0),
(121, '7aCJfIBq8fY0FqH', '', 'Durby', '', '25000', 'undefined', 'Sat Jul 28 2018 00:35:24 GMT 0500 (Pakistan Standa', 0),
(122, '7aDblyjRpPjvHy5', '', 'Durby', '', '450000', 'undefined', 'Sat Jul 28 2018 00:35:31 GMT 0500 (Pakistan Standa', 0),
(123, 'ufJBTFryfRcoA', '', 'Durby', '', '350000', 'undefined', 'Sat Jul 28 2018 00:37:50 GMT 0500 (Pakistan Standa', 0),
(124, 'y6scSVxx9p9cG', '', 'Durby', '', '600000', 'undefined', 'Sat Jul 28 2018 00:37:57 GMT 0500 (Pakistan Standa', 0),
(125, 'qbIEACz99Nwi1wF', '', 'Durby', '', '75000', 'undefined', 'Sat Jul 28 2018 00:39:09 GMT 0500 (Pakistan Standa', 0),
(126, '531seAypkRiPIq', '', 'Durby', '', '20000', 'undefined', 'Sat Jul 28 2018 00:39:15 GMT 0500 (Pakistan Standa', 3),
(127, '9om0Tuj8Vcxjjm', '', 'Durby', '', '87000', 'undefined', 'Sat Jul 28 2018 00:39:26 GMT 0500 (Pakistan Standa', 3),
(128, 'IJARH0R95vQceU', '', 'Durby', '', '420000', 'undefined', 'Mon Jul 30 2018 14:57:36 GMT 0500 (Pakistan Standa', 3),
(129, '3ACbTvSKvWabih', '', 'Durby', '', '275000', 'undefined', 'Mon Jul 30 2018 14:57:48 GMT 0500 (Pakistan Standa', 3),
(130, 'xPYyZs0Bz1oI5k', '', 'Durby', '', '1050000', 'undefined', 'Mon Jul 30 2018 14:58:18 GMT 0500 (Pakistan Standa', 3),
(131, 'YYDMRAh61xc9fT', '', 'Durby', '', '6850000', 'undefined', 'Mon Jul 30 2018 14:58:33 GMT 0500 (Pakistan Standa', 0),
(132, 'iN0kkpOJD5U3I', '', 'Durby', '', '875000', 'undefined', 'Mon Jul 30 2018 14:58:49 GMT 0500 (Pakistan Standa', 0),
(133, '0Pl6sjaMWap7b', '', 'Durby', '', '150000', 'undefined', 'Mon Jul 30 2018 15:00:03 GMT 0500 (Pakistan Standa', 0),
(134, 'IPu6xtzAGbx2fK', '', 'Durby', '', '550000', 'undefined', 'Mon Jul 30 2018 15:00:13 GMT 0500 (Pakistan Standa', 3),
(135, '2t4NzSoIMHfRCb', '', 'Durby', '', '20000', 'undefined', 'Mon Jul 30 2018 15:00:25 GMT 0500 (Pakistan Standa', 0),
(136, '4Q0f7pM2bacf6bP', '', 'Durby', '', '650000', 'undefined', 'Mon Jul 30 2018 15:00:40 GMT 0500 (Pakistan Standa', 0),
(137, '2uRUBlOcFQI9nxb', '', 'Durby', '', '20000', 'undefined', 'Thu Aug 02 2018 21:59:08 GMT 0500 (Pakistan Standa', 0),
(138, '2L3eKtiYWTYWOlB', '', 'Durby', '', '1250000', 'undefined', 'Thu Aug 02 2018 22:00:51 GMT 0500 (Pakistan Standa', 0),
(139, '29EoxyPibHHSzj8', '', 'Durby', '', '450000', 'undefined', 'Thu Aug 02 2018 22:01:23 GMT 0500 (Pakistan Standa', 0),
(140, '2uTIYGFXJNVwjix', '', 'Durby', '', '650000', 'undefined', 'Thu Aug 02 2018 22:02:16 GMT 0500 (Pakistan Standa', 0),
(141, 'Ejg0B9WJoitWP', '', 'Durby', '', '1150000', 'undefined', 'Thu Aug 02 2018 22:02:24 GMT 0500 (Pakistan Standa', 3),
(142, 'vfntglCXjmP94', '', 'Durby', '', '950000', 'undefined', 'Thu Aug 02 2018 22:03:30 GMT 0500 (Pakistan Standa', 3),
(143, 'MV41dv12anEPg', '', 'Durby', '', '325000', 'undefined', 'Thu Aug 02 2018 22:03:44 GMT 0500 (Pakistan Standa', 0),
(144, '2uKF71laq2QAEtL', '', 'Durby', '', '155000', 'undefined', 'Thu Aug 02 2018 22:03:58 GMT 0500 (Pakistan Standa', 0),
(145, '54JqfXFoPihof', '', 'Durby', '', '320000', 'undefined', 'Thu Aug 02 2018 22:04:14 GMT 0500 (Pakistan Standa', 0),
(146, '2mItTQf1oVYeSx', '', 'Durby', '', '75000', 'undefined', 'Thu Aug 02 2018 22:05:32 GMT 0500 (Pakistan Standa', 0),
(147, '2fz4yETjM6gFprx', '', 'Durby', '', '220000', 'undefined', 'Thu Aug 02 2018 22:06:11 GMT 0500 (Pakistan Standa', 0),
(148, 'y4zo1XlB4LH9k8', '', 'Durby', '', '35000', 'undefined', 'Thu Aug 02 2018 22:06:31 GMT 0500 (Pakistan Standa', 3),
(149, 'rweX4UkzESGiyge', '', 'Ibad', '', '1250000', 'undefined', 'Thu Aug 02 2018 22:13:06 GMT 0500 (Pakistan Standa', 0),
(150, '4UTMgBnPISyNepg', '', 'Ibad', '', '70000', 'undefined', 'Sat Aug 04 2018 08:03:48 GMT 0500 (Pakistan Standa', 3),
(151, 'hs7XhJhfsOSQPzW', '', 'Ibad', '', '80000', 'undefined', 'Sat Aug 04 2018 08:04:06 GMT 0500 (Pakistan Standa', 3),
(152, 'xXWtgWVdLpcMH', '', 'Durby', '', '220000', 'undefined', 'Sat Aug 11 2018 15:31:15 GMT 0500 (Pakistan Standa', 0),
(153, 'G8DuaRI2eDTIN', '', 'Durby', '', '75000', 'undefined', 'Sat Aug 11 2018 15:31:26 GMT 0500 (Pakistan Standa', 0),
(154, '7tnSwboLFQ0wuI', '', 'Durby', '', '850000', 'undefined', 'Sat Aug 11 2018 15:31:41 GMT 0500 (Pakistan Standa', 3),
(155, '5G43EF45iMKcN7', '', 'Durby', '', '1500000', 'undefined', 'Sat Aug 11 2018 15:32:31 GMT 0500 (Pakistan Standa', 0),
(156, '2Aj3BX6oxXmuO2E', '', 'Durby', '', '140000', 'BUY ONLY ONE VITZ', 'Wed Sep 19 2018 12:59:59 GMT 0900 (Japan Standard ', 3),
(157, '2FtRewyKPPTm3jU', '', 'Durby', '', '650000', 'undefined', 'Wed Sep 19 2018 13:00:48 GMT 0900 (Japan Standard ', 0),
(158, '2uYI1RyNFt5W6bb', '', 'Durby', '', '130000', 'BUY ONLY ONE VITZ', 'Wed Sep 19 2018 13:01:18 GMT 0900 (Japan Standard ', 0),
(159, '0WXgzG86ORiHF', '', 'Durby', '', '1800000', 'BUY ONLY 2 HIACES', 'Wed Sep 19 2018 13:05:43 GMT 0900 (Japan Standard ', 3),
(160, '0owL40I7mruAnTu', '', 'Durby', '', '1600000', 'BUY ONLY 2 HIACES', 'Wed Sep 19 2018 13:06:52 GMT 0900 (Japan Standard ', 0),
(161, '5vPfYoVeaHvpB', '', 'Durby', '', '1200000', 'BUY ONLY 2 HIACES', 'Wed Sep 19 2018 13:08:19 GMT 0900 (Japan Standard ', 0),
(162, '97jcdCr0jF4pS4O', '', 'Durby', '', '1300000', 'BUY ONLY 2 HIACES', 'Wed Sep 19 2018 13:08:47 GMT 0900 (Japan Standard ', 3),
(163, 'lpcv8e7e04ixI1', '', 'Durby', '', '1000000', 'BUY ONLY 2 HIACES', 'Wed Sep 19 2018 13:09:23 GMT 0900 (Japan Standard ', 3),
(164, 'ap47i8nA8HME1', '', 'Durby', '', '30000', 'ONE ONLY IST', 'Wed Sep 19 2018 13:10:15 GMT 0900 (Japan Standard ', 3),
(165, '2rfqf1DED1ZOmW', '', 'Durby', '', '2100000', '2 PRADO ONLY', 'Wed Sep 19 2018 13:10:58 GMT 0900 (Japan Standard ', 3),
(166, 'YQWbGoNyK3q6OQ', '', 'Durby', '', '2500000', '2 PRADO ONLY', 'Wed Sep 19 2018 13:11:39 GMT 0900 (Japan Standard ', 3),
(167, '2eW6sVfuUNqxtvZ', '', 'Durby', '', '1800000', '2 PRADO ONLY', 'Wed Sep 19 2018 13:12:25 GMT 0900 (Japan Standard ', 3),
(168, 'IBTgvYnBOBgpxH', '', 'Durby', '', '2700000', '2 PRADO ONLY', 'Wed Sep 19 2018 13:15:19 GMT 0900 (Japan Standard ', 3),
(169, 'IAwZ1P4OgEv6MP', '', 'Durby', '', '120000', '3 VITZS ONLY', 'Wed Sep 19 2018 13:16:29 GMT 0900 (Japan Standard ', 0),
(170, '7X7cTdtbXo1yRJ', '', 'Durby', '', '350000', '3 VITZS ONLY', 'Wed Sep 19 2018 13:16:52 GMT 0900 (Japan Standard ', 3),
(171, 'YYoEX8zMDlJT0E', '', 'Durby', '', '450000', '3 VITZS ONLY', 'Wed Sep 19 2018 13:17:21 GMT 0900 (Japan Standard ', 0),
(172, '2EOCFCkJDmek6H6', '', 'Durby', '', '450000', '3 VITZS ONLY', 'Wed Sep 19 2018 13:18:35 GMT 0900 (Japan Standard ', 0),
(173, '37zC4GCZHEhiBiV', '', 'Durby', '', '450000', 'nice car. i want!', 'Mon Oct 08 2018 09:24:41 GMT 0500 (Pakistan Standa', 0),
(174, '8IgQJ8YJC6hhyhQ', '', 'test', '', '150000', 'I want this car', 'Thu Oct 11 2018 21:43:00 GMT 0500 (Pakistan Standa', 0);

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `b_no` int(11) NOT NULL,
  `yardid` int(11) NOT NULL,
  `drainageyard` int(11) NOT NULL,
  `bagencyid` int(11) NOT NULL,
  `routeid` int(11) NOT NULL,
  `bookingno` varchar(100) NOT NULL,
  `confirmedon` varchar(100) NOT NULL,
  `shipmentype` varchar(20) NOT NULL,
  `contype` varchar(100) NOT NULL,
  `cargotype` text NOT NULL,
  `conditiontype` text NOT NULL,
  `qty` int(11) NOT NULL,
  `yardopen` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `dco` varchar(100) NOT NULL,
  `yco` varchar(100) NOT NULL,
  `dft` text NOT NULL,
  `dmft` text NOT NULL,
  `insid` int(11) NOT NULL,
  `penaltyfree` varchar(100) NOT NULL,
  `reciepturl` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`b_no`, `yardid`, `drainageyard`, `bagencyid`, `routeid`, `bookingno`, `confirmedon`, `shipmentype`, `contype`, `cargotype`, `conditiontype`, `qty`, `yardopen`, `address`, `dco`, `yco`, `dft`, `dmft`, `insid`, `penaltyfree`, `reciepturl`) VALUES
(18, 4, 15, 0, 5, 'book-lp-09', '10/08/2018', 'CONTAINER', '40FTHQ', 'Vehicle,Machinery', 'New,Used,Dismantle', 3, '10/08/2018', 'Local Street, Yokohama', '10/12/2018', '10/13/2018', '7 Days', '8 Days', 3, 'N/A', ''),
(17, 3, 15, 3, 23, 'book-9872', '09/20/2018', 'RORO', '40FTHQ', '', '', 5, 'undefined', 'RORO Address', '09/22/2018', '09/29/2018', '7 Days', '8 Days', 1, 'Untill Arrival', 'http://shinchuo-test2.com/shinchouadmin/webservices/booking/reciepts/ajaxloader.gif'),
(16, 15, 15, 3, 3, 'book-0123', '09/21/2018', 'CONTAINER', '20FTHQ', 'Machinery,Vehicle', 'New,Used,Dismantle', 7, '09/22/2018', 'uuuyyhjsajdkj', '09/22/2018', '09/27/2018', '7 Days', '8 days', 2, 'N/A', 'http://shinchuo-test2.com/shinchouadmin/webservices/booking/reciepts/ajaxloader.gif'),
(15, 11, 15, 2, 3, '56', '09/21/2018', 'CONTAINER', '40FTHQ', 'Vehicle,Machinery', 'New,Used', 5, '09/20/2018', 'yokohama', '09/21/2018', '09/28/2018', '7', '8', 1, 'N/A', 'http://shinchuo-test2.com/shinchouadmin/webservices/booking/reciepts/ajaxloader.gif');

-- --------------------------------------------------------

--
-- Table structure for table `bookingagent`
--

CREATE TABLE `bookingagent` (
  `s_id` int(11) NOT NULL,
  `sname` varchar(100) DEFAULT NULL,
  `branch` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `fax` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `statustime` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookingagent`
--

INSERT INTO `bookingagent` (`s_id`, `sname`, `branch`, `address`, `tel`, `fax`, `email`, `statustime`, `status`) VALUES
(2, 'YCS Kobe', 'Hakoma', 'Street # etc, Near Something, Area', '055-287-9715', '055-287-9711', 'bagent2@agency.com', 'Wed Sep 12 2018 21:57:26 GMT 0500 (Pakistan Standard Time)', 1),
(3, 'Partner Shipping', 'Japan', 'Street No. 234, Japan', '092321282329', '000-111-222', 'bagency@shinchou.com', 'Wed Sep 12 2018 22:21:37 GMT 0500 (Pakistan Standard Time)', 1);

-- --------------------------------------------------------

--
-- Table structure for table `bookingservices`
--

CREATE TABLE `bookingservices` (
  `ys_id` int(11) NOT NULL,
  `servicename` varchar(100) NOT NULL,
  `approval` int(11) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookingservices`
--

INSERT INTO `bookingservices` (`ys_id`, `servicename`, `approval`, `generatedby`) VALUES
(1, 'RORO Booking', 1, 'admin'),
(2, 'Container Booking', 1, 'admin'),
(3, 'BL Original Delivery', 0, 'admin'),
(4, 'BL Pick-up', 0, 'admin'),
(5, 'BL Surrender', 0, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `booking_freight`
--

CREATE TABLE `booking_freight` (
  `bf_id` int(11) NOT NULL,
  `freight` int(11) NOT NULL,
  `unit` varchar(50) NOT NULL,
  `currency` varchar(50) NOT NULL,
  `bookingid` int(11) NOT NULL,
  `ranges` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking_freight`
--

INSERT INTO `booking_freight` (`bf_id`, `freight`, `unit`, `currency`, `bookingid`, `ranges`) VALUES
(12, 12, 'm3', 'JPY', 17, '10 ~ 20'),
(11, 45, '/CNTR', 'JPY', 16, ''),
(9, 65, '/CNTR', 'NZD', 15, ''),
(8, 54, '/CNTR', 'JPY', 15, ''),
(7, 33, '/CNTR', 'USD', 15, ''),
(15, 34, 'm3', 'JPY', 17, '50 ~ 20'),
(18, 65, '/CNT', 'USD', 18, ''),
(17, 36, '/PKG', 'USD', 16, ' ~ ');

-- --------------------------------------------------------

--
-- Table structure for table `booking_payment`
--

CREATE TABLE `booking_payment` (
  `bp_id` int(11) NOT NULL,
  `chargeid` int(11) NOT NULL,
  `selectopt` varchar(50) NOT NULL,
  `bookingid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking_payment`
--

INSERT INTO `booking_payment` (`bp_id`, `chargeid`, `selectopt`, `bookingid`) VALUES
(6, 2, 'Collect', 15),
(5, 1, 'N/A', 15),
(7, 1, 'Collect', 16),
(8, 2, 'Prepaid', 16),
(9, 1, 'Collect', 17),
(10, 1, 'Collect', 18),
(11, 2, 'Prepaid', 18);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL,
  `cat` varchar(100) NOT NULL,
  `createdon` varchar(500) NOT NULL,
  `createdby` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat`, `createdon`, `createdby`) VALUES
(1, 'Premium', '', ''),
(2, 'Professional', '', ''),
(3, 'asd', 'admin', 'Fri Mar 02 2018 22:38:50 GMT 0500 (Pakistan Standard Time)'),
(4, 'das', 'admin', 'Fri Mar 02 2018 22:40:01 GMT 0500 (Pakistan Standard Time)'),
(5, 'fcv', 'admin', 'Fri Mar 02 2018 22:40:05 GMT 0500 (Pakistan Standard Time)'),
(6, 'dsa', 'admin', 'Sat Mar 03 2018 10:35:42 GMT 0500 (Pakistan Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `clientgroup`
--

CREATE TABLE `clientgroup` (
  `g_id` int(11) NOT NULL,
  `gname` varchar(100) NOT NULL,
  `emails` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `salesuser` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clientgroup`
--

INSERT INTO `clientgroup` (`g_id`, `gname`, `emails`, `status`, `salesuser`) VALUES
(1, 'test', '[\"asd@ad.com\",\"asd@asd.com\"]', 1, ''),
(2, 'test2', '[\"asd@ad.com\"]', 1, 'test1'),
(3, 'test1', '[\"asd@ad.com\",\"asd@asd.com\",\"test1@test.com\"]', 1, 'test1'),
(4, 'fdsaf', '[\"asd@ad.com\"]', 0, 'test1'),
(5, 'asd', '[\"asd@ad.com\",\"asd@asd.com\"]', 1, 'test1'),
(6, 'abc', '[\"ADEEL@SHINCHUO.COM\"]', 0, 'NEW COW'),
(7, 'test', '[\"sales1@test.com\"]', 1, 'jerry');

-- --------------------------------------------------------

--
-- Table structure for table `consigneeclients`
--

CREATE TABLE `consigneeclients` (
  `c_id` int(11) NOT NULL,
  `clid` varchar(100) NOT NULL,
  `scid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consigneeclients`
--

INSERT INTO `consigneeclients` (`c_id`, `clid`, `scid`) VALUES
(1, 'Danny', 2),
(14, 'Gary', 9),
(3, 'Danny', 3),
(12, 'Finn', 7),
(5, 'Finn', 3),
(6, 'Danny', 5),
(7, 'Finn', 5),
(8, 'Danny', 7),
(9, 'Durby', 7),
(10, 'Durby', 8),
(13, 'Finn', 2);

-- --------------------------------------------------------

--
-- Table structure for table `consigneedestination`
--

CREATE TABLE `consigneedestination` (
  `d_id` int(11) NOT NULL,
  `portid` int(11) NOT NULL,
  `scid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consigneedestination`
--

INSERT INTO `consigneedestination` (`d_id`, `portid`, `scid`) VALUES
(6, 2, 3),
(5, 1, 3),
(3, 1, 5),
(4, 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `consigneevehicles`
--

CREATE TABLE `consigneevehicles` (
  `v_id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `scid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consigneevehicles`
--

INSERT INTO `consigneevehicles` (`v_id`, `pid`, `scid`) VALUES
(6, 28, 6),
(5, 35, 4),
(4, 34, 4),
(7, 36, 8),
(11, 44, 9),
(10, 39, 8);

-- --------------------------------------------------------

--
-- Table structure for table `containercharge`
--

CREATE TABLE `containercharge` (
  `c_id` int(11) NOT NULL,
  `charge` varchar(100) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `containercharge`
--

INSERT INTO `containercharge` (`c_id`, `charge`, `generatedby`) VALUES
(1, 'Freight', 'admin'),
(2, 'BL Issue', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `custommake`
--

CREATE TABLE `custommake` (
  `cid` int(11) NOT NULL,
  `country` varchar(100) NOT NULL,
  `makelist` text NOT NULL,
  `otherlist` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `custommake`
--

INSERT INTO `custommake` (`cid`, `country`, `makelist`, `otherlist`) VALUES
(2, 'Afghanistan', '[\"HONDA\",\"TOYOTA\",\"MITSUBISHI\",\"MAZDA\",\"MINI\"]', '[\"DAIHATSU\",\"DODGE\",\"JAGUAR\",\"ISUZU\"]'),
(3, 'Algeria', '[\"VOLVO\",\"TOYOTA\",\"LEXUS\"]', '[\"MINI\",\"MITSUBISHI\",\"NISSAN\",\"INFINITI\",\"YAMAHA\"]'),
(4, 'New Zealand', '[\"TOYOTA\",\"NISSAN\",\"MAZDA\",\"MITSUBISHI\",\"HONDA\",\"SUBARU\",\"SUZUKI\",\"ISUZU\",\"DAIHATSU\",\"AUDI\",\"BMW\",\"MERCEDES BENZ\",\"VOLKSWAGEN\",\"VOLVO\",\"PEUGEOT\",\"JAGUAR\",\"FORD\",\"LEXUS\",\"LAND ROVER\",\"RENAULT\",\"OPEL\",\"CITROEN\",\"FIAT\",\"CHEVROLET\",\"DODGE\",\"CHRYSLER\",\"CADILLAC\",\"BUICK\",\"LINCOLN\",\"HUMMER\",\"BENTLEY\",\"FERRARI\",\"LAMBORGHINI\",\"LOTUS\",\"MASERATI\",\"ROLLS ROYCE\"]', '[]');

-- --------------------------------------------------------

--
-- Table structure for table `custommodel`
--

CREATE TABLE `custommodel` (
  `c_id` int(11) NOT NULL,
  `country` varchar(100) NOT NULL,
  `make` varchar(100) NOT NULL,
  `modellist` text NOT NULL,
  `otherlist` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `custommodel`
--

INSERT INTO `custommodel` (`c_id`, `country`, `make`, `modellist`, `otherlist`) VALUES
(1, 'Afghanistan', 'HONDA', '[\"CAPA\",\"ACCORD WAGON\",\"DOMANI\"]', '[\"AIRWAVE\",\"ACTY VAN\"]'),
(2, 'Afghanistan', 'TOYOTA', '[\"ALLION\",\"ALPHARD\"]', '[\"ARISTO\",\"BB\",\"C-HR\"]'),
(3, 'New Zealand', 'HONDA', '[\"ACCORD\",\"ACCORD COUPE\",\"ACCORD HYBRID\",\"ACCORD WAGON\",\"ACTY TRUCK\",\"ACTY VAN\",\"AIRWAVE\",\"AVANCIER\",\"BEAT\",\"CIVIC\",\"CIVIC HYBRID\",\"CIVIC WAGON\",\"CR-V\",\"CR-Z\",\"CROSSROAD\",\"EDIX\",\"ELEMENT\",\"ELYSION\",\"FIT\",\"HONDA\",\"HR-V\",\"INSIGHT\",\"INSPIRE\",\"INTEGRA\",\"LEGEND\",\"MDX\",\"MOBILIO\",\"MOBILIO SPIKE\",\"NSX\",\"ODYSSEY\",\"ODYSSEY HYBRID\",\"OTHER\",\"OTHERS\",\"PRELUDE\",\"S-MX\",\"S2000\",\"S660\",\"SHUTTLE\",\"SPIKE\",\"STEP WAGON\",\"STEPWGN\",\"STREAM\",\"TORNEO\",\"VEZEL\",\"Z\"]', '[]'),
(4, 'New Zealand', 'TOYOTA', '[\"ALLEX\",\"ALPHARD\",\"ALTEZZA\",\"ALTEZZA WAGON\",\"86\",\"ARISTO\",\"AQUA\",\"AURIS\",\"AVENSIS SEDAN\",\"AVENSIS WAGON\",\"BB\",\"BELTA\",\"BLADE\",\"C-HR\",\"CALDINA\",\"CALDINA VAN\",\"CAMI\",\"CAMROAD\",\"CAMRY\",\"CARIB\",\"CAVALIER\",\"CELICA\",\"CELSIOR\",\"CENTURY\",\"CHASER\",\"COASTER\",\"COROLLA\",\"COROLLA AXIO\",\"COROLLA FIELDER\",\"COROLLA LEVIN\",\"COROLLA RUMION\",\"COROLLA RUNX\",\"COROLLA SPACIO\",\"COROLLA TOURING WAGON\",\"COROLLA VAN\",\"CORONA\",\"CORONA PREMIO\",\"CORONA VAN\",\"CROWN\",\"CROWN COMFORT\",\"CROWN ESTATE\",\"CROWN WAGON\",\"CURREN\",\"DELIBOY\",\"DYNA\",\"EMINA\",\"ESTIMA\",\"ESTIMA HYBRID\",\"FJ CRUISER\",\"FUN CARGO\",\"FUNCARGO\",\"GAIA\",\"GRANVIA\",\"HARRIER\",\"HIACE\",\"HIACE REGIUS\",\"HIACE TRUCK\",\"HIACE VAN\",\"HILUX\",\"HILUX SURF\",\"IPSUM\",\"IQ\",\"ISIS\",\"IST\",\"JPN TAXI\",\"KLUGER\",\"LAND CRUISER\",\"LAND CRUISER PRADO\",\"LEXUS LC\",\"LITE ACE NOAH\",\"LITE ACE TRUCK\",\"LITE ACE VAN\",\"LITE ACE WAGON\",\"LITEACE VAN\",\"LUCIDA\",\"MARK II\",\"MARK II BLIT\",\"MARK II QUALIS\",\"MARK II VAN\",\"MARK II WAGON\",\"MARK X\",\"MARK X ZIO\",\"MR-S\",\"MR2\",\"NOAH\",\"OPA\",\"OTHER\",\"PASSO\",\"PASSO SETTE\",\"PIXIS MEGA\",\"PLATZ\",\"PORTE\",\"PREMIO\",\"PRIUS\",\"PRIUS ALPHA\",\"PRIUS PHV\",\"PROBOX\",\"PROBOX VAN\",\"PROGRES\",\"RACTIS\",\"RAUM\",\"RAV4\",\"REGIUS\",\"REGIUS ACE\",\"REGIUS ACE COMMUTER\",\"REGIUS VAN\",\"RUSH\",\"SAI\",\"SIENTA\",\"SOARER\",\"SOLARA\",\"SPRINTER\",\"SPRINTER CARIB\",\"STARLET\",\"SUCCEED\",\"SUCCEED VAN\",\"SUPRA\",\"TANK\",\"TERCEL\",\"TOWN ACE\",\"TOWN ACE NOAH\",\"TOWN ACE TRUCK\",\"TOWN ACE VAN\",\"TOWN ACE WAGON\",\"TOYOACE\",\"TOYOTA\",\"TOYOTA FORKLIFT\",\"TOYOTA WHEELLOADER\",\"TUNDRA\",\"VANGUARD\",\"VELLFIRE\",\"VELLFIRE HYBRID\",\"VEROSSA\",\"VISTA\",\"VISTA ARDEO\",\"VITZ\",\"VOLTZ\",\"VOXY\",\"WILL\",\"WILL VI\",\"WILL VS\",\"WINDOM\",\"WISH\"]', '[]'),
(5, 'New Zealand', 'SUZUKI', '[\"BALENO\",\"CAPPUCCINO\",\"CARRY TRUCK\",\"CULTUS\",\"ESCUDO\",\"EVERY\",\"EVERY LANDY\",\"EVERY WAGON\",\"GRAND ESCUDO\",\"IGNIS\",\"JIMNY\",\"JIMNY SIERRA\",\"JIMNY WIDE\",\"KIZASHI\",\"SX-4\"]', '[]'),
(6, 'New Zealand', 'NISSAN', '[\"180 SX\",\"AD\",\"ARMADA\",\"ATLAS\",\"AVENIR\",\"BLUEBIRD\",\"BLUEBIRD SYLPHY\",\"CARAVAN\",\"CARAVAN BUS\",\"CEDRIC\",\"CEDRIC VAN\",\"CEDRIC WAGON\",\"CEFIRO\",\"CIMA\",\"CIVILIAN\",\"CLIPPER TRUCK\",\"CLIPPER VAN\",\"CROSSOVER\",\"CUBE\",\"DATSUN\",\"DATSUN PICKUP\",\"DUALIS\",\"ELGRAND\",\"EXPERT\",\"FAIRLADYZ\",\"FIGARO\",\"FUGA\",\"FUGA HYBRID\",\"GLORIA\",\"GLORIA VAN\",\"GLORIA WAGON\",\"GT-R\",\"HOMY\",\"HOMY VAN\",\"JUKE\",\"LAFESTA\",\"LARGO\",\"LATIO\",\"LAUREL\",\"LEAF\",\"LIBERTY\",\"LUCINO\",\"MARCH\",\"MAXIMA\",\"MICRA\",\"MURANO\",\"NISSAN BUS\",\"NISSAN FORKLIFT\",\"NISSAN TRUCK\",\"NOTE\",\"NT100 CLIPPER\",\"NV200\",\"NV350 CARAVAN\",\"OTHERS\",\"PRAIRIE\",\"PRESAGE\",\"PRESEA\",\"PRESIDENT\",\"PRIMERA WAGON\",\"PULSAR\",\"R NESSA\",\"RASHEEN\",\"SERENA\",\"SILVIA\",\"SIVILIAN\",\"SKYLINE\",\"SKYLINE CROSSOVER\",\"STAGEA\",\"SUNNY\",\"SUNNY TRUCK\",\"TEANA\",\"TERRANO\",\"TERRANO REGULUS\",\"TIIDA\",\"TIIDA LATIO\",\"TINO\",\"VANETTE TRUCK\",\"VANETTE VAN\",\"WINGROAD\",\"X-TRAIL\"]', '[]'),
(7, 'New Zealand', 'MAZDA', '[\"\",\"ATENZA SEDAN\",\"ATENZA SPORT\",\"ATENZA WAGON\",\"AXELA\",\"AZ WAGON\",\"BIANTE\",\"BONGO\",\"BONGO BRAWNY AFT\",\"BONGO BRAWNY TRUCK\",\"BONGO BRAWNY VAN\",\"BONGO FRIENDEE\",\"BONGO VAN\",\"CAPELLA\",\"CAPELLA WAGON\",\"CX-3\",\"CX-5\",\"CX-7\",\"DEMIO\",\"EUNOS ROADSTER\",\"FAMILIA\",\"FAMILIA S WAGON\",\"FAMILIA VAN\",\"MPV\",\"PREMACY\",\"PROCEED\",\"ROADSTER\",\"RX-7\",\"RX-8\",\"SCRUM TRUCK\",\"TITAN\",\"TRIBUTE\",\"VERISA\"]', '[]'),
(8, 'New Zealand', 'SUBARU', '[\"ALCYONE SVX\",\"BRZ\",\"CHIFFON\",\"EXIGA\",\"FORESTER\",\"IMPREZA\",\"IMPREZA ANESIS\",\"IMPREZA G4\",\"IMPREZA SPORT\",\"IMPREZA SPORT WAGON\",\"IMPREZA XV\",\"LEGACY\",\"LEGACY B4\",\"LEVORG\",\"OTHERS\",\"OUTBACK\",\"R1\",\"R2\",\"SUBARU XV\",\"TRAVIQ\",\"TREZIA\",\"WRX\",\"WRX S4\",\"WRX STI\"]', '[]'),
(9, 'New Zealand', 'ISUZU', '[\"BELLETT\",\"BIGHORN\",\"COMO\",\"CUBIC\",\"ELF\",\"ELF TRUCK\",\"FARGO FILLY\",\"FORWARD\",\"FOSTER RODEO\",\"ISUZU TRUCK\",\"WIZARD\"]', '[]'),
(10, 'New Zealand', 'DAIHATSU', '[\"ATRAI\",\"ATRAI 7\",\"ATRAI WAGON\",\"BE GO\",\"BEGO\",\"CHARADE\",\"CHARADE DE TOMASO\",\"COPEN\",\"DELTA TRUCK\",\"DELTA VAN\",\"DELTA WIDE WAGON\",\"HIJET\",\"HIJET CADDIE\",\"HIJET TRUCK\",\"HIJET VAN\",\"MEBIUS\",\"MIDGET II\",\"MIRA\",\"MIRA E S\",\"NAKED\",\"OTHERS\",\"PYZAR\",\"TANTO\",\"TANTO EXE\",\"TERIOS\",\"TERIOS KID\",\"THOR\"]', '[]');

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `deliveryno` varchar(100) NOT NULL,
  `deliverydate` varchar(100) DEFAULT NULL,
  `aucid` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  `trackingno` varchar(100) DEFAULT NULL,
  `timeslot` varchar(100) DEFAULT NULL,
  `remark` text,
  `inputby` varchar(100) DEFAULT NULL,
  `inputdate` varchar(100) DEFAULT NULL,
  `inputtime` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delivery`
--

INSERT INTO `delivery` (`deliveryno`, `deliverydate`, `aucid`, `tid`, `trackingno`, `timeslot`, `remark`, `inputby`, `inputdate`, `inputtime`) VALUES
('D-nVpxcrcd44', '08/16/2018', 2, 6, 'undefined', 'undefined', 'undefined', 'admin', '16-08-2018', '03:51:14am'),
('C-rXBaTZ53gQ', '08/16/2018', 2, 6, 'undefined', 'undefined', 'undefined', 'admin', '15-08-2018', '07:11:32pm'),
('B-2TxWU3Ipke', '08/18/2018', 2, 4, 'test2', '09:00 AM - 12:00 PM', 'Pending', 'admin', '15-08-2018', '02:17:30pm'),
('A-zIgzTJlt0Z', '08/15/2018', 1, 5, 'dsafs', '9-12', 'in transit', 'admin', '15-08-2018', '01:56:11pm');

-- --------------------------------------------------------

--
-- Table structure for table `deliverydetail`
--

CREATE TABLE `deliverydetail` (
  `d_id` int(11) NOT NULL,
  `deliveryno` varchar(100) NOT NULL,
  `sp_id` int(11) NOT NULL,
  `noplate` int(11) NOT NULL,
  `tohon` int(11) NOT NULL,
  `book` int(11) NOT NULL,
  `crkeys` int(11) NOT NULL,
  `navicd` int(11) NOT NULL,
  `carremotekey` int(11) NOT NULL,
  `naviremote` int(11) NOT NULL,
  `sd` int(11) NOT NULL,
  `nutlock` int(11) NOT NULL,
  `mnote` int(11) NOT NULL,
  `knob` int(11) NOT NULL,
  `monitor` int(11) NOT NULL,
  `other` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deliverydetail`
--

INSERT INTO `deliverydetail` (`d_id`, `deliveryno`, `sp_id`, `noplate`, `tohon`, `book`, `crkeys`, `navicd`, `carremotekey`, `naviremote`, `sd`, `nutlock`, `mnote`, `knob`, `monitor`, `other`) VALUES
(41, 'C-rXBaTZ53gQ', 27, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0),
(42, 'D-nVpxcrcd44', 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(40, 'B-2TxWU3Ipke', 26, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0),
(39, 'A-zIgzTJlt0Z', 24, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0),
(38, 'A-zIgzTJlt0Z', 25, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `insorderemails`
--

CREATE TABLE `insorderemails` (
  `e_id` int(11) NOT NULL,
  `emails` text NOT NULL,
  `remarks` text NOT NULL,
  `updatedon` varchar(100) NOT NULL,
  `insoid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `insorderemails`
--

INSERT INTO `insorderemails` (`e_id`, `emails`, `remarks`, `updatedon`, `insoid`) VALUES
(4, 'razarauf26@yahoo.com', 'Check and Confirm', '2018/09/29', 8),
(3, 'razarauf26@yahoo.com', 'Check', '2018/09/29', 7),
(5, 'razarauf26@yahoo.com,razarauf26@hotmail.com', 'Complete!', '2018/09/30', 8),
(6, 'razarauf26@hotmail.com', 'Please do the needful!', '2018/10/09', 9);

-- --------------------------------------------------------

--
-- Table structure for table `inspection`
--

CREATE TABLE `inspection` (
  `ins_id` int(11) NOT NULL,
  `iname` varchar(100) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inspection`
--

INSERT INTO `inspection` (`ins_id`, `iname`, `generatedby`) VALUES
(1, 'None', 'admin'),
(2, 'QISJ', 'admin'),
(3, 'RWI', 'admin'),
(4, 'EURO4', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `inspectionorder`
--

CREATE TABLE `inspectionorder` (
  `inso_id` int(11) NOT NULL,
  `servicename` varchar(300) NOT NULL,
  `reqon` varchar(100) NOT NULL,
  `insid` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `generatedby` varchar(100) NOT NULL,
  `vehicleid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inspectionorder`
--

INSERT INTO `inspectionorder` (`inso_id`, `servicename`, `reqon`, `insid`, `status`, `generatedby`, `vehicleid`) VALUES
(8, 'Replacement', '09/28/2018', 4, 0, 'admin', 26),
(7, 'Repair', '09/30/2018', 2, 1, 'admin', 27),
(9, 'AUTO TERMINAL JAPAN KOBE', '10/18/2018', 2, 0, 'admin', 27);

-- --------------------------------------------------------

--
-- Table structure for table `lccrequests`
--

CREATE TABLE `lccrequests` (
  `sno` int(11) NOT NULL,
  `client` varchar(100) NOT NULL,
  `requestby` varchar(100) NOT NULL,
  `agentfee` varchar(100) NOT NULL,
  `exchange` varchar(100) NOT NULL,
  `frieght` varchar(100) NOT NULL,
  `statustime` varchar(100) NOT NULL,
  `adminstatus` tinyint(1) NOT NULL,
  `clientstatus` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lccrequests`
--

INSERT INTO `lccrequests` (`sno`, `client`, `requestby`, `agentfee`, `exchange`, `frieght`, `statustime`, `adminstatus`, `clientstatus`) VALUES
(1, 'asd1', 'asd1', '5000', '12', '25', 'Sun Mar 18 2018 10:21:00 GMT 0500 (Pakistan Standard Time)', 2, 0),
(2, 'asd2', 'asd2', '25000', '24', '23', 'Sun Mar 18 2018 10:21:29 GMT 0500 (Pakistan Standard Time)', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `lccsetting`
--

CREATE TABLE `lccsetting` (
  `c_id` int(11) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `agent` varchar(100) NOT NULL,
  `exchange` varchar(100) NOT NULL,
  `gst` varchar(100) NOT NULL,
  `freight` varchar(100) NOT NULL,
  `statustime` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lccsetting`
--

INSERT INTO `lccsetting` (`c_id`, `cname`, `agent`, `exchange`, `gst`, `freight`, `statustime`) VALUES
(1, 'Default', '90000', '79', '58', '1400', ''),
(2, 'Default', '80000', '23', '21', '23', ''),
(3, 'Default', '80000', '26', '21', '23', 'Thu Mar 08 2018 22:00:06 GMT 0500 (Pakistan Standard Time)'),
(4, 'f-1', '45', '54', '45', '45', ''),
(5, 'f-1', '54', '245', '24', '21', ''),
(6, 'f-2', '45', '54', '45', '45', ''),
(7, 'f-1', '54', '245', '24', '21', ''),
(8, 'f-2', '154', '54', '45', '45', 'Fri Mar 09 2018 22:55:56 GMT 0500 (Pakistan Standard Time)'),
(9, 'test', '32', '32', '23', '23', ''),
(10, 'Default', '90000', '26', '21', '23', 'Sat Mar 10 2018 05:32:23 GMT 0500 (Pakistan Standard Time)'),
(11, 'test1', '60000', '23', '42', '23', 'Fri Mar 09 2018 21:25:44 GMT 0500 (Pakistan Standard Time)'),
(12, 'f-1', '60000', '23', '42', '23', 'Fri Mar 09 2018 22:10:07 GMT 0500 (Pakistan Standard Time)'),
(13, 'test', '96000', '22', '44', '55', 'Fri Mar 09 2018 22:59:52 GMT 0500 (Pakistan Standard Time)'),
(14, 't', '33333', '23', '23', '23', 'Fri Mar 09 2018 22:58:15 GMT 0500 (Pakistan Standard Time)'),
(15, 'f-1', '65000', '12', '21', '12', 'Fri Mar 09 2018 22:53:55 GMT 0500 (Pakistan Standard Time)'),
(16, 'f-1', '89000', '12', '21', '45', 'Sat Mar 10 2018 05:19:39 GMT 0500 (Pakistan Standard Time)'),
(17, 'f-2', '154', '56', '45', '45', 'Sat Mar 10 2018 05:07:25 GMT 0500 (Pakistan Standard Time)'),
(18, 't', '33333', '35', '23', '23', 'Sat Mar 10 2018 05:18:37 GMT 0500 (Pakistan Standard Time)'),
(19, 'test', '96000', '333', '44', '55', 'Sat Mar 10 2018 05:24:30 GMT 0500 (Pakistan Standard Time)'),
(20, 'f-2', '154', '56', '45', '40', 'Sat Mar 10 2018 05:28:08 GMT 0500 (Pakistan Standard Time)'),
(21, 't', '33333', '60', '23', '23', 'Sat Mar 10 2018 05:27:07 GMT 0500 (Pakistan Standard Time)'),
(22, 'f-1', '89000', '12', '21', '200', 'Sat Mar 10 2018 16:02:14 GMT 0500 (Pakistan Standard Time)'),
(23, 'test', '96000', '23', '44', '42', 'Sat Mar 10 2018 05:24:30 GMT 0500 (Pakistan Standard Time)'),
(24, 't', '33333', '60', '23', '96', 'Fri Apr 06 2018 21:52:59 GMT 0500 (Pakistan Standard Time)'),
(25, 'f-2', '154', '56', '45', '80', 'Sat Mar 10 2018 05:28:08 GMT 0500 (Pakistan Standard Time)'),
(26, 'Default', '70000', '26', '21', '23', 'Sat Mar 10 2018 05:32:35 GMT 0500 (Pakistan Standard Time)'),
(27, 'Default', '70000', '26', '58', '23', 'Sat Mar 10 2018 05:33:26 GMT 0500 (Pakistan Standard Time)'),
(28, 'Default', '80000', '26', '58', '23', 'Fri Apr 06 2018 21:53:45 GMT 0500 (Pakistan Standard Time)'),
(29, 'f-1', '89000', '25', '21', '200', 'Sat Mar 10 2018 16:03:11 GMT 0500 (Pakistan Standard Time)'),
(30, 'f-1', '456', '65', '45', '65', 'Sat Mar 10 2018 16:03:11 GMT 0500 (Pakistan Standard Time)'),
(31, 't', '66666', '60', '23', '96', 'Fri Apr 06 2018 21:52:59 GMT 0500 (Pakistan Standard Time)'),
(32, 'Default', '80000', '22455', '58', '23515', 'Fri Apr 06 2018 21:53:45 GMT 0500 (Pakistan Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `loadingplan`
--

CREATE TABLE `loadingplan` (
  `plancode` varchar(100) NOT NULL,
  `contype` varchar(50) NOT NULL,
  `yardid` int(11) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loadingplan`
--

INSERT INTO `loadingplan` (`plancode`, `contype`, `yardid`, `generatedby`) VALUES
('LP-A-MZjM4Phcpj', '40FTHQ', 4, 'admin'),
('LP-B-Ut1temdqFg', '20FTHQ', 3, 'admin'),
('LP-C-G5PpBtLHCD', '40FT', 5, 'admin'),
('LP-D-r64WKTEyhI', 'undefined', 4, 'admin'),
('LP-F-ilh8E4EbFr', '40FTHQ', 4, 'admin'),
('LP-10-Z9hKNST24q', '40FTHQ', 4, 'admin'),
('LP-11-vNMI05S2NB', '40FTHQ', 5, 'admin'),
('LP-12-nEEfIJVO49', '40FTHQ', 3, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `loadingplanvehicles`
--

CREATE TABLE `loadingplanvehicles` (
  `vid` int(11) NOT NULL,
  `codeplan` varchar(100) NOT NULL,
  `purid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loadingplanvehicles`
--

INSERT INTO `loadingplanvehicles` (`vid`, `codeplan`, `purid`) VALUES
(1, 'LP-A-MZjM4Phcpj', 25),
(2, 'LP-A-MZjM4Phcpj', 30),
(3, 'LP-A-MZjM4Phcpj', 32),
(4, 'LP-B-Ut1temdqFg', 28),
(5, 'LP-B-Ut1temdqFg', 29),
(6, 'LP-C-G5PpBtLHCD', 48),
(7, 'LP-D-r64WKTEyhI', 25),
(8, 'LP-D-r64WKTEyhI', 30),
(9, 'LP-D-r64WKTEyhI', 32),
(10, 'LP-D-r64WKTEyhI', 33),
(14, 'LP-F-ilh8E4EbFr', 25),
(15, 'LP-F-ilh8E4EbFr', 30),
(16, 'LP-F-ilh8E4EbFr', 32),
(17, 'LP-F-ilh8E4EbFr', 33),
(18, 'LP-10-Z9hKNST24q', 25),
(19, 'LP-10-Z9hKNST24q', 30),
(20, 'LP-10-Z9hKNST24q', 32),
(21, 'LP-11-vNMI05S2NB', 48),
(22, 'LP-12-nEEfIJVO49', 28),
(23, 'LP-12-nEEfIJVO49', 29),
(24, 'LP-12-nEEfIJVO49', 27);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `o_id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `ord_id` varchar(500) NOT NULL,
  `y_id` int(11) NOT NULL,
  `pickuploc` varchar(100) DEFAULT NULL,
  `pickedup` int(11) NOT NULL,
  `delivered` int(11) NOT NULL,
  `remarks` text NOT NULL,
  `nocut` tinyint(1) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`o_id`, `p_id`, `ord_id`, `y_id`, `pickuploc`, `pickedup`, `delivered`, `remarks`, `nocut`, `status`) VALUES
(170, 24, 'A-xezcbvBieI', 0, 'TAA Minami Kyushu', 0, 0, '', 0, 1),
(171, 25, 'A-xezcbvBieI', 0, 'HAA Kobe', 0, 0, '', 0, 1),
(172, 24, 'B-qFWmX3pyNl', 0, '3WM YOKOHAMA', 0, 0, '', 0, 1),
(173, 26, 'C-NbRlp6ivwX', 0, 'JAA', 0, 0, '', 0, 1),
(174, 27, 'D-5uz2w7LUZv', 0, 'TAA Minami Kyushu', 0, 0, '', 0, 1),
(175, 27, 'E-ucurubOCJ5', 0, 'MOANA BLUE', 0, 0, '', 0, 1),
(176, 28, 'F-xE6R0wHlpo', 0, 'TAA Hiroshima', 0, 0, '', 0, 1),
(177, 29, 'F-xE6R0wHlpo', 0, 'TAA Hiroshima', 0, 0, '', 0, 0),
(178, 28, '10-pZrgjFKDDZ', 0, 'MOANA BLUE', 0, 0, '', 0, 1),
(179, 29, '10-pZrgjFKDDZ', 0, 'MOANA BLUE', 0, 0, '', 0, 0),
(180, 30, '11-BMkJeZ1LQD', 0, 'HAA Kobe', 0, 0, '', 0, 0),
(181, 31, '12-5hKQDFuHvV', 0, 'JAA', 0, 0, '', 0, 0),
(182, 32, '13-dSlXAlel50', 0, 'TAA Minami Kyushu', 0, 0, '', 0, 0),
(183, 33, '13-dSlXAlel50', 0, 'JU Aichi', 0, 0, '', 0, 0),
(184, 34, '13-dSlXAlel50', 0, 'JU Fukushima', 0, 0, '', 0, 0),
(185, 32, '14-kJqm2ZR7yH', 0, 'AUTO TERMINAL JAPAN KOBE', 0, 0, '', 0, 0),
(186, 33, '14-kJqm2ZR7yH', 0, 'AUTO TERMINAL JAPAN KOBE', 0, 0, '', 0, 0),
(187, 34, '14-kJqm2ZR7yH', 0, 'AUTO TERMINAL JAPAN KOBE', 0, 0, '', 0, 0),
(188, 35, '15-V8jTZX2cLR', 0, 'TAA Hokkaido', 0, 0, '', 0, 0),
(189, 36, '15-V8jTZX2cLR', 0, 'USS Tokyo', 0, 0, '', 0, 0),
(190, 37, '16-m3SSq9JOk0', 0, 'USS Tokyo', 0, 0, '', 0, 0),
(191, 38, '16-m3SSq9JOk0', 0, 'TAA Kinki', 0, 0, '', 0, 0),
(192, 39, '17-HRO9QrjaJi', 0, 'TAA Shikoku', 1, 1, '', 0, 0),
(193, 40, '17-HRO9QrjaJi', 0, 'TAA Kyushu', 1, 1, '', 0, 0),
(194, 48, '18-JX77pNyl8Y', 0, 'JU Tochigi', 0, 0, '', 0, 0),
(195, 41, '19-TPsaZLh0kd', 0, 'TAA Kinki', 0, 0, '', 0, 0),
(196, 25, '1A-7jRry4ATJ4', 0, '3WM YOKOHAMA', 0, 0, '', 0, 0),
(197, 24, '1B-ixHhunLoZ7', 0, 'MOANA BLUE', 0, 0, '', 0, 0),
(200, 26, '1D-nZfQakEgMr', 0, 'MOANA BLUE', 0, 0, '', 0, 0),
(201, 27, '1E-Hm7wVtSCCx', 0, 'AUTO TERMINAL JAPAN KOBE', 0, 0, '', 0, 0),
(202, 27, '1F-DEEPxz9E0a', 0, 'TAA Minami Kyushu', 0, 0, '', 0, 0),
(203, 42, '1F-DEEPxz9E0a', 0, 'HAA Kobe', 0, 0, '', 0, 0),
(204, 43, '20-ngRq0JCT7Y', 0, 'HAA Kobe', 0, 0, '', 0, 0),
(205, 44, '21-CB9SqNavbC', 0, 'TAA Shikoku', 0, 0, '', 0, 0),
(206, 45, '21-CB9SqNavbC', 0, 'KansaiMatsubara AA', 0, 0, '', 0, 0),
(207, 46, '22-JtRHhRFtxR', 0, 'TAA Tohoku', 0, 0, '', 0, 0),
(208, 47, '22-JtRHhRFtxR', 0, 'JU Tochigi', 0, 0, '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderno` varchar(500) NOT NULL,
  `orderdate` varchar(100) NOT NULL,
  `tcompany` int(11) DEFAULT NULL,
  `y_id` int(11) DEFAULT NULL,
  `ostatus` int(11) DEFAULT NULL,
  `completedin` varchar(100) DEFAULT NULL,
  `pickupdate` varchar(100) DEFAULT NULL,
  `dropoffdate` varchar(100) DEFAULT NULL,
  `btnselect` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderno`, `orderdate`, `tcompany`, `y_id`, `ostatus`, `completedin`, `pickupdate`, `dropoffdate`, `btnselect`) VALUES
('10-pZrgjFKDDZ', '08/15/2018', 6, 3, 1, 'N/A', '08/17/2018', 'N/A', 1),
('11-BMkJeZ1LQD', '08/15/2018', 6, 4, 1, 'N/A', '08/15/2018', '08/15/2018', 0),
('12-5hKQDFuHvV', '08/15/2018', 7, 6, 1, 'N/A', '08/15/2018', '08/15/2018', 0),
('13-dSlXAlel50', '08/15/2018', 4, 3, 1, 'N/A', '08/16/2018', '08/17/2018', 0),
('14-kJqm2ZR7yH', '08/15/2018', 5, 4, 1, 'N/A', '08/17/2018', '08/18/2018', 1),
('15-V8jTZX2cLR', '08/15/2018', 5, 7, 1, 'N/A', '08/15/2018', '08/15/2018', 0),
('16-m3SSq9JOk0', '08/15/2018', 4, 4, 1, 'N/A', '08/15/2018', 'N/A', 0),
('17-HRO9QrjaJi', '08/16/2018', 5, 7, 1, 'N/A', '08/18/2018', 'N/A', 0),
('18-JX77pNyl8Y', '08/16/2018', 6, 5, 1, 'N/A', '08/16/2018', 'N/A', 0),
('19-TPsaZLh0kd', '08/16/2018', 4, 5, 0, 'N/A', '08/16/2018', '08/16/2018', 0),
('1A-7jRry4ATJ4', '08/16/2018', 9, 7, 0, 'N/A', '08/16/2018', 'N/A', 1),
('1B-ixHhunLoZ7', '08/16/2018', 5, 7, 1, 'N/A', '08/16/2018', 'N/A', 1),
('1C-HFY7vLV0FB', '08/16/2018', 0, 0, 1, 'N/A', '08/16/2018', '08/16/2018', 1),
('1D-nZfQakEgMr', '08/16/2018', 8, 3, 0, 'N/A', '08/16/2018', 'N/A', 1),
('1E-Hm7wVtSCCx', '08/17/2018', 5, 5, 0, 'N/A', '08/17/2018', 'N/A', 1),
('1F-DEEPxz9E0a', '09/06/2018', 5, 6, 0, 'N/A', '09/06/2018', '09/06/2018', 0),
('20-ngRq0JCT7Y', '09/01/2018', 0, 0, 0, 'N/A', '09/01/2018', 'N/A', 0),
('21-CB9SqNavbC', '09/16/2018', 0, 0, 0, 'N/A', '09/16/2018', 'N/A', 0),
('22-JtRHhRFtxR', '09/16/2018', 6, 3, 0, 'N/A', '09/16/2018', 'N/A', 0),
('A-xezcbvBieI', '08/13/2018', 4, 4, 1, 'N/A', '08/13/2018', 'N/A', 0),
('B-qFWmX3pyNl', '08/13/2018', 4, 5, 1, 'N/A', '08/13/2018', 'N/A', 1),
('C-NbRlp6ivwX', '08/13/2018', 8, 5, 1, 'N/A', '08/13/2018', 'N/A', 0),
('D-5uz2w7LUZv', '08/14/2018', 4, 5, 1, 'N/A', '08/15/2018', 'N/A', 0),
('E-ucurubOCJ5', '08/14/2018', 5, 3, 1, 'N/A', '08/15/2018', 'N/A', 1),
('F-xE6R0wHlpo', '08/15/2018', 5, 5, 1, 'N/A', '08/16/2018', 'N/A', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ports`
--

CREATE TABLE `ports` (
  `port_id` int(11) NOT NULL,
  `port` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `approval` int(11) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ports`
--

INSERT INTO `ports` (`port_id`, `port`, `country`, `approval`, `generatedby`) VALUES
(1, 'Kabul', 'Afghanistan', 1, 'staff1'),
(2, 'Afghan', 'Afghanistan', 1, 'staff1'),
(3, 'test1', 'Afghanistan', 1, 'staff1'),
(4, 'test2', 'Afghanistan', 1, 'staff1'),
(5, 'test3', 'Afghanistan', 0, 'staff1'),
(6, 'albania1', 'Albania', 0, 'admin'),
(7, 'London', 'United Kingdom', 1, 'admin'),
(8, 'Castro', 'Chile', 1, 'admin'),
(9, 'Auckland', 'New Zealand', 1, 'admin'),
(10, 'Karachi', 'Pakistan', 1, 'admin'),
(11, 'Sao Paulo', 'Brazil', 1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `privileges`
--

CREATE TABLE `privileges` (
  `p_id` int(11) NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `productdetail`
--

CREATE TABLE `productdetail` (
  `id` varchar(100) NOT NULL,
  `lot` varchar(100) NOT NULL,
  `auction` varchar(100) NOT NULL,
  `auction_date` varchar(100) NOT NULL,
  `make` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `year` varchar(100) NOT NULL,
  `enginecc` varchar(100) NOT NULL,
  `chassis` varchar(100) NOT NULL,
  `grade` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `transmission` varchar(100) NOT NULL,
  `mileage` varchar(100) NOT NULL,
  `rate` varchar(100) NOT NULL,
  `start` varchar(100) NOT NULL,
  `avg_price` varchar(100) NOT NULL,
  `serial` varchar(100) NOT NULL,
  `images` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productdetail`
--

INSERT INTO `productdetail` (`id`, `lot`, `auction`, `auction_date`, `make`, `model`, `year`, `enginecc`, `chassis`, `grade`, `color`, `transmission`, `mileage`, `rate`, `start`, `avg_price`, `serial`, `images`) VALUES
('09ovALIHvzerF0', '751', 'TAA Kinki', '2018-04-10 15:25:00', 'NISSAN', 'DUALIS', '2008', '2000', 'KJ10', '20G', 'black', 'FAT', '53000', '3.5', '10000', '443000', '', 'http://bestonlinesupports.com/shinchou/uploads/img009ovALIHvzerF0.jpg#http://bestonlinesupports.com/shinchou/uploads/img109ovALIHvzerF0.jpg#http://bestonlinesupports.com/shinchou/uploads/img209ovALIHvzerF0.jpg#'),
('0BNkBDsG7mGjz4', '7010', 'USS Tohoku', '2018-04-04 13:42:00', 'TOYOTA', 'C-HR', '2017', '1200', 'NGX50', 'S-T ', 'RED', 'FAT', '6000', '***', '380000', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img00BNkBDsG7mGjz4.jpg#http://bestonlinesupports.com/shinchou/uploads/img10BNkBDsG7mGjz4.jpg#http://bestonlinesupports.com/shinchou/uploads/img20BNkBDsG7mGjz4.jpg#http://bestonlinesupports.com/shinchou/uploads/img30BNkBDsG7mGjz4.jpg#'),
('0gLi6BTFLboh9', '175', 'USS Gunma', '2018-05-12 10:38:00', 'MITSUBISHI', 'MINICAB TRUCK', '2006', '660', 'U62T', 'JA SUPER CUSTOM ', 'WHITE', 'MT5', '115000', '3.5', '0', '173000', '', 'http://shinchuo-test2.com/shinchou/uploads/img00gLi6BTFLboh9.jpg#http://shinchuo-test2.com/shinchou/uploads/img10gLi6BTFLboh9.jpg#http://shinchuo-test2.com/shinchou/uploads/img20gLi6BTFLboh9.jpg#http://shinchuo-test2.com/shinchou/uploads/img30gLi6BTFLboh9.jpg#'),
('0owL40I7mruAnTu', '20381', 'USS Tokyo', '2018-09-20 00:00:00', 'TOYOTA', 'HIACE', '2013', '2700', 'TRH224W', 'GRANDCABIN ', 'PEARL 2', 'AT', '31000', '4', '1300000', '2273000', '', 'http://shinchuo-test2.com/shinchou/uploads/img00owL40I7mruAnTu.jpg#http://shinchuo-test2.com/shinchou/uploads/img10owL40I7mruAnTu.jpg#http://shinchuo-test2.com/shinchou/uploads/img20owL40I7mruAnTu.jpg#http://shinchuo-test2.com/shinchou/uploads/img30owL40I7mruAnTu.jpg#'),
('0Pl6sjaMWap7b', '188', 'TAA Kyushu', '2018-07-31 00:00:00', 'TOYOTA', 'COROLLA AXIO', '2014', '1500', 'NZE161', '1.5 X &#65419;&#65438;&#65404;&#65438;&#65416;&#65405;PKG', 'silver', 'FAT', '100000', '3.5', '100000', '504000', '', 'http://shinchuo-test2.com/shinchou/uploads/img00Pl6sjaMWap7b.jpg#http://shinchuo-test2.com/shinchou/uploads/img10Pl6sjaMWap7b.jpg#http://shinchuo-test2.com/shinchou/uploads/img20Pl6sjaMWap7b.jpg#'),
('0WXgzG86ORiHF', '18', 'TAA Chubu', '2018-09-20 00:00:00', 'TOYOTA', 'HIACE', '2015', '2700', 'TRH224W', 'GR Key &#65388;&#65419;&#65438;&#65437;', 'silver', 'IAT', '104000', '3.5', '1650000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img00WXgzG86ORiHF.jpg#http://shinchuo-test2.com/shinchou/uploads/img10WXgzG86ORiHF.jpg#http://shinchuo-test2.com/shinchou/uploads/img20WXgzG86ORiHF.jpg#'),
('0xcCKhO0kelcV5Z', '20085', 'TAA Chubu', '2018-07-19 11:30:00', 'TOYOTA', 'AQUA', '2013', '1500', 'NHP10', 'L', 'silver', 'FAT', '64000', '4', '10000', '550000', '', 'http://shinchuo-test2.com/shinchou/uploads/img00xcCKhO0kelcV5Z.jpg#http://shinchuo-test2.com/shinchou/uploads/img10xcCKhO0kelcV5Z.jpg#http://shinchuo-test2.com/shinchou/uploads/img20xcCKhO0kelcV5Z.jpg#'),
('0xjq0NyKkHf8hmc', '20097', 'JU Aichi', '2018-07-19 12:53:00', 'NISSAN', 'CARAVAN', '2003', '3000', 'VWE25', '&#65411;&#65438;&#65384;&#65392;&#65406;&#65438;&#65433;', 'white', 'AT', '463000', '3', '9000', '211000', '', 'http://shinchuo-test2.com/shinchou/uploads/img00xjq0NyKkHf8hmc.jpg#http://shinchuo-test2.com/shinchou/uploads/img10xjq0NyKkHf8hmc.jpg#http://shinchuo-test2.com/shinchou/uploads/img20xjq0NyKkHf8hmc.jpg#http://shinchuo-test2.com/shinchou/uploads/img30xjq0NyKkHf8hmc.jpg#'),
('23KiNatMbQMWU', '23', 'TAA Minami Kyushu', '2018-05-08 00:00:00', 'NISSAN', 'MURANO', '2013', '2500', 'TZ51', '250XL', 'white', 'FAT', '77000', 'R', '300000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img023KiNatMbQMWU.jpg#http://shinchuo-test2.com/shinchou/uploads/img123KiNatMbQMWU.jpg#http://shinchuo-test2.com/shinchou/uploads/img223KiNatMbQMWU.jpg#'),
('24YojI6PZDsN76K', '4154', 'JU Aichi', '2018-07-19 12:15:00', 'MITSUBISHI', 'DELICA D2', '2013', '1200', 'MB15S', 'S AS&#65393;&#65437;&#65412;&#65438;G', 'silver', 'AT', '27000', '3.5', '150000', '461000', '', 'http://shinchuo-test2.com/shinchou/uploads/img024YojI6PZDsN76K.jpg#http://shinchuo-test2.com/shinchou/uploads/img124YojI6PZDsN76K.jpg#http://shinchuo-test2.com/shinchou/uploads/img224YojI6PZDsN76K.jpg#http://shinchuo-test2.com/shinchou/uploads/img324YojI6PZDsN76K.jpg#'),
('256bJdQqXMqsNK3', '4166', 'TAA Shikoku', '2018-05-08 00:00:00', 'SUZUKI', 'WAGON R', '2009', '660', 'MH23S', 'X', 'black', 'IAT', '202000', '3.5', '13000', '77000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0256bJdQqXMqsNK3.jpg#http://shinchuo-test2.com/shinchou/uploads/img1256bJdQqXMqsNK3.jpg#http://shinchuo-test2.com/shinchou/uploads/img2256bJdQqXMqsNK3.jpg#'),
('29EoxyPibHHSzj8', '4527', 'ARAI Bayside', '2018-08-03 00:00:00', 'TOYOTA', 'RAV4', '2000', '2000', 'SXA10W', 'J TYPE G', '', 'F5', '143000', '4', '30000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img029EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img129EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img229EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img329EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img429EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img529EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img629EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img729EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img829EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img929EoxyPibHHSzj8.jpg#http://shinchuo-test2.com/shinchou/uploads/img1029EoxyPibHHSzj8.jpg#'),
('2Aj3BX6oxXmuO2E', '6178', 'JU Hiroshima', '2018-09-20 13:57:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'G', 'white', 'FAT', '111000', 'R', '90000', '317000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img12Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img22Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img32Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img42Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img52Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img62Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img72Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img82Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img92Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img102Aj3BX6oxXmuO2E.jpg#'),
('2B0gWBPUs4si3Pd', '62372', 'USS Yokohama', '2018-03-27 10:37:00', 'TOYOTA', 'RAUM', '2005', '1500', 'NCZ20', 'C PACK NEO ED ', 'RED', 'AT', '41000', '4', '0', '86000', '', 'http://bestonlinesupports.com/shinchou/uploads/img02B0gWBPUs4si3Pd.jpg#http://bestonlinesupports.com/shinchou/uploads/img12B0gWBPUs4si3Pd.jpg#http://bestonlinesupports.com/shinchou/uploads/img22B0gWBPUs4si3Pd.jpg#http://bestonlinesupports.com/shinchou/uploads/img32B0gWBPUs4si3Pd.jpg#'),
('2BvvItapOlL54jo', '62743', 'USS Yokohama', '2018-04-03 11:30:00', 'TOYOTA', 'IPSUM', '2001', '2400', 'ACM21W', '240U ', 'SILVER', 'AT', '103000', '3', '0', '76000', '', 'http://bestonlinesupports.com/shinchou/uploads/img02BvvItapOlL54jo.jpg#http://bestonlinesupports.com/shinchou/uploads/img12BvvItapOlL54jo.jpg#http://bestonlinesupports.com/shinchou/uploads/img22BvvItapOlL54jo.jpg#http://bestonlinesupports.com/shinchou/uploads/img32BvvItapOlL54jo.jpg#'),
('2BwAI5E5Z4peK6T', '62768', 'USS Yokohama', '2018-04-03 11:33:00', 'TOYOTA', 'WISH', '2003', '1800', 'ZNE10G', 'X S PACK ', 'PEARL', 'AT', '140000', '3.5', '0', '91000', '', 'http://bestonlinesupports.com/shinchou/uploads/img02BwAI5E5Z4peK6T.jpg#http://bestonlinesupports.com/shinchou/uploads/img12BwAI5E5Z4peK6T.jpg#http://bestonlinesupports.com/shinchou/uploads/img22BwAI5E5Z4peK6T.jpg#http://bestonlinesupports.com/shinchou/uploads/img32BwAI5E5Z4peK6T.jpg#'),
('2eJQVoTCIpCETDS', '4018', 'TAA Shikoku', '2018-05-08 00:00:00', 'HONDA', 'FIT', '2009', '1300', 'GE6', '13G', 'beige', 'FAT', '81000', '3.5', '20000', '109000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02eJQVoTCIpCETDS.jpg#http://shinchuo-test2.com/shinchou/uploads/img12eJQVoTCIpCETDS.jpg#http://shinchuo-test2.com/shinchou/uploads/img22eJQVoTCIpCETDS.jpg#'),
('2EOCFCkJDmek6H6', '6531', 'JU Kanagawa', '2018-09-20 00:00:00', 'TOYOTA', 'AQUA', '2015', '1500', 'NHP10', 'G Black Soft Leather - Selection', 'white', 'FA', '86000', '4', '350000', '764000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02EOCFCkJDmek6H6.jpg#http://shinchuo-test2.com/shinchou/uploads/img12EOCFCkJDmek6H6.jpg#http://shinchuo-test2.com/shinchou/uploads/img22EOCFCkJDmek6H6.jpg#http://shinchuo-test2.com/shinchou/uploads/img32EOCFCkJDmek6H6.jpg#http://shinchuo-test2.com/shinchou/uploads/img42EOCFCkJDmek6H6.jpg#http://shinchuo-test2.com/shinchou/uploads/img52EOCFCkJDmek6H6.jpg#http://shinchuo-test2.com/shinchou/uploads/img62EOCFCkJDmek6H6.jpg#http://shinchuo-test2.com/shinchou/uploads/img72EOCFCkJDmek6H6.jpg#http://shinchuo-test2.com/shinchou/uploads/img82EOCFCkJDmek6H6.jpg#'),
('2eW6sVfuUNqxtvZ', '4039', 'JU Aichi', '2018-09-20 00:00:00', 'TOYOTA', 'LAND CRUISER PRADO', '2014', '2700', 'TRJ150W', 'TX', 'con', 'AT', '45000', '4', '1500000', '2900000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img12eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img22eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img32eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img42eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img52eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img62eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img72eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img82eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img92eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img102eW6sVfuUNqxtvZ.jpg#'),
('2fnJcNYk8qn0orG', '4085', 'TAA Shikoku', '2018-05-08 00:00:00', 'HONDA', 'FIT', '2007', '1300', 'GE6', '13G', 'key', 'FAT', '89000', 'RA', '20000', '103000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02fnJcNYk8qn0orG.jpg#http://shinchuo-test2.com/shinchou/uploads/img12fnJcNYk8qn0orG.jpg#http://shinchuo-test2.com/shinchou/uploads/img22fnJcNYk8qn0orG.jpg#'),
('2FtRewyKPPTm3jU', '6501', 'JU Kanagawa', '2018-09-20 00:00:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'G Smart - Entry -ED', 'white', 'FA', '95000', '4', '0', '502000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02FtRewyKPPTm3jU.jpg#http://shinchuo-test2.com/shinchou/uploads/img12FtRewyKPPTm3jU.jpg#http://shinchuo-test2.com/shinchou/uploads/img22FtRewyKPPTm3jU.jpg#http://shinchuo-test2.com/shinchou/uploads/img32FtRewyKPPTm3jU.jpg#http://shinchuo-test2.com/shinchou/uploads/img42FtRewyKPPTm3jU.jpg#http://shinchuo-test2.com/shinchou/uploads/img52FtRewyKPPTm3jU.jpg#http://shinchuo-test2.com/shinchou/uploads/img62FtRewyKPPTm3jU.jpg#http://shinchuo-test2.com/shinchou/uploads/img72FtRewyKPPTm3jU.jpg#http://shinchuo-test2.com/shinchou/uploads/img82FtRewyKPPTm3jU.jpg#'),
('2fz4yETjM6gFprx', '4004', 'ARAI Bayside', '2018-08-03 00:00:00', 'TOYOTA', 'KLUGER', '2000', '2990', 'MCU25W', '', '', 'AT', '117000', '3.5', '50000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img02fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img12fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img22fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img32fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img42fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img52fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img62fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img72fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img82fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img92fz4yETjM6gFprx.jpg#http://shinchuo-test2.com/shinchou/uploads/img102fz4yETjM6gFprx.jpg#'),
('2JdhHAI7MkTdkup', '68058', 'Honda Kyushu', '2018-04-16 00:00:00', 'HONDA', 'LIFE DUNK', '2001', '660', 'JB3', 'TR', 'black', 'CAT', '116000', 'R', '2000', '19000', 'JB3-1028662', 'http://bestonlinesupports.com/shinchou/uploads/img02JdhHAI7MkTdkup.jpg#http://bestonlinesupports.com/shinchou/uploads/img12JdhHAI7MkTdkup.jpg#http://bestonlinesupports.com/shinchou/uploads/img22JdhHAI7MkTdkup.jpg#http://bestonlinesupports.com/shinchou/uploads/img32JdhHAI7MkTdkup.jpg#http://bestonlinesupports.com/shinchou/uploads/img42JdhHAI7MkTdkup.jpg#http://bestonlinesupports.com/shinchou/uploads/img52JdhHAI7MkTdkup.jpg#http://bestonlinesupports.com/shinchou/uploads/img62JdhHAI7MkTdkup.jpg#http://bestonlinesupports.com/shinchou/uploads/img72JdhHAI7MkTdkup.jpg#'),
('2KqzE382AaakbrT', '69020', 'Honda Kyushu', '2018-04-02 12:28:00', 'HONDA', 'SPIKE', '2004', '1500', 'GK1', 'W L&#65418;&#65439;&#65391;&#65401;&#65392;&#65404;&#65438;', 'grey', 'DAT', '137000', 'R', '11000', '26000', 'GK1-1114084', 'http://bestonlinesupports.com/shinchou/uploads/img02KqzE382AaakbrT.jpg#http://bestonlinesupports.com/shinchou/uploads/img12KqzE382AaakbrT.jpg#http://bestonlinesupports.com/shinchou/uploads/img22KqzE382AaakbrT.jpg#http://bestonlinesupports.com/shinchou/uploads/img32KqzE382AaakbrT.jpg#http://bestonlinesupports.com/shinchou/uploads/img42KqzE382AaakbrT.jpg#http://bestonlinesupports.com/shinchou/uploads/img52KqzE382AaakbrT.jpg#http://bestonlinesupports.com/shinchou/uploads/img62KqzE382AaakbrT.jpg#http://bestonlinesupports.com/shinchou/uploads/img72KqzE382AaakbrT.jpg#'),
('2L3eKtiYWTYWOlB', '6037', 'JU Hokkaido', '2018-08-03 13:02:00', 'TOYOTA', 'OTHER', '2012', '1800', 'ZVW41W', 'G', '', 'AT', '153000', 'R', '100000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img02L3eKtiYWTYWOlB.jpg#http://shinchuo-test2.com/shinchou/uploads/img12L3eKtiYWTYWOlB.jpg#http://shinchuo-test2.com/shinchou/uploads/img22L3eKtiYWTYWOlB.jpg#http://shinchuo-test2.com/shinchou/uploads/img32L3eKtiYWTYWOlB.jpg#'),
('2LFEW3Ff6HluyU2', '6003', 'JU Gunma', '2018-07-19 16:43:00', 'HONDA', 'N ONE', '2013', '660', 'JG1', 'G L&#65418;&#65439;&#65391;&#65401;&#65392;&#65404;&#65438;', 'white', 'AT', '99000', 'RS', '30000', '520000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02LFEW3Ff6HluyU2.jpg#http://shinchuo-test2.com/shinchou/uploads/img12LFEW3Ff6HluyU2.jpg#http://shinchuo-test2.com/shinchou/uploads/img22LFEW3Ff6HluyU2.jpg#http://shinchuo-test2.com/shinchou/uploads/img32LFEW3Ff6HluyU2.jpg#'),
('2mItTQf1oVYeSx', '114', 'JU Niigata', '2018-08-03 11:51:00', 'TOYOTA', 'IST', '2002', '1300', 'NCP60', '', '', 'FAT', '138000', 'R', '0', '90000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02mItTQf1oVYeSx.jpg#http://shinchuo-test2.com/shinchou/uploads/img12mItTQf1oVYeSx.jpg#http://shinchuo-test2.com/shinchou/uploads/img22mItTQf1oVYeSx.jpg#http://shinchuo-test2.com/shinchou/uploads/img32mItTQf1oVYeSx.jpg#'),
('2RcGaug0pHsi9cq', '7236', 'JU Gunma', '2018-07-19 14:40:00', 'HONDA', 'VEZEL', '2018', '1500', 'RU3', '&#65418;&#65394;&#65420;&#65438;&#65432;&#65391;&#65412;&#65438;RS&#65422;&#65437;&#65408;&#65438;&#', 'red', 'FAT', '0', '5', '1890000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img02RcGaug0pHsi9cq.jpg#http://shinchuo-test2.com/shinchou/uploads/img12RcGaug0pHsi9cq.jpg#http://shinchuo-test2.com/shinchou/uploads/img22RcGaug0pHsi9cq.jpg#http://shinchuo-test2.com/shinchou/uploads/img32RcGaug0pHsi9cq.jpg#'),
('2rfqf1DED1ZOmW', '121', 'TAA Chubu', '2018-09-20 00:00:00', 'TOYOTA', 'LAND CRUISER PRADO', '2014', '4000', 'GRJ150W', 'TZ 4WD', 'white', 'FAT', '106000', '4', '1900000', '2960000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02rfqf1DED1ZOmW.jpg#http://shinchuo-test2.com/shinchou/uploads/img12rfqf1DED1ZOmW.jpg#http://shinchuo-test2.com/shinchou/uploads/img22rfqf1DED1ZOmW.jpg#'),
('2sG0hgoyAyrWu', '32', 'USS Tohoku', '2018-04-04 10:38:00', 'NISSAN', 'NOTE', '2013', '1200', 'E12', 'X DIG-S ', 'SILVER', 'FAT', '52000', '4', '120000', '373000', '', 'http://bestonlinesupports.com/shinchou/uploads/img02sG0hgoyAyrWu.jpg#http://bestonlinesupports.com/shinchou/uploads/img12sG0hgoyAyrWu.jpg#http://bestonlinesupports.com/shinchou/uploads/img22sG0hgoyAyrWu.jpg#http://bestonlinesupports.com/shinchou/uploads/img32sG0hgoyAyrWu.jpg#'),
('2t4NzSoIMHfRCb', '125', 'TAA Kinki', '2018-07-31 00:00:00', 'TOYOTA', 'COROLLA AXIO', '2014', '1500', 'NZE161', 'X &#65419;&#65438;&#65404;&#65438;&#65416;&#65405;&#65418;&#65439;&#65391;&#65401;&#65392;&#65404;&#', 'silver', 'FAT', '83000', '4', '1000', '558000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02t4NzSoIMHfRCb.jpg#http://shinchuo-test2.com/shinchou/uploads/img12t4NzSoIMHfRCb.jpg#http://shinchuo-test2.com/shinchou/uploads/img22t4NzSoIMHfRCb.jpg#'),
('2uKF71laq2QAEtL', '5012', 'JU Niigata', '2018-08-03 13:14:00', 'TOYOTA', 'PASSO', '2007', '1000', 'KGC10', 'X F&#65418;&#65439;&#65391;&#65401;&#65392;&#65404;&#65438;', '', 'AT', '68000', '3', '0', '24000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02uKF71laq2QAEtL.jpg#http://shinchuo-test2.com/shinchou/uploads/img12uKF71laq2QAEtL.jpg#http://shinchuo-test2.com/shinchou/uploads/img22uKF71laq2QAEtL.jpg#http://shinchuo-test2.com/shinchou/uploads/img32uKF71laq2QAEtL.jpg#'),
('2uRUBlOcFQI9nxb', '5025', 'JU Niigata', '2018-08-03 13:16:00', 'TOYOTA', 'VITZ', '2008', '1300', 'SCP90', 'F', '', 'AT', '105000', '3.5', '10000', '74000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02uRUBlOcFQI9nxb.jpg#http://shinchuo-test2.com/shinchou/uploads/img12uRUBlOcFQI9nxb.jpg#http://shinchuo-test2.com/shinchou/uploads/img22uRUBlOcFQI9nxb.jpg#http://shinchuo-test2.com/shinchou/uploads/img32uRUBlOcFQI9nxb.jpg#'),
('2uTIYGFXJNVwjix', '5029', 'JU Niigata', '2018-08-03 13:17:00', 'TOYOTA', 'PREMIO', '2003', '1500', 'NZT240', 'F', '', 'FAT', '107000', 'R', '20000', '172000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02uTIYGFXJNVwjix.jpg#http://shinchuo-test2.com/shinchou/uploads/img12uTIYGFXJNVwjix.jpg#http://shinchuo-test2.com/shinchou/uploads/img22uTIYGFXJNVwjix.jpg#http://shinchuo-test2.com/shinchou/uploads/img32uTIYGFXJNVwjix.jpg#'),
('2uYI1RyNFt5W6bb', '5037', 'JU Kanagawa', '2018-09-20 00:00:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'L 0&#65395;&#65432; Key &#65432;', 'silver', 'FA', '85000', 'R', '0', '352000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02uYI1RyNFt5W6bb.jpg#http://shinchuo-test2.com/shinchou/uploads/img12uYI1RyNFt5W6bb.jpg#http://shinchuo-test2.com/shinchou/uploads/img22uYI1RyNFt5W6bb.jpg#http://shinchuo-test2.com/shinchou/uploads/img32uYI1RyNFt5W6bb.jpg#http://shinchuo-test2.com/shinchou/uploads/img42uYI1RyNFt5W6bb.jpg#http://shinchuo-test2.com/shinchou/uploads/img52uYI1RyNFt5W6bb.jpg#http://shinchuo-test2.com/shinchou/uploads/img62uYI1RyNFt5W6bb.jpg#http://shinchuo-test2.com/shinchou/uploads/img72uYI1RyNFt5W6bb.jpg#http://shinchuo-test2.com/shinchou/uploads/img82uYI1RyNFt5W6bb.jpg#'),
('2vdF8odjrkbYhvO', '5061', 'JU Fukushima', '2018-07-26 14:51:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'G', 'white', 'FA', '113000', '4', '100000', '396000', '', 'http://shinchuo-test2.com/shinchou/uploads/img02vdF8odjrkbYhvO.jpg#http://shinchuo-test2.com/shinchou/uploads/img12vdF8odjrkbYhvO.jpg#http://shinchuo-test2.com/shinchou/uploads/img22vdF8odjrkbYhvO.jpg#http://shinchuo-test2.com/shinchou/uploads/img32vdF8odjrkbYhvO.jpg#'),
('30TMSdL6I3AskpS', '8453', 'JU Tokyo', '2018-04-09 00:00:00', 'TOYOTA', 'TOWN ACE VAN', '2004', '1800', 'KR42V', 'GL', 'white', 'AT', '179000', 'R', '37000', '110000', '', 'http://bestonlinesupports.com/shinchou/uploads/img030TMSdL6I3AskpS.jpg#http://bestonlinesupports.com/shinchou/uploads/img130TMSdL6I3AskpS.jpg#http://bestonlinesupports.com/shinchou/uploads/img230TMSdL6I3AskpS.jpg#http://bestonlinesupports.com/shinchou/uploads/img330TMSdL6I3AskpS.jpg#'),
('324REyfBwMUVpzk', '70339', 'USS R-Nagoya', '2018-03-27 16:23:00', 'SUZUKI', 'CRUZE', '2001', '1300', 'HR51S', ' ', 'SILVER', 'FAT', '94000', '***', '25000', '0', '', 'http://bestonlinesupports.com/uploads/img0324REyfBwMUVpzk.jpg#http://bestonlinesupports.com/shinchou/uploads/img1324REyfBwMUVpzk.jpg#http://bestonlinesupports.com/shinchou/uploads/img2324REyfBwMUVpzk.jpg#http://bestonlinesupports.com/shinchou/uploads/img3324REyfBwMUVpzk.jpg#'),
('329FSN83PUQfgpv', '70414', 'Honda Kansai', '2018-04-16 14:36:00', 'SUZUKI', 'ALTO ECO', '2014', '660', 'HA35S', '&#65396;&#65402;S', 'pink', 'FAT', '33000', 'R', '10000', '242000', 'HA35S-171570', 'http://bestonlinesupports.com/shinchou/uploads/img0329FSN83PUQfgpv.jpg#http://bestonlinesupports.com/shinchou/uploads/img1329FSN83PUQfgpv.jpg#http://bestonlinesupports.com/shinchou/uploads/img2329FSN83PUQfgpv.jpg#http://bestonlinesupports.com/shinchou/uploads/img3329FSN83PUQfgpv.jpg#http://bestonlinesupports.com/shinchou/uploads/img4329FSN83PUQfgpv.jpg#http://bestonlinesupports.com/shinchou/uploads/img5329FSN83PUQfgpv.jpg#http://bestonlinesupports.com/shinchou/uploads/img6329FSN83PUQfgpv.jpg#http://bestonlinesupports.com/shinchou/uploads/img7329FSN83PUQfgpv.jpg#'),
('32yLvsVjfooRlxd', '7086', 'TAA Hokkaido', '2018-07-19 10:11:00', 'TOYOTA', 'COROLLA AXIO', '2011', '1500', 'NZE141', 'X', 'white', 'F5', '52000', 'RA', '50000', '485000', '', 'http://shinchuo-test2.com/shinchou/uploads/img032yLvsVjfooRlxd.jpg#http://shinchuo-test2.com/shinchou/uploads/img132yLvsVjfooRlxd.jpg#http://shinchuo-test2.com/shinchou/uploads/img232yLvsVjfooRlxd.jpg#'),
('37zC4GCZHEhiBiV', '8193', 'JU Tokyo', '2018-10-08 12:38:00', 'TOYOTA', 'AQUA', '2016', '1500', 'NHP10', 'S', 'red', 'AT', '15000', 'R', '350000', '864000', '', 'http://shinchuo-test2.com/shinchou/uploads/img037zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img137zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img237zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img337zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img437zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img537zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img637zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img737zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img837zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img937zC4GCZHEhiBiV.jpg#http://shinchuo-test2.com/shinchou/uploads/img1037zC4GCZHEhiBiV.jpg#'),
('38JUgPEtQ2tJp', '48', 'TAA Minami Kyushu', '2018-05-08 00:00:00', 'HONDA', 'FIT', '2010', '1300', 'GP1', '&#65413;&#65419;&#65438;&#65420;&#65439;&#65434;&#65424;&#65393;&#65425;&#65406;&#65434;&#65400;&#65', 'black', 'FAT', '113000', '4', '30000', '233000', '', 'http://shinchuo-test2.com/shinchou/uploads/img038JUgPEtQ2tJp.jpg#http://shinchuo-test2.com/shinchou/uploads/img138JUgPEtQ2tJp.jpg#http://shinchuo-test2.com/shinchou/uploads/img238JUgPEtQ2tJp.jpg#'),
('3ACbTvSKvWabih', '2135', 'TAA Kyushu', '2018-07-31 00:00:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'S', 'blue', 'FAT', '62000', '3.5', '150000', '503000', '', 'http://shinchuo-test2.com/shinchou/uploads/img03ACbTvSKvWabih.jpg#http://shinchuo-test2.com/shinchou/uploads/img13ACbTvSKvWabih.jpg#http://shinchuo-test2.com/shinchou/uploads/img23ACbTvSKvWabih.jpg#'),
('3gX4GartlHVklqK', '8016', 'JU Tokyo', '2018-04-16 12:09:00', 'TOYOTA', 'COROLLA RUNX', '2005', '1500', 'NZE121', '', 'white', 'AT', '116000', '4', '1000', '168000', '', 'http://bestonlinesupports.com/shinchou/uploads/img03gX4GartlHVklqK.jpg#http://bestonlinesupports.com/shinchou/uploads/img13gX4GartlHVklqK.jpg#http://bestonlinesupports.com/shinchou/uploads/img23gX4GartlHVklqK.jpg#http://bestonlinesupports.com/shinchou/uploads/img33gX4GartlHVklqK.jpg#'),
('3h0KjwvMNor2RMe', '8038', 'JU Tokyo', '2018-04-16 12:13:00', 'TOYOTA', 'COROLLA RUNX', '2003', '1500', 'NZE121', '', 'silver', 'AT', '57000', '4', '1000', '147000', '', 'http://bestonlinesupports.com/shinchou/uploads/img03h0KjwvMNor2RMe.jpg#http://bestonlinesupports.com/shinchou/uploads/img13h0KjwvMNor2RMe.jpg#http://bestonlinesupports.com/shinchou/uploads/img23h0KjwvMNor2RMe.jpg#http://bestonlinesupports.com/shinchou/uploads/img33h0KjwvMNor2RMe.jpg#'),
('3hwp2elM6DatTek', '8076', 'JU Fukushima', '2018-07-19 13:33:00', 'NISSAN', 'AD', '2013', '1600', 'VZNY12', '4WD DX', 'white', 'FA', '100000', '4', '30000', '300000', '', 'http://shinchuo-test2.com/shinchou/uploads/img03hwp2elM6DatTek.jpg#http://shinchuo-test2.com/shinchou/uploads/img13hwp2elM6DatTek.jpg#http://shinchuo-test2.com/shinchou/uploads/img23hwp2elM6DatTek.jpg#http://shinchuo-test2.com/shinchou/uploads/img33hwp2elM6DatTek.jpg#'),
('3hwR855dm8tknaF', '8077', 'JU Fukushima', '2018-07-19 13:34:00', 'NISSAN', 'CARAVAN', '2007', '3000', 'CWGE25', '&#65405;&#65392;&#65418;&#65439;&#65392;&#65435;&#65437;&#65400;&#65438;DX', 'silver', 'CA', '119000', '3', '30000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img03hwR855dm8tknaF.jpg#http://shinchuo-test2.com/shinchou/uploads/img13hwR855dm8tknaF.jpg#http://shinchuo-test2.com/shinchou/uploads/img23hwR855dm8tknaF.jpg#http://shinchuo-test2.com/shinchou/uploads/img33hwR855dm8tknaF.jpg#'),
('3ISmS2huKZ3pCV', '2288', 'USS Gunma', '2018-04-07 11:24:00', 'TOYOTA', 'LAND CRUISER PRADO', '2014', '2700', 'TRJ150W', 'TX ', 'BLACK M', 'FAT', '29000', '4.5', '1880000', '2895000', '', 'http://bestonlinesupports.com/shinchou/uploads/img03ISmS2huKZ3pCV.jpg#http://bestonlinesupports.com/shinchou/uploads/img13ISmS2huKZ3pCV.jpg#http://bestonlinesupports.com/shinchou/uploads/img23ISmS2huKZ3pCV.jpg#http://bestonlinesupports.com/shinchou/uploads/img33ISmS2huKZ3pCV.jpg#'),
('3MaDST63itAuLC', '232', 'USS Shizuoka', '2018-04-07 10:42:00', 'TOYOTA', 'CORONA', '1995', '2000', 'CT190', ' ', 'GRAY', 'MT5', '78000', 'R', '0', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img03MaDST63itAuLC.jpg#http://bestonlinesupports.com/shinchou/uploads/img13MaDST63itAuLC.jpg#http://bestonlinesupports.com/shinchou/uploads/img23MaDST63itAuLC.jpg#http://bestonlinesupports.com/shinchou/uploads/img33MaDST63itAuLC.jpg#'),
('3mROI9VxcfpPa', '52', 'USS Tohoku', '2018-04-04 10:44:00', 'TOYOTA', 'PRIUS', '2011', '1800', 'ZVW30', 'G LED-ED ', 'PEARL', 'AT', '100000', '4', '150000', '611000', '', 'http://bestonlinesupports.com/shinchou/uploads/img03mROI9VxcfpPa.jpg#http://bestonlinesupports.com/shinchou/uploads/img13mROI9VxcfpPa.jpg#http://bestonlinesupports.com/shinchou/uploads/img23mROI9VxcfpPa.jpg#http://bestonlinesupports.com/shinchou/uploads/img33mROI9VxcfpPa.jpg#'),
('3OTcTbIDeiFopE', '238', 'USS Shizuoka', '2018-04-07 10:43:00', 'HONDA', 'FIT', '2007', '1300', 'GD1', '1.3A F-PG ', 'SILVER', 'FAT', '108000', '3.5', '0', '43000', '', 'http://bestonlinesupports.com/shinchou/uploads/img03OTcTbIDeiFopE.jpg#http://bestonlinesupports.com/shinchou/uploads/img13OTcTbIDeiFopE.jpg#http://bestonlinesupports.com/shinchou/uploads/img23OTcTbIDeiFopE.jpg#http://bestonlinesupports.com/shinchou/uploads/img33OTcTbIDeiFopE.jpg#'),
('3rp3eZqlEeMRWVK', '9576', 'KCAA Fukuoka', '2018-07-19 13:54:00', 'HONDA', 'LIFE', '2010', '660', 'JC1', '&#65418;&#65439;&#65405;&#65411;&#65433;', 'white', 'DAT', '37000', '4', '100000', '302000', '', 'http://shinchuo-test2.com/shinchou/uploads/img03rp3eZqlEeMRWVK.jpg#http://shinchuo-test2.com/shinchou/uploads/img13rp3eZqlEeMRWVK.jpg#http://shinchuo-test2.com/shinchou/uploads/img23rp3eZqlEeMRWVK.jpg#'),
('3tgAeHcusoUXeQI', '9711', 'TAA Kantou', '2018-07-19 00:00:00', 'NISSAN', 'NOTE', '2014', '1200', 'E12', 'MEDALIST E MAJE MBRE YELLOW PACK ', 'BLUE', 'FAT', '22000', '4', '180000', '573000', '', 'http://shinchuo-test2.com/shinchou/uploads/img03tgAeHcusoUXeQI.jpg#http://shinchuo-test2.com/shinchou/uploads/img13tgAeHcusoUXeQI.jpg#http://shinchuo-test2.com/shinchou/uploads/img23tgAeHcusoUXeQI.jpg#'),
('3th3kwUVITdNIN4', '9712', 'TAA Kantou', '2018-07-19 00:00:00', 'TOYOTA', 'VITZ', '2015', '1000', 'KSP130', 'F ', 'SILVER', 'FAT', '48000', '4', '1000', '849000', '', 'http://shinchuo-test2.com/shinchou/uploads/img03th3kwUVITdNIN4.jpg#http://shinchuo-test2.com/shinchou/uploads/img13th3kwUVITdNIN4.jpg#http://shinchuo-test2.com/shinchou/uploads/img23th3kwUVITdNIN4.jpg#'),
('3th3kwUVITdNIN5', '9712', 'TAA Kantou', '2018-07-26 00:00:00', 'NISSAN', 'BLUEBIRD SYLPHY', '2011', '2000', 'KG11', 'AXIS ', 'SAPPHIRE BLACK', 'FAT', '4000', 'RA', '30000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img03th3kwUVITdNIN5.jpg#http://shinchuo-test2.com/shinchou/uploads/img13th3kwUVITdNIN5.jpg#http://shinchuo-test2.com/shinchou/uploads/img23th3kwUVITdNIN5.jpg#'),
('3uaLU962r1BV8wI', '9708', 'TAA Kantou', '2018-07-19 00:00:00', 'MITSUBISHI', 'RVR', '2016', '1800', 'GA4W', 'G ', 'SILVER', 'FAT', '6000', '4.5', '480000', '1483000', '', 'http://shinchuo-test2.com/shinchou/uploads/img03uaLU962r1BV8wI.jpg#http://shinchuo-test2.com/shinchou/uploads/img13uaLU962r1BV8wI.jpg#http://shinchuo-test2.com/shinchou/uploads/img23uaLU962r1BV8wI.jpg#'),
('3xcwxbnndR7bmim', '90373', 'LAA Kansai', '2018-07-26 12:48:00', 'NISSAN', 'X-TRAIL', '2016', '2000', 'T32', '2 TEMA-JENSIB ', 'PEARL', 'FAT', '19000', 'R', '1150000', '1222000', '', 'http://shinchuo-test2.com/shinchou/uploads/img03xcwxbnndR7bmim.jpg#http://shinchuo-test2.com/shinchou/uploads/img13xcwxbnndR7bmim.jpg#http://shinchuo-test2.com/shinchou/uploads/img23xcwxbnndR7bmim.jpg#http://shinchuo-test2.com/shinchou/uploads/img33xcwxbnndR7bmim.jpg#http://shinchuo-test2.com/shinchou/uploads/img43xcwxbnndR7bmim.jpg#http://shinchuo-test2.com/shinchou/uploads/img53xcwxbnndR7bmim.jpg#'),
('3xFKKVz9i8UYs', '57', 'USS R-Nagoya', '2018-04-03 10:12:00', 'SUZUKI', 'CARRY TRUCK', '2006', '660', 'DA63T', 'KC AIR CONDITIONER POWER STEERING ', 'SILVER', 'MT5', '78000', 'R', '20000', '178000', '', 'http://bestonlinesupports.com/shinchou/uploads/img03xFKKVz9i8UYs.jpg#http://bestonlinesupports.com/shinchou/uploads/img13xFKKVz9i8UYs.jpg#http://bestonlinesupports.com/shinchou/uploads/img23xFKKVz9i8UYs.jpg#http://bestonlinesupports.com/shinchou/uploads/img33xFKKVz9i8UYs.jpg#'),
('4Ooo0Qc0aRazG3', '3118', 'TAA Hiroshima', '2018-05-08 00:00:00', 'DAIHATSU', 'MIRA E S', '2013', '660', 'LA300S', '', 'silver', 'IAT', '74000', '3.5', '1000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img04Ooo0Qc0aRazG3.jpg#http://shinchuo-test2.com/shinchou/uploads/img14Ooo0Qc0aRazG3.jpg#http://shinchuo-test2.com/shinchou/uploads/img24Ooo0Qc0aRazG3.jpg#'),
('4Q0f7pM2bacf6bP', '11006', 'AUCNET', '2018-07-30 11:13:00', 'TOYOTA', 'COROLLA AXIO', '2013', '1500', 'NZE161', '1.5X', 'white', 'FAT', '27000', '4', '0', '518000', 'NZE161-7050831', 'http://shinchuo-test2.com/shinchou/uploads/img04Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img14Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img24Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img34Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img44Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img54Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img64Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img74Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img84Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img94Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img104Q0f7pM2bacf6bP.jpg#http://shinchuo-test2.com/shinchou/uploads/img114Q0f7pM2bacf6bP.jpg#'),
('4SiqJdYSjsyl9C', '3103', 'USS Kobe', '2018-04-18 10:39:00', 'MITSUBISHI', 'DELICA', '2004', '2000', 'SKE6VM', 'LONG DX ', 'WHITE', 'MT5', '69000', '3.5', '0', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img04SiqJdYSjsyl9C.jpg#http://bestonlinesupports.com/shinchou/uploads/img14SiqJdYSjsyl9C.jpg#http://bestonlinesupports.com/shinchou/uploads/img24SiqJdYSjsyl9C.jpg#http://bestonlinesupports.com/shinchou/uploads/img34SiqJdYSjsyl9C.jpg#'),
('4uq6t5v6XIh5RZ', '2097', 'USS Tohoku', '2018-07-18 13:53:00', 'AUDI', 'A6', '2012', '3000', '4GCGWS', '3.0TFSI QUATTRO ', 'SILVER', 'FAT', '115000', '4', '500000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img04uq6t5v6XIh5RZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img14uq6t5v6XIh5RZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img24uq6t5v6XIh5RZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img34uq6t5v6XIh5RZ.jpg#'),
('4UTMgBnPISyNepg', '12186', 'USS Kyushu', '2018-08-04 10:36:00', 'TOYOTA', 'VITZ', '2009', '1300', 'SCP90', 'F ', 'L BLUE', 'FAT', '51000', 'RA', '61000', '84000', '', 'http://shinchuo-test2.com/shinchou/uploads/img04UTMgBnPISyNepg.jpg#http://shinchuo-test2.com/shinchou/uploads/img14UTMgBnPISyNepg.jpg#http://shinchuo-test2.com/shinchou/uploads/img24UTMgBnPISyNepg.jpg#http://shinchuo-test2.com/shinchou/uploads/img34UTMgBnPISyNepg.jpg#'),
('4uUlhZTGNqpUaL', '2008', 'USS Tohoku', '2018-04-04 11:53:00', 'MITSUBISHI', 'LANCER', '2001', '2000', 'CT9A', ' ', 'WHITE', 'MT5', '192000', '2', '150000', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img04uUlhZTGNqpUaL.jpg#http://bestonlinesupports.com/shinchou/uploads/img14uUlhZTGNqpUaL.jpg#http://bestonlinesupports.com/shinchou/uploads/img24uUlhZTGNqpUaL.jpg#http://bestonlinesupports.com/shinchou/uploads/img34uUlhZTGNqpUaL.jpg#'),
('531seAypkRiPIq', '33596', 'HAA Kobe', '2018-07-28 11:55:00', 'DAIHATSU', 'MIRA E S', '2012', '660', 'LA300S', 'X &#65426;&#65427;&#65432;&#65393;&#65433;ED', 'silver', 'AT', '23000', '4.5', '0', '415000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img1531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img2531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img3531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img4531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img5531seAypkRiPIq.jpg#'),
('54JqfXFoPihof', '8', 'JU Niigata', '2018-08-03 11:31:00', 'TOYOTA', 'PRIUS', '2004', '1500', 'NHW20', '', '', 'IAT', '343000', 'R', '0', '84000', '', 'http://shinchuo-test2.com/shinchou/uploads/img054JqfXFoPihof.jpg#http://shinchuo-test2.com/shinchou/uploads/img154JqfXFoPihof.jpg#http://shinchuo-test2.com/shinchou/uploads/img254JqfXFoPihof.jpg#http://shinchuo-test2.com/shinchou/uploads/img354JqfXFoPihof.jpg#'),
('54VcHkw9iBLiE6', '339', 'TAA Kinki', '2018-04-10 12:26:00', 'NISSAN', 'DUALIS', '2011', '2000', 'KJ10', '20G', 'beige', 'FAT', '118000', '4', '100000', '690000', '', 'http://bestonlinesupports.com/shinchou/uploads/img054VcHkw9iBLiE6.jpg#http://bestonlinesupports.com/shinchou/uploads/img154VcHkw9iBLiE6.jpg#http://bestonlinesupports.com/shinchou/uploads/img254VcHkw9iBLiE6.jpg#'),
('5eEUZgN2eCma', '1', 'USS Saitama', '2018-07-27 10:30:00', 'DAIHATSU', 'MIRA E S', '2017', '660', 'LA350S', 'X SA3 ', 'YELLOW', 'AT', '3000', '5', '390000', '793000', '', 'http://shinchuo-test2.com/shinchou/uploads/img05eEUZgN2eCma.jpg#http://shinchuo-test2.com/shinchou/uploads/img15eEUZgN2eCma.jpg#http://shinchuo-test2.com/shinchou/uploads/img25eEUZgN2eCma.jpg#http://shinchuo-test2.com/shinchou/uploads/img35eEUZgN2eCma.jpg#'),
('5eEUZgw45lWk', '1', 'USS Gunma', '2018-07-28 10:00:00', 'SUZUKI', 'WAGON R', '2006', '660', 'MH21S', 'FT-S LTD ', 'PURPLE', 'CAT', '85000', '4', '10000', '136000', '', 'http://shinchuo-test2.com/shinchou/uploads/img05eEUZgw45lWk.jpg#http://shinchuo-test2.com/shinchou/uploads/img15eEUZgw45lWk.jpg#http://shinchuo-test2.com/shinchou/uploads/img25eEUZgw45lWk.jpg#http://shinchuo-test2.com/shinchou/uploads/img35eEUZgw45lWk.jpg#'),
('5FCmFXoeqRZ044', '3021', 'TAA Hiroshima', '2018-05-08 00:00:00', 'DAIHATSU', 'HIJET VAN', '2008', '660', 'S321V', 'DX', 'blue', 'IAT', '97000', 'RA', '1000', '169000', '', 'http://shinchuo-test2.com/shinchou/uploads/img05FCmFXoeqRZ044.jpg#http://shinchuo-test2.com/shinchou/uploads/img15FCmFXoeqRZ044.jpg#http://shinchuo-test2.com/shinchou/uploads/img25FCmFXoeqRZ044.jpg#'),
('5FpoKHEgmyHEi0', '3018', 'TAA Minami Kyushu', '2018-05-08 00:00:00', 'NISSAN', 'MOCO', '2011', '660', 'MG33S', 'X', 'red', 'IAT', '54000', 'RA', '30000', '327000', '', 'http://shinchuo-test2.com/shinchou/uploads/img05FpoKHEgmyHEi0.jpg#http://shinchuo-test2.com/shinchou/uploads/img15FpoKHEgmyHEi0.jpg#http://shinchuo-test2.com/shinchou/uploads/img25FpoKHEgmyHEi0.jpg#'),
('5G43EF45iMKcN7', '30313', 'HAA Kobe', '2018-08-11 00:00:00', 'HONDA', 'VEZEL', '2017', '1500', 'RU3', 'Hybrid X Honda Sensing', 'dark green', 'AT', '7000', '4.5', '1200000', '2077000', '', 'http://shinchuo-test2.com/shinchou/uploads/img05G43EF45iMKcN7.jpg#http://shinchuo-test2.com/shinchou/uploads/img15G43EF45iMKcN7.jpg#http://shinchuo-test2.com/shinchou/uploads/img25G43EF45iMKcN7.jpg#http://shinchuo-test2.com/shinchou/uploads/img35G43EF45iMKcN7.jpg#http://shinchuo-test2.com/shinchou/uploads/img45G43EF45iMKcN7.jpg#http://shinchuo-test2.com/shinchou/uploads/img55G43EF45iMKcN7.jpg#http://shinchuo-test2.com/shinchou/uploads/img65G43EF45iMKcN7.jpg#http://shinchuo-test2.com/shinchou/uploads/img75G43EF45iMKcN7.jpg#'),
('5G7CuSMPgA8YmX', '3032', 'TAA Hiroshima', '2018-05-08 00:00:00', 'MITSUBISHI', 'EK ACTIVE', '2015', '660', 'B11W', 'M 4WD', 'silver', 'IAT', '92000', '3.5', '100000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img05G7CuSMPgA8YmX.jpg#http://shinchuo-test2.com/shinchou/uploads/img15G7CuSMPgA8YmX.jpg#http://shinchuo-test2.com/shinchou/uploads/img25G7CuSMPgA8YmX.jpg#'),
('5GrcBfTJQrIlCS', '303', 'TAA Kinki', '2018-04-10 12:10:00', 'NISSAN', 'DUALIS', '2011', '2000', 'KNJ10', '20G&#65405;&#65408;&#65394;&#65432;&#65391;&#65404;&#65389;&#65398;&#65438;&#65431;&#65405;&#65433;&', 'black', 'FAT', '142000', '3', '150000', '361000', '', 'http://bestonlinesupports.com/shinchou/uploads/img05GrcBfTJQrIlCS.jpg#http://bestonlinesupports.com/shinchou/uploads/img15GrcBfTJQrIlCS.jpg#http://bestonlinesupports.com/shinchou/uploads/img25GrcBfTJQrIlCS.jpg#'),
('5jkp4HtbaYeJqT', '364', 'KCAA Fukuoka', '2018-07-26 11:39:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'S', 'light blue', 'FAT', '62000', '4', '100000', '609000', '', 'http://shinchuo-test2.com/shinchou/uploads/img05jkp4HtbaYeJqT.jpg#http://shinchuo-test2.com/shinchou/uploads/img15jkp4HtbaYeJqT.jpg#http://shinchuo-test2.com/shinchou/uploads/img25jkp4HtbaYeJqT.jpg#'),
('5vPfYoVeaHvpB', '9', 'TAA Chubu', '2018-09-20 00:00:00', 'TOYOTA', 'HIACE', '2013', '2700', 'TRH214W', 'DX', 'silver', 'IAT', '83000', '3.5', '900000', '1519000', '', 'http://shinchuo-test2.com/shinchou/uploads/img05vPfYoVeaHvpB.jpg#http://shinchuo-test2.com/shinchou/uploads/img15vPfYoVeaHvpB.jpg#http://shinchuo-test2.com/shinchou/uploads/img25vPfYoVeaHvpB.jpg#'),
('64QjOb4h45gU0G', '4137', 'USS Tohoku', '2018-04-04 11:44:00', 'HONDA', 'N-WGN', '2014', '660', 'JH2', 'G* TURBO PACK custom', 'PEARL', 'AT', '38000', '3.5', '690000', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img064QjOb4h45gU0G.jpg#http://bestonlinesupports.com/shinchou/uploads/img164QjOb4h45gU0G.jpg#http://bestonlinesupports.com/shinchou/uploads/img264QjOb4h45gU0G.jpg#http://bestonlinesupports.com/shinchou/uploads/img364QjOb4h45gU0G.jpg#'),
('686iCDqOwvDs5n', '4109', 'TAA Minami Kyushu', '2018-05-08 00:00:00', 'NISSAN', 'MARCH', '2007', '1200', 'AK12', '12S', 'red', 'FAT', '120000', '4', '20000', '43000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0686iCDqOwvDs5n.jpg#http://shinchuo-test2.com/shinchou/uploads/img1686iCDqOwvDs5n.jpg#http://shinchuo-test2.com/shinchou/uploads/img2686iCDqOwvDs5n.jpg#'),
('6TOuMNbzeKMXT6', '4013', 'TAA Hiroshima', '2018-05-08 00:00:00', 'SUZUKI', 'MR WAGON', '2004', '660', 'MF21S', '&#65405;&#65422;&#65439;&#65392;&#65410;', 'white', 'CAT', '115000', 'R', '20000', '18000', '', 'http://shinchuo-test2.com/shinchou/uploads/img06TOuMNbzeKMXT6.jpg#http://shinchuo-test2.com/shinchou/uploads/img16TOuMNbzeKMXT6.jpg#http://shinchuo-test2.com/shinchou/uploads/img26TOuMNbzeKMXT6.jpg#'),
('6U4CHfSREKlX5w', '4010', 'TAA Minami Kyushu', '2018-05-08 00:00:00', 'DAIHATSU', 'BOON', '2005', '1000', 'M300S', '1.0CL', 'champagne', 'CAT', '117000', 'RA', '5000', '30000', '', 'http://shinchuo-test2.com/shinchou/uploads/img06U4CHfSREKlX5w.jpg#http://shinchuo-test2.com/shinchou/uploads/img16U4CHfSREKlX5w.jpg#http://shinchuo-test2.com/shinchou/uploads/img26U4CHfSREKlX5w.jpg#'),
('6UKQrr2qyUgQFO', '4034', 'TAA Minami Kyushu', '2018-05-08 00:00:00', 'NISSAN', 'NOTE', '2009', '1500', 'E11', '', 'white', 'FAT', '72000', '3.5', '5000', '87000', '', 'http://shinchuo-test2.com/shinchou/uploads/img06UKQrr2qyUgQFO.jpg#http://shinchuo-test2.com/shinchou/uploads/img16UKQrr2qyUgQFO.jpg#http://shinchuo-test2.com/shinchou/uploads/img26UKQrr2qyUgQFO.jpg#'),
('6UvIwWW7MylXrF', '4020', 'USS Tohoku', '2018-04-04 11:15:00', 'SUZUKI', 'WAGON R', '2016', '660', 'MH44S', 'FZ ', 'PINK', 'AT', '3000', '5', '480000', '1131000', '', 'http://bestonlinesupports.com/shinchou/uploads/img06UvIwWW7MylXrF.jpg#http://bestonlinesupports.com/shinchou/uploads/img16UvIwWW7MylXrF.jpg#http://bestonlinesupports.com/shinchou/uploads/img26UvIwWW7MylXrF.jpg#http://bestonlinesupports.com/shinchou/uploads/img36UvIwWW7MylXrF.jpg#'),
('6V9CiIa1PcyYZm', '4042', 'USS Fukuoka', '2018-04-18 11:19:00', 'SUBARU', 'FORESTER', '2015', '2000', 'SJ5', 'S-LTD ', 'GOLD', 'FAT', '62000', '4.5', '500000', '1505000', '', 'http://bestonlinesupports.com/shinchou/uploads/img06V9CiIa1PcyYZm.jpg#http://bestonlinesupports.com/shinchou/uploads/img16V9CiIa1PcyYZm.jpg#http://bestonlinesupports.com/shinchou/uploads/img26V9CiIa1PcyYZm.jpg#http://bestonlinesupports.com/shinchou/uploads/img36V9CiIa1PcyYZm.jpg#'),
('7aCJfIBq0l1FdBJ', '10001', 'USS Shizuoka', '2018-07-28 10:35:00', 'SUZUKI', 'ALTO LAPIN', '2009', '660', 'HE22S', 'G ', 'IVORY', 'AT', '31000', '4', '100000', '469000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07aCJfIBq0l1FdBJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img17aCJfIBq0l1FdBJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img27aCJfIBq0l1FdBJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img37aCJfIBq0l1FdBJ.jpg#'),
('7aCJfIBq8fY0FqH', '10001', 'USS Kyushu', '2018-07-28 09:30:00', 'NISSAN', 'AD', '2011', '1600', 'VZNY12', 'VE ', 'WHITE', 'FAT', '132000', '3.5', '18000', '79000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07aCJfIBq8fY0FqH.jpg#http://shinchuo-test2.com/shinchou/uploads/img17aCJfIBq8fY0FqH.jpg#http://shinchuo-test2.com/shinchou/uploads/img27aCJfIBq8fY0FqH.jpg#http://shinchuo-test2.com/shinchou/uploads/img37aCJfIBq8fY0FqH.jpg#'),
('7aDblyjRpPjvHy5', '10002', 'USS Shizuoka', '2018-07-28 10:35:00', 'SUZUKI', 'EVERY WAGON', '2013', '660', 'DA64W', 'PZ TURBO ', 'BLACK', 'AT', '85000', '3.5', '300000', '604000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07aDblyjRpPjvHy5.jpg#http://shinchuo-test2.com/shinchou/uploads/img17aDblyjRpPjvHy5.jpg#http://shinchuo-test2.com/shinchou/uploads/img27aDblyjRpPjvHy5.jpg#http://shinchuo-test2.com/shinchou/uploads/img37aDblyjRpPjvHy5.jpg#'),
('7aGm1okWhpzVsAU', '10009', 'USS Tokyo', '2018-07-26 11:25:00', 'SUZUKI', 'SWIFT SPORTS', '2012', '1600', 'ZC32S', ' ', 'GRAY', 'MT6', '61000', '4', '0', '707000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07aGm1okWhpzVsAU.jpg#http://shinchuo-test2.com/shinchou/uploads/img17aGm1okWhpzVsAU.jpg#http://shinchuo-test2.com/shinchou/uploads/img27aGm1okWhpzVsAU.jpg#http://shinchuo-test2.com/shinchou/uploads/img37aGm1okWhpzVsAU.jpg#'),
('7ERXyV1znCtMSe', '5511', 'TAA Kyushu', '2018-05-08 00:00:00', 'TOYOTA', 'COROLLA FIELDER', '2014', '1500', 'NZE161G', '1.5G AERO TOURER *WXB ', 'BLACK', 'FAT', '31000', '4', '490000', '785000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07ERXyV1znCtMSe.jpg#http://shinchuo-test2.com/shinchou/uploads/img17ERXyV1znCtMSe.jpg#http://shinchuo-test2.com/shinchou/uploads/img27ERXyV1znCtMSe.jpg#'),
('7M8sUo3PbRNW9J', '5641', 'TAA Tohoku', '2018-07-19 13:57:00', 'TOYOTA', 'CROWN', '2004', '3000', 'GRS183', '&#65435;&#65394;&#65428;&#65433;&#65403;&#65433;&#65392;&#65437;i-Four 4WD', 'silver', 'FAT', '162000', '3.5', '30000', '106000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07M8sUo3PbRNW9J.jpg#http://shinchuo-test2.com/shinchou/uploads/img17M8sUo3PbRNW9J.jpg#http://shinchuo-test2.com/shinchou/uploads/img27M8sUo3PbRNW9J.jpg#'),
('7tnSwboLFQ0wuI', '53105', 'HAA Kobe', '2018-08-11 00:00:00', 'HONDA', 'CROSSROAD', '2007', '2000', 'RT3', '20X HID Edition', 'grey', 'AT', '117000', '3.5', '0', '245000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img17tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img27tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img37tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img47tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img57tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img67tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img77tnSwboLFQ0wuI.jpg#'),
('7X7cTdtbXo1yRJ', '5824', 'TAA Tohoku', '2018-09-20 00:00:00', 'TOYOTA', 'AQUA', '2015', '1500', 'NHP10', 'S', 'white', 'FAT', '73000', '4', '300000', '820000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07X7cTdtbXo1yRJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img17X7cTdtbXo1yRJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img27X7cTdtbXo1yRJ.jpg#'),
('7xhfRwAljIAlAD', '53051', 'HAA Kobe', '2018-05-12 00:00:00', 'TOYOTA', 'COROLLA FIELDER', '2010', '1500', 'NZE144G', '1.5X ', 'WHITE', 'FA', '269000', '3.5', '20000', '186000', '', 'http://shinchuo-test2.com/shinchou/uploads/img07xhfRwAljIAlAD.jpg#http://shinchuo-test2.com/shinchou/uploads/img17xhfRwAljIAlAD.jpg#http://shinchuo-test2.com/shinchou/uploads/img27xhfRwAljIAlAD.jpg#http://shinchuo-test2.com/shinchou/uploads/img37xhfRwAljIAlAD.jpg#http://shinchuo-test2.com/shinchou/uploads/img47xhfRwAljIAlAD.jpg#http://shinchuo-test2.com/shinchou/uploads/img57xhfRwAljIAlAD.jpg#'),
('80Hr2T69R0m0VP', '50425', 'HAA Kobe', '2018-05-12 00:00:00', 'TOYOTA', 'COROLLA FIELDER', '2013', '1500', 'NKE165G', 'HYBRID G AERO TOURER WXB HV', 'PEARL', 'FA', '57000', '4.5', '600000', '967000', '', 'http://shinchuo-test2.com/shinchou/uploads/img080Hr2T69R0m0VP.jpg#http://shinchuo-test2.com/shinchou/uploads/img180Hr2T69R0m0VP.jpg#http://shinchuo-test2.com/shinchou/uploads/img280Hr2T69R0m0VP.jpg#'),
('8arU1ezQG7y5dZ', '5050', 'USS Kobe', '2018-04-18 11:35:00', 'MITSUBISHI', 'OUTLANDER PHEV', '2013', '2000', 'GG2W', 'G NAVIGATION PACK ', 'BLACK', 'FAT', '55000', '3.5', '980000', '1345000', '', 'http://bestonlinesupports.com/shinchou/uploads/img08arU1ezQG7y5dZ.jpg#http://bestonlinesupports.com/shinchou/uploads/img18arU1ezQG7y5dZ.jpg#http://bestonlinesupports.com/shinchou/uploads/img28arU1ezQG7y5dZ.jpg#http://bestonlinesupports.com/shinchou/uploads/img38arU1ezQG7y5dZ.jpg#'),
('8cBDvjulNMNwR4', '50070', 'HAA Kobe', '2018-05-12 00:00:00', 'TOYOTA', 'COROLLA FIELDER', '2015', '1500', 'NRE161G', '1.5X ', 'BLACK', 'FA', '28000', '4', '580000', '1059000', '', 'http://shinchuo-test2.com/shinchou/uploads/img08cBDvjulNMNwR4.jpg#http://shinchuo-test2.com/shinchou/uploads/img18cBDvjulNMNwR4.jpg#http://shinchuo-test2.com/shinchou/uploads/img28cBDvjulNMNwR4.jpg#'),
('8GauopmsPTywlH', '6200', 'USS Gunma', '2018-04-07 13:18:00', 'TOYOTA', 'LAND CRUISER PRADO', '2016', '2700', 'TRJ150W', 'TX L PACK ', 'BLACK', 'AT', '16000', 'RA', '2180000', '2393000', '', 'http://bestonlinesupports.com/shinchou/uploads/img08GauopmsPTywlH.jpg#http://bestonlinesupports.com/shinchou/uploads/img18GauopmsPTywlH.jpg#http://bestonlinesupports.com/shinchou/uploads/img28GauopmsPTywlH.jpg#http://bestonlinesupports.com/shinchou/uploads/img38GauopmsPTywlH.jpg#'),
('8IgQJ8YJC6hhyhQ', '23020', 'USS Tokyo', '2018-10-11 09:57:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'S ', 'RED', 'FAT', '140000', '4', '0', '350000', '', 'http://shinchuo-test2.com/shinchou/uploads/img08IgQJ8YJC6hhyhQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img18IgQJ8YJC6hhyhQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img28IgQJ8YJC6hhyhQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img38IgQJ8YJC6hhyhQ.jpg#'),
('8LPQ7sN3BuVmB', '141', 'USS Sapporo', '2018-04-04 10:19:00', 'TOYOTA', 'PASSO', '2012', '1000', 'KGC35', 'X ', 'WHITE', 'CAT', '86000', '4', '0', '291000', '', 'http://bestonlinesupports.com/shinchou/uploads/img08LPQ7sN3BuVmB.jpg#http://bestonlinesupports.com/shinchou/uploads/img18LPQ7sN3BuVmB.jpg#http://bestonlinesupports.com/shinchou/uploads/img28LPQ7sN3BuVmB.jpg#http://bestonlinesupports.com/shinchou/uploads/img38LPQ7sN3BuVmB.jpg#'),
('8yozeNYi59dVoK', '6168', 'USS Tohoku', '2018-04-04 12:54:00', 'HONDA', 'AIRWAVE', '2005', '1500', 'GJ2', 'L ', 'BLACK', 'FAT', '107000', '4', '0', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img08yozeNYi59dVoK.jpg#http://bestonlinesupports.com/shinchou/uploads/img18yozeNYi59dVoK.jpg#http://bestonlinesupports.com/shinchou/uploads/img28yozeNYi59dVoK.jpg#http://bestonlinesupports.com/shinchou/uploads/img38yozeNYi59dVoK.jpg#'),
('948b77v1nOgaEza', '25112', 'AUCNET', '2018-04-09 12:26:00', 'SUBARU', 'SAMBAR', '2008', '660', 'TT2', '&#65403;&#65437;&#65422;&#65439;&#65395;&#65398;&#65394; &#65408;&#65438;&#65437;&#65420;&#65439;', 'white', 'F5', '136000', '2', '100000', '0', 'TT2-397126', 'http://bestonlinesupports.com/shinchou/uploads/img0948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img1948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img2948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img3948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img4948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img5948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img6948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img7948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img8948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img9948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img10948b77v1nOgaEza.jpg#http://bestonlinesupports.com/shinchou/uploads/img11948b77v1nOgaEza.jpg#');
INSERT INTO `productdetail` (`id`, `lot`, `auction`, `auction_date`, `make`, `model`, `year`, `enginecc`, `chassis`, `grade`, `color`, `transmission`, `mileage`, `rate`, `start`, `avg_price`, `serial`, `images`) VALUES
('97jcdCr0jF4pS4O', '25380', 'USS Tokyo', '2018-09-20 00:00:00', 'TOYOTA', 'HIACE', '2013', '2700', 'TRH219W', 'GL ', 'PEARL', 'AT', '87000', '3.5', '980000', '1307000', '', 'http://shinchuo-test2.com/shinchou/uploads/img097jcdCr0jF4pS4O.jpg#http://shinchuo-test2.com/shinchou/uploads/img197jcdCr0jF4pS4O.jpg#http://shinchuo-test2.com/shinchou/uploads/img297jcdCr0jF4pS4O.jpg#http://shinchuo-test2.com/shinchou/uploads/img397jcdCr0jF4pS4O.jpg#'),
('9nz3vAI1X5A0ls', '6027', 'USS Tohoku', '2018-04-04 12:17:00', 'NISSAN', 'X-TRAIL', '2012', '2000', 'NT31', '2 TT ', 'BLACK', 'FAT', '112000', '4', '390000', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img09nz3vAI1X5A0ls.jpg#http://bestonlinesupports.com/shinchou/uploads/img19nz3vAI1X5A0ls.jpg#http://bestonlinesupports.com/shinchou/uploads/img29nz3vAI1X5A0ls.jpg#http://bestonlinesupports.com/shinchou/uploads/img39nz3vAI1X5A0ls.jpg#'),
('9om0Tuj8Vcxjjm', '60448', 'HAA Kobe', '2018-07-28 13:42:00', 'DAIHATSU', 'MIRA E S', '2013', '660', 'LA300S', 'L &#65426;&#65427;&#65432;&#65393;&#65433;ED', 'white', 'AT', '38000', '4', '20000', '281000', '', 'http://shinchuo-test2.com/shinchou/uploads/img09om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img19om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img29om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img39om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img49om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img59om0Tuj8Vcxjjm.jpg#'),
('9U21DaYxLJqOkR', '7292', 'TAA Tohoku', '2018-07-19 14:36:00', 'TOYOTA', 'CROWN', '2002', '2500', 'JZS171', '&#65435;&#65394;&#65428;&#65433;&#65403;&#65433;&#65392;&#65437; &#65420;&#65439;&#65434;&#65424;&#6', 'pearl two-tone', 'FAT', '82000', '3', '50000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img09U21DaYxLJqOkR.jpg#http://shinchuo-test2.com/shinchou/uploads/img19U21DaYxLJqOkR.jpg#http://shinchuo-test2.com/shinchou/uploads/img29U21DaYxLJqOkR.jpg#'),
('AaTdIUt6TrtKhw', '23399', 'JAA', '2018-05-09 00:00:00', 'TOYOTA', 'MARK X', '2010', '2500', 'GRX130', '250G RELAX  ION 4D', 'PEARL', 'AT', '51000', '4', '180000', '757000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0AaTdIUt6TrtKhw.jpg#http://shinchuo-test2.com/shinchou/uploads/img1AaTdIUt6TrtKhw.jpg#http://shinchuo-test2.com/shinchou/uploads/img2AaTdIUt6TrtKhw.jpg#'),
('ap47i8nA8HME1', '19', 'TAA Chubu', '2018-09-20 00:00:00', 'TOYOTA', 'IST', '2013', '1000', 'KSP130', 'F M Package', 'white', 'FAT', '94000', '4', '10000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0ap47i8nA8HME1.jpg#http://shinchuo-test2.com/shinchou/uploads/img1ap47i8nA8HME1.jpg#http://shinchuo-test2.com/shinchou/uploads/img2ap47i8nA8HME1.jpg#'),
('ayRQruB225CgJPC', '31026', 'JU Aichi', '2018-07-19 15:46:00', 'TOYOTA', 'COROLLA AXIO', '2010', '1500', 'NZE141', '', 'silver', 'AT', '117000', '3.5', '9000', '253000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0ayRQruB225CgJPC.jpg#http://shinchuo-test2.com/shinchou/uploads/img1ayRQruB225CgJPC.jpg#http://shinchuo-test2.com/shinchou/uploads/img2ayRQruB225CgJPC.jpg#http://shinchuo-test2.com/shinchou/uploads/img3ayRQruB225CgJPC.jpg#'),
('bhJGyQlf7Pof6h', '9102', 'TAA Tohoku', '2018-07-19 12:00:00', 'TOYOTA', 'COROLLA FIELDER', '2015', '1500', 'NZE164G', 'G 4WD ', 'SILVER', 'FAT', '89000', '4', '500000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0bhJGyQlf7Pof6h.jpg#http://shinchuo-test2.com/shinchou/uploads/img1bhJGyQlf7Pof6h.jpg#http://shinchuo-test2.com/shinchou/uploads/img2bhJGyQlf7Pof6h.jpg#'),
('c5DGF2uC2K2fSX', '9011', 'USS Fukuoka', '2018-04-04 12:08:00', 'DAIHATSU', 'COPEN', '2008', '660', 'L880K', ' ', ' BLACK  COLOR SUBSTITUTION  HAVE ', 'FAT', '82000', '4', '180000', '646000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0c5DGF2uC2K2fSX.jpg#http://bestonlinesupports.com/shinchou/uploads/img1c5DGF2uC2K2fSX.jpg#http://bestonlinesupports.com/shinchou/uploads/img2c5DGF2uC2K2fSX.jpg#http://bestonlinesupports.com/shinchou/uploads/img3c5DGF2uC2K2fSX.jpg#'),
('c5MkBRjVpncDpf', '9015', 'USS Fukuoka', '2018-04-18 10:48:00', 'VOLVO', 'XC90', '2004', '2500', 'CB5254AW', '2.5T ', 'SILVER', 'FAT', '82000', '4', '10000', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img0c5MkBRjVpncDpf.jpg#http://bestonlinesupports.com/shinchou/uploads/img1c5MkBRjVpncDpf.jpg#http://bestonlinesupports.com/shinchou/uploads/img2c5MkBRjVpncDpf.jpg#http://bestonlinesupports.com/shinchou/uploads/img3c5MkBRjVpncDpf.jpg#'),
('c6cgsmNRygKLY2', '9024', 'USS Fukuoka', '2018-04-18 10:53:00', 'NISSAN', 'SERENA', '2013', '2000', 'HFC26', 'ASH WS MANY G SHV AERO ', 'PEARL', 'AT', '78000', '4', '480000', '910000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0c6cgsmNRygKLY2.jpg#http://bestonlinesupports.com/shinchou/uploads/img1c6cgsmNRygKLY2.jpg#http://bestonlinesupports.com/shinchou/uploads/img2c6cgsmNRygKLY2.jpg#http://bestonlinesupports.com/shinchou/uploads/img3c6cgsmNRygKLY2.jpg#'),
('c9kLjcjq0uSBC0', '9093', 'TAA Tohoku', '2018-07-26 12:02:00', 'TOYOTA', 'COROLLA FIELDER', '2011', '1800', 'ZRE144G', '1.8S AERO TOURER 4WD ', ' COBALT  BLUE ', 'FAT', '93000', 'R', '30000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0c9kLjcjq0uSBC0.jpg#http://shinchuo-test2.com/shinchou/uploads/img1c9kLjcjq0uSBC0.jpg#http://shinchuo-test2.com/shinchou/uploads/img2c9kLjcjq0uSBC0.jpg#'),
('cN5xR7r6N3qwiDR', '30511', 'USS Tokyo', '2018-04-19 00:00:00', 'TOYOTA', 'WISH', '2009', '2000', 'ZGE22W', '2.0Z ', 'RED', 'AT', '57000', '3.5', '80000', '429000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0cN5xR7r6N3qwiDR.jpg#http://bestonlinesupports.com/shinchou/uploads/img1cN5xR7r6N3qwiDR.jpg#http://bestonlinesupports.com/shinchou/uploads/img2cN5xR7r6N3qwiDR.jpg#http://bestonlinesupports.com/shinchou/uploads/img3cN5xR7r6N3qwiDR.jpg#'),
('cNjuXD6BzasseH3', '30538', 'USS Tokyo', '2018-04-19 16:55:00', 'TOYOTA', 'WISH', '2009', '1800', 'ZGE20W', '1.8S ', 'L BLUE', 'AT', '79000', '4', '80000', '369000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0cNjuXD6BzasseH3.jpg#http://shinchuo-test2.com/shinchou/uploads/img1cNjuXD6BzasseH3.jpg#http://shinchuo-test2.com/shinchou/uploads/img2cNjuXD6BzasseH3.jpg#http://shinchuo-test2.com/shinchou/uploads/img3cNjuXD6BzasseH3.jpg#'),
('CoJhuIzymdJVJF', '2511', 'TAA Chubu', '2018-07-19 12:10:00', 'TOYOTA', 'CROWN', '2008', '3500', 'GWS204', '', 'white', 'FAT', '157000', '3.5', '50000', '524000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0CoJhuIzymdJVJF.jpg#http://shinchuo-test2.com/shinchou/uploads/img1CoJhuIzymdJVJF.jpg#http://shinchuo-test2.com/shinchou/uploads/img2CoJhuIzymdJVJF.jpg#'),
('COsgiwgNsaOW', '14', 'USS Tohoku', '2018-04-04 10:33:00', 'HONDA', 'STREAM', '2010', '1800', 'RN6', 'TS ', 'GREEN', 'AT', '40000', '4', '180000', '513000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0COsgiwgNsaOW.jpg#http://bestonlinesupports.com/shinchou/uploads/img1COsgiwgNsaOW.jpg#http://bestonlinesupports.com/shinchou/uploads/img2COsgiwgNsaOW.jpg#http://bestonlinesupports.com/shinchou/uploads/img3COsgiwgNsaOW.jpg#'),
('cRaKE4PQhZkrE1E', '30853', 'JU Aichi', '2018-07-26 15:23:00', 'TOYOTA', 'BELTA', '2010', '1000', 'KSP92', 'X', 'blue', 'FAT', '83000', '4', '9000', '206000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0cRaKE4PQhZkrE1E.jpg#http://shinchuo-test2.com/shinchou/uploads/img1cRaKE4PQhZkrE1E.jpg#http://shinchuo-test2.com/shinchou/uploads/img2cRaKE4PQhZkrE1E.jpg#http://shinchuo-test2.com/shinchou/uploads/img3cRaKE4PQhZkrE1E.jpg#'),
('cTj58D9fWI6CELy', '30019', 'JU Aichi', '2018-07-26 13:29:00', 'NISSAN', 'MISTRAL', '1995', '2700', 'R20', 'D X 4WD ', 'two-tone', 'AT', '331000', '3', '9000', '170000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0cTj58D9fWI6CELy.jpg#http://shinchuo-test2.com/shinchou/uploads/img1cTj58D9fWI6CELy.jpg#http://shinchuo-test2.com/shinchou/uploads/img2cTj58D9fWI6CELy.jpg#http://shinchuo-test2.com/shinchou/uploads/img3cTj58D9fWI6CELy.jpg#http://shinchuo-test2.com/shinchou/uploads/img4cTj58D9fWI6CELy.jpg#'),
('E0tRGK8nEhH7Ov', '2667', 'TAA Kantou', '2018-07-19 00:00:00', 'TOYOTA', 'AQUA', '2014', '1500', 'NHP10', 'G BLACK SOFT LEATHER  ION ', ' DEEP  AMETHYST ', 'FAT', '27000', 'R', '280000', '610000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0E0tRGK8nEhH7Ov.jpg#http://shinchuo-test2.com/shinchou/uploads/img1E0tRGK8nEhH7Ov.jpg#http://shinchuo-test2.com/shinchou/uploads/img2E0tRGK8nEhH7Ov.jpg#'),
('Ejg0B9WJoitWP', '60', 'JU Tochigi', '2018-08-03 14:47:00', 'TOYOTA', 'PRIUS', '2010', '1800', 'ZVW30', 'S', '', 'IA', '94000', '3.5', '50000', '471000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img1Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img2Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img3Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img4Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img5Ejg0B9WJoitWP.jpg#'),
('eSHeL4KR2P8jx', '260', 'TAA Hiroshima', '2018-05-08 00:00:00', 'SUZUKI', 'SWIFT', '2007', '1200', 'ZC71S', 'XG', 'white', 'FAT', '111000', 'R', '10000', '43000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0eSHeL4KR2P8jx.jpg#http://shinchuo-test2.com/shinchou/uploads/img1eSHeL4KR2P8jx.jpg#http://shinchuo-test2.com/shinchou/uploads/img2eSHeL4KR2P8jx.jpg#'),
('ftr2jkkIXQYM9', '281', 'TAA Hiroshima', '2018-05-08 00:00:00', 'MAZDA', 'ATENZA WAGON', '2006', '2000', 'GYEW', '20C', 'blue', 'FAT', '128000', '3', '10000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0ftr2jkkIXQYM9.jpg#http://shinchuo-test2.com/shinchou/uploads/img1ftr2jkkIXQYM9.jpg#http://shinchuo-test2.com/shinchou/uploads/img2ftr2jkkIXQYM9.jpg#'),
('fvB1uTDY4tbVO', '282', 'USS Yokohama', '2018-04-03 10:36:00', 'SUZUKI', 'EVERY', '2012', '660', 'DA64V', 'PA ', 'WHITE', 'AT', '26000', '4', '20000', '503000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0fvB1uTDY4tbVO.jpg#http://bestonlinesupports.com/shinchou/uploads/img1fvB1uTDY4tbVO.jpg#http://bestonlinesupports.com/shinchou/uploads/img2fvB1uTDY4tbVO.jpg#http://bestonlinesupports.com/shinchou/uploads/img3fvB1uTDY4tbVO.jpg#'),
('G8DuaRI2eDTIN', '71', 'USS Shizuoka', '2018-08-11 10:13:00', 'SUZUKI', 'SWIFT', '2010', '1300', 'ZD11S', '1.3XG L PACK ', 'GUNMETAL', 'FAT', '216000', '3.5', '0', '97000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0G8DuaRI2eDTIN.jpg#http://shinchuo-test2.com/shinchou/uploads/img1G8DuaRI2eDTIN.jpg#http://shinchuo-test2.com/shinchou/uploads/img2G8DuaRI2eDTIN.jpg#http://shinchuo-test2.com/shinchou/uploads/img3G8DuaRI2eDTIN.jpg#'),
('gaELt5S9OOKAb', '298', 'USS R-Nagoya', '2018-04-03 10:51:00', 'SUZUKI', 'EVERY WAGON', '2002', '660', 'DA62W', 'JOY POP ', 'PEARL', 'AT', '144000', '4', '0', '110000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0gaELt5S9OOKAb.jpg#http://bestonlinesupports.com/shinchou/uploads/img1gaELt5S9OOKAb.jpg#http://bestonlinesupports.com/shinchou/uploads/img2gaELt5S9OOKAb.jpg#http://bestonlinesupports.com/shinchou/uploads/img3gaELt5S9OOKAb.jpg#'),
('hDeapsu9YfenlKS', '53113', 'USS Kyushu', '2018-05-12 11:53:00', 'HONDA', 'FREED HYBRID', '2013', '1500', 'GP3', ' ', 'BLACK', 'AT', '49000', '4', '0', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0hDeapsu9YfenlKS.jpg#http://shinchuo-test2.com/shinchou/uploads/img1hDeapsu9YfenlKS.jpg#http://shinchuo-test2.com/shinchou/uploads/img2hDeapsu9YfenlKS.jpg#http://shinchuo-test2.com/shinchou/uploads/img3hDeapsu9YfenlKS.jpg#'),
('hs7XhJhfsOSQPzW', '52513', 'USS Kyushu', '2018-08-04 12:07:00', 'TOYOTA', 'PRIUS', '2006', '1500', 'NHW20', 'S ', 'SILVER', 'AT', '192000', '3.5', '60000', '137000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0hs7XhJhfsOSQPzW.jpg#http://shinchuo-test2.com/shinchou/uploads/img1hs7XhJhfsOSQPzW.jpg#http://shinchuo-test2.com/shinchou/uploads/img2hs7XhJhfsOSQPzW.jpg#http://shinchuo-test2.com/shinchou/uploads/img3hs7XhJhfsOSQPzW.jpg#'),
('IAwZ1P4OgEv6MP', '2013', 'TAA Hokkaido', '2018-09-20 00:00:00', 'TOYOTA', 'VITZ', '2015', '1300', 'NSP135', 'F 4WD', 'grey', 'FAT', '78000', '3.5', '80000', '512000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0IAwZ1P4OgEv6MP.jpg#http://shinchuo-test2.com/shinchou/uploads/img1IAwZ1P4OgEv6MP.jpg#http://shinchuo-test2.com/shinchou/uploads/img2IAwZ1P4OgEv6MP.jpg#'),
('IBTgvYnBOBgpxH', '2016', 'TAA Chubu', '2018-09-20 00:00:00', 'TOYOTA', 'LAND CRUISER PRADO', '2016', '2800', 'GDJ150W', 'TX L Package 4WD', 'red', 'FAT', '48000', '4', '2500000', '3253000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0IBTgvYnBOBgpxH.jpg#http://shinchuo-test2.com/shinchou/uploads/img1IBTgvYnBOBgpxH.jpg#http://shinchuo-test2.com/shinchou/uploads/img2IBTgvYnBOBgpxH.jpg#'),
('IJARH0R95vQceU', '2020', 'TAA Shikoku', '2018-07-31 00:00:00', 'TOYOTA', 'AQUA', '2013', '1500', 'NHP10', 'S', 'white', 'FAT', '28000', '4', '380000', '661000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0IJARH0R95vQceU.jpg#http://shinchuo-test2.com/shinchou/uploads/img1IJARH0R95vQceU.jpg#http://shinchuo-test2.com/shinchou/uploads/img2IJARH0R95vQceU.jpg#'),
('iN0kkpOJD5U3I', '3261', 'CAA Tokyo', '2018-07-31 00:00:00', 'TOYOTA', 'AQUA', '2013', '1500', 'NHP10', 'S', 'silver', 'FAT', '112000', '4', '0', '371000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0iN0kkpOJD5U3I.jpg#http://shinchuo-test2.com/shinchou/uploads/img1iN0kkpOJD5U3I.jpg#http://shinchuo-test2.com/shinchou/uploads/img2iN0kkpOJD5U3I.jpg#http://shinchuo-test2.com/shinchou/uploads/img3iN0kkpOJD5U3I.jpg#http://shinchuo-test2.com/shinchou/uploads/img4iN0kkpOJD5U3I.jpg#http://shinchuo-test2.com/shinchou/uploads/img5iN0kkpOJD5U3I.jpg#http://shinchuo-test2.com/shinchou/uploads/img6iN0kkpOJD5U3I.jpg#http://shinchuo-test2.com/shinchou/uploads/img7iN0kkpOJD5U3I.jpg#'),
('IPu6xtzAGbx2fK', '2030', 'TAA Kinki', '2018-07-31 00:00:00', 'TOYOTA', 'COROLLA AXIO', '2015', '1500', 'NRE161', 'X', 'silver', 'FAT', '26000', '4', '400000', '791000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0IPu6xtzAGbx2fK.jpg#http://shinchuo-test2.com/shinchou/uploads/img1IPu6xtzAGbx2fK.jpg#http://shinchuo-test2.com/shinchou/uploads/img2IPu6xtzAGbx2fK.jpg#'),
('ITXJFV8WEj77dx', '20470', 'USS Yokohama', '2018-04-17 13:13:00', 'NISSAN', 'DUALIS', '2008', '2000', 'NJ10', ' ', 'PEARL', 'AT', '37000', '3.5', '80000', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img0ITXJFV8WEj77dx.jpg#http://bestonlinesupports.com/shinchou/uploads/img1ITXJFV8WEj77dx.jpg#http://bestonlinesupports.com/shinchou/uploads/img2ITXJFV8WEj77dx.jpg#http://bestonlinesupports.com/shinchou/uploads/img3ITXJFV8WEj77dx.jpg#'),
('IYWLQNXS2Eppze', '20550', 'USS Yokohama', '2018-04-03 13:33:00', 'TOYOTA', 'LAND CRUISER PRADO', '2014', '2700', 'TRJ150W', 'TX ', 'PEARL', 'FAT', '51000', '4.5', '2600000', '2883000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0IYWLQNXS2Eppze.jpg#http://bestonlinesupports.com/shinchou/uploads/img1IYWLQNXS2Eppze.jpg#http://bestonlinesupports.com/shinchou/uploads/img2IYWLQNXS2Eppze.jpg#http://bestonlinesupports.com/shinchou/uploads/img3IYWLQNXS2Eppze.jpg#'),
('J1OroozeHjOYid', '2059', 'TAA Chubu', '2018-07-26 12:49:00', 'TOYOTA', 'BELTA', '2005', '1300', 'NCP96', 'G 4WD', 'silver', 'FAT', '50000', '3', '10000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0J1OroozeHjOYid.jpg#http://shinchuo-test2.com/shinchou/uploads/img1J1OroozeHjOYid.jpg#http://shinchuo-test2.com/shinchou/uploads/img2J1OroozeHjOYid.jpg#'),
('Jd3YUKrr1YGp12', '2070', 'JU Hiroshima', '2018-07-19 12:04:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'S', 'black', 'FAT', '55000', '4.5', '380000', '672000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0Jd3YUKrr1YGp12.jpg#http://shinchuo-test2.com/shinchou/uploads/img1Jd3YUKrr1YGp12.jpg#http://shinchuo-test2.com/shinchou/uploads/img2Jd3YUKrr1YGp12.jpg#http://shinchuo-test2.com/shinchou/uploads/img3Jd3YUKrr1YGp12.jpg#'),
('JqwbL7SqLobbDb', '20018', 'USS R-Nagoya', '2018-03-27 14:35:00', 'MAZDA', 'TITAN', '2004', '2000', 'SYE4T', ' ', 'WHITE', 'AT', '168000', '3.5', '0', '118000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0JqwbL7SqLobbDb.jpg#http://bestonlinesupports.com/shinchou/uploads/img1JqwbL7SqLobbDb.jpghttp://bestonlinesupports.com/shinchou/uploads/img2JqwbL7SqLobbDb.jpg#http://bestonlinesupports.com/shinchou/uploads/img3JqwbL7SqLobbDb.jpg#'),
('JtOsMgIfXSN0Lq', '2008', 'TAA Kantou', '2018-07-19 10:01:00', 'TOYOTA', 'COROLLA AXIO', '2017', '1500', 'NKE165', '&#65418;&#65394;&#65420;&#65438;&#65432;&#65391;&#65412;&#65438;G', 'beige', 'FAT', '2000', '4.5', '880000', '1724000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0JtOsMgIfXSN0Lq.jpg#http://shinchuo-test2.com/shinchou/uploads/img1JtOsMgIfXSN0Lq.jpg#http://shinchuo-test2.com/shinchou/uploads/img2JtOsMgIfXSN0Lq.jpg#'),
('kWJ28yQW2j8rL', '372', 'TAA Hiroshima', '2018-05-08 00:00:00', 'SUZUKI', 'IGNIS', '2016', '1200', 'FF21S', '&#65418;&#65394;&#65420;&#65438;&#65432;&#65391;&#65412;&#65438;MZ', 'white', 'FAT', '31000', '4.5', '600000', '753000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0kWJ28yQW2j8rL.jpg#http://shinchuo-test2.com/shinchou/uploads/img1kWJ28yQW2j8rL.jpg#http://shinchuo-test2.com/shinchou/uploads/img2kWJ28yQW2j8rL.jpg#'),
('lpcv8e7e04ixI1', '1443', 'ARAI Oyama', '2018-09-20 00:00:00', 'TOYOTA', 'HIACE', '2013', '2690', 'TRH214W', 'GL', 'black', 'IAT', '101000', '3.5', '800000', '1548000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img1lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img2lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img3lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img4lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img5lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img6lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img7lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img8lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img9lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img10lpcv8e7e04ixI1.jpg#'),
('mAipV0fFTgcw4', '300', 'USS R-Nagoya', '2018-04-03 10:51:00', 'HONDA', 'VAMOS', '2003', '660', 'HM2', 'M ', 'BLUE', 'MT5', '114000', '3.5', '0', '109000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0mAipV0fFTgcw4.jpg#http://bestonlinesupports.com/shinchou/uploads/img1mAipV0fFTgcw4.jpg#http://bestonlinesupports.com/shinchou/uploads/img2mAipV0fFTgcw4.jpg#http://bestonlinesupports.com/shinchou/uploads/img3mAipV0fFTgcw4.jpg#'),
('mgQx3xizdB76Y', '301', 'USS R-Nagoya', '2018-04-03 10:52:00', 'SUZUKI', 'ALTO LAPIN', '2007', '660', 'HE21S', 'L ', 'BEIGE 2', 'CAT', '78000', '4.5', '0', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img0mgQx3xizdB76Y.jpg#http://bestonlinesupports.com/shinchou/uploads/img1mgQx3xizdB76Y.jpg#http://bestonlinesupports.com/shinchou/uploads/img2mgQx3xizdB76Y.jpg#http://bestonlinesupports.com/shinchou/uploads/img3mgQx3xizdB76Y.jpg#'),
('MV41dv12anEPg', '83', 'JU Tochigi', '2018-08-03 14:53:00', 'TOYOTA', 'PRIUS', '2009', '1800', 'ZVW30', 'L', '', 'DAT', '41000', '3.5', '150000', '563000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0MV41dv12anEPg.jpg#http://shinchuo-test2.com/shinchou/uploads/img1MV41dv12anEPg.jpg#http://shinchuo-test2.com/shinchou/uploads/img2MV41dv12anEPg.jpg#http://shinchuo-test2.com/shinchou/uploads/img3MV41dv12anEPg.jpg#http://shinchuo-test2.com/shinchou/uploads/img4MV41dv12anEPg.jpg#http://shinchuo-test2.com/shinchou/uploads/img5MV41dv12anEPg.jpg#'),
('nAWNcIKpG5LBLU', '16146', 'JAA', '2018-05-09 00:00:00', 'TOYOTA', 'LAND CRUISER PRADO', '2013', '2700', 'TRJ150W', 'TX L PACKAGE 4D', 'BLACK', 'AT', '39000', 'R', '2680000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0nAWNcIKpG5LBLU.jpg#http://shinchuo-test2.com/shinchou/uploads/img1nAWNcIKpG5LBLU.jpg#http://shinchuo-test2.com/shinchou/uploads/img2nAWNcIKpG5LBLU.jpg#'),
('ovGl6C3V5rozzE2', '73849', 'USS Tokyo', '2018-04-12 16:42:00', 'BMW', '5 SERIES', '2010', '2500', 'FP25', '523I HIGH LINE P ', 'WHITE', 'AT', '14000', '4.5', '580000', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img0ovGl6C3V5rozzE2.jpg#http://bestonlinesupports.com/shinchou/uploads/img1ovGl6C3V5rozzE2.jpg#http://bestonlinesupports.com/shinchou/uploads/img2ovGl6C3V5rozzE2.jpg#http://bestonlinesupports.com/shinchou/uploads/img3ovGl6C3V5rozzE2.jpg#'),
('PMnw3u82zWiK', '10', 'USS Gunma', '2018-07-28 10:01:00', 'MITSUBISHI', 'MINICAB', '2001', '660', 'U61V', 'CD van', 'SILVER', 'MT5', '114000', '3.5', '0', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0PMnw3u82zWiK.jpg#http://shinchuo-test2.com/shinchou/uploads/img1PMnw3u82zWiK.jpg#http://shinchuo-test2.com/shinchou/uploads/img2PMnw3u82zWiK.jpg#http://shinchuo-test2.com/shinchou/uploads/img3PMnw3u82zWiK.jpg#'),
('qbIEACz99Nwi1wF', '70179', 'JU Gifu', '2018-07-28 10:54:00', 'DAIHATSU', 'MIRA E S', '2012', '660', 'LA310S', '4WD XF', 'black', 'IAT', '115000', '3.5', '10000', '204000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0qbIEACz99Nwi1wF.jpg#http://shinchuo-test2.com/shinchou/uploads/img1qbIEACz99Nwi1wF.jpg#http://shinchuo-test2.com/shinchou/uploads/img2qbIEACz99Nwi1wF.jpg#http://shinchuo-test2.com/shinchou/uploads/img3qbIEACz99Nwi1wF.jpg#'),
('qdNljvPZmWOT5fK', '70337', 'USS Tokyo', '2018-04-12 15:43:00', 'FORD', 'FOCUS', '2015', '1500', 'MPBM9D', 'SPOILER PLUS EKO B -STROKE ', 'BLUE', 'AT', '5000', '4.5', '650000', '0', '', 'http://bestonlinesupports.com/shinchou/uploads/img0qdNljvPZmWOT5fK.jpg#http://bestonlinesupports.com/shinchou/uploads/img1qdNljvPZmWOT5fK.jpg#http://bestonlinesupports.com/shinchou/uploads/img2qdNljvPZmWOT5fK.jpg#http://bestonlinesupports.com/shinchou/uploads/img3qdNljvPZmWOT5fK.jpg#'),
('RU6b7kUXNxhfl', '91', 'KCAA Fukuoka', '2018-07-19 10:57:00', 'HONDA', 'FIT', '2014', '1300', 'GK3', '13G&#65381;F&#65418;&#65439;&#65391;&#65401;&#65392;&#65404;&#65438;', 'white', 'FAT', '122000', '4', '280000', '534000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0RU6b7kUXNxhfl.jpg#http://shinchuo-test2.com/shinchou/uploads/img1RU6b7kUXNxhfl.jpg#http://shinchuo-test2.com/shinchou/uploads/img2RU6b7kUXNxhfl.jpg#'),
('rweX4UkzESGiyge', '82353', 'USS Tokyo', '2018-08-02 09:46:00', 'SUZUKI', 'ALTO', '2007', '660', 'HA24S', 'G2 ', 'WHITE', 'FAT', '89000', '***', '90000', '20000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0rweX4UkzESGiyge.jpg#http://shinchuo-test2.com/shinchou/uploads/img1rweX4UkzESGiyge.jpg#http://shinchuo-test2.com/shinchou/uploads/img2rweX4UkzESGiyge.jpg#http://shinchuo-test2.com/shinchou/uploads/img3rweX4UkzESGiyge.jpg#'),
('sA295Kf6UqGZKA', '10107', 'USS Sapporo', '2018-04-04 14:03:00', 'TOYOTA', 'VITZ', '2005', '1300', 'NCP95', 'F ', 'CREAM', 'FAT', '197000', '3', '10000', '44000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0sA295Kf6UqGZKA.jpg#http://bestonlinesupports.com/shinchou/uploads/img1sA295Kf6UqGZKA.jpg#http://bestonlinesupports.com/shinchou/uploads/img2sA295Kf6UqGZKA.jpg#http://bestonlinesupports.com/shinchou/uploads/img3sA295Kf6UqGZKA.jpg#'),
('sAaUeNV7jX54Iq', '1010', 'USS Tokyo', '2018-07-26 12:41:00', 'SUZUKI', 'WAGON R', '2008', '660', 'MH22S', 'STINGRAY X ', 'PEARL', 'AT', '123000', '4', '0', '113000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0sAaUeNV7jX54Iq.jpg#http://shinchuo-test2.com/shinchou/uploads/img1sAaUeNV7jX54Iq.jpg#http://shinchuo-test2.com/shinchou/uploads/img2sAaUeNV7jX54Iq.jpg#http://shinchuo-test2.com/shinchou/uploads/img3sAaUeNV7jX54Iq.jpg#'),
('sF1afD62aF22IC', '10287', 'USS R-Nagoya', '2018-03-27 13:28:00', 'NISSAN', 'SERENA', '2008', '2000', 'C25', '20S ', 'BLACK', 'AT', '109000', '3', '30000', '119000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0sF1afD62aF22IC.jpg#http://bestonlinesupports.com/shinchou/uploads/img1sF1afD62aF22IC.jpg#http://bestonlinesupports.com/shinchou/uploads/img2sF1afD62aF22IC.jpg#http://bestonlinesupports.com/shinchou/uploads/img3sF1afD62aF22IC.jpg#'),
('sG1PSGPxztS2jB', '10200', 'USS Yokohama', '2018-04-17 11:27:00', 'NISSAN', 'DUALIS', '2007', '2000', 'NJ10', '20S 4 ', 'SILVER', 'FAT', '64000', 'R', '0', '357000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0sG1PSGPxztS2jB.jpg#http://bestonlinesupports.com/shinchou/uploads/img1sG1PSGPxztS2jB.jpg#http://bestonlinesupports.com/shinchou/uploads/img2sG1PSGPxztS2jB.jpg#http://bestonlinesupports.com/shinchou/uploads/img3sG1PSGPxztS2jB.jpg#'),
('sHN4elDgNiGC91', '10319', 'USS R-Nagoya', '2018-04-03 13:12:00', 'TOYOTA', 'WISH', '2006', '1800', 'ZNE10G', ' ', 'BLACK', 'AT', '112000', 'R', '20000', '112000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0sHN4elDgNiGC91.jpg#http://bestonlinesupports.com/shinchou/uploads/img1sHN4elDgNiGC91.jpg#http://bestonlinesupports.com/shinchou/uploads/img2sHN4elDgNiGC91.jpg#http://bestonlinesupports.com/shinchou/uploads/img3sHN4elDgNiGC91.jpg#'),
('sI9F7rcyfnE4Vq', '10326', 'USS R-Nagoya', '2018-03-28 13:34:00', 'TOYOTA', 'RACTIS', '2009', '1500', 'NCP100', 'G L PACK ', 'GRAY', 'AT', '68000', '4.5', '30000', '207000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0sI9F7rcyfnE4Vq.jpg#http://bestonlinesupports.com/shinchou/uploads/img1sI9F7rcyfnE4Vq.jpg#http://bestonlinesupports.com/shinchou/uploads/img2sI9F7rcyfnE4Vq.jpg#http://bestonlinesupports.com/shinchou/uploads/img3sI9F7rcyfnE4Vq.jpg#'),
('sO53VXSkWJWGxo', '10427', 'USS R-Nagoya', '2018-03-27 13:51:00', 'BMW', '1 SERIES', '2007', '1600', 'UE16', '116I ', 'WHITE', 'AT', '109000', '4', '30000', '0', '', 'http://bestonlinesupports.com/shinchou/savewishlist.phpuploads/img0sO53VXSkWJWGxo.jpg#http://bestonlinesupports.com/shinchou/savewishlist.phpuploads/img1sO53VXSkWJWGxo.jpg#http://bestonlinesupports.com/shinchou/savewishlist.phpuploads/img2sO53VXSkWJWGxo.jpg#http://bestonlinesupports.com/shinchou/savewishlist.phpuploads/img3sO53VXSkWJWGxo.jpg#'),
('sPCyR5zrZns4QHJ', '87430', 'USS Tokyo', '2018-07-19 00:00:00', 'NISSAN', 'SERENA', '2008', '2000', 'CC25', 'HIGHWAY STAR ', 'PEARL', 'AT', '185000', '3.5', '0', '73000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0sPCyR5zrZns4QHJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img1sPCyR5zrZns4QHJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img2sPCyR5zrZns4QHJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img3sPCyR5zrZns4QHJ.jpg#'),
('sTxkVNuSFxwXVM', '10518', 'LAA Kansai', '2018-07-19 13:19:00', 'MITSUBISHI', 'EK CUSTOM', '2013', '660', 'B11W', 'T&#65408;&#65392;&#65422;&#65438;', 'purple', 'DAT', '22000', '5', '180000', '649000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0sTxkVNuSFxwXVM.jpg#http://shinchuo-test2.com/shinchou/uploads/img1sTxkVNuSFxwXVM.jpg#http://shinchuo-test2.com/shinchou/uploads/img2sTxkVNuSFxwXVM.jpg#http://shinchuo-test2.com/shinchou/uploads/img3sTxkVNuSFxwXVM.jpg#'),
('sW8fZgjadJqu4y', '10574', 'LAA Kansai', '2018-07-19 13:52:00', 'MITSUBISHI', 'MIRAGE', '2017', '1200', 'A03A', 'M e-&#65393;&#65404;&#65405;&#65412;', 'grey', 'FAT', '9000', 'R', '280000', '485000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0sW8fZgjadJqu4y.jpg#http://shinchuo-test2.com/shinchou/uploads/img1sW8fZgjadJqu4y.jpg#http://shinchuo-test2.com/shinchou/uploads/img2sW8fZgjadJqu4y.jpg#http://shinchuo-test2.com/shinchou/uploads/img3sW8fZgjadJqu4y.jpg#'),
('syu3Dy9EZlXxdF', '10172', 'USS Yokohama', '2018-04-17 11:21:00', 'NISSAN', 'DUALIS', '2008', '2000', 'KJ10', '20G ', 'BEIGE', 'AT', '77000', '4', '0', '397000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0syu3Dy9EZlXxdF.jpg#http://bestonlinesupports.com/shinchou/uploads/img1syu3Dy9EZlXxdF.jpg#http://bestonlinesupports.com/shinchou/uploads/img2syu3Dy9EZlXxdF.jpg#http://bestonlinesupports.com/shinchou/uploads/img3syu3Dy9EZlXxdF.jpg#'),
('sZuSKvJYcyZNcM', '10610', 'USS R-Nagoya', '2018-04-03 14:02:00', 'TOYOTA', 'VOXY', '2006', '2000', 'AZR60G', 'X ', 'SILVER', 'CAT', '25000', 'R', '0', '445000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0sZuSKvJYcyZNcM.jpg#http://bestonlinesupports.com/shinchou/uploads/img1sZuSKvJYcyZNcM.jpg#http://bestonlinesupports.com/shinchou/uploads/img2sZuSKvJYcyZNcM.jpg#http://bestonlinesupports.com/shinchou/uploads/img3sZuSKvJYcyZNcM.jpg#'),
('t3UFv1U0yi8JaD', '10694', 'LAA Kansai', '2018-07-19 14:28:00', 'MITSUBISHI', 'EK ACTIVE', '2015', '660', 'B11W', 'M AS&amp;G', 'silver', 'DAT', '26000', '5', '80000', '570000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0t3UFv1U0yi8JaD.jpg#http://shinchuo-test2.com/shinchou/uploads/img1t3UFv1U0yi8JaD.jpg#http://shinchuo-test2.com/shinchou/uploads/img2t3UFv1U0yi8JaD.jpg#http://shinchuo-test2.com/shinchou/uploads/img3t3UFv1U0yi8JaD.jpg#'),
('T5zWQu2g7Bks', '1', 'USS Nagoya', '2018-07-27 09:30:00', 'TOYOTA', 'MARK X', '2007', '2500', 'GRX125', '250G 4 ', 'SILVER', 'FAT', '67000', '4.5', '0', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0T5zWQu2g7Bks.jpg#http://shinchuo-test2.com/shinchou/uploads/img1T5zWQu2g7Bks.jpg#http://shinchuo-test2.com/shinchou/uploads/img2T5zWQu2g7Bks.jpg#http://shinchuo-test2.com/shinchou/uploads/img3T5zWQu2g7Bks.jpg#'),
('tBExh4bDNBbfABJ', '80424', 'USS Tokyo', '2018-07-19 00:00:00', 'TOYOTA', 'MR2', '1992', '2000', 'SW20', ' ', 'RED', 'MT', '252000', '***', '0', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0tBExh4bDNBbfABJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img1tBExh4bDNBbfABJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img2tBExh4bDNBbfABJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img3tBExh4bDNBbfABJ.jpg#'),
('toffGT9XKelCCY', '10045', 'USS Yokohama', '2018-04-17 10:52:00', 'NISSAN', 'DUALIS', '2007', '2000', 'NJ10', '20S 4 ', 'BLACK', 'FAT', '85000', '4', '1000', '369000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0toffGT9XKelCCY.jpg#http://bestonlinesupports.com/shinchou/uploads/img1toffGT9XKelCCY.jpg#http://bestonlinesupports.com/shinchou/uploads/img2toffGT9XKelCCY.jpg#http://bestonlinesupports.com/shinchou/uploads/img3toffGT9XKelCCY.jpg#'),
('tqhJaeuGwUpAVn', '1008', 'USS Tokyo', '2018-07-26 12:41:00', 'SUZUKI', 'JIMNY', '2010', '660', 'JB23W', 'CROSS ADO BENCH .XC ', 'PEARL', 'FAT', '50000', '4.5', '0', '1011000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0tqhJaeuGwUpAVn.jpg#http://shinchuo-test2.com/shinchou/uploads/img1tqhJaeuGwUpAVn.jpg#http://shinchuo-test2.com/shinchou/uploads/img2tqhJaeuGwUpAVn.jpg#http://shinchuo-test2.com/shinchou/uploads/img3tqhJaeuGwUpAVn.jpg#'),
('trbUPFndvw7yO3', '1000', 'USS Tokyo', '2018-07-19 12:48:00', 'DAIHATSU', 'TANTO', '2014', '660', 'LA600S', 'L ', 'WINE', 'AT', '53000', '4.5', '120000', '849000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0trbUPFndvw7yO3.jpg#http://shinchuo-test2.com/shinchou/uploads/img1trbUPFndvw7yO3.jpg#http://shinchuo-test2.com/shinchou/uploads/img2trbUPFndvw7yO3.jpg#http://shinchuo-test2.com/shinchou/uploads/img3trbUPFndvw7yO3.jpg#'),
('trbUPFndvw7yO4', '1000', 'USS Tokyo', '2018-07-26 12:39:00', 'HONDA', 'N BOX', '2015', '660', 'JF1', 'G*L PACK ', 'BLACK', 'AT', '14000', '4', '0', '1017000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0trbUPFndvw7yO4.jpg#http://shinchuo-test2.com/shinchou/uploads/img1trbUPFndvw7yO4.jpg#http://shinchuo-test2.com/shinchou/uploads/img2trbUPFndvw7yO4.jpg#http://shinchuo-test2.com/shinchou/uploads/img3trbUPFndvw7yO4.jpg#'),
('ufJBTFryfRcoA', '519', 'USS Hokuriku', '2018-07-28 11:04:00', 'MITSUBISHI', 'EK WAGON', '2008', '660', 'H82W', 'MX ', 'L GREEN', 'AT', '93000', '3.5', '20000', '198000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0ufJBTFryfRcoA.jpg#http://shinchuo-test2.com/shinchou/uploads/img1ufJBTFryfRcoA.jpg#http://shinchuo-test2.com/shinchou/uploads/img2ufJBTFryfRcoA.jpg#http://shinchuo-test2.com/shinchou/uploads/img3ufJBTFryfRcoA.jpg#'),
('vfntglCXjmP94', '53', 'JU Tochigi', '2018-08-03 14:45:00', 'TOYOTA', 'PASSO', '2013', '1000', 'KGC30', '1.0X&#65400;&#65410;&#65435;&#65399;&#65438;', '', 'FA', '28000', '3.5', '80000', '251000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img1vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img2vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img3vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img4vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img5vfntglCXjmP94.jpg#'),
('VwPQPR3kHw9zd', '99', 'TAA Hokkaido', '2018-07-26 11:04:00', 'TOYOTA', 'COROLLA FIELDER', '2013', '1500', 'NZE164G', 'X 4WD ', 'WHITE', 'FAT', '112000', '3.5', '10000', '370000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0VwPQPR3kHw9zd.jpg#http://shinchuo-test2.com/shinchou/uploads/img1VwPQPR3kHw9zd.jpg#http://shinchuo-test2.com/shinchou/uploads/img2VwPQPR3kHw9zd.jpg#'),
('xPYyZs0Bz1oI5k', '2151', 'TAA Kinki', '2018-07-31 00:00:00', 'TOYOTA', 'AQUA', '2016', '1500', 'NHP10', 'S&#65405;&#65408;&#65394;&#65433;&#65420;&#65438;&#65431;&#65391;&#65400;', 'white', 'FAT', '12000', '4.5', '850000', '1233000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0xPYyZs0Bz1oI5k.jpg#http://shinchuo-test2.com/shinchou/uploads/img1xPYyZs0Bz1oI5k.jpg#http://shinchuo-test2.com/shinchou/uploads/img2xPYyZs0Bz1oI5k.jpg#'),
('xXWtgWVdLpcMH', '59', 'USS Shizuoka', '2018-08-11 10:11:00', 'TOYOTA', 'COROLLA FIELDER', '2008', '1500', 'NZE141G', '1.5X S-ED ', 'BLACK', 'MT5', '173000', '3.5', '0', '133000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0xXWtgWVdLpcMH.jpg#http://shinchuo-test2.com/shinchou/uploads/img1xXWtgWVdLpcMH.jpg#http://shinchuo-test2.com/shinchou/uploads/img2xXWtgWVdLpcMH.jpg#http://shinchuo-test2.com/shinchou/uploads/img3xXWtgWVdLpcMH.jpg#'),
('y4zo1XlB4LH9k8', '2175', 'LAA Okayama', '2018-08-03 11:44:00', 'TOYOTA', 'VITZ', '2009', '1300', 'SCP90', 'F', '', 'FAT', '55000', '4', '0', '147000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img1y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img2y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img3y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img4y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img5y4zo1XlB4LH9k8.jpg#'),
('y6scSVxx9p9cG', '502', 'USS Hokuriku', '2018-07-28 11:00:00', 'MITSUBISHI', 'EK WAGON', '2003', '660', 'H81W', 'M ', 'BLACK', 'CAT', '84000', '3.5', '15000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0y6scSVxx9p9cG.jpg#http://shinchuo-test2.com/shinchou/uploads/img1y6scSVxx9p9cG.jpg#http://shinchuo-test2.com/shinchou/uploads/img2y6scSVxx9p9cG.jpg#http://shinchuo-test2.com/shinchou/uploads/img3y6scSVxx9p9cG.jpg#'),
('YEvOshGmCzvZCn', '3014', 'TAA Shikoku', '2018-05-08 00:00:00', 'DAIHATSU', 'MIRA', '2013', '660', 'L275S', 'X&#65405;&#65421;&#65439;&#65404;&#65388;&#65433;', 'white', 'IAT', '64000', '3.5', '10000', '174000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0YEvOshGmCzvZCn.jpg#http://shinchuo-test2.com/shinchou/uploads/img1YEvOshGmCzvZCn.jpg#http://shinchuo-test2.com/shinchou/uploads/img2YEvOshGmCzvZCn.jpg#'),
('YGRDmYRHMwIAbp', '30101', 'USS Yokohama', '2018-04-17 14:12:00', 'NISSAN', 'DUALIS', '2010', '2000', 'KNJ10', '20G 4 ', 'BEIGE', 'AT', '64000', '4', '80000', '699000', '', 'http://bestonlinesupports.com/shinchou/uploads/img0YGRDmYRHMwIAbp.jpg#http://bestonlinesupports.com/shinchou/uploads/img1YGRDmYRHMwIAbp.jpg#http://bestonlinesupports.com/shinchou/uploads/img2YGRDmYRHMwIAbp.jpg#http://bestonlinesupports.com/shinchou/uploads/img3YGRDmYRHMwIAbp.jpg#'),
('YKR99jQ6sPmKN8', '3025', 'TAA Shikoku', '2018-05-08 00:00:00', 'DAIHATSU', 'HIJET VAN', '2012', '660', 'S321V', 'DX', 'white', 'IAT', '74000', 'RA', '10000', '270000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0YKR99jQ6sPmKN8.jpg#http://shinchuo-test2.com/shinchou/uploads/img1YKR99jQ6sPmKN8.jpg#http://shinchuo-test2.com/shinchou/uploads/img2YKR99jQ6sPmKN8.jpg#'),
('ym6X1DVcx0ZQmK', '21070', 'JAA', '2018-05-09 00:00:00', 'SUZUKI', 'ALTO', '2012', '660', 'HA25V', '4WD VP 5D van', 'WHITE', 'AT', '83000', 'R', '20000', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0ym6X1DVcx0ZQmK.jpg#http://shinchuo-test2.com/shinchou/uploads/img1ym6X1DVcx0ZQmK.jpg#http://shinchuo-test2.com/shinchou/uploads/img2ym6X1DVcx0ZQmK.jpg#'),
('YQWbGoNyK3q6OQ', '30364', 'Kansai Matsubara AA', '2018-09-20 00:00:00', 'TOYOTA', 'LAND CRUISER PRADO', '2015', '2700', 'TRJ150W', 'TX 4WD', 'black', 'FA', '40000', '4.5', '2300000', '3010000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img1YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img2YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img3YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img4YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img5YQWbGoNyK3q6OQ.jpg#'),
('YV8w0tCWaZVtqg', '30427', 'KansaiMatsubara AA', '2018-07-26 11:45:00', 'TOYOTA', 'AQUA', '2012', '1500', 'NHP10', 'S', 'blue', 'FA', '30000', '1', '0', '0', '', 'http://shinchuo-test2.com/shinchou/uploads/img0YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img1YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img2YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img3YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img4YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img5YV8w0tCWaZVtqg.jpg#'),
('YYDMRAh61xc9fT', '30404', 'CAA Chubu', '2018-08-01 00:00:00', 'TOYOTA', 'AQUA', '2013', '1500', 'NHP10', 'G', 'orange', 'FAT', '62000', '4.5', '0', '654000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img1YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img2YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img3YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img4YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img5YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img6YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img7YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img8YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img9YYDMRAh61xc9fT.jpg#http://shinchuo-test2.com/shinchou/uploads/img10YYDMRAh61xc9fT.jpg#'),
('YYoEX8zMDlJT0E', '30490', 'Kansai Matsubara AA', '2018-09-20 00:00:00', 'TOYOTA', 'AQUA', '2015', '1500', 'NHP10', 'X Urban', 'silver', 'FA', '83000', '4', '150000', '764000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0YYoEX8zMDlJT0E.jpg#http://shinchuo-test2.com/shinchou/uploads/img1YYoEX8zMDlJT0E.jpg#http://shinchuo-test2.com/shinchou/uploads/img2YYoEX8zMDlJT0E.jpg#http://shinchuo-test2.com/shinchou/uploads/img3YYoEX8zMDlJT0E.jpg#http://shinchuo-test2.com/shinchou/uploads/img4YYoEX8zMDlJT0E.jpg#http://shinchuo-test2.com/shinchou/uploads/img5YYoEX8zMDlJT0E.jpg#'),
('Z35HPyycpdRqQl', '3054', 'NAA Nagoya', '2018-07-19 12:50:00', 'NISSAN', 'MOCO', '2013', '660', 'MG33S', 'S', 'white', 'IAT', '33000', '4', '50000', '477000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0Z35HPyycpdRqQl.jpg#http://shinchuo-test2.com/shinchou/uploads/img1Z35HPyycpdRqQl.jpg#http://shinchuo-test2.com/shinchou/uploads/img2Z35HPyycpdRqQl.jpg#http://shinchuo-test2.com/shinchou/uploads/img3Z35HPyycpdRqQl.jpg#http://shinchuo-test2.com/shinchou/uploads/img4Z35HPyycpdRqQl.jpg#http://shinchuo-test2.com/shinchou/uploads/img5Z35HPyycpdRqQl.jpg#'),
('Zio6RmnM1akOIx', '3081', 'NAA Nagoya', '2018-07-19 13:07:00', 'NISSAN', 'ROOX', '2011', '660', 'ML21S', '&#65418;&#65394;&#65395;&#65386;&#65394;&#65405;&#65408;&#65392;', 'wine', 'IAT', '32000', 'R', '210000', '379000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0Zio6RmnM1akOIx.jpg#http://shinchuo-test2.com/shinchou/uploads/img1Zio6RmnM1akOIx.jpg#http://shinchuo-test2.com/shinchou/uploads/img2Zio6RmnM1akOIx.jpg#http://shinchuo-test2.com/shinchou/uploads/img3Zio6RmnM1akOIx.jpg#http://shinchuo-test2.com/shinchou/uploads/img4Zio6RmnM1akOIx.jpg#http://shinchuo-test2.com/shinchou/uploads/img5Zio6RmnM1akOIx.jpg#'),
('zXMEwkFI53e6ng', '23160', 'JAA', '2018-05-09 00:00:00', 'NISSAN', 'SERENA', '2011', '2000', 'FC26', 'HIGHWAY STAR ', 'SILVER', 'DA', '68000', '4', '180000', '1010000', '', 'http://shinchuo-test2.com/shinchou/uploads/img0zXMEwkFI53e6ng.jpg#http://shinchuo-test2.com/shinchou/uploads/img1zXMEwkFI53e6ng.jpg#http://shinchuo-test2.com/shinchou/uploads/img2zXMEwkFI53e6ng.jpg#');

-- --------------------------------------------------------

--
-- Table structure for table `productimages_temp`
--

CREATE TABLE `productimages_temp` (
  `prodid` varchar(100) NOT NULL,
  `oldurl` text,
  `newurl` text,
  `sheeturl` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productimages_temp`
--

INSERT INTO `productimages_temp` (`prodid`, `oldurl`, `newurl`, `sheeturl`) VALUES
('23KiNatMbQMWU', 'http://shinchuo-test2.com/shinchou/uploads/img023KiNatMbQMWU.jpg#http://shinchuo-test2.com/shinchou/uploads/img123KiNatMbQMWU.jpg#http://shinchuo-test2.com/shinchou/uploads/img223KiNatMbQMWU.jpg#', 'http://www.shinchuo-test2.com/shinchouadmin/uploads/newimg23KiNatMbQMWUJellyfish.jpg#', ''),
('80Hr2T69R0m0VP', 'http://shinchuo-test2.com/shinchou/uploads/img080Hr2T69R0m0VP.jpg#http://shinchuo-test2.com/shinchou/uploads/img180Hr2T69R0m0VP.jpg#http://shinchuo-test2.com/shinchou/uploads/img280Hr2T69R0m0VP.jpg#', 'http://www.shinchuo-test2.com/shinchouadmin/uploads/newimg80Hr2T69R0m0VPJellyfish.jpg#', 'http://www.shinchuo-test2.com/shinchouadmin/uploads/newimg80Hr2T69R0m0VPDesert.jpg#'),
('4Ooo0Qc0aRazG3', 'http://shinchuo-test2.com/shinchou/uploads/img04Ooo0Qc0aRazG3.jpg#http://shinchuo-test2.com/shinchou/uploads/img14Ooo0Qc0aRazG3.jpg#http://shinchuo-test2.com/shinchou/uploads/img24Ooo0Qc0aRazG3.jpg#', 'http://www.shinchuo-test2.com/shinchouadmin/uploads/newimg4Ooo0Qc0aRazG3Desert.jpg#', 'http://www.shinchuo-test2.com/shinchouadmin/uploads/newimg4Ooo0Qc0aRazG3Jellyfish.jpg#'),
('nAWNcIKpG5LBLU', 'http://shinchuo-test2.com/shinchou/uploads/img0nAWNcIKpG5LBLU.jpg#http://shinchuo-test2.com/shinchou/uploads/img1nAWNcIKpG5LBLU.jpg#http://shinchuo-test2.com/shinchou/uploads/img2nAWNcIKpG5LBLU.jpg#', 'http://www.shinchuo-test2.com/shinchouadmin/uploads/newimgnAWNcIKpG5LBLUPenguins.jpg#http://www.shinchuo-test2.com/shinchouadmin/uploads/newimgnAWNcIKpG5LBLUTulips.jpg#', ''),
('6UKQrr2qyUgQFO', 'http://shinchuo-test2.com/shinchou/uploads/img06UKQrr2qyUgQFO.jpg#http://shinchuo-test2.com/shinchou/uploads/img16UKQrr2qyUgQFO.jpg#http://shinchuo-test2.com/shinchou/uploads/img26UKQrr2qyUgQFO.jpg#', NULL, 'http://www.shinchuo-test2.com/shinchouadmin/uploads/newimg6UKQrr2qyUgQFODesert.jpg#');

-- --------------------------------------------------------

--
-- Table structure for table `purchasedlist`
--

CREATE TABLE `purchasedlist` (
  `s_id` int(11) NOT NULL,
  `prodid` varchar(100) NOT NULL,
  `s_code` varchar(100) DEFAULT NULL,
  `client` varchar(100) DEFAULT NULL,
  `dst` varchar(100) DEFAULT NULL,
  `auction` varchar(100) DEFAULT NULL,
  `adate` varchar(100) DEFAULT NULL,
  `pos` varchar(100) DEFAULT NULL,
  `dai` varchar(100) DEFAULT NULL,
  `lot` varchar(100) DEFAULT NULL,
  `prefix` varchar(100) DEFAULT NULL,
  `serial` varchar(100) DEFAULT NULL,
  `make` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `year` varchar(100) DEFAULT NULL,
  `bidprice` varchar(100) DEFAULT NULL,
  `aucfee` varchar(100) DEFAULT NULL,
  `exportcharge` varchar(100) DEFAULT NULL,
  `noplate` varchar(100) DEFAULT NULL,
  `noplateaction` varchar(50) DEFAULT NULL,
  `plateserial` varchar(100) DEFAULT NULL,
  `shaken` varchar(100) DEFAULT NULL,
  `fudosha` varchar(100) DEFAULT NULL,
  `transmission` varchar(100) DEFAULT NULL,
  `enginecc` varchar(100) DEFAULT NULL,
  `mileage` varchar(100) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `colorcode` varchar(100) DEFAULT NULL,
  `buyingcom` varchar(100) DEFAULT NULL,
  `buyer` varchar(100) DEFAULT NULL,
  `remark` varchar(100) DEFAULT NULL,
  `landedvalue` varchar(100) DEFAULT NULL,
  `soldprice` varchar(100) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `stocksold` int(11) NOT NULL,
  `sellingprice` varchar(100) DEFAULT NULL,
  `showsellprice` tinyint(1) NOT NULL,
  `images` text,
  `currentloc` varchar(100) DEFAULT NULL,
  `consigneestatus` int(11) NOT NULL,
  `shipstatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchasedlist`
--

INSERT INTO `purchasedlist` (`s_id`, `prodid`, `s_code`, `client`, `dst`, `auction`, `adate`, `pos`, `dai`, `lot`, `prefix`, `serial`, `make`, `model`, `year`, `bidprice`, `aucfee`, `exportcharge`, `noplate`, `noplateaction`, `plateserial`, `shaken`, `fudosha`, `transmission`, `enginecc`, `mileage`, `color`, `colorcode`, `buyingcom`, `buyer`, `remark`, `landedvalue`, `soldprice`, `status`, `stocksold`, `sellingprice`, `showsellprice`, `images`, `currentloc`, `consigneestatus`, `shipstatus`) VALUES
(24, '23KiNatMbQMWU', 'N/A', 'Finn', 'N/A', 'TAA Minami Kyushu', '2018-05-08 00:00:00', '252', 'N/A', '23', 'TZ51', 'TZ51-021938', 'NISSAN', 'MURANO', '2013', '450000', 'N/A', 'N/A', 'Yes', NULL, 'N/A', 'N/A', 'No', 'FAT', '2500', '77000', 'white', 'N/A', 'N/A', 'clark', 'Car was clean', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img023KiNatMbQMWU.jpg#http://shinchuo-test2.com/shinchou/uploads/img123KiNatMbQMWU.jpg#http://shinchuo-test2.com/shinchou/uploads/img223KiNatMbQMWU.jpg#', 'NS TRADING', 0, 0),
(25, '80Hr2T69R0m0VP', 'N/A', 'Gary', 'N/A', 'HAA Kobe', '2018-05-12 00:00:00', '74200', 'N/A', '50425', 'NKE165G', '546546', 'TOYOTA', 'COROLLA FIELDER', '2013', '670000', 'N/A', 'N/A', 'Yes', 'Cut', 'N/A', 'N/A', 'Yes', 'FA', '1500', '57000', 'PEARL', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img080Hr2T69R0m0VP.jpg#http://shinchuo-test2.com/shinchou/uploads/img180Hr2T69R0m0VP.jpg#http://shinchuo-test2.com/shinchou/uploads/img280Hr2T69R0m0VP.jpg#', 'In Transit', 0, 0),
(26, 'nAWNcIKpG5LBLU', 'N/A', 'Finn', 'N/A', 'JAA', '2018-05-09 00:00:00', '74200', 'N/A', '16146', 'TRJ150W', 'N/A', 'TOYOTA', 'LAND CRUISER PRADO', '2013', '2900000', 'N/A', 'N/A', 'Yes', NULL, 'N/A', 'N/A', 'No', 'AT', '2700', '39000', 'BLACK', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0nAWNcIKpG5LBLU.jpg#http://shinchuo-test2.com/shinchou/uploads/img1nAWNcIKpG5LBLU.jpg#http://shinchuo-test2.com/shinchou/uploads/img2nAWNcIKpG5LBLU.jpg#', 'In Transit', 0, 0),
(27, '38JUgPEtQ2tJp', 'N/A', 'Finn', 'N/A', 'TAA Minami Kyushu', '2018-05-08 00:00:00', '252', 'N/A', '48', 'GP1', '1012261', 'HONDA', 'FIT', '2010', '50000', 'N/A', 'N/A', 'No', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1300', '113000', 'black', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img038JUgPEtQ2tJp.jpg#http://shinchuo-test2.com/shinchou/uploads/img238JUgPEtQ2tJp.jpg#http://shinchuo-test2.com/shinchou/uploads/img138JUgPEtQ2tJp.jpg#', 'In Transit', 0, 0),
(28, 'kWJ28yQW2j8rL', 'N/A', 'Danny', 'N/A', 'TAA Hiroshima', '2018-05-08 00:00:00', '712', 'N/A', '372', 'FF21S', 'N/A', 'SUZUKI', 'IGNIS', '2016', '800000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1200', '31000', 'white', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0kWJ28yQW2j8rL.jpg#http://shinchuo-test2.com/shinchou/uploads/img1kWJ28yQW2j8rL.jpg#http://shinchuo-test2.com/shinchou/uploads/img2kWJ28yQW2j8rL.jpg#', 'AUTO TERMINAL JAPAN KOBE', 1, 0),
(29, '4Ooo0Qc0aRazG3', 'N/A', 'jerry', 'N/A', 'TAA Hiroshima', '2018-05-08 00:00:00', 'N/A', 'N/A', '3118', 'LA300S', 'N/A', 'DAIHATSU', 'MIRA E S', '2013', '30000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'IAT', '660', '74000', 'silver', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, '50000', 1, 'http://shinchuo-test2.com/shinchou/uploads/img04Ooo0Qc0aRazG3.jpg#http://shinchuo-test2.com/shinchou/uploads/img14Ooo0Qc0aRazG3.jpg#http://www.shinchuo-test2.com/shinchouadmin/uploads/newimg4Ooo0Qc0aRazG3Chrysanthemum.jpg#http://shinchuo-test2.com/shinchou/uploads/img24Ooo0Qc0aRazG3.jpg#', 'AUTO TERMINAL JAPAN KOBE', 0, 0),
(30, '8cBDvjulNMNwR4', 'N/A', 'Finn', 'N/A', 'HAA Kobe', '2018-05-12 00:00:00', 'N/A', 'N/A', '50070', 'NRE161G', 'N/A', 'TOYOTA', 'COROLLA FIELDER', '2015', '750000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FA', '1500', '28000', 'BLACK', 'N/A', 'N/A', 'admin', 'Test Win', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img08cBDvjulNMNwR4.jpg#http://shinchuo-test2.com/shinchou/uploads/img18cBDvjulNMNwR4.jpg#http://shinchuo-test2.com/shinchou/uploads/img28cBDvjulNMNwR4.jpg#', '3WM YOKOHAMA', 0, 0),
(31, 'AaTdIUt6TrtKhw', 'N/A', 'jerry', 'N/A', 'JAA', '2018-05-09 00:00:00', 'N/A', 'N/A', '23399', 'GRX130', 'N/A', 'TOYOTA', 'MARK X', '2010', '250000', 'N/A', 'N/A', 'Yes', NULL, 'N/A', 'N/A', 'N/A', 'AT', '2500', '51000', 'PEARL', 'N/A', 'N/A', 'admin', 'Win Test 2', 'undefined', 'N/A', 1, 0, '', 1, 'http://shinchuo-test2.com/shinchou/uploads/img0AaTdIUt6TrtKhw.jpg#http://shinchuo-test2.com/shinchou/uploads/img1AaTdIUt6TrtKhw.jpg#http://shinchuo-test2.com/shinchou/uploads/img2AaTdIUt6TrtKhw.jpg#', 'AUTO TERMINAL JAPAN CHIBA', 0, 0),
(32, '6UKQrr2qyUgQFO', 'N/A', 'Gary', 'N/A', 'TAA Minami Kyushu', '2018-05-08 00:00:00', 'N/A', 'N/A', '4034', 'E11', 'N/A', 'NISSAN', 'NOTE', '2009', '15000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1500', '72000', 'white', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img06UKQrr2qyUgQFO.jpg#http://shinchuo-test2.com/shinchou/uploads/img16UKQrr2qyUgQFO.jpg#http://www.shinchuo-test2.com/shinchouadmin/uploads/newimg6UKQrr2qyUgQFOHydrangeas.jpg#', '3WM YOKOHAMA', 0, 0),
(33, 'cTj58D9fWI6CELy', 'N/A', 'Ibad', 'N/A', 'JU Aichi', '2018-07-26 13:29:00', 'N/A', 'N/A', '30019', 'R20', 'N/A', 'NISSAN', 'MISTRAL', '1995', '650000', 'N/A', 'N/A', 'Yes', NULL, 'N/A', 'N/A', 'N/A', 'AT', '2700', '331000', 'two-tone', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0cTj58D9fWI6CELy.jpg#http://shinchuo-test2.com/shinchou/uploads/img1cTj58D9fWI6CELy.jpg#http://shinchuo-test2.com/shinchou/uploads/img2cTj58D9fWI6CELy.jpg#http://shinchuo-test2.com/shinchou/uploads/img3cTj58D9fWI6CELy.jpg#http://shinchuo-test2.com/shinchou/uploads/img4cTj58D9fWI6CELy.jpg#', '3WM YOKOHAMA', 0, 0),
(34, '2vdF8odjrkbYhvO', 'N/A', 'Durby', 'N/A', 'JU Fukushima', '2018-07-26 14:51:00', 'N/A', 'N/A', '5061', 'NHP10', 'N/A', 'TOYOTA', 'AQUA', '2012', '250000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FA', '1500', '113000', 'white', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img02vdF8odjrkbYhvO.jpg#http://shinchuo-test2.com/shinchou/uploads/img12vdF8odjrkbYhvO.jpg#http://shinchuo-test2.com/shinchou/uploads/img22vdF8odjrkbYhvO.jpg#http://shinchuo-test2.com/shinchou/uploads/img32vdF8odjrkbYhvO.jpg#', '3WM YOKOHAMA', 1, 0),
(35, 'VwPQPR3kHw9zd', 'N/A', 'Durby', 'N/A', 'TAA Hokkaido', '2018-07-26 11:04:00', 'N/A', 'N/A', '99', 'NZE164G', 'N/A', 'TOYOTA', 'COROLLA FIELDER', '2013', '450000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1500', '112000', 'WHITE', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0VwPQPR3kHw9zd.jpg#http://shinchuo-test2.com/shinchou/uploads/img1VwPQPR3kHw9zd.jpg#http://shinchuo-test2.com/shinchou/uploads/img2VwPQPR3kHw9zd.jpg#', 'NS TRADING', 1, 0),
(36, 'sAaUeNV7jX54Iq', 'N/A', 'Durby', 'N/A', 'USS Tokyo', '2018-07-26 12:41:00', 'N/A', 'N/A', '1010', 'MH22S', 'N/A', 'SUZUKI', 'WAGON R', '2008', '375000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'AT', '660', '123000', 'PEARL', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0sAaUeNV7jX54Iq.jpg#http://shinchuo-test2.com/shinchou/uploads/img1sAaUeNV7jX54Iq.jpg#http://shinchuo-test2.com/shinchou/uploads/img2sAaUeNV7jX54Iq.jpg#http://shinchuo-test2.com/shinchou/uploads/img3sAaUeNV7jX54Iq.jpg#', 'NS TRADING', 1, 0),
(37, 'trbUPFndvw7yO4', 'N/A', 'Durby', 'N/A', 'USS Tokyo', '2018-07-26 12:39:00', 'N/A', 'N/A', '1000', 'JF1', 'N/A', 'HONDA', 'N BOX', '2015', '55000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'AT', '660', '14000', 'BLACK', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0trbUPFndvw7yO4.jpg#http://shinchuo-test2.com/shinchou/uploads/img1trbUPFndvw7yO4.jpg#http://shinchuo-test2.com/shinchou/uploads/img2trbUPFndvw7yO4.jpg#http://shinchuo-test2.com/shinchou/uploads/img3trbUPFndvw7yO4.jpg#', '3WM YOKOHAMA', 1, 0),
(38, 'IPu6xtzAGbx2fK', 'N/A', 'Durby', 'N/A', 'TAA Kinki', '2018-07-31 00:00:00', 'N/A', 'N/A', '2030', 'NRE161', 'N/A', 'TOYOTA', 'COROLLA AXIO', '2015', '850000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1500', '26000', 'silver', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0IPu6xtzAGbx2fK.jpg#http://shinchuo-test2.com/shinchou/uploads/img1IPu6xtzAGbx2fK.jpg#http://shinchuo-test2.com/shinchou/uploads/img2IPu6xtzAGbx2fK.jpg#', '3WM YOKOHAMA', 0, 0),
(39, 'IJARH0R95vQceU', 'N/A', 'Durby', 'N/A', 'TAA Shikoku', '2018-07-31 00:00:00', 'N/A', 'N/A', '2020', 'NHP10', 'N/A', 'TOYOTA', 'AQUA', '2013', '550000', 'N/A', 'N/A', 'Yes', 'No Cut', 'N/A', 'N/A', 'N/A', 'FAT', '1500', '28000', 'white', 'N/A', 'N/A', 'admin', 'nice car', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0IJARH0R95vQceU.jpg#http://shinchuo-test2.com/shinchou/uploads/img1IJARH0R95vQceU.jpg#http://shinchuo-test2.com/shinchou/uploads/img2IJARH0R95vQceU.jpg#', 'NS TRADING', 0, 0),
(40, '3ACbTvSKvWabih', 'N/A', 'Durby', 'N/A', 'TAA Kyushu', '2018-07-31 00:00:00', 'N/A', 'N/A', '2135', 'NHP10', 'N/A', 'TOYOTA', 'AQUA', '2012', '325000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1500', '62000', 'blue', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img03ACbTvSKvWabih.jpg#http://shinchuo-test2.com/shinchou/uploads/img13ACbTvSKvWabih.jpg#http://shinchuo-test2.com/shinchou/uploads/img23ACbTvSKvWabih.jpg#', 'NS TRADING', 0, 0),
(41, 'xPYyZs0Bz1oI5k', 'N/A', 'Durby', 'N/A', 'TAA Kinki', '2018-07-31 00:00:00', 'N/A', 'N/A', '2151', 'NHP10', 'N/A', 'TOYOTA', 'AQUA', '2016', '1550000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1500', '12000', 'white', 'N/A', 'N/A', 'admin', 'Win', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0xPYyZs0Bz1oI5k.jpg#http://shinchuo-test2.com/shinchou/uploads/img1xPYyZs0Bz1oI5k.jpg#http://shinchuo-test2.com/shinchou/uploads/img2xPYyZs0Bz1oI5k.jpg#', 'In Transit', 0, 0),
(42, '531seAypkRiPIq', 'N/A', 'Durby', 'N/A', 'HAA Kobe', '2018-07-28 11:55:00', 'N/A', 'N/A', '33596', 'LA300S', 'N/A', 'DAIHATSU', 'MIRA E S', '2012', '200000', 'N/A', 'N/A', 'Yes', NULL, 'N/A', 'N/A', 'N/A', 'AT', '660', '23000', 'silver', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img1531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img2531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img3531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img4531seAypkRiPIq.jpg#http://shinchuo-test2.com/shinchou/uploads/img5531seAypkRiPIq.jpg#', 'In Transit', 0, 0),
(43, '9om0Tuj8Vcxjjm', 'N/A', 'Durby', 'N/A', 'HAA Kobe', '2018-07-28 13:42:00', 'N/A', 'N/A', '60448', 'LA300S', 'N/A', 'DAIHATSU', 'MIRA E S', '2013', '950000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'AT', '660', '38000', 'white', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img09om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img19om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img29om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img39om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img49om0Tuj8Vcxjjm.jpg#http://shinchuo-test2.com/shinchou/uploads/img59om0Tuj8Vcxjjm.jpg#', 'In Transit', 0, 0),
(44, '2eJQVoTCIpCETDS', 'N/A', 'Gary', 'N/A', 'TAA Shikoku', '2018-05-08 00:00:00', 'N/A', 'N/A', '4018', 'GE6', 'N/A', 'HONDA', 'FIT', '2009', '450000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1300', '81000', 'beige', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img02eJQVoTCIpCETDS.jpg#http://shinchuo-test2.com/shinchou/uploads/img12eJQVoTCIpCETDS.jpg#http://shinchuo-test2.com/shinchou/uploads/img22eJQVoTCIpCETDS.jpg#', 'In Transit', 1, 0),
(45, 'YV8w0tCWaZVtqg', 'N/A', 'Durby', 'N/A', 'KansaiMatsubara AA', '2018-07-26 11:45:00', 'N/A', 'N/A', '30427', 'NHP10', 'N/A', 'TOYOTA', 'AQUA', '2012', '350000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FA', '1500', '30000', 'blue', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img1YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img2YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img3YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img4YV8w0tCWaZVtqg.jpg#http://shinchuo-test2.com/shinchou/uploads/img5YV8w0tCWaZVtqg.jpg#', 'In Transit', 0, 0),
(46, 'c9kLjcjq0uSBC0', 'N/A', 'Durby', 'N/A', 'TAA Tohoku', '2018-07-26 12:02:00', 'N/A', 'N/A', '9093', 'ZRE144G', 'N/A', 'TOYOTA', 'COROLLA FIELDER', '2011', '650000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1800', '93000', ' COBALT  BLUE ', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0c9kLjcjq0uSBC0.jpg#http://shinchuo-test2.com/shinchou/uploads/img1c9kLjcjq0uSBC0.jpg#http://shinchuo-test2.com/shinchou/uploads/img2c9kLjcjq0uSBC0.jpg#', 'In Transit', 0, 0),
(47, 'Ejg0B9WJoitWP', 'N/A', 'Durby', 'N/A', 'JU Tochigi', '2018-08-03 14:47:00', 'N/A', 'N/A', '60', 'ZVW30', 'N/A', 'TOYOTA', 'PRIUS', '2010', '1250000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'IA', '1800', '94000', '', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img1Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img2Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img3Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img4Ejg0B9WJoitWP.jpg#http://shinchuo-test2.com/shinchou/uploads/img5Ejg0B9WJoitWP.jpg#', 'In Transit', 0, 0),
(48, 'vfntglCXjmP94', 'N/A', 'Durby', 'N/A', 'JU Tochigi', '2018-08-03 14:45:00', 'N/A', 'N/A', '53', 'KGC30', 'N/A', 'TOYOTA', 'PASSO', '2013', '1500000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FA', '1000', '28000', '', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 1, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img1vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img2vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img3vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img4vfntglCXjmP94.jpg#http://shinchuo-test2.com/shinchou/uploads/img5vfntglCXjmP94.jpg#', 'MOANA BLUE', 0, 0),
(49, 'y4zo1XlB4LH9k8', 'N/A', 'Durby', 'N/A', 'LAA Okayama', '2018-08-03 11:44:00', 'N/A', 'N/A', '2175', 'SCP90', 'N/A', 'TOYOTA', 'VITZ', '2009', '545000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1300', '55000', '', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img1y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img2y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img3y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img4y4zo1XlB4LH9k8.jpg#http://shinchuo-test2.com/shinchou/uploads/img5y4zo1XlB4LH9k8.jpg#', NULL, 0, 0),
(50, '5eEUZgN2eCma', 'N/A', 'test', 'N/A', 'USS Saitama', '2018-07-27 10:30:00', 'N/A', 'N/A', '1', 'LA350S', 'N/A', 'DAIHATSU', 'MIRA E S', '2017', '500000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'AT', '660', '3000', 'YELLOW', 'N/A', 'N/A', 'admin', 'Purchased!', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img05eEUZgN2eCma.jpg#http://shinchuo-test2.com/shinchou/uploads/img15eEUZgN2eCma.jpg#http://shinchuo-test2.com/shinchou/uploads/img25eEUZgN2eCma.jpg#http://shinchuo-test2.com/shinchou/uploads/img35eEUZgN2eCma.jpg#', NULL, 0, 0),
(51, 'T5zWQu2g7Bks', 'N/A', 'test', 'N/A', 'USS Nagoya', '2018-07-27 09:30:00', 'N/A', 'N/A', '1', 'GRX125', 'N/A', 'TOYOTA', 'MARK X', '2007', '100', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '2500', '67000', 'SILVER', 'N/A', 'N/A', 'admin', 'Purchased', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0T5zWQu2g7Bks.jpg#http://shinchuo-test2.com/shinchou/uploads/img1T5zWQu2g7Bks.jpg#http://shinchuo-test2.com/shinchou/uploads/img2T5zWQu2g7Bks.jpg#http://shinchuo-test2.com/shinchou/uploads/img3T5zWQu2g7Bks.jpg#', NULL, 0, 0),
(52, '4UTMgBnPISyNepg', 'N/A', 'Ibad', 'N/A', 'USS Kyushu', '2018-08-04 10:36:00', 'N/A', 'N/A', '12186', 'SCP90', '5130640', 'TOYOTA', 'VITZ', '2009', '70000', '13000', '70000', 'No', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1300', '51000', 'L BLUE', '9AE', '2000', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img04UTMgBnPISyNepg.jpg#http://shinchuo-test2.com/shinchou/uploads/img14UTMgBnPISyNepg.jpg#http://shinchuo-test2.com/shinchou/uploads/img24UTMgBnPISyNepg.jpg#http://shinchuo-test2.com/shinchou/uploads/img34UTMgBnPISyNepg.jpg#', NULL, 0, 0),
(53, 'hs7XhJhfsOSQPzW', 'N/A', 'Ibad', 'N/A', 'USS Kyushu', '2018-08-04 12:07:00', 'N/A', 'N/A', '52513', 'NHW20', '7587839', 'TOYOTA', 'PRIUS', '2006', '80000', '13000', '70000', 'No', NULL, 'N/A', 'N/A', 'N/A', 'AT', '1500', '192000', 'SILVER', '1FC', '2000', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0hs7XhJhfsOSQPzW.jpg#http://shinchuo-test2.com/shinchou/uploads/img1hs7XhJhfsOSQPzW.jpg#http://shinchuo-test2.com/shinchou/uploads/img2hs7XhJhfsOSQPzW.jpg#http://shinchuo-test2.com/shinchou/uploads/img3hs7XhJhfsOSQPzW.jpg#', NULL, 0, 0),
(54, 'ftr2jkkIXQYM9', 'N/A', 'Gary', 'N/A', 'TAA Hiroshima', '2018-05-08 00:00:00', 'N/A', 'N/A', '281', 'GYEW', 'N/A', 'MAZDA', 'ATENZA WAGON', '2006', '20000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '2000', '128000', 'blue', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0ftr2jkkIXQYM9.jpg#http://shinchuo-test2.com/shinchou/uploads/img1ftr2jkkIXQYM9.jpg#http://shinchuo-test2.com/shinchou/uploads/img2ftr2jkkIXQYM9.jpg#', NULL, 0, 0),
(55, 'zXMEwkFI53e6ng', 'N/A', 'Finn', 'N/A', 'JAA', '2018-05-09 00:00:00', 'N/A', 'N/A', '23160', 'FC26', 'N/A', 'NISSAN', 'SERENA', '2011', '220000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'DA', '2000', '68000', 'SILVER', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0zXMEwkFI53e6ng.jpg#http://shinchuo-test2.com/shinchou/uploads/img1zXMEwkFI53e6ng.jpg#http://shinchuo-test2.com/shinchou/uploads/img2zXMEwkFI53e6ng.jpg#', NULL, 0, 0),
(56, '7tnSwboLFQ0wuI', 'N/A', 'Durby', 'N/A', 'HAA Kobe', '2018-08-11 00:00:00', 'N/A', 'N/A', '53105', 'RT3', '1006328', 'HONDA', 'CROSSROAD', '2007', '950000', '13000', '70000', 'Yes', NULL, '52-1003', 'N/A', 'N/A', 'AT', '2000', '117000', 'grey', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img07tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img17tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img27tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img37tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img47tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img57tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img67tnSwboLFQ0wuI.jpg#http://shinchuo-test2.com/shinchou/uploads/img77tnSwboLFQ0wuI.jpg#', NULL, 0, 0),
(57, '2Aj3BX6oxXmuO2E', 'N/A', 'Durby', 'N/A', 'JU Hiroshima', '2018-09-20 13:57:00', 'N/A', 'N/A', '6178', 'NHP10', 'N/A', 'TOYOTA', 'AQUA', '2012', '150000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1500', '111000', 'white', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img02Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img12Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img22Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img32Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img42Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img52Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img62Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img72Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img82Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img92Aj3BX6oxXmuO2E.jpg#http://shinchuo-test2.com/shinchou/uploads/img102Aj3BX6oxXmuO2E.jpg#', NULL, 0, 0),
(58, '0WXgzG86ORiHF', 'N/A', 'Durby', 'N/A', 'TAA Chubu', '2018-09-20 00:00:00', 'N/A', 'N/A', '18', 'TRH224W', 'N/A', 'TOYOTA', 'HIACE', '2015', '1810000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'IAT', '2700', '104000', 'silver', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img00WXgzG86ORiHF.jpg#http://shinchuo-test2.com/shinchou/uploads/img10WXgzG86ORiHF.jpg#http://shinchuo-test2.com/shinchou/uploads/img20WXgzG86ORiHF.jpg#', NULL, 0, 0),
(59, 'lpcv8e7e04ixI1', 'N/A', 'Durby', 'N/A', 'ARAI Oyama', '2018-09-20 00:00:00', 'N/A', 'N/A', '1443', 'TRH214W', 'N/A', 'TOYOTA', 'HIACE', '2013', '1010000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'IAT', '2690', '101000', 'black', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img1lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img2lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img3lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img4lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img5lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img6lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img7lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img8lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img9lpcv8e7e04ixI1.jpg#http://shinchuo-test2.com/shinchou/uploads/img10lpcv8e7e04ixI1.jpg#', NULL, 0, 0),
(60, 'ap47i8nA8HME1', 'N/A', 'Durby', 'N/A', 'TAA Chubu', '2018-09-20 00:00:00', 'N/A', 'N/A', '19', 'KSP130', 'N/A', 'TOYOTA', 'IST', '2013', '30000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1000', '94000', 'white', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0ap47i8nA8HME1.jpg#http://shinchuo-test2.com/shinchou/uploads/img1ap47i8nA8HME1.jpg#http://shinchuo-test2.com/shinchou/uploads/img2ap47i8nA8HME1.jpg#', NULL, 0, 0),
(61, '2eW6sVfuUNqxtvZ', 'N/A', 'Durby', 'N/A', 'JU Aichi', '2018-09-20 00:00:00', 'N/A', 'N/A', '4039', 'TRJ150W', 'N/A', 'TOYOTA', 'LAND CRUISER PRADO', '2014', '1815000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'AT', '2700', '45000', 'con', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img02eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img12eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img22eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img32eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img42eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img52eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img62eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img72eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img82eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img92eW6sVfuUNqxtvZ.jpg#http://shinchuo-test2.com/shinchou/uploads/img102eW6sVfuUNqxtvZ.jpg#', NULL, 0, 0),
(62, 'IBTgvYnBOBgpxH', 'N/A', 'Durby', 'N/A', 'TAA Chubu', '2018-09-20 00:00:00', 'N/A', 'N/A', '2016', 'GDJ150W', 'N/A', 'TOYOTA', 'LAND CRUISER PRADO', '2016', '2730000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '2800', '48000', 'red', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0IBTgvYnBOBgpxH.jpg#http://shinchuo-test2.com/shinchou/uploads/img1IBTgvYnBOBgpxH.jpg#http://shinchuo-test2.com/shinchou/uploads/img2IBTgvYnBOBgpxH.jpg#', NULL, 0, 0),
(63, '97jcdCr0jF4pS4O', 'N/A', 'Durby', 'N/A', 'USS Tokyo', '2018-09-20 00:00:00', 'N/A', 'N/A', '25380', 'TRH219W', 'N/A', 'TOYOTA', 'HIACE', '2013', '1450000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'AT', '2700', '87000', 'PEARL', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img097jcdCr0jF4pS4O.jpg#http://shinchuo-test2.com/shinchou/uploads/img197jcdCr0jF4pS4O.jpg#http://shinchuo-test2.com/shinchou/uploads/img297jcdCr0jF4pS4O.jpg#http://shinchuo-test2.com/shinchou/uploads/img397jcdCr0jF4pS4O.jpg#', NULL, 0, 0),
(64, '7X7cTdtbXo1yRJ', 'N/A', 'Durby', 'N/A', 'TAA Tohoku', '2018-09-20 00:00:00', 'N/A', 'N/A', '5824', 'NHP10', 'N/A', 'TOYOTA', 'AQUA', '2015', '450000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '1500', '73000', 'white', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img07X7cTdtbXo1yRJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img17X7cTdtbXo1yRJ.jpg#http://shinchuo-test2.com/shinchou/uploads/img27X7cTdtbXo1yRJ.jpg#', NULL, 0, 0),
(65, 'YQWbGoNyK3q6OQ', 'N/A', 'Durby', 'N/A', 'Kansai Matsubara AA', '2018-09-20 00:00:00', 'N/A', 'N/A', '30364', 'TRJ150W', 'N/A', 'TOYOTA', 'LAND CRUISER PRADO', '2015', '3500000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FA', '2700', '40000', 'black', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img0YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img1YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img2YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img3YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img4YQWbGoNyK3q6OQ.jpg#http://shinchuo-test2.com/shinchou/uploads/img5YQWbGoNyK3q6OQ.jpg#', NULL, 0, 0),
(66, '2rfqf1DED1ZOmW', 'N/A', 'Durby', 'N/A', 'TAA Chubu', '2018-09-20 00:00:00', 'N/A', 'N/A', '121', 'GRJ150W', 'N/A', 'TOYOTA', 'LAND CRUISER PRADO', '2014', '3200000', 'N/A', 'N/A', 'N/A', NULL, 'N/A', 'N/A', 'N/A', 'FAT', '4000', '106000', 'white', 'N/A', 'N/A', 'admin', 'undefined', 'undefined', 'N/A', 0, 0, NULL, 1, 'http://shinchuo-test2.com/shinchou/uploads/img02rfqf1DED1ZOmW.jpg#http://shinchuo-test2.com/shinchou/uploads/img12rfqf1DED1ZOmW.jpg#http://shinchuo-test2.com/shinchou/uploads/img22rfqf1DED1ZOmW.jpg#', NULL, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(100) NOT NULL,
  `createdon` varchar(500) NOT NULL,
  `createdby` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`, `createdon`, `createdby`) VALUES
(1, 'Master Admin', 'asd', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `rorocharge`
--

CREATE TABLE `rorocharge` (
  `c_id` int(11) NOT NULL,
  `charge` varchar(100) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rorocharge`
--

INSERT INTO `rorocharge` (`c_id`, `charge`, `generatedby`) VALUES
(1, 'Freight', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `shipmentconsignee`
--

CREATE TABLE `shipmentconsignee` (
  `sc_id` int(11) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `caddress` text NOT NULL,
  `tel` varchar(100) NOT NULL,
  `fax` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cusage` varchar(70) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shipmentconsignee`
--

INSERT INTO `shipmentconsignee` (`sc_id`, `cname`, `caddress`, `tel`, `fax`, `email`, `cusage`, `generatedby`) VALUES
(2, 'test', 'test # 2', '055-287-97112', '055-287-97152', 'junana@test2.com', 'Multi Use', 'admin'),
(3, 'test2', 'undefined', 'undefined', 'undefined', 'undefined', 'Default', 'admin'),
(4, 'test3', 'street @ 3', '055-287-9711', '055-287-9715', 'abc@abc.com', 'Single Use', 'admin'),
(5, 'test5', 'undefined', 'undefined', 'undefined', 'undefined', 'Default', 'admin'),
(6, 'test4', 'ajsbd', '055-287-9711', '055-287-9715', 'kansai@test.com', 'Single Use', 'admin'),
(7, 'test8', 'test updated', '055-287-9711', '055-287-9715', 'abc@abc2.com', 'Multi Use', 'admin'),
(8, 'testt1', 'test address', '055-287-9711', '055-287-9715', 'abc@abc.com', 'Single Use', 'admin'),
(9, 'fhgfg', 'ghcgc', '564646', '674654', 'obsessestore@gmail.com', 'Single Use', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `shipmentschedule`
--

CREATE TABLE `shipmentschedule` (
  `ss_id` int(11) NOT NULL,
  `vesselid` int(11) NOT NULL,
  `voyageid` int(11) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shipmentschedule`
--

INSERT INTO `shipmentschedule` (`ss_id`, `vesselid`, `voyageid`, `generatedby`) VALUES
(4, 2, 2, 'admin'),
(2, 1, 1, 'admin'),
(3, 1, 1, 'admin'),
(5, 2, 2, 'admin'),
(6, 1, 1, 'admin'),
(7, 2, 2, 'admin'),
(8, 1, 1, 'admin'),
(9, 2, 0, 'admin'),
(10, 1, 4, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `shipper`
--

CREATE TABLE `shipper` (
  `s_id` int(11) NOT NULL,
  `sname` varchar(100) DEFAULT NULL,
  `cperson` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `fax` varchar(100) DEFAULT NULL,
  `statustime` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shipper`
--

INSERT INTO `shipper` (`s_id`, `sname`, `cperson`, `email`, `phone`, `mobile`, `fax`, `statustime`, `status`) VALUES
(1, 'dsa', 'asd', 'asd@ad.com', 'asd', 'asd', 'asd', 'Mon Mar 05 2018 22:09:43 GMT 0500 (Pakistan Standard Time)', 0),
(2, 'cool', 'asd', 'asd@ads.com', 'asd', 'sdxs', 'asd', 'Mon Mar 05 2018 22:31:53 GMT 0500 (Pakistan Standard Time)', 0),
(3, 'asd', 'asd', 'asd@ad.com', 'asd', 'asd', 'asd', 'Mon Mar 05 2018 21:50:12 GMT 0500 (Pakistan Standard Time)', 0),
(4, 'sa', 'asd', 'asd@axd.com', 'asd', 'asd', 'asd', 'Mon Mar 05 2018 22:34:14 GMT 0500 (Pakistan Standard Time)', 0),
(5, 'hamid', 'raza', 'hamid@h.com', '9287821', '82838', '82382', 'Wed Mar 07 2018 01:43:25 GMT 0500 (Pakistan Standard Time)', 0);

-- --------------------------------------------------------

--
-- Table structure for table `shipscheduleroutes`
--

CREATE TABLE `shipscheduleroutes` (
  `r_id` int(11) NOT NULL,
  `originport` int(11) NOT NULL,
  `etd` varchar(100) NOT NULL,
  `destport` int(11) NOT NULL,
  `eta` varchar(100) NOT NULL,
  `scheduleid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shipscheduleroutes`
--

INSERT INTO `shipscheduleroutes` (`r_id`, `originport`, `etd`, `destport`, `eta`, `scheduleid`) VALUES
(6, 1, '09/16/2018', 2, '09/20/2018', 4),
(3, 1, '09/15/2018', 4, '09/26/2018', 2),
(21, 0, '09/16/2018', 0, '09/16/2018', 7),
(5, 1, '09/15/2018', 2, '09/26/2018', 3),
(7, 3, '09/19/2018', 2, '09/20/2018', 4),
(8, 1, '09/16/2018', 2, '09/20/2018', 5),
(9, 3, '09/18/2018', 2, '09/20/2018', 5),
(10, 4, '09/20/2018', 1, '09/26/2018', 5),
(11, 1, '09/16/2018', 2, '09/18/2018', 6),
(12, 2, '09/18/2018', 3, '09/20/2018', 6),
(13, 3, '09/20/2018', 4, '09/25/2018', 6),
(22, 3, '09/16/2018', 4, '09/16/2018', 8),
(19, 4, '09/20/2018', 2, '09/20/2018', 4),
(20, 3, '09/17/2018', 2, '09/18/2018', 7),
(23, 2, '09/16/2018', 2, '09/16/2018', 8),
(24, 1, '09/16/2018', 2, '09/16/2018', 8),
(25, 2, '09/18/2018', 3, '09/18/2018', 9),
(26, 0, '09/18/2018', 0, '09/18/2018', 9),
(27, 3, '09/21/2018', 4, '09/22/2018', 2),
(28, 0, '09/26/2018', 0, '09/26/2018', 10);

-- --------------------------------------------------------

--
-- Table structure for table `soldlist`
--

CREATE TABLE `soldlist` (
  `s_id` int(11) NOT NULL,
  `prodid` varchar(100) NOT NULL,
  `client` varchar(100) NOT NULL,
  `soldprice` varchar(100) NOT NULL,
  `buyer` varchar(100) NOT NULL,
  `remark` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `soldlist`
--

INSERT INTO `soldlist` (`s_id`, `prodid`, `client`, `soldprice`, `buyer`, `remark`) VALUES
(1, 'sI9F7rcyfnE4Vq', 'asd1', '38000', 'admin', 'sold'),
(2, '2KqzE382AaakbrT', 'asd1', '15990', 'admin', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `stocksoldlist`
--

CREATE TABLE `stocksoldlist` (
  `sold_id` int(11) NOT NULL,
  `s_id` int(11) NOT NULL,
  `soldprice` varchar(100) NOT NULL,
  `soldto` varchar(100) NOT NULL,
  `soldon` varchar(100) NOT NULL,
  `remarks` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transport`
--

CREATE TABLE `transport` (
  `s_id` int(11) NOT NULL,
  `sname` varchar(100) DEFAULT NULL,
  `cperson` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `fax` varchar(100) DEFAULT NULL,
  `statustime` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `address` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transport`
--

INSERT INTO `transport` (`s_id`, `sname`, `cperson`, `email`, `phone`, `mobile`, `fax`, `statustime`, `status`, `address`) VALUES
(4, 'HONDA KANSAI', 'Mr. Anderson', 'kansai@test.com', '078-334-4622', '255353', '7878522', 'Thu May 03 2018 19:38:10 GMT 0500 (Pakistan Standard Time)', 1, 'street 34'),
(5, 'JUNANA REKUSO', 'SAKAI SAN', 'junana@test.com', '055-287-9711', '525435', '055-287-9715', 'Thu May 03 2018 19:38:53 GMT 0500 (Pakistan Standard Time)', 1, 'street 45'),
(6, 'CARRY GOAL', 'OKUDA , YAMADA', 'order@carrygoal.jp', '0743-64-2388', '0743-64-2388', '0743-64-2387', 'Wed Jul 18 2018 16:14:47 GMT 0500 (Pakistan Standard Time)', 1, '.'),
(7, 'USS BUTSURYU TOKYO', 'N/A', 'N/A', '04-7120-8600', 'N/A	', 'N/A', 'Wed Jul 18 2018 16:15:24 GMT 0500 (Pakistan Standard Time)', 1, 'N/A'),
(8, 'AUTO TERMINAL JAPAN', 'MISS TSUJI ERIKA SAN', 'ETusji@jfa.co.jp', '078-805-2550', 'N/A', '078-805-2448', 'Wed Jul 18 2018 16:16:12 GMT 0500 (Pakistan Standard Time)', 1, 'N/A'),
(9, 'HANAMARU CO LTD', 'KAWAMURA', 'N/A', '06-6613-5522', 'N/A', '06-6613-1133', 'Wed Jul 18 2018 16:16:40 GMT 0500 (Pakistan Standard Time)', 1, 'N/A'),
(10, 'SHIMADA SANGYO CO LTD', 'Natsumi Horigome', 'N/A', '042-852-3773', '042-777-1014', 'N/A', 'Wed Jul 18 2018 16:17:09 GMT 0500 (Pakistan Standard Time)', 1, 'N/A'),
(11, 'JUNANA REKUSO', 'SAKAI SAN', 'N/A', '055-287-9711', 'N/A', '055-287-9715', 'Wed Jul 18 2018 16:17:30 GMT 0500 (Pakistan Standard Time)', 1, 'N/A');

-- --------------------------------------------------------

--
-- Table structure for table `userauth`
--

CREATE TABLE `userauth` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `address` text,
  `port` varchar(100) DEFAULT NULL,
  `dor` varchar(100) DEFAULT NULL,
  `llogin` varchar(100) DEFAULT NULL,
  `calculator` varchar(100) DEFAULT NULL,
  `salesuser` varchar(100) DEFAULT NULL,
  `currency` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `showlcc` tinyint(1) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `profileimg` text,
  `colorscheme` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userauth`
--

INSERT INTO `userauth` (`username`, `password`, `email`, `name`, `city`, `country`, `mobile`, `company`, `address`, `port`, `dor`, `llogin`, `calculator`, `salesuser`, `currency`, `status`, `showlcc`, `role`, `profileimg`, `colorscheme`) VALUES
('ABC Motor', '123456', 'abcsales@yahoo.com', 'ABC Motors', 'undefined', 'Pakistan', '874574122', NULL, NULL, NULL, NULL, NULL, NULL, 'ABC Motor', NULL, 1, 1, 'salesuser', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/Bethany Schell.jpg', '#5320FA'),
('admin', 'admin123', 'admin@admin.com', 'admin', NULL, NULL, NULL, 'shinchou', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/Bethany Schell.jpg', '#ED0202'),
('buyer10', '123', 'buyer1@buyer.com', 'buyer10', 'test', 'test', '123', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 1, 1, 'buyer', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('clark', '123', 'buyer1@test.com', 'Clark Henderson', 'Auckland', 'New Zealand', '59151651', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 1, 1, 'buyer', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('Danny', '123', 'client4@test.com', 'Stew', 'Castro', 'Chile', '47877745', 'JKL Autos', 'shop 122', 'Castro', '2018-01-12', NULL, 'Default', '', 'JPY', 1, 1, 'client', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('Durby', '123456', 'ANSARI@SHINCHUO.COM', 'Autos', 'Auckland', 'New Zealand', '09032320053', 'DURBY AUTOS LTD', 'street 22 hill view', 'Auckland', NULL, NULL, 'Default', 'NEW COW', 'JPY', 1, 1, 'client', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('Finn', '123', 'client1@test.com', 'Carl', 'London', 'United Kingdom', '4445854255', 'KLI Motors', 'street 453', 'London', NULL, NULL, 'Default', 'jerry', 'JPY', 1, 1, 'client', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('Gary', '123', 'client2@test.com', 'Moore', 'London', 'United Kingdom', '4445854255', 'MNM Autos', 'street 453', 'London', NULL, NULL, 'Default', 'jerry', 'JPY', 1, 1, 'client', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('Ibad', '123456', 'ibadrehmankhan90@gmail.com', 'Rehman', 'Karachi', 'Pakistan', '76467257', 'ABC', 'sfsf', 'Karachi', '2018-07-26', NULL, 'Default', '', 'JPY', 1, 1, 'client', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('jerry', '123', 'sales1@test.com', 'Jerry Brown', 'undefined', 'New Zealand', '252563236', NULL, NULL, NULL, NULL, NULL, NULL, 'jerry', NULL, 1, 1, 'salesuser', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/avatar04.png', '#9647ED'),
('Kenny', '123', 'client5@test.com', 'White', 'Sao Paulo', 'Brazil', '6658745412', 'MNO Autos', 'shop 122', 'Sao Paulo', NULL, NULL, 'Default', '', 'JPY', 1, 1, 'client', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('NEW COW', '123456', 'ADEEL@SHINCHUO.COM', 'KYLE', 'undefined', 'NEW ZEALAND', '09032320053', NULL, NULL, NULL, NULL, NULL, NULL, 'NEW COW', NULL, 1, 1, 'salesuser', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('staff1', 'staff1234', 'staff@shinchuo.com', 'staff1', 'Karachi', 'Pakistan', '092', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 1, 1, 'staff', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('test', 'shinchuo_123', 'razarauf26@yahoo.com', 'user', 'Karachi', 'Pakistan', '345', 'None', 'H. No. 200', 'Karachi', '2018-07-27', NULL, 'Default', '', 'JPY', 1, 1, 'client', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('Test343', '123', 'buyer12@yahoo.com', 'Test Buyer', 'Karachi', 'Pakistan', '456547', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 1, 1, 'buyer', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338'),
('test56', '123', 'client@test.com', 'testt', 'Kabul', 'Afghanistan', '345', 'Test', 'Kabul', 'Kabul', '2018-10-06', NULL, 'Default', '', 'JPY', 1, 1, 'client', NULL, NULL),
('walt', '123', 'buyer2@test.com', 'Walt James', 'Osaka', 'Japan', '56496465', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 1, 1, 'buyer', 'http://shinchuo-test2.com/shinchouadmin/userprofiles/default_user.jpg', '#ed3338');

-- --------------------------------------------------------

--
-- Table structure for table `userview`
--

CREATE TABLE `userview` (
  `client` varchar(100) NOT NULL,
  `lot` tinyint(1) NOT NULL,
  `auction` tinyint(1) NOT NULL,
  `auctiondate` tinyint(1) NOT NULL,
  `grade` tinyint(1) NOT NULL,
  `equipment` tinyint(1) NOT NULL,
  `chassis` tinyint(1) NOT NULL,
  `enginecc` tinyint(1) NOT NULL,
  `mileage` tinyint(1) NOT NULL,
  `color` tinyint(1) NOT NULL,
  `startprice` tinyint(1) NOT NULL,
  `avgprice` tinyint(1) NOT NULL,
  `soldprice` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `sheet` tinyint(1) NOT NULL,
  `sheetdetail` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userview`
--

INSERT INTO `userview` (`client`, `lot`, `auction`, `auctiondate`, `grade`, `equipment`, `chassis`, `enginecc`, `mileage`, `color`, `startprice`, `avgprice`, `soldprice`, `status`, `sheet`, `sheetdetail`) VALUES
('asd1', 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('asd2', 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('asd3', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('asf4d', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Danny', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Durby', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1),
('fds', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Finn', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Gary', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('ibad', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Kenny', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('Ron', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('test', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
('test56', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `v_id` int(11) NOT NULL,
  `make` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `prefix` varchar(100) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `length` varchar(50) DEFAULT NULL,
  `width` varchar(50) DEFAULT NULL,
  `height` varchar(50) DEFAULT NULL,
  `m3` varchar(50) DEFAULT NULL,
  `kgs` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`v_id`, `make`, `model`, `prefix`, `year`, `length`, `width`, `height`, `m3`, `kgs`) VALUES
(1, 'Toyota', 'Corolla', 'CP105', '2010', '15', '15', '', '20', '25');

-- --------------------------------------------------------

--
-- Table structure for table `vessel`
--

CREATE TABLE `vessel` (
  `ys_id` int(11) NOT NULL,
  `vesselname` varchar(100) NOT NULL,
  `approval` int(11) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vessel`
--

INSERT INTO `vessel` (`ys_id`, `vesselname`, `approval`, `generatedby`) VALUES
(1, 'Asian Trust', 1, 'admin'),
(2, 'Mosel Ace', 1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `visited`
--

CREATE TABLE `visited` (
  `prodid` varchar(100) NOT NULL,
  `userid` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `visited`
--

INSERT INTO `visited` (`prodid`, `userid`) VALUES
('sF1afD62aF22IC', 'test1'),
('sI9F7rcyfnE4Vq', 'test1'),
('2ozZzQDL2uparAC', 'test1'),
('2tTLB9P3EhtwYsv', 'asd1'),
('2ozZzQDL2uparAC', 'asd1'),
('2ozZzQDL2uparAC', 'asd1'),
('2KqzE382AaakbrT', 'asd1'),
('2ozZzQDL2uparAC', 'null'),
('2ozZzQDL2uparAC', 'null'),
('2ozZzQDL2uparAC', 'null'),
('2ozZzQDL2uparAC', 'null'),
('2KqzE382AaakbrT', 'asd1'),
('2KqzE382AaakbrT', 'asd1'),
('2ozZzQDL2uparAC', 'asd1'),
('2ozZzQDL2uparAC', 'asd1'),
('3xFKKVz9i8UYs', 'asd1'),
('3xFKKVz9i8UYs', 'asd1'),
('sHN4elDgNiGC91', 'asd1'),
('sHN4elDgNiGC91', 'asd1'),
('sHN4elDgNiGC91', 'asd1'),
('3xFKKVz9i8UYs', 'asd1'),
('3xFKKVz9i8UYs', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('6UvIwWW7MylXrF', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('3mROI9VxcfpPa', 'asd1'),
('3mROI9VxcfpPa', 'asd1'),
('3mROI9VxcfpPa', 'asd1'),
('3mROI9VxcfpPa', 'asd1'),
('3mROI9VxcfpPa', 'asd1'),
('3mROI9VxcfpPa', 'asd1'),
('0BNkBDsG7mGjz4', 'asd1'),
('0BNkBDsG7mGjz4', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('9nz3vAI1X5A0ls', 'asd1'),
('0BNkBDsG7mGjz4', 'asd1'),
('9oxy0rvcCuRNZg', 'asd1'),
('9oxy0rvcCuRNZg', 'asd1'),
('tYrIe1P1kAwQg', 'asd1'),
('tYrIe1P1kAwQg', 'asd1'),
('c5DGF2uC2K2fSX', 'asd1'),
('c5DGF2uC2K2fSX', 'asd1'),
('8LPQ7sN3BuVmB', 'asd1'),
('8LPQ7sN3BuVmB', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'test1'),
('2sG0hgoyAyrWu', 'asd1'),
('2sG0hgoyAyrWu', 'asd1'),
('09j4oPV4ZcmA2t', 'asd1'),
('09j4oPV4ZcmA2t', 'asd1'),
('64QjOb4h45gU0G', 'asd1'),
('64QjOb4h45gU0G', 'asd1'),
('8yozeNYi59dVoK', 'asd1'),
('8yozeNYi59dVoK', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('sA295Kf6UqGZKA', 'asd1'),
('8LPQ7sN3BuVmB', 'asd1'),
('8LPQ7sN3BuVmB', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('COsgiwgNsaOW', 'asd1'),
('8LPQ7sN3BuVmB', 'asd1'),
('8LPQ7sN3BuVmB', 'asd1'),
('c5DGF2uC2K2fSX', 'asd1'),
('c5DGF2uC2K2fSX', 'asd1'),
('fvB1uTDY4tbVO', 'asd1'),
('fvB1uTDY4tbVO', 'asd1'),
('OU3hHOZj3igTmx', 'asd1'),
('OU3hHOZj3igTmx', 'asd1'),
('gaI9ZChyf2FukLn', 'Ron'),
('gaI9ZChyf2FukLn', 'Ron'),
('bqk3GoLtRdwwnq0', 'Ron'),
('bqk3GoLtRdwwnq0', 'Ron'),
('8GauopmsPTywlH', 'asd1'),
('8GauopmsPTywlH', 'asd1'),
('8GauopmsPTywlH', 'test1'),
('8GauopmsPTywlH', 'test1'),
('8GauopmsPTywlH', 'test1'),
('8GauopmsPTywlH', 'test1'),
('8GauopmsPTywlH', 'test1'),
('8GauopmsPTywlH', 'test1'),
('8GauopmsPTywlH', 'test1'),
('8GauopmsPTywlH', 'test1'),
('3MaDST63itAuLC', 'test1'),
('3MaDST63itAuLC', 'test1'),
('3MaDST63itAuLC', 'test1'),
('3MaDST63itAuLC', 'test1'),
('3OTcTbIDeiFopE', 'test1'),
('3OTcTbIDeiFopE', 'test1'),
('3OTcTbIDeiFopE', 'test1'),
('5QYlYGQgWFX5vah', 'asd1'),
('5QYlYGQgWFX5vah', 'asd1'),
('3ISmS2huKZ3pCV', 'asd1'),
('3ISmS2huKZ3pCV', 'asd1'),
('3IJIVbsbnlR37F', 'asd1'),
('3IJIVbsbnlR37F', 'asd1'),
('30TMSdL6I3AskpS', 'asd1'),
('30TMSdL6I3AskpS', 'asd1'),
('948b77v1nOgaEza', 'test1'),
('948b77v1nOgaEza', 'test1'),
('54VcHkw9iBLiE6', 'NEW COW'),
('54VcHkw9iBLiE6', 'NEW COW'),
('5eEUZh1joqyK', 'NEW COW'),
('5eEUZh1joqyK', 'NEW COW'),
('5eEUZgCk8qZe', 'NEW COW'),
('5eEUZgCk8qZe', 'NEW COW'),
('5GrcBfTJQrIlCS', 'NEW COW'),
('5GrcBfTJQrIlCS', 'NEW COW'),
('09ovALIHvzerF0', 'NEW COW'),
('09ovALIHvzerF0', 'NEW COW'),
('qmqWxtlQ1uC0jgq', 'Durby'),
('qmqWxtlQ1uC0jgq', 'Durby'),
('2lOiepmsXPI9yq', 'Durby'),
('2lOiepmsXPI9yq', 'Durby'),
('5eEUZgCk8qZe', 'Durby'),
('5eEUZgCk8qZe', 'Durby'),
('PMnw3uBhU1Va', 'Durby'),
('PMnw3uBhU1Va', 'Durby'),
('PMnw3udiD2lE', 'Durby'),
('PMnw3udiD2lE', 'Durby'),
('aNQJhIllYwDCC', 'Durby'),
('aNQJhIllYwDCC', 'Durby'),
('5eEUZgJr7ImR', 'asd1'),
('5eEUZgJr7ImR', 'asd1'),
('PMnw3uay84NQ', 'asd1'),
('PMnw3uay84NQ', 'asd1'),
('PMnw3uay84NQ', 'asd1'),
('PMnw3uay84NQ', 'asd1'),
('4PXDAdRTdVbth3', 'Durby'),
('undefined', 'Durby'),
('undefined', 'Durby'),
('ovGl6C3V5rozzE2', 'Durby'),
('ovGl6C3V5rozzE2', 'Durby'),
('svCNoRuem6M3AgK', 'Durby'),
('svCNoRuem6M3AgK', 'Durby'),
('ovGl6C3V5rozzE2', 'Durby'),
('80LVjjZANV8Nzb', 'Durby'),
('80LVjjZANV8Nzb', 'Durby'),
('qdNljvPZmWOT5fK', 'Durby'),
('ovGl6C3V5rozzE2', 'Durby'),
('qdNljvPZmWOT5fK', 'Durby'),
('ovGl6C3V5rozzE2', 'Durby'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('svCNoRuem6M3AgK', 'asd1'),
('svCNoRuem6M3AgK', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('hs4AQsblpJjzi8', 'asd1'),
('hs4AQsblpJjzi8', 'asd1'),
('2HXt9ixPYAaM2NF', 'asd1'),
('2HXt9ixPYAaM2NF', 'asd1'),
('2HX23sPoI6RVxRk', 'asd1'),
('2HX23sPoI6RVxRk', 'asd1'),
('3bqWDohryWrUKQA', 'asd1'),
('3bqWDohryWrUKQA', 'asd1'),
('2HX23sPoI6RVxRk', 'asd1'),
('2HXt9ixPYAaM2NF', 'asd1'),
('hs4AQsblpJjzi8', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('8aXi3FRqZu9SJR', 'asd1'),
('8aXi3FRqZu9SJR', 'asd1'),
('3UkkU637N5V1yT', 'asd1'),
('3UkkU637N5V1yT', 'asd1'),
('8aXi3FRqZu9SJR', 'asd1'),
('NJZk607iOH07ox', 'asd1'),
('NJZk607iOH07ox', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('3UkkU637N5V1yT', 'asd1'),
('8aXi3FRqZu9SJR', 'asd1'),
('ncdytPQoEIzb1K', 'asd1'),
('ncdytPQoEIzb1K', 'asd1'),
('nfodjQVg5QuyB8', 'asd1'),
('nfodjQVg5QuyB8', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('qdNljvPZmWOT5fK', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('ovGl6C3V5rozzE2', 'asd1'),
('swtOpslGthl66mn', 'asd1'),
('swtOpslGthl66mn', 'asd1'),
('sww5SCVSNIRjv55', 'asd1'),
('sww5SCVSNIRjv55', 'asd1'),
('2JbMM9IXFuluv09', 'Durby'),
('2JbMM9IXFuluv09', 'Durby'),
('26kFORpDrxFSjmy', 'Durby'),
('26kFORpDrxFSjmy', 'Durby'),
('s6OBm5uzjD2wq2', 'Durby'),
('s6OBm5uzjD2wq2', 'Durby'),
('sVLE8aJSJokAnS', 'Durby'),
('sVLE8aJSJokAnS', 'Durby'),
('6nEiH9OxjYfrnwN', 'Durby'),
('6nEiH9OxjYfrnwN', 'Durby'),
('3gX4GartlHVklqK', 'asd1'),
('3gX4GartlHVklqK', 'asd1'),
('3h0KjwvMNor2RMe', 'asd1'),
('3h0KjwvMNor2RMe', 'asd1'),
('2JdhHAI7MkTdkup', 'asd1'),
('2JdhHAI7MkTdkup', 'asd1'),
('329FSN83PUQfgpv', 'asd1'),
('329FSN83PUQfgpv', 'asd1'),
('toffGT9XKelCCY', 'NEW COW'),
('toffGT9XKelCCY', 'NEW COW'),
('sxmT3Rw0Wiuv4B', 'NEW COW'),
('sxmT3Rw0Wiuv4B', 'NEW COW'),
('toffGT9XKelCCY', 'NEW COW'),
('YGybu7fKFR4tLk', 'NEW COW'),
('YGybu7fKFR4tLk', 'NEW COW'),
('YGRDmYRHMwIAbp', 'NEW COW'),
('YGRDmYRHMwIAbp', 'NEW COW'),
('ITXJFV8WEj77dx', 'NEW COW'),
('ITXJFV8WEj77dx', 'NEW COW'),
('sG1PSGPxztS2jB', 'NEW COW'),
('sG1PSGPxztS2jB', 'NEW COW'),
('syu3Dy9EZlXxdF', 'NEW COW'),
('syu3Dy9EZlXxdF', 'NEW COW'),
('toffGT9XKelCCY', 'NEW COW'),
('toffGT9XKelCCY', 'NEW COW'),
('c5MkBRjVpncDpf', 'Durby'),
('c5MkBRjVpncDpf', 'Durby'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'asd1'),
('c5MkBRjVpncDpf', 'hassan'),
('c5MkBRjVpncDpf', 'hassan'),
('cN5xR7r6N3qwiDR', 'Durby'),
('cN5xR7r6N3qwiDR', 'Durby'),
('nBvn154FcBv8QH', 'Durby'),
('nBvn154FcBv8QH', 'Durby'),
('bv1v16dnkwn8Vzi', 'asd1'),
('RpsyOFPv17CNSX', 'asd1'),
('3xFKKVz9i8UYs', 'asd1'),
('3xFKKVz9i8UYs', 'asd1'),
('6TPr1RKRi3EzFz6', 'Durby'),
('6TRfocCClZRXBkr', 'Durby'),
('2Sr5i22CPziT0s', 'Durby'),
('2AlLaXo39E46pEq', 'Durby'),
('2Sr5i22CPziT0s', 'Durby'),
('2AvJfj0HZm56RU0', 'Durby'),
('qbA3NLWM6LLTQCh', 'Durby'),
('qmQjObusUYcm2Ce', 'Durby'),
('undefined', 'Durby'),
('7xhfRwAljIAlAD', 'jerry'),
('7xhfRwAljIAlAD', 'jerry'),
('7xhfRwAljIAlAD', 'Finn'),
('7xhfRwAljIAlAD', 'Finn'),
('80Hr2T69R0m0VP', 'jerry'),
('8cBDvjulNMNwR4', 'jerry'),
('AaTdIUt6TrtKhw', 'jerry'),
('nAWNcIKpG5LBLU', 'jerry'),
('6UKQrr2qyUgQFO', 'jerry'),
('23KiNatMbQMWU', 'jerry'),
('2eJQVoTCIpCETDS', 'jerry'),
('38JUgPEtQ2tJp', 'jerry'),
('ftr2jkkIXQYM9', 'jerry'),
('7xhfRwAljIAlAD', 'asd1'),
('7xhfRwAljIAlAD', 'asd1'),
('80Hr2T69R0m0VP', 'asd1'),
('5Fhak31gbTSIHV', 'asd1'),
('zXMEwkFI53e6ng', 'Finn'),
('zXMEwkFI53e6ng', 'Finn'),
('zXe5IZmsxvuzie', 'Finn'),
('zXe5IZmsxvuzie', 'Finn'),
('zXMEwkFI53e6ng', 'Finn'),
('zXe5IZmsxvuzie', 'Finn'),
('ym6X1DVcx0ZQmK', 'Danny'),
('kWJ28yQW2j8rL', 'Danny'),
('256bJdQqXMqsNK3', 'Danny'),
('eSHeL4KR2P8jx', 'Danny'),
('6TOuMNbzeKMXT6', 'Danny'),
('YEvOshGmCzvZCn', 'Kenny'),
('YKR99jQ6sPmKN8', 'Kenny'),
('5G7CuSMPgA8YmX', 'Kenny'),
('7ERXyV1znCtMSe', 'Kenny'),
('2fnJcNYk8qn0orG', 'Kenny'),
('5FCmFXoeqRZ044', 'jerry'),
('6U4CHfSREKlX5w', 'jerry'),
('4Ooo0Qc0aRazG3', 'jerry'),
('5FpoKHEgmyHEi0', 'jerry'),
('686iCDqOwvDs5n', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('hDeapsu9YfenlKS', 'jerry'),
('hDeapsu9YfenlKS', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('hDeapsu9YfenlKS', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('hDeapsu9YfenlKS', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('hDeapsu9YfenlKS', 'jerry'),
('hDeapsu9YfenlKS', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('0gLi6BTFLboh9', 'jerry'),
('hDeapsu9YfenlKS', 'jerry'),
('iQHc5NRf0k6jXYo', 'jerry'),
('2ptNtqdLoiBSx6z', 'Durby'),
('ayL42YQq1JJcT2c', 'Durby'),
('2ptNtqdLoiBSx6z', 'Durby'),
('2ptNtqdLoiBSx6z', 'Durby'),
('ayL42YQq1JJcT2c', 'Durby'),
('2ptNtqdLoiBSx6z', 'Durby'),
('4uq6t5v6XIh5RZ', 'Finn'),
('4uq6t5v6XIh5RZ', 'Finn'),
('tBExh4bDNBbfABJ', 'Finn'),
('tBExh4bDNBbfABJ', 'Finn'),
('sPCyR5zrZns4QHJ', 'Finn'),
('sPCyR5zrZns4QHJ', 'Finn'),
('QU5s6o0wigZT31', 'Durby'),
('trbUPFndvw7yO3', 'Durby'),
('3tgAeHcusoUXeQI', 'Durby'),
('3hwp2elM6DatTek', 'Durby'),
('Z35HPyycpdRqQl', 'Durby'),
('Zio6RmnM1akOIx', 'Durby'),
('0xjq0NyKkHf8hmc', 'Durby'),
('3hwR855dm8tknaF', 'Durby'),
('2LFEW3Ff6HluyU2', 'Durby'),
('3rp3eZqlEeMRWVK', 'Durby'),
('2RcGaug0pHsi9cq', 'Durby'),
('RU6b7kUXNxhfl', 'Durby'),
('3uaLU962r1BV8wI', 'Durby'),
('24YojI6PZDsN76K', 'Durby'),
('t3UFv1U0yi8JaD', 'Durby'),
('sTxkVNuSFxwXVM', 'Durby'),
('sW8fZgjadJqu4y', 'Durby'),
('3th3kwUVITdNIN4', 'Durby'),
('bhJGyQlf7Pof6h', 'Durby'),
('E0tRGK8nEhH7Ov', 'Durby'),
('0xcCKhO0kelcV5Z', 'Durby'),
('Jd3YUKrr1YGp12', 'Durby'),
('JtOsMgIfXSN0Lq', 'Durby'),
('ayRQruB225CgJPC', 'Durby'),
('32yLvsVjfooRlxd', 'Durby'),
('9U21DaYxLJqOkR', 'Durby'),
('7M8sUo3PbRNW9J', 'Durby'),
('CoJhuIzymdJVJF', 'Durby'),
('7aDDro3iGtKQyWS', 'jerry'),
('7aExD4tbdsmxwPy', 'jerry'),
('tn85kdpP7Mudl1', 'jerry'),
('7aGm1okWhpzVsAU', 'jerry'),
('5m46E5EFDqjU5', 'jerry'),
('RU6b7kVDEbg9x', 'jerry'),
('tn85kdpP7Mudl1', 'Durby'),
('tn85kdpP7Mudl1', 'Durby'),
('trbUPFndvw7yO4', 'Durby'),
('tqhJaeuGwUpAVn', 'Durby'),
('sAaUeNV7jX54Iq', 'Durby'),
('trbUPFndvw7yO4', 'Durby'),
('VwPQPR3kHw9zd', 'Durby'),
('VwPQPR3kHw9zd', 'Durby'),
('VwPQPR3kHw9zd', 'Durby'),
('3nUrggO9w97tg9s', 'Durby'),
('c9kLjcjq0uSBC0', 'Durby'),
('3xmSnorzGs8otOP', 'Durby'),
('2vdF8odjrkbYhvO', 'Durby'),
('YV8w0tCWaZVtqg', 'Durby'),
('5jkp4HtbaYeJqT', 'Durby'),
('J1OroozeHjOYid', 'Durby'),
('cRaKE4PQhZkrE1E', 'Durby'),
('3xcwxbnndR7bmim', 'Ibad'),
('3th3kwUVITdNIN5', 'Ibad'),
('cTj58D9fWI6CELy', 'Ibad'),
('5eEUZgN2eCma', 'test'),
('T5zWQu2g7Bks', 'test'),
('5eEUZgw45lWk', 'Ibad'),
('7aCJfIBq0l1FdBJ', 'Ibad'),
('PMnw3u82zWiK', 'Durby'),
('7aCJfIBq8fY0FqH', 'Durby'),
('7aDblyjRpPjvHy5', 'Durby'),
('ufJBTFryfRcoA', 'Durby'),
('y6scSVxx9p9cG', 'Durby'),
('qbIEACz99Nwi1wF', 'Durby'),
('531seAypkRiPIq', 'Durby'),
('9om0Tuj8Vcxjjm', 'Durby'),
('IJARH0R95vQceU', 'Durby'),
('3ACbTvSKvWabih', 'Durby'),
('xPYyZs0Bz1oI5k', 'Durby'),
('YYDMRAh61xc9fT', 'Durby'),
('iN0kkpOJD5U3I', 'Durby'),
('0Pl6sjaMWap7b', 'Durby'),
('IPu6xtzAGbx2fK', 'Durby'),
('2t4NzSoIMHfRCb', 'Durby'),
('4Q0f7pM2bacf6bP', 'Durby'),
('2uRUBlOcFQI9nxb', 'Durby'),
('2uSaUK0NcpcVOD', 'Durby'),
('2L3eKtiYWTYWOlB', 'Durby'),
('3hcUYmwREkhYFd2', 'Durby'),
('29EoxyPibHHSzj8', 'Durby'),
('2eIuDTKiVo1toif', 'Durby'),
('2uTIYGFXJNVwjix', 'Durby'),
('Ejg0B9WJoitWP', 'Durby'),
('MV41dv12anEPg', 'Durby'),
('vfntglCXjmP94', 'Durby'),
('2uKF71laq2QAEtL', 'Durby'),
('54JqfXFoPihof', 'Durby'),
('2mItTQf1oVYeSx', 'Durby'),
('2fz4yETjM6gFprx', 'Durby'),
('y4zo1XlB4LH9k8', 'Durby'),
('rweX4UkzESGiyge', 'Ibad'),
('4UTMgBnPISyNepg', 'Ibad'),
('iR78fGhqMcNSwJg', 'Ibad'),
('hs7XhJhfsOSQPzW', 'Ibad'),
('4VJT6wOpj6w9LCd', 'Ibad'),
('4VJT6wOpj6w9LCd', 'Ibad'),
('xXWtgWVdLpcMH', 'Durby'),
('G8DuaRI2eDTIN', 'Durby'),
('5G43EF45iMKcN7', 'Durby'),
('3cbQFcgOVVx9h4', 'Durby'),
('7tnSwboLFQ0wuI', 'Durby'),
('3DKGKiCggYHZbo', 'Durby'),
('EuTNCM8eJxRk1D', 'jerry'),
('2Aj3BX6oxXmuO2E', 'Durby'),
('264sfaaVlXyRQxk', 'Durby'),
('2EOCFCkJDmek6H6', 'Durby'),
('2FtRewyKPPTm3jU', 'Durby'),
('2uYI1RyNFt5W6bb', 'Durby'),
('UCEboYw7YH2m2', 'Durby'),
('0WXgzG86ORiHF', 'Durby'),
('2Aj3BX6oxXmuO2E', 'Durby'),
('264sfaaVlXyRQxk', 'Durby'),
('2EOCFCkJDmek6H6', 'Durby'),
('2FtRewyKPPTm3jU', 'Durby'),
('0owL40I7mruAnTu', 'Durby'),
('4uLHlbsoLBC9Nw', 'Durby'),
('7X7cTdtbXo1yRJ', 'Durby'),
('YYoEX8zMDlJT0E', 'Durby'),
('ILRkRK4szhT3f0', 'Durby'),
('5vPfYoVeaHvpB', 'Durby'),
('97jcdCr0jF4pS4O', 'Durby'),
('5H8i8WxljOl12j', 'Durby'),
('5H3Y0wCGCZKjgb', 'Durby'),
('2LoTsb9YeFHSJvv', 'Durby'),
('lpcv8e7e04ixI1', 'Durby'),
('n03TDOLxFiNtWa', 'Durby'),
('67YOEZaNX6ML5t', 'Durby'),
('eNbBQuVmqjBgkhn', 'Durby'),
('pblDy4E7xRpXNsz', 'Durby'),
('ap47i8nA8HME1', 'Durby'),
('2rfqf1DED1ZOmW', 'Durby'),
('4uLHlbsoLBC9Nw', 'Durby'),
('YQWbGoNyK3q6OQ', 'Durby'),
('2eW6sVfuUNqxtvZ', 'Durby'),
('4uLHlbsoLBC9Nw', 'Durby'),
('IBTgvYnBOBgpxH', 'Durby'),
('IAwZ1P4OgEv6MP', 'Durby'),
('4uLHlbsoLBC9Nw', 'Durby'),
('7X7cTdtbXo1yRJ', 'Durby'),
('YYoEX8zMDlJT0E', 'Durby'),
('2Aj3BX6oxXmuO2E', 'Durby'),
('264sfaaVlXyRQxk', 'Durby'),
('2EOCFCkJDmek6H6', 'Durby'),
('2EiU6e0X29X5hPn', 'Durby'),
('J0qef1ViRpqfy7', 'jerry'),
('J0qef1ViRpqfy7', 'jerry'),
('hvGlwbHujLXQT7', 'jerry'),
('hvGlwbHujLXQT7', 'jerry'),
('ZufTi9bI0HGcZc', 'jerry'),
('ZufTi9bI0HGcZc', 'jerry'),
('YjiJZJnTsLosuF', 'jerry'),
('YjiJZJnTsLosuF', 'jerry'),
('dzHWjcfSz0gBI', 'jerry'),
('dzHWjcfSz0gBI', 'jerry'),
('kn8s4Nfd8QvIN', 'jerry'),
('kn8s4Nfd8QvIN', 'jerry'),
('dzHWjcfSz0gBI', 'jerry'),
('2KreHN6cOIUWJFV', 'jerry'),
('2KreHN6cOIUWJFV', 'jerry'),
('2L1a81u2CHJqgvz', 'jerry'),
('2L1a81u2CHJqgvz', 'jerry'),
('Zu3VmSrK6fU9HO', 'jerry'),
('Zu3VmSrK6fU9HO', 'jerry'),
('Zu3VmSrK6fU9HO', 'jerry'),
('Zu3VmSrK6fU9HO', 'jerry'),
('Zu3VmSrK6fU9HO', 'jerry'),
('Zu3VmSrK6fU9HO', 'jerry'),
('2umJsxueldwpxj6', 'jerry'),
('2umJsxueldwpxj6', 'jerry'),
('YgRsT7oVicGjT0', 'jerry'),
('YgRsT7oVicGjT0', 'jerry'),
('YgRsT7oVicGjT0', 'jerry'),
('YEO98FNmvuXdZY', 'jerry'),
('YEO98FNmvuXdZY', 'jerry'),
('YEO98FNmvuXdZY', 'jerry'),
('31ZMO3P30RNNksT', 'jerry'),
('31ZMO3P30RNNksT', 'jerry'),
('25tEOgybkm7POic', 'Durby'),
('EfPbmMh7DrB7aU', 'Durby'),
('2KRayiz9XCt6irV', 'Durby'),
('2FtRewyKPPTm3jU', 'Durby'),
('37zC4GCZHEhiBiV', 'Durby'),
('blO1wU6JMTI4KGz', 'Durby'),
('8IgQJ8YJC6hhyhQ', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `voyages`
--

CREATE TABLE `voyages` (
  `v_id` int(11) NOT NULL,
  `voyage` varchar(100) NOT NULL,
  `vesselid` int(11) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voyages`
--

INSERT INTO `voyages` (`v_id`, `voyage`, `vesselid`, `generatedby`) VALUES
(1, '1', 1, 'admin'),
(2, '1', 2, 'admin'),
(3, '2', 1, 'admin'),
(4, '3', 1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `p_id` varchar(100) NOT NULL,
  `userid` varchar(100) NOT NULL,
  `wishlist` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`p_id`, `userid`, `wishlist`) VALUES
('sO53VXSkWJWGxo', 'test1', 0),
('324REyfBwMUVpzk', 'test1', 0),
('sI9F7rcyfnE4Vq', 'test1', 0),
('JqwbL7SqLobbDb', 'test1', 0),
('sF1afD62aF22IC', 'test1', 0),
('sF1afD62aF22IC', 'test1', 0),
('2B0gWBPUs4si3Pd', 'test1', 0),
('fvB1uTDY4tbVO', 'asd1', 1),
('sHN4elDgNiGC91', 'asd1', 1),
('3xFKKVz9i8UYs', 'asd1', 1),
('sZuSKvJYcyZNcM', 'asd1', 1),
('9nz3vAI1X5A0ls', 'asd1', 1),
('0BNkBDsG7mGjz4', 'asd1', 1),
('4SiqJdYSjsyl9C', 'asd1', 1),
('6V9CiIa1PcyYZm', 'asd1', 1),
('c5MkBRjVpncDpf', 'asd1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `yard`
--

CREATE TABLE `yard` (
  `y_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `billingaddress` varchar(100) DEFAULT NULL,
  `branch` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `pos` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `fax` varchar(100) DEFAULT NULL,
  `prefacture` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `statustime` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `yard`
--

INSERT INTO `yard` (`y_id`, `name`, `address`, `billingaddress`, `branch`, `city`, `country`, `pos`, `tel`, `fax`, `prefacture`, `email`, `statustime`, `status`) VALUES
(3, 'AUTO TERMINAL JAPAN KOBE', '1 MAYAFUTO NADA-KU KOBE 657-0854', '14500', 'N/A', 'KOBE', 'JP', '123456', '0788052477', '0788052448', 'N/A', 'mmochizuki@jfa.co.jp', 'Thu Sep 13 2018 09:19:54 GMT 0500 (Pakistan Standard Time)', 1),
(4, '3WM YOKOHAMA', '12 NISHICHO,NAKA-KU,YOKOHAMA SHI,KANAGAWA', 'undefined', 'undefined', 'YOKOHAMA', 'Japan', '123456', '07053458700', 'N/A', 'undefined', 'hisashi-tanaka@ship.ecl.co.jp', 'Wed Jul 18 2018 16:24:41 GMT 0500 (Pakistan Standard Time)', 1),
(5, 'MOANA BLUE', 'To be Updated', 'undefined', 'undefined', 'KISARAZU', 'Japan', '123456', '0438306192', '0438306193', 'undefined', 'h.ito@moana-blue.com', 'Wed Jul 18 2018 16:25:37 GMT 0500 (Pakistan Standard Time)', 1),
(6, 'AUTO TERMINAL JAPAN CHIBA', 'KISARAZU-SHI,SHIOHAMA,1-17-69 292-0838', '14500', 'undefined', 'CHIBA', 'Japan', '123456', '0438360066', '0438360068', 'undefined', 'mkunimatsu@jfa.co.jp', 'Wed Jul 18 2018 16:26:41 GMT 0500 (Pakistan Standard Time)', 1),
(7, 'NS TRADING', 'FUKUOKA-SHI,HIGASHI-KU,HAKOZAKI-FUTO 4-21 811-0112', '14500', 'undefined', 'FUKUOKA', 'Japan', '123456', '0922923270', '0922923290', 'undefined', 'global@pony.ocn.ne.jp', 'Thu Aug 02 2018 11:10:30 GMT 0500 (Pakistan Standard Time)', 1),
(8, 'KEIHIN KOBE', '11-47, ONOHAMA-CHO CHUO-KU, KOBE 651-0082', '14500', 'undefined', 'KOBE', 'Japan', '123456', '0783916035', '0783917149', 'undefined', 'kkinoshita@eg.keihin.co.jp', 'Thu Aug 02 2018 11:11:33 GMT 0500 (Pakistan Standard Time)', 1),
(9, 'UMAR TRADING', 'AICHI-KEN ,AMA-GUN ,TOBISHIMAMURA ,NAGISA 8-62', '14500', 'undefined', 'NAGOYA', 'Japan', '123456	', '0567521417', '0567521403', 'undefined', 'umarjapan786@yahoo.co.jp', 'Thu Aug 02 2018 11:12:36 GMT 0500 (Pakistan Standard Time)', 1),
(10, 'M.K INTERNATIONAL', 'Fukuoka-ken, Kasuya-gun, Shingu-machi, Harubami 769-2 811-0101', 'undefined', 'undefined', 'FUKUOKA', 'Japan', '14500', '0926926337', '02926926338', 'undefined', 'mkinterjpan@mk-inter.co.jp', 'Thu Aug 02 2018 11:13:23 GMT 0500 (Pakistan Standard Time)', 1),
(11, 'NISSIN EXPORTERS', '9-8-3,YACHIYODAI-KITA,YACHIYO-SHI,CHIBA', 'undefined', 'undefined', 'YACHIYO', 'Japan', '276-0031', '0474875699', '047-487-5699', 'undefined', 'nissinexp@gmail.com', 'Thu Aug 02 2018 11:14:05 GMT 0500 (Pakistan Standard Time)', 1),
(12, 'ECL ROKO', 'KOBE-SHI,HIGASHI NADA-KU, KOYOU-CHO, 2 CHOME D . E BERTH', '', 'undefined', 'KOBE', 'Japan', '123456', '0788462883', '0788462884', 'undefined', 'm-nakanishi@ship.ecl.co.jp', 'Thu Aug 02 2018 11:14:51 GMT 0500 (Pakistan Standard Time)', 1),
(13, 'FROM J', 'KOBE-SHI,HIGASHI NADA-KU, KOYOU-CHO, 2 CHOME D . E BERTH', '14500', 'undefined', 'KOBE', 'Japan', '123456	', '0788462883', '0788462884', 'undefined', 'm-nakanishi@ship.ecl.co.jp', 'Thu Aug 02 2018 11:15:38 GMT 0500 (Pakistan Standard Time)', 1),
(14, '3WM 0', 'H. No. CPO 200, SABIR SRE', 'H. No. CPO 200, SABIR SRE', 'Hakota', 'karachi', 'Pakistan', '74200', '02135233745', '111-555-000', 'sindh', 'yard@yard.com', 'Thu Sep 06 2018 09:49:58 GMT 0500 (Pakistan Standard Time)', 1),
(15, '3WM', 'H. No. R-41 A, Gulshan-e-Qadri', 'H. No. CPO 200, SABIR SRE', 'Hakota', 'karachi', 'Pakistan', '74200', '02135233745', '111-555-000', 'sindh', 'yard@yard.com', 'Thu Sep 06 2018 09:55:46 GMT 0500 (Pakistan Standard Time)', 1),
(16, '3WM 2', 'H. No. R-41 A, Gulshan-e-Qadri', 'H. No. CPO 200, SABIR SRE', 'Hakota', 'karachi', 'Pakistan', '74200', '02135233745', '111-555-000', 'sindh', 'yard@yard.com', 'Thu Sep 06 2018 09:59:01 GMT 0500 (Pakistan Standard Time)', 1),
(17, '3WM 3', 'test address street', 'test address billing', 'Hakota', 'testcity', 'Netherlands', '54000', '021-35232745', '111-222-555', 'testcountry', 'testyard@yard.com', 'Fri Sep 07 2018 23:57:03 GMT 0500 (Pakistan Standard Time)', 0),
(18, 'My test yard', 'street 22 block 45', 'king edward rd', 'test branch', 'Yokohama', 'Japan', '78263', '4457896587', '564647', 'KSS', 'testyard@yahoo.com', 'Thu Sep 06 2018 12:03:58 GMT 0500 (Pakistan Standard Time)', 0),
(19, 'Deluxe Inspection Service', 'street 22', 'block J', 'XYZ', 'Tokyo', 'Japan', '12345', '12354677', '123432535', 'JP', 'deluxe@yahoo.com', 'Fri Oct 12 2018 09:02:58 GMT 0500 (Pakistan Standard Time)', 1);

-- --------------------------------------------------------

--
-- Table structure for table `yardcontactpersons`
--

CREATE TABLE `yardcontactpersons` (
  `r_id` int(11) NOT NULL,
  `repname` varchar(100) NOT NULL,
  `mob` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `yardid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `yardcontactpersons`
--

INSERT INTO `yardcontactpersons` (`r_id`, `repname`, `mob`, `email`, `yardid`) VALUES
(15, 'rep3', '0900782032', 'test@rep3.com', 17),
(8, 'hue', '23', 'a@a.com', 16),
(14, 'rep2', '00011223333', 'test@email2.com', 17),
(7, 'hue', '23', 'a@a.com', 18),
(13, 'rep1-3Wm', '090078601', 'rep2@rep1.com', 17),
(16, 'Mr Joe', '98789777898', 'joe@yahoo.com', 19);

-- --------------------------------------------------------

--
-- Table structure for table `yardports`
--

CREATE TABLE `yardports` (
  `yp_id` int(11) NOT NULL,
  `portid` int(11) NOT NULL,
  `yardid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `yardports`
--

INSERT INTO `yardports` (`yp_id`, `portid`, `yardid`) VALUES
(1, 2, 16),
(2, 3, 16),
(3, 2, 17),
(4, 3, 17),
(6, 4, 17),
(7, 1, 18),
(8, 10, 3),
(9, 8, 3),
(10, 11, 19);

-- --------------------------------------------------------

--
-- Table structure for table `yardservices`
--

CREATE TABLE `yardservices` (
  `ys_id` int(11) NOT NULL,
  `servicename` varchar(100) NOT NULL,
  `approval` int(11) NOT NULL,
  `generatedby` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `yardservices`
--

INSERT INTO `yardservices` (`ys_id`, `servicename`, `approval`, `generatedby`) VALUES
(1, 'Container Packing', 1, 'admin'),
(2, 'Gate Out', 0, 'admin'),
(3, 'Drayage Service', 1, 'admin'),
(4, 'Inspection', 1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `yardyardservices`
--

CREATE TABLE `yardyardservices` (
  `ys_id` int(11) NOT NULL,
  `serviceid` int(11) NOT NULL,
  `yardid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `yardyardservices`
--

INSERT INTO `yardyardservices` (`ys_id`, `serviceid`, `yardid`) VALUES
(1, 1, 16),
(2, 2, 16),
(7, 1, 17),
(9, 1, 3),
(5, 2, 18),
(10, 3, 15),
(11, 4, 3),
(12, 4, 19);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminauth`
--
ALTER TABLE `adminauth`
  ADD PRIMARY KEY (`auth_id`);

--
-- Indexes for table `assignauction`
--
ALTER TABLE `assignauction`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `auction`
--
ALTER TABLE `auction`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `bagencycontactperson`
--
ALTER TABLE `bagencycontactperson`
  ADD PRIMARY KEY (`r_id`);

--
-- Indexes for table `bagencyservices`
--
ALTER TABLE `bagencyservices`
  ADD PRIMARY KEY (`bs_id`);

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`b_id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`b_no`);

--
-- Indexes for table `bookingagent`
--
ALTER TABLE `bookingagent`
  ADD PRIMARY KEY (`s_id`);

--
-- Indexes for table `bookingservices`
--
ALTER TABLE `bookingservices`
  ADD PRIMARY KEY (`ys_id`);

--
-- Indexes for table `booking_freight`
--
ALTER TABLE `booking_freight`
  ADD PRIMARY KEY (`bf_id`);

--
-- Indexes for table `booking_payment`
--
ALTER TABLE `booking_payment`
  ADD PRIMARY KEY (`bp_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `clientgroup`
--
ALTER TABLE `clientgroup`
  ADD PRIMARY KEY (`g_id`);

--
-- Indexes for table `consigneeclients`
--
ALTER TABLE `consigneeclients`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `consigneedestination`
--
ALTER TABLE `consigneedestination`
  ADD PRIMARY KEY (`d_id`);

--
-- Indexes for table `consigneevehicles`
--
ALTER TABLE `consigneevehicles`
  ADD PRIMARY KEY (`v_id`);

--
-- Indexes for table `containercharge`
--
ALTER TABLE `containercharge`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `custommake`
--
ALTER TABLE `custommake`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `custommodel`
--
ALTER TABLE `custommodel`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`deliveryno`);

--
-- Indexes for table `deliverydetail`
--
ALTER TABLE `deliverydetail`
  ADD PRIMARY KEY (`d_id`);

--
-- Indexes for table `insorderemails`
--
ALTER TABLE `insorderemails`
  ADD PRIMARY KEY (`e_id`);

--
-- Indexes for table `inspection`
--
ALTER TABLE `inspection`
  ADD PRIMARY KEY (`ins_id`);

--
-- Indexes for table `inspectionorder`
--
ALTER TABLE `inspectionorder`
  ADD PRIMARY KEY (`inso_id`);

--
-- Indexes for table `lccrequests`
--
ALTER TABLE `lccrequests`
  ADD PRIMARY KEY (`sno`);

--
-- Indexes for table `lccsetting`
--
ALTER TABLE `lccsetting`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `loadingplan`
--
ALTER TABLE `loadingplan`
  ADD PRIMARY KEY (`plancode`);

--
-- Indexes for table `loadingplanvehicles`
--
ALTER TABLE `loadingplanvehicles`
  ADD PRIMARY KEY (`vid`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`o_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderno`);

--
-- Indexes for table `ports`
--
ALTER TABLE `ports`
  ADD PRIMARY KEY (`port_id`);

--
-- Indexes for table `privileges`
--
ALTER TABLE `privileges`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `productdetail`
--
ALTER TABLE `productdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productimages_temp`
--
ALTER TABLE `productimages_temp`
  ADD PRIMARY KEY (`prodid`);

--
-- Indexes for table `purchasedlist`
--
ALTER TABLE `purchasedlist`
  ADD PRIMARY KEY (`s_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `rorocharge`
--
ALTER TABLE `rorocharge`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `shipmentconsignee`
--
ALTER TABLE `shipmentconsignee`
  ADD PRIMARY KEY (`sc_id`);

--
-- Indexes for table `shipmentschedule`
--
ALTER TABLE `shipmentschedule`
  ADD PRIMARY KEY (`ss_id`);

--
-- Indexes for table `shipper`
--
ALTER TABLE `shipper`
  ADD PRIMARY KEY (`s_id`);

--
-- Indexes for table `shipscheduleroutes`
--
ALTER TABLE `shipscheduleroutes`
  ADD PRIMARY KEY (`r_id`);

--
-- Indexes for table `soldlist`
--
ALTER TABLE `soldlist`
  ADD PRIMARY KEY (`s_id`);

--
-- Indexes for table `stocksoldlist`
--
ALTER TABLE `stocksoldlist`
  ADD PRIMARY KEY (`sold_id`);

--
-- Indexes for table `transport`
--
ALTER TABLE `transport`
  ADD PRIMARY KEY (`s_id`);

--
-- Indexes for table `userauth`
--
ALTER TABLE `userauth`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `userview`
--
ALTER TABLE `userview`
  ADD PRIMARY KEY (`client`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`v_id`);

--
-- Indexes for table `vessel`
--
ALTER TABLE `vessel`
  ADD PRIMARY KEY (`ys_id`);

--
-- Indexes for table `voyages`
--
ALTER TABLE `voyages`
  ADD PRIMARY KEY (`v_id`);

--
-- Indexes for table `yard`
--
ALTER TABLE `yard`
  ADD PRIMARY KEY (`y_id`);

--
-- Indexes for table `yardcontactpersons`
--
ALTER TABLE `yardcontactpersons`
  ADD PRIMARY KEY (`r_id`);

--
-- Indexes for table `yardports`
--
ALTER TABLE `yardports`
  ADD PRIMARY KEY (`yp_id`);

--
-- Indexes for table `yardservices`
--
ALTER TABLE `yardservices`
  ADD PRIMARY KEY (`ys_id`);

--
-- Indexes for table `yardyardservices`
--
ALTER TABLE `yardyardservices`
  ADD PRIMARY KEY (`ys_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assignauction`
--
ALTER TABLE `assignauction`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `auction`
--
ALTER TABLE `auction`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `bagencycontactperson`
--
ALTER TABLE `bagencycontactperson`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `bagencyservices`
--
ALTER TABLE `bagencyservices`
  MODIFY `bs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `b_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `b_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `bookingagent`
--
ALTER TABLE `bookingagent`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bookingservices`
--
ALTER TABLE `bookingservices`
  MODIFY `ys_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `booking_freight`
--
ALTER TABLE `booking_freight`
  MODIFY `bf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `booking_payment`
--
ALTER TABLE `booking_payment`
  MODIFY `bp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `clientgroup`
--
ALTER TABLE `clientgroup`
  MODIFY `g_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `consigneeclients`
--
ALTER TABLE `consigneeclients`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `consigneedestination`
--
ALTER TABLE `consigneedestination`
  MODIFY `d_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `consigneevehicles`
--
ALTER TABLE `consigneevehicles`
  MODIFY `v_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `containercharge`
--
ALTER TABLE `containercharge`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `custommake`
--
ALTER TABLE `custommake`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `custommodel`
--
ALTER TABLE `custommodel`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `deliverydetail`
--
ALTER TABLE `deliverydetail`
  MODIFY `d_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `insorderemails`
--
ALTER TABLE `insorderemails`
  MODIFY `e_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `inspection`
--
ALTER TABLE `inspection`
  MODIFY `ins_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `inspectionorder`
--
ALTER TABLE `inspectionorder`
  MODIFY `inso_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `lccrequests`
--
ALTER TABLE `lccrequests`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `lccsetting`
--
ALTER TABLE `lccsetting`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `loadingplanvehicles`
--
ALTER TABLE `loadingplanvehicles`
  MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;

--
-- AUTO_INCREMENT for table `ports`
--
ALTER TABLE `ports`
  MODIFY `port_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `privileges`
--
ALTER TABLE `privileges`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchasedlist`
--
ALTER TABLE `purchasedlist`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rorocharge`
--
ALTER TABLE `rorocharge`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shipmentconsignee`
--
ALTER TABLE `shipmentconsignee`
  MODIFY `sc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `shipmentschedule`
--
ALTER TABLE `shipmentschedule`
  MODIFY `ss_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `shipper`
--
ALTER TABLE `shipper`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `shipscheduleroutes`
--
ALTER TABLE `shipscheduleroutes`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `soldlist`
--
ALTER TABLE `soldlist`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `stocksoldlist`
--
ALTER TABLE `stocksoldlist`
  MODIFY `sold_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `transport`
--
ALTER TABLE `transport`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `v_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vessel`
--
ALTER TABLE `vessel`
  MODIFY `ys_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `voyages`
--
ALTER TABLE `voyages`
  MODIFY `v_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `yard`
--
ALTER TABLE `yard`
  MODIFY `y_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `yardcontactpersons`
--
ALTER TABLE `yardcontactpersons`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `yardports`
--
ALTER TABLE `yardports`
  MODIFY `yp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `yardservices`
--
ALTER TABLE `yardservices`
  MODIFY `ys_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `yardyardservices`
--
ALTER TABLE `yardyardservices`
  MODIFY `ys_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
