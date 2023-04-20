--
-- viganmustafaQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2023-03-28 00:09:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 214 (class 1259 OID 16627)
-- Name: order; Type: TABLE; Schema: public; Owner: viganmustafa
--

CREATE TABLE public."order" (
    order_id bigint NOT NULL,
    product_id bigint,
    person_id bigint NOT NULL,
    datetime_created timestamp with time zone,
    datetime_deleted timestamp with time zone,
    order_detail_id bigint NOT NULL
);


ALTER TABLE public."order" OWNER TO viganmustafa;

--
-- TOC entry 220 (class 1259 OID 24811)
-- Name: order_details; Type: TABLE; Schema: public; Owner: viganmustafa
--

CREATE TABLE public.order_details (
    order_details_id bigint NOT NULL,
    order_id bigint,
    product_id bigint
);


ALTER TABLE public.order_details OWNER TO viganmustafa;

--
-- TOC entry 219 (class 1259 OID 24810)
-- Name: order_details_order_details_id_seq; Type: SEQUENCE; Schema: public; Owner: viganmustafa
--

CREATE SEQUENCE public.order_details_order_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_details_order_details_id_seq OWNER TO viganmustafa;

--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 219
-- Name: order_details_order_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: viganmustafa
--

ALTER SEQUENCE public.order_details_order_details_id_seq OWNED BY public.order_details.order_details_id;


--
-- TOC entry 213 (class 1259 OID 16626)
-- Name: order_order_id_seq; Type: SEQUENCE; Schema: public; Owner: viganmustafa
--

CREATE SEQUENCE public.order_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_order_id_seq OWNER TO viganmustafa;

--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 213
-- Name: order_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: viganmustafa
--

ALTER SEQUENCE public.order_order_id_seq OWNED BY public."order".order_id;


--
-- TOC entry 210 (class 1259 OID 16617)
-- Name: person; Type: TABLE; Schema: public; Owner: viganmustafa
--

CREATE TABLE public.person (
    person_id bigint NOT NULL,
    person_name character varying(150) NOT NULL,
    person_birthday date,
    datetime_created timestamp with time zone,
    datetime_deleted timestamp with time zone,
    person_category_id bigint,
    person_email character varying(50),
    person_phone character varying(20),
    status character(1),
    password character varying(255) NOT NULL
);


ALTER TABLE public.person OWNER TO viganmustafa;

--
-- TOC entry 216 (class 1259 OID 16632)
-- Name: person_category; Type: TABLE; Schema: public; Owner: viganmustafa
--

CREATE TABLE public.person_category (
    person_category_id bigint NOT NULL,
    person_category_name character varying(50) NOT NULL
);


ALTER TABLE public.person_category OWNER TO viganmustafa;

--
-- TOC entry 215 (class 1259 OID 16631)
-- Name: person_category_person_category_id_seq; Type: SEQUENCE; Schema: public; Owner: viganmustafa
--

CREATE SEQUENCE public.person_category_person_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_category_person_category_id_seq OWNER TO viganmustafa;

--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 215
-- Name: person_category_person_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: viganmustafa
--

ALTER SEQUENCE public.person_category_person_category_id_seq OWNED BY public.person_category.person_category_id;


--
-- TOC entry 209 (class 1259 OID 16616)
-- Name: person_person_id_seq; Type: SEQUENCE; Schema: public; Owner: viganmustafa
--

CREATE SEQUENCE public.person_person_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_person_id_seq OWNER TO viganmustafa;

--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 209
-- Name: person_person_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: viganmustafa
--

ALTER SEQUENCE public.person_person_id_seq OWNED BY public.person.person_id;


--
-- TOC entry 212 (class 1259 OID 16622)
-- Name: product; Type: TABLE; Schema: public; Owner: viganmustafa
--

CREATE TABLE public.product (
    product_id bigint NOT NULL,
    product_name character varying(150) NOT NULL,
    datetime_created timestamp with time zone,
    datetime_deleted timestamp with time zone,
    product_price numeric(50,2),
    product_category_id bigint,
    status character(1),
    product_image bytea
);


ALTER TABLE public.product OWNER TO viganmustafa;

--
-- TOC entry 218 (class 1259 OID 16637)
-- Name: product_category; Type: TABLE; Schema: public; Owner: viganmustafa
--

CREATE TABLE public.product_category (
    product_category_id bigint NOT NULL,
    product_category_name character varying(50)
);


ALTER TABLE public.product_category OWNER TO viganmustafa;

--
-- TOC entry 217 (class 1259 OID 16636)
-- Name: product_category_product_category_id_seq; Type: SEQUENCE; Schema: public; Owner: viganmustafa
--

CREATE SEQUENCE public.product_category_product_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_category_product_category_id_seq OWNER TO viganmustafa;

--
-- TOC entry 3368 (class 0 OID 0)
-- Dependencies: 217
-- Name: product_category_product_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: viganmustafa
--

ALTER SEQUENCE public.product_category_product_category_id_seq OWNED BY public.product_category.product_category_id;


--
-- TOC entry 211 (class 1259 OID 16621)
-- Name: product_product_id_seq; Type: SEQUENCE; Schema: public; Owner: viganmustafa
--

CREATE SEQUENCE public.product_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_product_id_seq OWNER TO viganmustafa;

--
-- TOC entry 3369 (class 0 OID 0)
-- Dependencies: 211
-- Name: product_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: viganmustafa
--

ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;


--
-- TOC entry 3200 (class 2604 OID 16630)
-- Name: order order_id; Type: DEFAULT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public."order" ALTER COLUMN order_id SET DEFAULT nextval('public.order_order_id_seq'::regclass);


--
-- TOC entry 3203 (class 2604 OID 24814)
-- Name: order_details order_details_id; Type: DEFAULT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.order_details ALTER COLUMN order_details_id SET DEFAULT nextval('public.order_details_order_details_id_seq'::regclass);


--
-- TOC entry 3198 (class 2604 OID 16620)
-- Name: person person_id; Type: DEFAULT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.person ALTER COLUMN person_id SET DEFAULT nextval('public.person_person_id_seq'::regclass);


--
-- TOC entry 3201 (class 2604 OID 16635)
-- Name: person_category person_category_id; Type: DEFAULT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.person_category ALTER COLUMN person_category_id SET DEFAULT nextval('public.person_category_person_category_id_seq'::regclass);


--
-- TOC entry 3199 (class 2604 OID 16625)
-- Name: product product_id; Type: DEFAULT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);


--
-- TOC entry 3202 (class 2604 OID 16640)
-- Name: product_category product_category_id; Type: DEFAULT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.product_category ALTER COLUMN product_category_id SET DEFAULT nextval('public.product_category_product_category_id_seq'::regclass);


--
-- TOC entry 3215 (class 2606 OID 24816)
-- Name: order_details order_details_pk; Type: CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pk PRIMARY KEY (order_details_id);


--
-- TOC entry 3209 (class 2606 OID 16650)
-- Name: order order_pk; Type: CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pk PRIMARY KEY (order_id);


--
-- TOC entry 3211 (class 2606 OID 16648)
-- Name: person_category person_category_pk; Type: CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.person_category
    ADD CONSTRAINT person_category_pk PRIMARY KEY (person_category_id);


--
-- TOC entry 3205 (class 2606 OID 16642)
-- Name: person person_pk; Type: CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pk PRIMARY KEY (person_id);


--
-- TOC entry 3213 (class 2606 OID 16646)
-- Name: product_category product_category_pk; Type: CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT product_category_pk PRIMARY KEY (product_category_id);


--
-- TOC entry 3207 (class 2606 OID 16644)
-- Name: product product_pk; Type: CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pk PRIMARY KEY (product_id);


--
-- TOC entry 3218 (class 2606 OID 16661)
-- Name: order order_fk; Type: FK CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_fk FOREIGN KEY (person_id) REFERENCES public.person(person_id);


--
-- TOC entry 3219 (class 2606 OID 16666)
-- Name: order order_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_fk_1 FOREIGN KEY (product_id) REFERENCES public.product(product_id);


--
-- TOC entry 3216 (class 2606 OID 16651)
-- Name: person person_fk; Type: FK CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_fk FOREIGN KEY (person_category_id) REFERENCES public.person_category(person_category_id);


--
-- TOC entry 3217 (class 2606 OID 16656)
-- Name: product product_fk; Type: FK CONSTRAINT; Schema: public; Owner: viganmustafa
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_fk FOREIGN KEY (product_category_id) REFERENCES public.product_category(product_category_id);


-- Completed on 2023-03-28 00:09:53

--
-- viganmustafaQL database dump complete
--

