const Logo = ({ logoType }: { logoType: string }) => {
  return (
    <a href="/">
      <img
        data-testid={logoType}
        className="h-12 cursor-pointer"
        src="./imagens/Cabecalho/carson-logo.svg"
        alt="Cars On Logo"
      />
    </a>
  )
}

export default Logo
