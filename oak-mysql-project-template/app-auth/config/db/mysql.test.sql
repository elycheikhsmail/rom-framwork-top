-- mysql
DROP TABLE IF EXISTS app_auth_user;
CREATE TABLE app_auth_user (
    id int(11) NOT NULL AUTO_INCREMENT,
	username  varchar(100) UNIQUE NOT NULL, 
	password  varchar(100) ,
	 PRIMARY KEY (id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;
 

 