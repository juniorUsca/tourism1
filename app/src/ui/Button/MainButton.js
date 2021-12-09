function MainButton ({ className, children }) {
  return (
    <button type="button" className={className}>
      {children}
      <style jsx>
        {`
        button {
          @apply rounded-3xl px-6 py-2;
          @apply text-white;
          @apply bg-gradient-to-r from-green-500 to-blue-500;
        }
        `}
      </style>
    </button>
  )
}

export default MainButton
