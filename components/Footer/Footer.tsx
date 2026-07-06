import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Anton Kobys</p>
          <p>
            Contact us:
            <a href="https://github.com/tony-kobs">tony-kobs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
