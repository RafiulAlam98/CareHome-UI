import FooterItems from "../../../components/FooterItems/FooterItems";

export default function Footer() {
  return (
    <>
      <FooterItems />
      <div className="mt-6">
        <div className="flex justify-center items-center mb-3">
          <h3 className="text-[#2073BD] mr-4 text-sm font-normal">
            TERMS & CONDITION
          </h3>
          <h3 className="text-[#2073BD] mr-4 text-sm font-normal">
            PRIVACY POLICY & COOKIES
          </h3>
        </div>
        <div className="my-3 flex justify-center items-center">
          <i className="fa-brands fa-facebook block mx-2 text-3xl text-[#2073BD]"></i>
          <i className="fa-brands fa-twitter block mx-2 text-3xl text-[#2073BD]"></i>
          <i className="fa-brands fa-linkedin block mx-2 text-3xl text-[#2073BD]"></i>
        </div>
        <h3
          className="text-[#2073BD] mr-4 text-sm font-normal text-center mt-3
        "
        >
          © 2023 CAREHOME.CO.BD
        </h3>
      </div>
    </>
  );
}
