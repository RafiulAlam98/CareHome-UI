export default function CallHelpLine() {
  return (
    <>
      {/* You can open the modal using ID.showModal() method */}
      <button
        className="bg-[#16C263] px-2 rounded-md"
        onClick={() => window.my_modal_3.showModal()}
      >
        <span>
          <i className="fa-solid fa-phone-flip mr-2 text-white"></i>
        </span>
        <span className="text-sm text-white">Call Our Free Care HelpLine</span>
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <div>
                <img
                  src="https://www.carehome.co.uk/assets/images/carehelp/helpline-experts-v2.jpg"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="shadow-xl px-3 mt-3 p-2 border border-green-300">
                <h2 className="font-bold text-md">I am so grateful</h2>
                <p className="font-semibold text-xs ">
                  "... for the help of carehome.co.uk guiding me towards finding
                  a suitable care home for my Mum. Eileen provided a list of
                  potential care homes. The care homes have been contacted in
                  advance on my behalf. I can now use this to arrange visits as
                  soon as possible."
                </p>
                <h3 className="text-xs mt-2 font-normal">
                  L Gardiner December 2022
                </h3>
              </div>
            </div>
            <div className="col-span-2"></div>
          </div>
        </form>
      </dialog>
    </>
  );
}
