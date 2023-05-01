CREATE TABLE public.product_images (
	product_image_id bigserial NOT NULL,
	product_id bigint NOT NULL,
	image bytea NOT NULL
);

ALTER TABLE public.product_images ADD CONSTRAINT product_images_pk PRIMARY KEY (product_image_id);
ALTER TABLE public.product_images ADD CONSTRAINT product_images_fk FOREIGN KEY (product_id) REFERENCES public.product(product_id);
