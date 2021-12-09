import Hero from '@components/Hero/Home'

function HomePage () {
  return (
    <>
      <Hero
        title="Selamat Datang di Pulau Bangka Belitung"
      />
      <style jsx>
        {`
          h1 {
          @apply text-red-900 bg-green-100;
          }
        `}
      </style>
      <style jsx global>
        {`
        #__next {
          min-height: 100vh;
          position: relative;
        }
      `}

      </style>
    </>
  )
}

export default HomePage
