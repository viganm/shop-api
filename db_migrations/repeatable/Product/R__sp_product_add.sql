CREATE OR REPLACE FUNCTION public.sp_product_add(product_name character varying, product_price numeric, product_category_id bigint, product_image bytea) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
declare 
	v_product_name			alias for product_name;
	v_product_price			alias for product_price;
	v_product_category_id	alias for product_category_id;
	v_product_image			alias for product_image;
BEGIN
	insert into product (product_name, 
						 product_price, 
						 product_category_id,
						 product_image,
						 status,
						 datetime_created)
		 		 values (v_product_name,
		 		 		 v_product_price,
		 		 		 v_product_category_id,
		 		 		 v_product_image,
		 		 		 'A',
		 		 		 current_timestamp
		 				);
	return true;
END;
$$;


ALTER FUNCTION public.sp_product_add(product_name character varying, product_price numeric, product_category_id bigint, product_image bytea) OWNER TO viganmustafa;
