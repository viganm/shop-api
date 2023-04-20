CREATE OR REPLACE FUNCTION public.sp_person_list() RETURNS TABLE(person_id bigint, person_name character varying, person_birthday date, datetime_created timestamp with time zone, datetime_deleted timestamp with time zone, person_category_id bigint, person_email character varying, person_phone character varying, status character)
    LANGUAGE plpgsql
    AS $$
	BEGIN
		return query (
			Select * from person p
			where p.status = 'A'
		);
	END;
$$;


ALTER FUNCTION public.sp_person_list() OWNER TO viganmustafa;
