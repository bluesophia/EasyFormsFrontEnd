-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 11, 2018 at 05:29 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easyforms`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `title`, `description`) VALUES
(1, 'About Us', 'EasyForms is a 100% Kiwi owned and operated company which grew from one man’s passion for innovation and technology. Keith Archer wanted to create a company that would make a real difference to customers and their businesses. Not just one that said the right things, but that actually delivered.\r\n\r\nIn true Kiwi style, over a beer and brain storming session with a friend, Keith penned a business plan on the back of a beer coaster with a core purpose of reducing stacks of paperwork in the business environment. At the time, an electrician was tending to some electrical repairs in Keith’s home and overheard this discussion and piped up, that removing the stacks of paperwork involved in code of compliance forms would be a game-changer. With that, Keith set out to establish EasyForms in March, 2013 from his home. Dave Rouse was brought on as Quality Assurance Director and business partner in July 2015 to drive strategy. The company has a marketing and sales team, an international division of 4, 7 directors and a total of 20 staff in our Auckland offices.\r\n\r\nOver 4 years, EasyForms has acquired clients across the globe, in New Zealand, Australia, the Pacific Islands, Canada, The United Kingdom, Ireland and Korea. The company started out automating paper forms into app-based solutions and has now evolved to provide a complete solution for workflow management and develops bespoke web portal and app-based solutions.'),
(2, 'Our vision', 'To provide you with better control and increased transparency of your business, while streamlining your workflow and job management processes. This increases productivity, reduces operational costs and ultimately saves you time so you can focus on the things you need to, while giving you the ability to mobilise your business effortlessly.');

-- --------------------------------------------------------

--
-- Table structure for table `blogCategory`
--

CREATE TABLE `blogCategory` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `blogCategory`
--

INSERT INTO `blogCategory` (`id`, `title`) VALUES
(1, 'Is Timesheet Theft Giving You a Constant Headache?'),
(2, 'Are Mountains of Paperwork Dragging Your Business Down?');

-- --------------------------------------------------------

--
-- Table structure for table `blogQuestions`
--

CREATE TABLE `blogQuestions` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `question` text NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `blogQuestions`
--

INSERT INTO `blogQuestions` (`id`, `categoryId`, `question`, `description`) VALUES
(1, 1, 'Would you like to eliminate timesheet ambiguity?', 'Whether your business is currently using paper-based timesheets, or a job management system, EasyForms helps you achieve the new \"best practice”. EasyForms allows both staff and management to effectively and precisely log and track hours spent on jobs and projects. We can custom-build a solution to your business needs that can be as comprehensive, or as simple as you would like it to be. Whether you need a complex timesheet solution that tracks against a specific portion of a job, that records travel and break times, reports time against multiple members of a job or an individual\'s. Or perhaps you just need a simple solution with clock in/clock out capabilities, or anything in-between, we’ve done it all before.\r\n\r\nEasyForms is a cloud-based solution that enables your field-based teams to enter their timesheet data from anywhere, at any time which can be accessed from any smart device. Our Easy WorkFlow Manager, web-based portal used for reporting and tracking (among other things) can be accessed through your desktop.'),
(2, 1, 'So, What is Timesheet Theft Costing You?', 'It could be costing your company a minimum of $2880 per job, per year based on the scenario below for the small things you may not consider, let alone the numerous other jobs/staff you manage.\r\n\r\nAlthough this varies from company to company, consider this. Employee A starts work 15 minutes late, but does not log this time. Fifteen minutes -- no biggie, right? Correct, but let’s say for example, this is a scaffolding company where staff work in teams of 6. Well, this means employees B, C, D, E and F cannot start until employee A arrives. This puts the whole job back by 90 minutes, not just the original 15 minutes from employee A. This time that was not logged or tracked has now just cost you approximately $60 for this one job alone (assuming no one is late to this job again that week). Based on this example, if this continued, we can project that this company would be losing an average of $2880+ per year on this one job alone. This is based on only one person being 15 mins late per week, with the snowball effect on other staff members time. This is just one example of many.'),
(3, 1, 'Timesheet Theft Is Not Always Deliberate', 'You have picked your staff carefully and would like to think you can trust them. Absolutely! Although, there may not be a dishonest intention, things like human error when it comes to filling out timesheets, or lost pieces of paper scribbled with hours, or merely forgetting total hours spent on a job, or on multiple jobs after a long day at work are all too common.\r\n\r\n'),
(4, 1, 'How We Can Help', 'EasyForms solutions address these issues and alleviate the headaches associated with timesheet theft.\r\n\r\nWe have auto time stamping capabilities and GPS tracking which can track hours and minutes accurately, removing human error, mistakes and double handling. Our solutions can integrate with most accounting packages and output data can be sent to a multitude of locations and different people (internally or externally, whether it’s to the client, back into your in-house system, or people within your organisation) instantly. This means, in most cases staff only need to enter the data once. EasyForms gives you peace of mind when it comes to timesheet theft and job and workflow management, so you can focus on the things you need to.'),
(5, 1, 'We can help your business:', NULL),
(6, 2, 'Do any of these words and phrases ring true for your business?', 'Swamped under mountains of paperwork? Wanting to revolutionise the way you do business? Are you using a multitude of different systems? Tired of double handling and constant re-entering of data, human errors and compliance issues? What about issues with illegible handwriting, repetition, lost information or documents, or, over-complicated processes? Not to mention slow turnaround times, inconsistencies, poor reporting… and the rest!?'),
(7, 2, 'Well then, perhaps these words and phrases sound more appealing to you?\r\n', 'Reduce piles of paperwork, errors and mistakes. Consolidate your various job and workflow management solutions using mobile forms and our web portal, save time, admin, resource and direct costs. Decrease inefficiencies, automate your entire job management and workflow system so data is only entered once - enhancing data collection, and integrate output data to a variety of internal systems, programs and people of your choice in an instant. Simplify processes, drive compliance and save overall costs.\r\n\r\nWhether you have a sales force, a team of skilled tradesmen, a warehouse team, management or production team, or anything in-between, EasyForms can give you the tools to attack these pain areas, plus more.'),
(8, 2, 'So, what are mobile forms anyway?', 'To put it simply, smart or mobile forms are an app-based form which enables data to be entered into the app and for that data to then be pushed or transferred to a multitude of output options simultaneously. This data can be sent to your internal systems/CRM/billing and to the various locations or people of your choice once the form(s) submitted. Mobile forms eliminate the clunky manual process of written forms, using the good old fashioned ‘pen and paper. They simplify processes and reduce administration time, resources and double handling. EasyForms are cloud-based so you can login to your forms from anywhere, at anytime, how convenient!\r\n\r\nEasyForms can take your existing forms or processes and customise an end-to-end solution for your business. Your apps can be equipped with features that make your job so much easier, I.e., photos, video, GPS tracking, sign on glass, audio, date and time stamping, annotation, barcode scanner, plus much more.'),
(9, 2, 'What’s the web app or web portal?', 'Then there’s the web portal/job and workflow management side, which includes your CRM, job scheduling, job management, sales pipelines, production dashboards, inventory and reporting, and more. The mobile forms and web app give you the ability to drive an entire process and manage a job from start to completion. Think about this for a minute. Imagine how much simpler your job would be if you could drive an entire process, or processes, by the various steps we put in place in the mobile apps that must be undertaken each day. Health and safety forms complete, tick. Prestart complete, tick (or any other process you need). Receive notifications when your team is losing, or making money on a job, when the job has gone over the budgeted hours, or overtime completely. The web portal is accessible from your desktop, iPad or tablet. Yes, we can customise a solution that suits your needs. We recognise that no “one size fits all” when it comes to job and workflow management and do not believe in providing you with “off the shelf” products, only to find you use a part of the package.\r\n\r\nHave increased visibility and transparency over all jobs and projects and manage workflow more efficiently while feeling more in control.'),
(10, 2, '“Barriers”, you say?', 'We get it, your team may be feeling resistant to change, or to a new app-based solution. Perhaps they’re ‘used’ to the way they currently do things, or, our favourite, ‘oh, these old dogs won’t be able to learn new tricks’. Well, we can tell you this; our solutions are very easy-to-use. Anyone with a smartphone or device will find our systems to be very intuitive and you can simply use your existing smart device (phone or tablet) for our mobile app-based forms. For those who aren’t so savvy using smart devices, we have designed our systems so that they are as easy to use, as possible. The small amount of time spent getting your head around them will definitely pay off in the long run. Mobile technology is fast becoming a necessity for competitive businesses so that you don’t lag behind.\r\n\r\nSmart forms and the web portal provide a type of connectivity and flexibility that paper forms merely cannot compete with.\r\n\r\nWe have seen many success stories where clients may have be hesitant initially, only to find they now could not imagine not using our solutions. Another example we often hear is, ‘why would we go paper-less when pen and paper work fine in our business?’ While there may be a place for this in certain, small-sized companies, if you answered yes to any of the points above, it is definitely worthwhile having a chat to us to find out what type of customised solution we can provide your company, to help you work smarter and more efficiently.'),
(11, 2, 'Here’s a “portion” of how we can help your business:', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogSubList`
--

CREATE TABLE `blogSubList` (
  `id` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `blogSubList`
--

INSERT INTO `blogSubList` (`id`, `questionId`, `description`) VALUES
(1, 5, 'Capture ACTUAL time spent on jobs - with an auto time stamping capability'),
(2, 5, 'Capture time spent on individual or multiple jobs and even against segments of a project'),
(3, 5, 'Capture travel time with location tracking for multiple jobs - GPS verified'),
(4, 5, 'Capture sick and annual leave (incl. breaks/downtime)'),
(5, 5, 'Streamline payroll and invoicing - integrates with most payroll solutions'),
(6, 5, 'Provides clear and concise reporting at a glance (daily, weekly, monthly - you choose)'),
(7, 5, 'Enhance planning and forecasting'),
(8, 5, 'Save admin & management resource by working smarter'),
(9, 11, 'Automate paper forms into mobile forms, whether it be: a job or daily worksheet, H&S inductions or documents, expense forms, SSSP’s, site inspections, vehicle inspections, checklists, pre-starts, maintenance sheets, near misses -- the list goes on! We can take almost any form (that you have on paper) and transform it into an app-based form'),
(10, 11, 'Streamline quoting - don’t let manual quoting take up any more of your valuable time'),
(11, 11, 'Purchase orders'),
(12, 11, 'Dockets'),
(13, 11, 'Timesheets'),
(14, 11, 'Health & safety processes - we can drive a process that you specify'),
(15, 11, 'Sales pipelines'),
(16, 11, 'CRM'),
(17, 11, 'Job management'),
(18, 11, 'Project management'),
(19, 11, 'GPS tracking of your fleets location'),
(20, 11, 'Reporting - well designed reporting that is available to you in a few simple clicks'),
(21, 11, 'Invoicing, plus more'),
(22, 11, 'Save the trees - be an eco-friendly business. Less paper not only means being more efficient, but you can also help save the trees'),
(23, 11, 'Something else you need? As we are customisable speak to us today about your business requirements');

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`id`, `icon`, `title`, `description`) VALUES
(1, 'fa fa-paper-plane-o', 'Replace Paper Forms and Processes', 'Eliminate stacks of paper, double handling and errors.\r\n\r\nEasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly.'),
(2, 'fa fa-exchange', 'Connecting Office-to-Field Workers', 'Increase connectivity to office-to-field workers and vice versa.\r\n\r\nHelping you to collaborate and communicate more effectively with colleagues out in the field in real-time.'),
(3, 'fa fa-briefcase', 'Job Management', 'Whether in the office, or in the field, feel more in control of all of your jobs on the go from start to completion.\r\n\r\nEasyForms job management solution includes, but is not limited to; job history, job details, scheduling, planning, tracking and everything in between. With everything you need in one location, making it easy to manage and send data and project information.'),
(4, 'fa fa-calendar', 'Job Scheduling', 'Managing jobs, projects and tasks of those in the field is now easy!\r\n\r\nSend requests, job notifications, updates and more to mobile staff with ease. Field workers can be notified instantly as jobs, tasks and deadlines change.'),
(5, 'fa fa-tasks', 'Project Management', 'Providing you with better control and visibility of all jobs and staff from the office.\r\n\r\nProject management made easy! View everything you need to in relation to the many jobs you are managing at a glance. Assign jobs and tasks from the office and track timelines in real-time.'),
(6, 'fa fa-heartbeat', 'Health and Safety', 'Streamline your health and safety processes and documentation via our app-based solution. \r\n\r\nHelping you to drive more efficient health and safety processes as dictated by you.'),
(7, 'fa fa-clock-o', 'Timesheets', 'With real-time tracking capabilities, you can now feel confident when it comes to tracking hours spent on jobs.\r\n\r\nSay goodbye to lost pieces of paper scribbled with hours and complete the process through our easy-to-use app. Managers can then easily view and approve time and job sheet information. The capabilities are virtually endless.'),
(8, 'fa fa-file-text-o', 'Quoting', 'Mobilising and standardising quoting – quote instantly in the field and send directly to the client in real-time.\r\n\r\nStreamline your quoting processes while giving you the ability to link to your product lists and look-up products through drop down lists making quoting more accurate and efficient.'),
(9, 'fa fa-shopping-cart', 'Purchase Orders', 'Create purchase orders on the spot through our app, saving you time and double-handling.\r\n\r\nKeeping things in order! Allocate, order inventory and have complete visibility of stock levels across the business from one place.'),
(10, 'fa fa-shopping-cart', 'Inventory Management', 'Manage assets and inventory on site, or wherever you are with ease.\r\n\r\nKeeping things in order! Allocate, order inventory and have complete visibility of stock levels across the business from one place.'),
(11, 'fa fa-plane', 'Leave Forms', 'Leave forms can be managed and entered via an app from anywhere, at anytime. \r\n\r\nLeave form data can then be driven back into your accounting software. Managers can be sent notifications on their device for instant authorisation.'),
(12, 'fa fa-money', 'Sales', 'Have increased visibility of customer information, sales targets, leads, with the ability to link calendar appointments to your CRM and reports (with GPS tracking), plus much more.\r\n\r\nGiving you the ability to move data and information more efficiently. We can customise a design specifically for your business needs.'),
(13, 'fa fa-line-chart', 'Reporting', 'At a glance, view profit lost or made on all jobs, plus much more in real-time.\r\n\r\nView well designed, clear reports giving you greater transparency and increased insights across your business so you can stay ahead of the game.'),
(14, 'fa fa-file-excel-o', 'Invoicing', 'We can provide greater efficiency around invoicing, where lost timesheets, invoices and so on are a thing of the past. \r\n\r\nInvoicing made easy! Our easy-to-use app can direct the data of your choice to your accounting software.'),
(15, 'fa fa-compass', 'GPS Tracking', 'Have better visibility of your fleet’s location at all times plus more.\r\n\r\nOur app can give you accurate data that is updated with your fleets location on the spot. This data can then link to timesheets so you can view exactly how much time is being spent on a job or project.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogCategory`
--
ALTER TABLE `blogCategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogQuestions`
--
ALTER TABLE `blogQuestions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `blogSubList`
--
ALTER TABLE `blogSubList`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questionId` (`questionId`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blogCategory`
--
ALTER TABLE `blogCategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blogQuestions`
--
ALTER TABLE `blogQuestions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `blogSubList`
--
ALTER TABLE `blogSubList`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogQuestions`
--
ALTER TABLE `blogQuestions`
  ADD CONSTRAINT `blogQuestions_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `blogCategory` (`id`);

--
-- Constraints for table `blogSubList`
--
ALTER TABLE `blogSubList`
  ADD CONSTRAINT `blogSubList_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `blogQuestions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
