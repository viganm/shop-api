CREATE OR REPLACE FUNCTION public.sp_person_add(person_email character varying, password character varying) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
	declare
		v_person_email			alias for person_email;
		v_password				alias for password;
	BEGIN
		insert into person (person_email, password, status, person_category_id, datetime_created)
		values (v_person_email, v_password, 'A', 1, current_timestamp);
	return true;
	END;
$$;


ALTER FUNCTION public.sp_person_add(person_email character varying, password character varying) OWNER TO viganmustafa;