create table notification
(
    id BIGINT auto_increment,
    notifier BIGINT not null,
    receiver BIGINT not null,
    outerId BIGINT not null,
    type int not null,
    gmt_create BIGINT,
    status int default 0 not null,
    constraint notification_pk
        primary key (id)
);