const Footer = () => {
  return (
    <footer>
      <div className="absolute no-underline bg-transparent text-gray-800 w-full h-10 bottom-0 right-0 p-3.5 border-t-2 border-solid border-gray-1200">
        <p className="p-3.5 m-0 text-sm !float-right">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.creative-tim.com?ref=mdr-footer"
              target="_blank"
              className="no-underline bg-transparent text-primary-100"
            >
              Creative Tim
            </a>
            , made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
