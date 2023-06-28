import React from 'react';
import '../AboutPage/AboutPage.scss'
import burguerImage from'../../assets/images/fondotrabajo.png'

function AboutPage() {
  return (
    <div className='about-container'>
      <img src={burguerImage} alt="Fondo de trabajo" />
      <h1 className='about-title'></h1>
      <p>
        ¡Bienvenido a Burguer Grill Company! En Burguer Grill Company, nuestra
        pasión es crear las hamburguesas más deliciosas y sabrosas que hayas
        probado. Desde nuestros ingredientes frescos y de alta calidad hasta
        nuestras recetas cuidadosamente elaboradas, nos esforzamos por ofrecerte
        una experiencia culinaria única y satisfactoria.</p>
        <p> Nuestro compromiso con
        la calidad comienza con la selección de los ingredientes más frescos y
        de origen local. Trabajamos en estrecha colaboración con proveedores de
        confianza para garantizar que cada hamburguesa que servimos esté hecha
        con los mejores ingredientes. Nuestra carne de res se selecciona
        cuidadosamente y se sazona con nuestras mezclas de especias exclusivas,
        que realzan su sabor natural y jugosidad.</p>
        <p> En Burguer Grill Company,
        también creemos en la variedad y en satisfacer todos los gustos. Por
        eso, ofrecemos una amplia gama de opciones en nuestro menú. Ya sea que
        prefieras una hamburguesa clásica y sencilla, una opción más gourmet con
        ingredientes premium o incluso opciones vegetarianas y veganas, estamos
        seguros de que encontrarás la hamburguesa perfecta que satisfará tus
        antojos. Pero Burguer Grill Company no se trata solo de hamburguesas
        excepcionales. Nuestro compromiso con la excelencia se extiende a todos
        los aspectos de tu experiencia con nosotros.</p>
        <p> Nuestro personal amable y
        atento está listo para recibirte con una sonrisa y brindarte un servicio
        excepcional. Además, nuestro acogedor ambiente y nuestra atención a los
        detalles te harán sentir como en casa mientras disfrutas de tu comida.
        Nos enorgullece ser más que solo una hamburguesería. Queremos ser parte
        de tus momentos especiales y de tus celebraciones. Ya sea que estés
        buscando una cena informal con amigos, una salida familiar o simplemente
        darte un capricho después de un largo día de trabajo, Burguer Grill
        Company es el lugar ideal.</p>
        <p> Te invitamos a explorar nuestro menú y a
        descubrir las deliciosas opciones que tenemos para ofrecerte. Ya sea que
        prefieras una hamburguesa clásica con queso fundido, tocino crujiente y
        nuestra salsa secreta, o una creación personalizada con tus ingredientes
        favoritos, ¡estamos aquí para satisfacer tus deseos culinarios!</p>
        <p> En
        Burguer Grill Company, la satisfacción de nuestros clientes es nuestra
        prioridad número uno. Siempre nos esforzamos por superar tus
        expectativas y brindarte una experiencia inolvidable en cada visita. ¡Te
        esperamos en Burguer Grill Company, donde la pasión por las hamburguesas
        se encuentra con la excelencia culinaria!
      </p>
    </div>
  );
}

export default AboutPage;
