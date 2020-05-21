-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2020 at 01:43 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `course`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `author_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `author_name`) VALUES
(1, 'Nauval'),
(2, 'Shidqi'),
(3, 'Violet'),
(4, 'Safira');

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `id` int(11) NOT NULL,
  `video_link` varchar(200) NOT NULL,
  `type` varchar(100) NOT NULL,
  `id_course` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `video_link`, `type`, `id_course`, `name`) VALUES
(1, 'https://www.youtube.com/html', 'Video', 1, 'Apa itu HTML?'),
(2, 'https://www.youtube.com/css', 'Video', 2, 'Apa itu CSS?'),
(3, 'https://www.youtube.com/javascript', 'Video', 3, 'Apa itu JavaScript?'),
(4, 'https://www.youtube.com/watch?v=sBws8MSXN7A', 'Video', 5, 'React Crash Course'),
(7, 'https://www.youtube.com/watch?v=UB1O30fR-EE', 'Video', 1, 'Struktur HTML');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `thumbnail` varchar(100) NOT NULL,
  `id_author` int(11) NOT NULL,
  `duration` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `thumbnail`, `id_author`, `duration`, `description`) VALUES
(1, 'HTML', 'html.jpg', 1, '60', 'Hypertext Markup Language adalah sebuah bahasa markah yang digunakan untuk membuat sebuah halaman web, menampilkan berbagai informasi di dalam sebuah penjelajah web Internet dan pemformatan hiperteks sederhana yang ditulis dalam berkas format ASCII agar dapat menghasilkan tampilan wujud yang terintegrasi.'),
(2, 'CSS', 'css.jpg', 2, '90', 'Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.'),
(3, 'JS', 'js.jpg', 3, '100', 'JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera.'),
(4, 'NodeJS', 'thumbnail-1590050961459.jpeg', 2, '100', 'Node.js adalah sebuah platform untuk menjalankan JavaScript dari sisi server. Untuk mendukung kemampuan tersebut, Node.js dibangun dengan engine Javascript V8 milik Google.'),
(5, 'React', 'thumbnail-1590051066795.jpeg', 1, '120', ' React JS adalah sebuah pustaka/library javascript yang bersifat open source untuk membangun User Interface yang dibuat oleh Facebook.'),
(9, 'VueJS', 'thumbnail-1590061083115.jpeg', 4, '20', 'Vue (cara pengucapannya /vju?/, seperti view) adalah sebuah kerangka kerja nan progresif untuk membangun antarmuka pengguna. ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
