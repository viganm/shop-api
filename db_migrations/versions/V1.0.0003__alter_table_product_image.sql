alter table product_images
 add column file_name varchar(1000),
 add column file_path varchar(25),
 add column mime_type varchar(25);

 alter table product
drop column product_image;