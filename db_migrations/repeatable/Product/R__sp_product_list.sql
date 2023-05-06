CREATE OR REPLACE FUNCTION public.sp_product_list()
 RETURNS TABLE(product_id bigint, product_name character varying, product_price numeric, product_category_id bigint, product_image bytea)
 LANGUAGE plpgsql
AS $function$
	BEGIN
	return query (
		select p.product_id, p.product_name, p.product_price, p.product_category_id, pi.image 
		  from product p
	 left join product_images pi
		  	on pi.product_id = p.product_id 
		 where status = 'A'
	);
	END;
$function$
;




ALTER FUNCTION public.sp_product_list() OWNER TO viganmustafa;
