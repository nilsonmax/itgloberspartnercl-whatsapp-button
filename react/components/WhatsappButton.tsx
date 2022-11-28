import React from 'react'
import propTypes from 'prop-types'

/**
 * Este componente sirve para colocar un botón con logo que va a redirigir a nuestros clientes a una línea WhatsApp
 * @param logo cara que va a ser proyectada del componente
 * @param phone número telefónico al que el link de WhatsApp va a estar apuntando
 * @param message mensaje que queremos dar
 * @param width ancho del componente
 * @param height alto del componente
 * @returns imagen que va a llevar una redirreción
 */

type Props = {
  logo: string // WhatsApp.png
  phone: string // 3008935212
  message: string // Estás comunicándote con VTEX University, por favor ingresa tu duda.
  width: number // 80px
  height: number // 80px
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <div className="fixed bottom-2 mb7 pb5 right-2 mr5 flex flexColum">
      <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={logo} width={width} height={height} alt="Logo de WhatsApp" />
      </a>
    </div>
  )
}

WhatsappButton.propTypes = {
  logo: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
  message: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'mi-logo.png',
  phone: '3008935212',
  message: 'Estas comunicarse con Vtex University, Ingrese su mensaje',
  width: 80,
  height: 80,
}

WhatsappButton.schema = {
  title: 'Botón de WhatsApp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de WhatsApp que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Teléfono',
      type: 'string',
      description: 'Agrega por favor el numero de teléfono',
    },
    message: {
      title: 'Mensaje',
      type: 'string',
      description: 'Agrega por favor el mensaje que se vera para tu cliente',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Teléfono',
      description: 'Agrega por favor el número de teléfono',
      type: 'number',
    },
    height: {
      title: 'Teléfono',
      description: 'Agrega por favor el número de teléfono',
      type: 'number',
    },
  },
}

export default WhatsappButton
