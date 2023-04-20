CREATE OR REPLACE FUNCTION public.sp_person_update(person_id bigint, person_name character varying DEFAULT NULL::character varying, person_birthday date DEFAULT NULL::date, person_email character varying DEFAULT NULL::character varying, person_phone character varying DEFAULT NULL::character varying) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
	declare
		v_person_id				alias for person_id			;
		v_person_name			alias for person_name		;
		v_person_birthday		alias for person_birthday	;
		v_person_email			alias for person_email		;
		v_person_phone			alias for person_phone		;
	BEGIN
	update person p 
	set
		   person_name 	   = v_person_name,
		   person_birthday = v_person_birthday,
		   person_email	   = v_person_email,
		   person_phone    = v_person_phone
	where v_person_id = p.person_id;
	return true;
	END;
$$;


ALTER FUNCTION public.sp_person_update(person_id bigint, person_name character varying, person_birthday date, person_email character varying, person_phone character varying) OWNER TO viganmustafa;
