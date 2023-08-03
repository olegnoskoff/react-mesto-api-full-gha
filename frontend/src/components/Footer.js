function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer content__element">
      <p className="footer__copyright">
        &copy;&nbsp;{currentYear <= 2023 ? "2023" : `2023&ndash;${currentYear}`}{" "}
        Mesto Russia
      </p>
    </footer>
  );
}

export default Footer;
