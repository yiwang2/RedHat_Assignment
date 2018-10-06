
CREATE DATABASE IF NOT EXISTS redhatsolution;
USE redhatsolution;

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `active` bigint(5) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `user_role` (
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `task` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `task_description` varchar(400) DEFAULT NULL,
  `task_status` int(11) DEFAULT NULL,
  PRIMARY KEY (`task_id`),
  UNIQUE KEY `task_id_UNIQUE` (`task_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `task_status` (
  `status_id` int(11) NOT NULL,
  `status` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


insert into task_status (status_id, status) values (1, 'Created');
insert into task_status (status_id, status) values (2, 'Running');
insert into task_status (status_id, status) values (3, 'Successed');
insert into task_status (status_id, status) values (4, 'Failed');
insert into task_status (status_id, status) values (5, 'Aborted');

insert into task (task_id, task_description, task_status) values (1, 'red hat task',2);
insert into task (task_id, task_description, task_status) values (2, 'create database',3);
insert into task (task_id, task_description, task_status) values (3, 'create tables',3);
insert into task (task_id, task_description, task_status) values (4, 'insert data',3);
insert into task (task_id, task_description, task_status) values (5, 'apply security',3);
insert into task (task_id, task_description, task_status) values (6, 'create rest client',3);
insert into task (task_id, task_description, task_status) values (7, 'test build',3);
insert into task (task_id, task_description, task_status) values (8, 'test install',3);
insert into task (task_id, task_description, task_status) values (9, 'create task view',3);
insert into task (task_id, task_description, task_status) values (10, 'create task view filter',3);
insert into task (task_id, task_description, task_status) values (11, 'create task view active management',1);

insert into user (email,password,name, last_name, active) values ('lixinandme@gmail.com', 'smc','yi','wang',1);


