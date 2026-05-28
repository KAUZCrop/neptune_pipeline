export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">REMAKE<span>.</span></a>
        <div className="nav-menu">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="nav-cta">광고 문의하기</a>
      </div>
    </nav>
  )
}
