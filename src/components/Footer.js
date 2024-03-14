const Footer = () => {
    const year = new Date().getFullYear();
  return (

    <footer className="mb-16 md:mb-0 my bg-gray-900 text-white w-full ">
      <p className="md:text-xl text-center md:py-10 py-2 ">
        Designed and developed By{" "}
        <a
          className="font-bold text-blue-500"
          href="https://www.linkedin.com/in/ashish-singh-476640217/"
          target="_blank"
        >
          Ashish Singh
        </a>
        <span> ©{year}</span>
      </p>
    </footer>
  );
};

export default Footer;
