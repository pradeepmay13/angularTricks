-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2017 at 11:54 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_auth`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `addressline` varchar(255) NOT NULL,
  `postalCode` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `aboutYou` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `token` varchar(255) NOT NULL DEFAULT 'logged out'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `firstname`, `lastname`, `username`, `addressline`, `postalCode`, `country`, `aboutYou`, `city`, `email`, `password`, `token`) VALUES
(1, '', '', '', '', '', '', '', '', 'pradeep', '6edf8b2bd1b6e03a535504401e6969c850269632', 'pradeep | 58217866d964f58217866d964f58217866d964f'),
(2, '', '', '', '', '', '', '', '', 'er', 'b52c98d49782a6ebb9c8e3bb1ad7aa2f03706481', ''),
(3, '', '', '', '', '', '', '', '', '1111', '011c945f30ce2cbafc452f39840f025693339c42', 'logged out'),
(4, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logout'),
(5, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logout'),
(6, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(7, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(8, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(9, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(10, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(11, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(12, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(13, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(14, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(15, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(16, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(17, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(18, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(19, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(20, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(21, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(22, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(23, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(24, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(25, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(26, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(27, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(28, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(29, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(30, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(31, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(32, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(33, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(34, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(35, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(36, 'pradeep', 'pradeep123', 'pradeep@gmail.com', 'sgdsd g', '33333', 'fdfd', 'ccc', 'gurgaon', 'pradeep@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(37, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(38, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(39, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(40, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(41, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(42, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(43, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(44, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(45, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(46, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(47, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(48, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(49, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(50, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(51, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(52, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(53, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(54, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(55, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(56, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(57, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(58, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(59, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(60, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(61, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(62, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(63, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(64, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(65, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(66, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out'),
(67, '', '', '', '', '', '', '', '', '', '827ccb0eea8a706c4c34a16891f84e7b', 'logged out');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
