function ContactSection(props) {
  return (
    <div id="contact" className="section">
      <h3 id="contact_title">CONTACT</h3>
      <div className="init_hide">
        <h4>Email</h4>
        <ul>
          <li id="email">jonacosta86@gmail.com</li>
        </ul>
        <h4 id="linkedIn_title">LinkedIn</h4>
        <ul>
          <li id="linkedIn_profile">
            <h4>
              <a href="https://www.linkedin.com/in/acostajon/" target="_blank" rel="noreferrer" title="Contact page">
                PROFILE
              </a>
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ContactSection;
