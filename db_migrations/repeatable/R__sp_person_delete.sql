CREATE OR REPLACE FUNCTION public.sp_person_delete(person_id bigint) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
declare
	v_person_id alias for person_id;
	BEGIN
		update person p
		set status = 'D',
			datetime_deleted = current_timestamp
		where p.person_id = v_person_id;
	return true;
	END;
$$;


ALTER FUNCTION public.sp_person_delete(person_id bigint) OWNER TO viganmustafa;
