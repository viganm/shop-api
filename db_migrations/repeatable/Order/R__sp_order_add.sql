CREATE OR REPLACE FUNCTION sp_order_add(
  person_id bigint,
  address varchar,
  postal_code varchar,
  city varchar,
  country varchar,
  product_ids bigint[]
)
RETURNS bool
LANGUAGE plpgsql
AS $function$
DECLARE
  v_person_id     alias for person_id;
  v_address       alias for address;
  v_postal_code   alias for postal_code;
  v_city          alias for city;
  v_country       alias for country;
  v_product_id    alias for product_ids;
  v_product_count integer;
BEGIN
  INSERT INTO "order" (person_id, address, postal_code, city, country)
  VALUES (v_person_id, v_address, v_postal_code, v_city, v_country)
  RETURNING order_id INTO v_product_count;

  FOR i IN 1..array_length(v_product_id, 1) LOOP
    INSERT INTO order_product (order_id, product_id)
    VALUES (v_product_count, v_product_id[i]);
  END LOOP;

  RETURN true;
END;
$function$;
