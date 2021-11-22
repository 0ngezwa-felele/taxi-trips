create table taxi(
    id serial not null primary key,
    reg_number varChar(255) not null,
    trips varChar(255) not null
);

create table region(
    id serial not null primary key,
    reg_name varChar(255) not null
);

create table a_route(
    id serial not null primary key,
    route_name varChar(255) not null,
    fare decimal(10,2) not null,
    region_id integer not null, 
    foreign key(region_id) references region(id)
);
create table trip(
    id serial not null primary key,
    taxi_id integer not null,
    a_route_id integer not null,
    foreign key(a_route_id) references a_route(id),
    foreign key(taxi_id) references taxi(id) 
);

insert into region(id, reg_name) values (1, 'Durban');
insert into region(id, reg_name) values (2, 'Cape Town');
insert into region(id, reg_name) values (3, 'Gauteng');




