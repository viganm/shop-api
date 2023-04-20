CREATE OR REPLACE FUNCTION public.sp_product_list() RETURNS TABLE(product_id bigint, product_name character varying, product_price numeric, product_category_id bigint, product_image bytea)
    LANGUAGE plpgsql
    AS $$
	BEGIN
	return query (
		select p.product_id, p.product_name, p.product_price, p.product_category_id, p.product_image 
		  from product p
		 where status = 'A'
	);
	END;
$$;


ALTER FUNCTION public.sp_product_list() OWNER TO viganmustafa;
