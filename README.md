## 项目测试社区

## 资料
[Spring Document](https://spring.io/guides)

[Spring Web](https://spring.io/guides/gs/serving-web-content/)

[ES Community](https://elasticsearch.cn/)

[Bootstrap Document](https://v3.bootcss.com/getting-started/)

[GitHub OAth Document](https://developer.github.com/apps/building-github-apps/creating-a-github-app/)

## 工具
[Git](https://git-scm.com/download)

[Visual Paradigm](https://www.visual-paradigm.com/cn/)

## 脚本
```sql
create table USER
(
    ID INTEGER default () auto_increment,
    ACCOUNT_ID VARCHAR(100),
    NAME VARCHAR(50),
    TOKEN VARCHAR(36),
    GMT_CREATE BIGINT,
    GMT_MODIFIED BIGINT,
    constraint USER_PK
        primary key (ID)
);
```
```sql
create table question
(
    id int auto_increment,
    title VARCHAR(50),
    description text,
    gmt_create BIGINT,
    gmt_modified BIGINT,
    creator int,
    comment_count int default 0,
    view_count int default 0,
    like_count int default 0,
    tag VARCHAR(256),
    constraint question_pk
        primary key (id)
);
```
```sql
create table comment
(
	id BIGINT auto_increment,
	parent_id BIGINT not null,
	type int not null,
	commentator int not null,
	gmt_create BIGINT not null,
	gmt_modified BIGINT not null,
	like_count BIGINT default 0,
	constraint comment_pk
		primary key (id)
);
```

````bash
mvn flyway:migrate
mvn -Dmybatis.generator.overwrite=true mybatis-generator:generate
````