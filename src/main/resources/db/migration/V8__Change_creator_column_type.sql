alter table QUESTION alter column CREATOR BIGINT default NOT NULL auto_increment;
alter table COMMENT alter column COMMENTATOR BIGINT default NOT NULL auto_increment;