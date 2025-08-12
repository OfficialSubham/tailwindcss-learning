const Hero = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-full mx-auto gap-6 flex flex-col relative">
        {children}
    </div>
  )
}

export default Hero
