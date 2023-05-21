drop function sp_product_add(varchar, numeric, int8);
CREATE OR REPLACE FUNCTION public.sp_product_add(product_name character varying, product_price numeric, product_category_id bigint, image varchar)
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$
declare 
	v_product_name			alias for product_name       ;
	v_product_price			alias for product_price      ;
	v_product_category_id	alias for product_category_id;
    v_image                 alias for image              ;
   
    v_product_id            bigint                       ;
   
	BEGIN
	insert into product (product_name, 
						 product_price, 
						 product_category_id,
						 status,
						 datetime_created)
		 		 values (v_product_name,
		 		 		 v_product_price,
		 		 		 v_product_category_id,
		 		 		 'A',
		 		 		 current_timestamp
		 				);
		 			
	select product_id
      from product p 
     where p.product_name        = v_product_name
       and p.product_price       = v_product_price
       and p.product_category_id = v_product_category_id
      into v_product_id;
	
	insert into product_images (image, product_id)
                        values (v_image, v_product_id);
	return true;
	END;
$function$
;


ALTER FUNCTION public.sp_product_add(product_name character varying, product_price numeric, product_category_id bigint, product_image bytea) OWNER TO viganmustafa;
