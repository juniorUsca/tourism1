import css from 'styled-jsx/css'
import Image from 'next/image'

import MainButton from '@ui/Button/MainButton'
import bg from '../../../public/bg.png'

const { className: classNameMainButton, styles: stylesMainButton } = css.resolve`
  button {
    @apply relative;
  }
`

function Hero ({ title }) {
  return (
    <section>
      <Image
        className="image"
        src={bg}
        alt="beach"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <div>
        <h1>{title}</h1>
        <MainButton className={classNameMainButton}>Ver Promociones</MainButton>
        {stylesMainButton}
      </div>

      <style jsx>
        {`
          section {
            @apply bg-red-100;
            @apply flex flex-col justify-center items-start;
            @apply relative;
            height: 700px;
          }
          .image {
            @apply z-0;
          }

          div {
            @apply relative;
            @apply ml-36 max-w-md;
          }

          h1 {
            @apply text-white text-5xl leading-normal font-medium;
            @apply mb-10;
          }

        `}

      </style>
    </section>
  )
}

export default Hero
