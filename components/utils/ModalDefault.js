import Image from 'next/image'

export default function ModalDefault ({ isOpen, onClick, onClose }) {
  return (
    <div className='bg-gray-800 bg-opacity-50 fixed inset-0 z-50 flex items-end justify-center' onClick={onClose}>

      <div className='bg-white p-4 rounded-lg relative w-full' onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-end'>
          <button className='' onClick={onClose}>
            <Image src='/assets/icons/icon-close.svg' width={24} height={24} alt='Cerrar modal' />
          </button>
        </div>
        <h1 className='text-lg font-semibold mb-4'>Contactarme con el anunciante</h1>
        <form className='flex flex-col gap-4 '>
          <div className='flex flex-col gap-3'>
            <div>
              <input type='text' id='fullname' name='fullname' required className='border border-gray-300 p-2 rounded-md w-full bg-white' placeholder='Nombre completo' />
            </div>
            <div>
              <input type='tel' id='phone' name='phone' required className='border border-gray-300 p-2 rounded-md w-full bg-white' placeholder='Número telefónico' />
              <small className='text-xs text-gray-500'>Nos servirá para brindarte un mejor servicio.</small>
            </div>
            <div>
              <input type='email' id='email' name='email' required className='border border-gray-300 p-2 rounded-md w-full bg-white' placeholder='Correo electrónico' />
              <small className='text-xs text-gray-500'>Recibirás promociones y correos sobre el estatus de tus pedidos.</small>
            </div>
            <div>
              <textarea id='message' name='message' rows='4' required className='border border-gray-300 p-2 rounded-md w-full bg-white' placeholder='Mensaje' value='Hola, estoy interesado en esta propiedad, favor de enviarme información adicional o ponerse en contacto conmigo. ' />
              <small className='text-xs text-gray-500'>Hasta 200 caracteres.</small>
            </div>

            <button className='bg-blue-950 text-white px-4 py-2 rounded-full w-full'>Contáctar</button>
            <p className='text-xs text-gray-500 text-center'>
              Al enviar aceptas nuestras <a href='#' className='text-gray-700 underline'>Condiciones de Uso</a> y <br /> <a href='#' className='text-gray-700 underline'>Política de Privacidad</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
