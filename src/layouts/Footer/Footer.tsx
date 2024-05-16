const Footer = () => {
  return (
    <footer>
      <div className="absolute w-full bottom-0 right-0 py-[15px] border-t-2 border-solid border-gray-1200 bg-transparent text-gray-800 ">
        <p className="p-[15px] m-0 text-sm !float-right">
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
