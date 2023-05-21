 alter table product_images
alter column image set data type varchar
       using image::varchar;