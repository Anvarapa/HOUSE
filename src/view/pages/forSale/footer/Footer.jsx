import css from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.footer_flex}`}>
      <div className={css.footer_blocks}>
              <h1 className={css.footer_h1}>Homefast</h1>
              <a className={css.footer_a} href="#">About as</a>
              <a className={css.footer_a} href="#">Our Awards</a>
              <a className={css.footer_a} href="#">Corporate</a>
              <a className={css.footer_a} href="#">Advertisement</a>
              <a className={css.footer_a} href="#">Human Resources</a>
              <a className={css.footer_a} href="#">Sitemap</a>
          </div>
          <div className={css.footer_blocks}>
              <h1 className={css.footer_h1}>Homefast</h1>
              <a className={css.footer_a} href="#">About as</a>
              <a className={css.footer_a} href="#">Our Awards</a>
              <a className={css.footer_a} href="#">Corporate</a>
              <a className={css.footer_a} href="#">Advertisement</a>
              <a className={css.footer_a} href="#">Human Resources</a>
              <a className={css.footer_a} href="#">Sitemap</a>
          </div>
          <div className={css.footer_blocks}>
              <h1 className={css.footer_h1}>Homefast</h1>
              <a className={css.footer_a} href="#">About as</a>
              <a className={css.footer_a} href="#">Our Awards</a>
              <a className={css.footer_a} href="#">Corporate</a>
              <a className={css.footer_a} href="#">Advertisement</a>
              <a className={css.footer_a} href="#">Human Resources</a>
              <a className={css.footer_a} href="#">Sitemap</a>
          </div>
      </div>
    </footer>
  );
};
