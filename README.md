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
	ID INTEGER default  auto_increment,
	ACCOUNT_ID VARCHAR(100),
	NAME VARCHAR(50),
	TOKEN VARCHAR(36),
	GMT_CREATE BIGINT,
	GMT_MODIFIED BIGINT,
	constraint TABLE_NAME_PK
		primary key (ID)
);
```