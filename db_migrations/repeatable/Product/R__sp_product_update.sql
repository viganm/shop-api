CREATE OR REPLACE FUNCTION public.sp_product_update(product_id bigint, product_name character varying, product_price numeric, product_category_id bigint) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
declare 
	v_product_id			alias for product_id;
	v_product_name			alias for product_name;
	v_product_price			alias for product_price;
	v_product_category_id	alias for product_category_id;
	BEGIN
		update product p
		   set product_name  		= v_product_name,
		   	   product_price 		= v_product_price,
		   	   product_category_id	= v_product_category_id
		 where p.product_id 		= v_product_id;
	return true;
	END;
$$;


ALTER FUNCTION public.sp_product_update(product_id bigint, product_name character varying, product_price numeric, product_category_id bigint) OWNER TO viganmustafa;

SET default_tablespace = '';

SET default_table_access_method = heap;
