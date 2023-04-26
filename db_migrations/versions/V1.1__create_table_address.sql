CREATE TABLE public."address" (
    address_id bigint NOT NULL PRIMARY KEY,
    address_name bigint,
    city varchar NOT NULL,
    postal_code bigint NOT NULL,
    street bigint,
    object_number bigint,
    door_number bigint
);