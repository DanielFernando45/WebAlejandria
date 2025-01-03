import React, { useEffect, useState } from "react";
import LayoutApp from "../layout/LayoutApp";
import CarouselMarquee from "../components/CarouselMarquee";

// IMAGENES Y ICONOS
import hexagon from "../assets/icons/hexagon.png";
import star from "../assets/icons/star.svg";
import comillas from "../assets/icons/comillas.png";
import capa_03 from "../assets/icons/capa_03.png";
import icono_contacto_01 from "../assets/icons/icono-contacto_01.svg";
import icono_contacto_02 from "../assets/icons/icono-contacto_02.svg";
import icono_contacto_03 from "../assets/icons/icono-contacto_03.svg";

import capa_01 from "../assets/images/capa_01.png";
import main_background from "../assets/images/banners/backgroundMain.webp";

import Aos from "aos";
import "aos/dist/aos.css";
import { ImQuotesLeft } from "react-icons/im";

const Home = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const [formInputs, setFormInputs] = useState({
    nombre: "",
    servicio: "",
    carrera: "",
    universidad: "",
  });

  const handleChange = (event) => {
    setFormInputs((lastValues) => ({
      ...lastValues,
      [event.target.id]: event.target.value,
    }));
  };

  const handleForm = (event) => {
    event.preventDefault();
    if (
      [
        formInputs.nombre.trim(),
        formInputs.servicio.trim(),
        formInputs.carrera.trim(),
        formInputs.universidad.trim(),
      ].some((field) => field === "")
    ) {
      alert("Ingrese todos los campos");
      return;
    }

    let mensaje = `Hola soy *${formInputs.nombre}*, soy de la carrera *${formInputs.carrera}* de la universidad *${formInputs.universidad}*  y deseo cotizar y adquirir el servicio de *${formInputs.servicio}*`;
    const numero = "922060146";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <LayoutApp>
      <main className="overflow-hidden">
        <section className="h-[500px] sm:h-[600px] md:h-[800px] 1xl:h-[1117px] relative flex 1xl:block ">
          {/* FORMULARIO */}
          <div className="main_background_02 absolute top-0 left-0 w-full h-full"></div>
          <img
            src={main_background}
            className="block w-full h-full object-cover "
            alt="main_background"
            decoding="async"
          />
          <div className="absolute top-[218px] 1xl:right-[80px] hidden 1xl:block 1xl:w-[600px] 4xl:w-[700px]">
            <form
              data-aos="zoom-in"
              data-aos-duration="700"
              onSubmit={handleForm}
              className="w-full space-y-[20px]"
            >
              <input
                className="block w-full border px-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient 1xl:h-[60px] 4xl:h-[70px]"
                type="text"
                required={true}
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                onChange={handleChange}
              />
              <select
                name="option_service"
                id="servicio"
                className="block w-full border p-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold font-bold input_gradient 1xl:h-[60px] 4xl:h-[70px]"
                defaultValue=""
                required
                onChange={handleChange}
              >
                <option value="" disabled defaultValue>
                  Selecciona un servico
                </option>
                <option value="Tesis">Tesis</option>
                <option value="TSP">TSP</option>
                <option value="Artículo académico">Artículo académico</option>
                <option value="Plan de negocio">Plan de negocio</option>
              </select>
              <input
                className="block w-full border px-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient 1xl:h-[60px] 4xl:h-[70px]"
                type="text"
                name="carrera"
                required={true}
                id="carrera"
                placeholder="Carreras"
                onChange={handleChange}
              />
              <input
                className="block w-full border px-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient 1xl:h-[60px] 4xl:h-[70px]"
                type="text"
                name="universidad"
                required={true}
                id="universidad"
                placeholder="Universidad"
                onChange={handleChange}
              />
              <input
                className="block w-full border px-4 border-gray-300 outline-none rounded-xl placeholder:text-black placeholder:font-bold input_gradient 1xl:h-[60px] 4xl:h-[70px]"
                type="text"
                required={true}
                placeholder="Whatsapp "
              />
              <button
                type="submit"
                className="block w-full py-3 bg-[#0CB2D5] uppercase text-white font-bold 4xl:text-[22px] rounded-[50px] mt-[30px]"
              >
                ¡Da el primer paso!
              </button>
            </form>
          </div>
          {/* FORMULARIO */}

          <p
            data-aos="zoom-in-up"
            className="font-bold text-[16px] sm:text-[30px] lg:text-[40px] 1xl:text-[50px] 4xl:text-[60px] lg:w-[714px] 1xl:w-[1020px] 4xl:w-[1224px] absolute lg:bottom-[162px] bottom-[50px] ml-[18px] sm:ml-[46px] lg:ml-[80px] 1xl:ml-[80px] 4xl:ml-[104px] text-white uppercase leading-tight"
          >
            Alejandría,
            <span className="block font-medium text-[14px] sm:text-[25px] lg:text-[35px] 1xl:text-[50px]">
              A la altura de tus grandes metas
            </span>
          </p>
        </section>

        <div className="gradient pt-20">
          {/*  */}
          <section className="block 1xl:hidden">
            <div className="w-[90%] mn:w-[338px] sm:w-[520px] lg:w-[740px] mx-auto">
              <form
                data-aos="zoom-in"
                data-aos-duration="700"
                onSubmit={handleForm}
                className="w-full space-y-6"
              >
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  placeholder="Nombre"
                  onChange={handleChange}
                />
                <select
                  name="option_service"
                  id="servicio"
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  defaultValue=""
                  required
                  onChange={handleChange}
                >
                  <option value="" disabled defaultValue>
                    Selecciona un servico
                  </option>
                  <option value="Tesis">Tesis</option>
                  <option value="TSP">TSP</option>
                  <option value="Artículo académico">Artículo académico</option>
                  <option value="Plan de negocio">Plan de negocio</option>
                </select>
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="carrera"
                  id="carrera"
                  required
                  placeholder="carreras"
                  onChange={handleChange}
                />
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  name="universidad"
                  id="universidad"
                  required
                  placeholder="universidad"
                  onChange={handleChange}
                />
                <input
                  className="block w-full border sm:p-4 px-4 border-gray-300 outline-none placeholder:text-black placeholder:font-bold font-bold input_gradient h-[40px] sm:h-[60px] lg:h-[60px] text-[13px] lg:text-base"
                  type="text"
                  required
                  placeholder="Whatsapp "
                />
                <button
                  type="submit"
                  className="block w-full py-3 bg-[#0CB2D5] text-white font-bold text-[14px] sm:text-[20px] lg:text-[22px] rounded-full"
                >
                  ¡Da el primer paso!
                </button>
              </form>
            </div>
          </section>
          {/*  */}

          <div className="w-[90%] sm:w-[520px] lg:w-[740px] 1xl:w-[1210px] 4xl:w-[1522px] flex flex-col gap-y-[60px] 1xl:flex-row justify-between 2xl:h-[626px] mx-auto relative ml-[18px] sm:ml-[40px] lg:ml-[80px]">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-duration="700"
              className="flex flex-col justify-center mn:w-[311px] sm:w-[309px] lg:w-[380px] 4xl:w-[692px] space-y-4 mt-[100px] lg:mt-[200px] 1xl:mt-0"
            >
              <h3 className="uppercase sm:text-[25px] lg:text-[30px] 4xl:text-[35px] text-[#0CB2D5] font-semibold">
                Sobre nosotros
              </h3>
              <p className="text-white sm:text-[20px] lg:text-[25px] 4xl:text-[45px] font-bold leading-tight text-justify">
                Somos líderes en el mercado y contamos con una amplia
                experiencia que nos avala.
              </p>
            </div>
            <div data-aos="fade-up" className="1xl:w-[770px] 3xl:h-[626px]">
              <div className="relative mx-auto w-[120px] h-[140px] sm:w-[154px] sm:h-[180px] lg:w-[250px] lg:h-[293px] 4xl:w-[250px] 4xl:h-[293px]">
                <img
                  src={hexagon}
                  className="w-full h-full"
                  alt="hexagon-icon"
                  draggable="false"
                />
                <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-[35px] lg:text-[50px] 4xl:text-[60px] font-bold">
                    +1500
                  </p>
                  <p className="text-[10px] lg:text-[18px] 4xl:text-[20px] uppercase font-bold lg:leading-[24.38px]">
                    casos de éxito
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="relative mx-auto w-[120px] h-[140px] sm:w-[154px] sm:h-[180px] lg:w-[250px] lg:h-[293px] 4xl:w-[250px] 4xl:h-[293px]">
                  <img
                    src={hexagon}
                    className="w-full h-full"
                    alt="hexagon-icon"
                  />
                  <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="flex items-center">
                      <p className="text-[35px] lg:text-[50px] 4xl:text-[60px] font-bold">
                        +10
                      </p>
                      <p className="rotate-[270deg] text-[10px] lg:text-[14px]  uppercase font-medium">
                        de años
                      </p>
                    </div>
                    <p className="text-[10px] lg:text-[18px] 4xl:text-[20px] uppercase font-bold lg:leading-[24.38px]">
                      Consultoría Académica
                    </p>
                  </div>
                </div>
                <div className="relative mx-auto w-[120px] h-[140px] sm:w-[154px] sm:h-[180px] lg:w-[250px] lg:h-[293px] 4xl:w-[250px] 4xl:h-[293px]">
                  <img
                    className=" w-full h-full"
                    src={hexagon}
                    alt="hexagon-icon"
                  />
                  <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="">
                      <p className="text-[35px] lg:text-[50px] 4xl:text-[60px] font-bold">
                        +20
                      </p>
                    </div>
                    <p className="text-[10px] lg:text-[18px] 4xl:text-[20px] uppercase font-bold lg:leading-[24.38px]">
                      Empresas que nos respaldan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={capa_01}
              className="absolute hidden xl:block -mt-[150px] z-10 left-0  w-[300px] h-[500px]"
              alt="capa-image"
            />
          </div>

          {/* Alianzas */}
          <section className="lg:w-[762px] 1xl:w-[1215px] 4xl:w-[1425px] mx-auto mt-[239px] ">
            <h3 className="text-center text-[18px] sm:text-[25px] lg:text-[30px] 4xl:text-[35px] text-[#0CB2D5] font-medium uppercase">
              Nuestras Alianzas
            </h3>
            <p className="text-white text-center text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[45px] font-bold">
              Colaboraciones que potencian tu éxito
            </p>
          </section>

          <div className="w-[90%] mx-auto mt-[40px] lg:mt-[140px]">
            <CarouselMarquee />
          </div>
          {/* Alianzas */}

          {/* TESTIMONIOS */}
          <section className="mn:w-[340px] sm:w-[520px] mt-[289px] lg:w-[720px] 1xl:w-[1400px] 4xl:w-[1522px] mx-auto">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-duration="700"
              className="mb-[50px] lg:mb-[100px] pl-[10px] mn:pl-0"
            >
              <h3 className="text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[30px] 4xl:text-[35px] font-semibold uppercase mb-5">
                Clientes satisfechos
              </h3>
              <p className="text-[14px] sm:text-[20px] lg:text-[25px] 4xl:text-[45px] text-white font-bold leading-none">
                Testimonios de quienes confiaron en Alejandría.
              </p>
            </div>

            <div className="grid 1xl:grid-cols-2 mx-auto w-[80%]  mn:w-[340px] sm:w-[520px] lg:w-[740px] 1xl:w-[1280px] 4xl:w-[1522px] gap-x-8 gap-y-[100px]">
              {/*  */}
              <div className="space-y-10">
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  className="gradiente_testimonio flex justify-center items-center rounded-3xl h-[200px] sm:w-[450px] sm:h-[250px] lg:w-[600px] lg:h-[300px] 1xl:w-[600px] 1xl:h-[300px] 4xl:w-[720px] 4xl:h-[400px] lg:gap-x-[20px]"
                >
                  <div className="flex gap-x-[2px] mn:gap-x-[10px] h-[150px] sm:h-[150px] lg:h-[180px] lg:w-[544px] 1xl:w-[484px] 4xl:w-[583px] 1xl:h-[180px] 4xl:h-[277px] 1xl:gap-x-[10px] lg:gap-x-[10px]">
                    <p className="overflow-visible">
                      <ImQuotesLeft className="quote overflow-visible size-[20px] sm:size-[30px] 1xl:size-[40px] lg:size-[30px] 4xl:size-[40px]" />
                    </p>
                    <div className="flex flex-col justify-between">
                      <p className="text-md w-[90%] mn:w-[200px] sm:w-[300px] lg:w-[484px] 1xl:w-auto text-[12px] mn:text-[14px] sm:text-[14px] lg:text-[20px] 1xl:text-[20px] 4xl:text-[30px] text-white font-bold leading-tight back_comillas relative">
                        Alejandría me dio el acompañamiento que necesitaba para
                        avanzar con confianza en mi investigación. Su apoyo fue
                        clave para lograr mis objetivos{" "}
                        <span className="relative">
                          académicos.
                          <span className="absolute rotate-180 -right-2 lg:-right-5 translate-x-full">
                            {" "}
                            <ImQuotesLeft className="quote overflow-visible size-[20px] sm:size-[30px] 1xl:size-[40px] lg:size-[30px] 4xl:size-[40px]" />
                          </span>
                        </span>
                      </p>
                      <div className="flex gap-x-4">
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  className="flex h-[52px] sm:h-[50px] lg:h-[95px] 4xl:h-[114px]"
                >
                  <img src={capa_03} className="h-full" alt="capa-03" />
                  <div className="leading-tight ml-[10px] mn:ml-[40px] flex flex-col justify-between">
                    <p className="text-white text-[16px] lg:text-[30px] 4xl:text-[35px] font-bold">
                      Sustento exitoso
                    </p>
                    <p className="text-[#0CB2D5] text-[13px] lg:text-[25px] 4xl:text-[25px] font-semibold">
                      Universidad de Lima
                    </p>
                    <p className="text-[#0CB2D5] text-[13px] lg:text-[25px] 4xl:text-[25px] font-bold">
                      Mónica Guevara{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="space-y-10">
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  className="gradiente_testimonio flex justify-center items-center rounded-3xl h-[200px] sm:w-[450px] sm:h-[250px] lg:w-[600px] lg:h-[300px] 1xl:w-[600px] 1xl:h-[300px] 4xl:w-[720px] 4xl:h-[400px] lg:gap-x-[20px]"
                >
                  <div className="flex gap-x-[2px] mn:gap-x-[10px] h-[150px] sm:h-[150px] lg:h-[180px] lg:w-[544px] 1xl:w-[484px] 4xl:w-[583px] 1xl:h-[180px] 4xl:h-[277px] 1xl:gap-x-[10px] lg:gap-x-[10px]">
                    <p className="overflow-visible">
                      <ImQuotesLeft className="quote overflow-visible size-[20px] sm:size-[30px] 1xl:size-[40px] lg:size-[30px] 4xl:size-[40px]" />
                    </p>
                    <div className="flex flex-col justify-between">
                      <p className="text-md mn:w-[240px] sm:w-[300px] lg:w-[450px] text-[12px] mn:text-[14px] sm:text-[14px] lg:text-[20px] 1xl:text-[20px] 4xl:text-[30px] text-white font-bold leading-tight not-italic relative">
                        La dedicación y profesionalismo del equipo fueron
                        esenciales para alcanzar mis metas académicas. Superaron
                        mis{" "}
                        <span className="relative">
                          expectativas.
                          <span className="absolute rotate-180 -right-2 lg:-right-5 translate-x-full">
                            {" "}
                            <ImQuotesLeft className="quote overflow-visible size-[20px] sm:size-[30px] 1xl:size-[40px] lg:size-[30px] 4xl:size-[40px]" />
                          </span>
                        </span>
                      </p>
                      <div className="flex gap-x-4">
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                        <img
                          className="w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] 4xl:w-[37px] 4xl:h-[38px]"
                          src={star}
                          alt="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="flex h-[52px] sm:h-[50px] lg:h-[95px] 4xl:h-[114px]"
                >
                  <img src={capa_03} className="h-full" alt="capa-03" />
                  <div className="leading-tight ml-[10px] mn:ml-[40px] flex flex-col justify-between">
                    <p className="text-white text-[16px] lg:text-[30px] 4xl:text-[35px] font-bold">
                      Alianza estratégica
                    </p>
                    <p className="text-[#0CB2D5] text-[13px] lg:text-[25px] 4xl:text-[25px] font-semibold">
                      Universidad UTP
                    </p>
                    <p className="text-[#0CB2D5] text-[13px] lg:text-[25px] 4xl:text-[25px] font-bold">
                      Renzo Mejía
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </section>
          {/* TESTIMONIOS */}

          {/* BLUR */}

          {/* BLUR */}

          {/* CONTACTANOS */}
          <div className="bg-white relative mt-[400px] mb-[213px] ">
            <div
              className={`back_blur absolute h-[400px] -top-[400px] w-full z-20`}
            ></div>

            <div className="lg:w-[736px] 1xl:w-[1270px] 4xl:w-[1516px] mx-auto">
              <h2
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="700"
                className="text-[#0CB2D5] text-[18px] sm:text-[25px] lg:text-[35px] 4xl:text-[35px] font-semibold uppercase text-center"
              >
                Contáctanos
              </h2>

              {/* CAJAS CONTACTO */}
              <div className="flex flex-col items-center 1xl:flex-row 4xl:h-[249px] gap-x-[40px] mt-[110px] mb-[100px] gap-y-8">
                <div className="flex gap-x-[10px] mn:gap-x-[40px]">
                  <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="700"
                    className="contacto_box_shadow rounded-[25px] w-[140px] h-[145px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[240px] 1xl:w-[280px] 1xl:h-[220px] 4xl:w-[349px] 4xl:h-[240px] flex flex-col items-center justify-center gap-y-[10px] sm:gap-y-[30px] text-white bg-[#1C1C34]"
                  >
                    <figure>
                      <img
                        className="w-[23px] h-[25px] sm:w-auto sm:h-auto"
                        src={icono_contacto_01}
                        alt="icono-telefono"
                      />
                    </figure>
                    <div className="w-[121px]">
                      <p className="text-[16px] sm:text-[20px] 4xl:text-[25px] text-center font-bold">
                        Teléfono
                      </p>
                      <div className="text-[14px] sm:text-[16px] 4xl:text-[20px] flex justify-evenly font-semibold">
                        <span>922</span>
                        <span>060</span>
                        <span>146</span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-duration="700"
                    className="contacto_box_shadow rounded-[25px] w-[140px] h-[145px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[240px] 1xl:w-[280px] 1xl:h-[220px] 4xl:w-[349px] 4xl:h-[240px] flex flex-col items-center justify-center gap-y-[10px] sm:gap-y-[30px]"
                  >
                    <img
                      className="w-[23px] h-[25px] sm:w-auto sm:h-auto"
                      src={icono_contacto_02}
                      alt="icono-correo"
                    />
                    <div>
                      <p className="text-[16px] sm:text-[20px] 1xl:text-[20px] 4xl:text-[25px] text-center font-bold">
                        Correo
                      </p>
                      <p className="mn:text-[14px] sm:text-[16px] w-[130px] mn:w-[144px] sm:w-[170px] lg:w-[170px] 1xl:w-auto text-center 1xl:text-[13px] 4xl:text-[16px] font-semibold break-words">
                        clientes@alejandriaconsultora.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-[10px] mn:gap-x-[40px]">
                  <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="700"
                    className="contacto_box_shadow rounded-[25px] w-[140px] h-[145px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[240px] 1xl:w-[280px] 1xl:h-[220px] 4xl:w-[349px] 4xl:h-[240px] flex flex-col items-center justify-center gap-y-[10px] sm:gap-y-[30px] text-white bg-[#1C1C34]"
                  >
                    <img
                      className="w-[23px] h-[25px] sm:w-auto sm:h-auto"
                      src={icono_contacto_03}
                      alt="icono_contacto_03"
                    />
                    <div className="">
                      <p className="sm:text-[20px] 4xl:text-[25px] text-center font-bold">
                        Lima
                      </p>
                      <div className="flex justify-evenly font-semibold">
                        <p className="text-[14px] sm:text-[16px] 1xl:text-[16px] 4xl:text-[20px] w-[144px] sm:w-[170px] lg:w-[170px] 1xl:w-auto break-words text-center">
                          C. Enrique Villar 159, Ofic. 201
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-duration="700"
                    className="contacto_box_shadow rounded-[25px] w-[140px] h-[145px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[240px] 1xl:w-[280px] 1xl:h-[220px] 4xl:w-[349px] 4xl:h-[240px] flex flex-col items-center justify-center sm:gap-y-[30px] gap-y-[10px]"
                  >
                    <img
                      className="w-[23px] h-[25px] sm:w-auto sm:h-auto"
                      src={icono_contacto_03}
                      alt="icono_contacto_03"
                    />
                    <div className="">
                      <p className="sm:text-[20px] 4xl:text-[25px] text-center font-bold">
                        Chiclayo
                      </p>
                      <p className="text-[14px] sm:text-[16px] 4xl:text-[20px] font-semibold w-[144px] sm:w-[170px] lg:w-[170px] 1xl:w-auto break-words text-center">
                        C. Torres Paz Nº 280, Ofic. 206
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAPA */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7803.033579289644!2d-77.03623810132267!3d-12.0767320240838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f2f78e64eb%3A0xf924bb7130b86f09!2sC.%20Enrique%20Villar%20159%2C%20Lima%2015046!5e0!3m2!1ses!2spe!4v1735248629813!5m2!1ses!2spe"
                width="600"
                height="650"
                className="mn:w-[340px] h-[222px] sm:w-[524px] sm:h-[222px] lg:w-full lg:h-[400px] mx-auto 1xl:[500px] rounded-3xl border "
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* MAPA */}
            </div>
            {/* CAJAS CONTACTO */}
          </div>
          {/* CONTACTANOS */}
        </div>
      </main>
    </LayoutApp>
  );
};

export default Home;
