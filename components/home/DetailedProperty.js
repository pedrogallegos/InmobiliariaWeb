import Image from 'next/image'
import React from 'react'
export default function DetailedProperty () {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href='#'>Página Principal</a></li>
            <li><a href='#'>Frente al mar</a></li>
            <li><a href='#'>Fraccionamiento Residencial del Mayab, Mérida</a></li>
          </ul>
        </nav>
        <div>
          <Image
            src='/assets/estates/casa-moderana-guadalajara-1.png'
            alt='Casa moderna en Guadalajara'
            width={600}
            height={400}
          />
          <Image
            src='/assets/estates/casa-moderana-guadalajara-1.png'
            alt='Casa moderna en Guadalajara'
            width={300}
            height={200}
          />
          <Image
            src='/assets/estates/casa-moderana-guadalajara-1.png'
            alt='Casa moderna en Guadalajara'
            width={300}
            height={200}
          />
          <Image
            src='/assets/estates/casa-moderana-guadalajara-1.png'
            alt='Casa moderna en Guadalajara'
            width={300}
            height={200}
          />
          <button>
            <Image
              src='/assets/estates/casa-moderana-guadalajara-1.png'
              alt='Casa moderna en Guadalajara'
              width={300}
              height={200}
            />
            Ver más propiedades
          </button>
        </div>
      </header>
      <article>
        <div>
          <h2>Almaera</h2>
          <button>
            <Image
              src='/assets/icons/icon-heart-outline.svg'
              alt='Me gusta'
              width={20}
              height={20}
            />
          </button>
          <p>Fraccionamiento Residencial del Mayab, Mérida</p>
          <p>Desde $2,500,000</p>
          <p>En contrucción - Entrega verano 2025</p>
          <button>Contactar</button>
        </div>
        <div>
          <h3>Descripción</h3>
          <p className='text-justify'>
            Almaera es un exclusivo desarrollo residencial ubicado en una de las mejores zonas de Mérida,
            Yucatán, ofreciendo la combinación perfecta entre lujo, confort y conveniencia. A tan solo 5
            minutos de las mejores plazas comerciales, hospitales de primer nivel y los restaurantes más
            selectos, y a 20 minutos de las hermosas playas cercanas, vivir aquí te permite disfrutar de lo
            mejor de la ciudad sin sacrificar la tranquilidad.La primera torre, actualmente en venta,
            cuenta con 23 departamentos de cuatro tipologías únicas: Éter, Cénit, Aura y Serena, cada
            uno con un diseño moderno y funcional que se adapta a tus necesidades y estilo de vida.
            Almaera te ofrece más de 15 amenidades exclusivas, diseñadas para que disfrutes al máximo:
            desde áreas recreativas y deportivas, hasta espacios verdes y zonas de convivencia. Además,
            tendrás la comodidad de contar con estacionamiento privado, lo que garantiza tu tranquilidad y seguridad.
            Este desarrollo de tres torres redefine el estilo de vida urbano, rodeado de lujo y con una ubicación inmejorable,
            brindándote un hogar donde puedes vivir la vida que siempre soñaste.
          </p>
        </div>
        <div>
          <h4>Amenidades</h4>
          <ul>
            <li>
              <Image
                src='/assets/icons/icon-business.svg'
                alt='Habitaciones'
                width={20}
                height={20}
              />
              3 Habitaciones
            </li>
            <li>
              <Image
                src='/assets/icons/icon-pool.svg'
                alt='Albercas'
                width={20}
                height={20}
              />
              2 albercas grandes para disfrutar.
            </li>
            <li>
              <Image
                src='/assets/icons/icon-gym.svg'
                alt='Gym equipado'
                width={20}
                height={20}
              />
              Gym equipado con todo para hacer ejercicio.
            </li>
            <li>
              <Image
                src='/assets/icons/icon-wifi.svg'
                alt='Wifi'
                width={20}
                height={20}
              />
              Zona con Internet.
            </li>
          </ul>
          <button> ver más</button>
        </div>
        <div>
          <h4>Ubicación del desarrollo y zona</h4>
          <Image
            src='/assets/icons/icon-location.svg'
            alt='Icono de ubicación'
            width={20}
            height={20}
          />
          <p>79 entre 30 y 32, Residencial del Mayab, Mérida, Yuc., Fraccionamiento Residencial del Mayab, Mérida</p>
          <Image
            src='/assets/maps/mapa-ubicacion.png'
            alt='Mapa de ubicación del desarrollo'
            width={600}
            height={400}
          />
        </div>
        <div>
          <h4>Guia 360*</h4>
          <a href='#'>
            <Image
              src='/assets/estates/casa-moderana-guadalajara-1.png'
              alt='Icono de 360'
              width={600}
              height={400}
            />
          </a>
          <button> Contactar</button>
        </div>
      </article>
      <form>
        <div>
          <h3>Contactarme con el anuncionante</h3>
          <input type='text' placeholder='Nombre' />
          <select>
            <option value='+52'>México (+52)</option>
            <option value='+1'>EE.UU. (+1)</option>
            <option value='+34'>España (+34)</option>
          </select>
          <input type='tel' placeholder='Teléfono' id='telefono' />
          <label htmlFor='telefono'>Nos servirá para brindarte un mejor servicio.</label>
          <button>Contactar</button>
        </div>
      </form>
    </>
  )
}
