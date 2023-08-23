import helpline from "../../assets/helpline.png";
import "./HelpLine.css";

export default function HelpLine() {
  return (
    <div className="lg:max-w-[1100px] sm:max-w-[600px] mx-auto ">
      <div className="grid grid-cols-3 gap-2 bg-[#2073BD] rounded-b">
        <div className="col-span-2 ml-4 ">
          <h2 className="font-bold text-3xl text-white mt-8 mb-4">
            Let us help you find the right care home
          </h2>
          <p className=" text-lg text-white my-2">
            Our dedicated Care Help Team will help find you the perfect care
            home with our free, no-obligation, personalised shortlisting service
            for older person care.
          </p>

          <h3 className=" text-xl text-white mt-5 mb-2">
            Call our free helpline
          </h3>
          <h1 className="font-bold text-3xl text-white my-2">
            <span>
              <i className="fa-solid fa-phone-flip mr-2 text-white"></i>
            </span>
            <span>+88 01571247644</span>
          </h1>
          <h2 className=" text-lg text-white my-1">
            to speak to a member of our team.
          </h2>
          <h3 className=" text-lg text-white my-1">
            Monday - Friday | 9am - 5pm
          </h3>
        </div>
        <div className="">
          <img src={helpline} alt="" className="text-center mx-auto w-full" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mb-4 ">
        <div className="ml-4 col-span-2">
          <h2 className=" text-[#10102F] text-3xl mt-6 mb-4">
            Why call our Care Helpline?
          </h2>
          <p className="text-sm my-2">
            Finding the right care home can be a difficult journey. Not only
            does it have to meet the right care needs, but just as importantly,
            it should help your loved one continue to comfortably live life how
            they want, catering for their likes, hobbies and interests.
          </p>
          <p className="text-sm my-2">
            The need to find a care home often arises urgently. If your loved
            one can no longer look after themselves at home, searching for a
            care home that best fits their needs can quickly become overwhelming
            as there are many care homes in the BD, for people with vastly
            different budgets and requirements.
          </p>
          <p className="text-sm my-2">
            Each care home has its own personality which could be perfect for
            one person, but does it meet your loved one's unique needs? Once you
            have chosen a care home, it can be difficult and disruptive to
            change a decision and move homes if it wasn't the correct choice.
          </p>
          <p className="text-sm my-2">
            Our Care Help Team will help you find care homes that closely match
            your requirements, helping you narrow down your care home search and
            reduce some of the stress, worry and guilt that comes with making
            the difficult decision to move a loved one into a care home.
          </p>
        </div>
        <div className="sm:ml-4 mr-4 lg:my-auto review-section rounded p-4">
          <h2 className="text-[#14296F] text-2xl my-4 mx-3">
            I am so grateful
          </h2>
          <div className="border-l-4 border-[#2073BD] text-[#14296F] mx-3">
            <p className="ml-4">
              "... for the help of carehome.co.bd guiding me towards finding a
              suitable care home for my Mum. Eileen provided a list of potential
              care homes. The care homes have been contacted in advance on my
              behalf. I can now use this to arrange visits as soon as possible."
            </p>
          </div>
          <h3 className="font-base mx-3 mt-3">M. Rafiul Alam</h3>
        </div>
      </div>

      <div className="ml-4  mt-6">
        <h2 className="text-2xl">How the service works</h2>
        <h4 className="italic text-md mt-2">
          Our care home shortlisting service is completely free.
        </h4>
        <div className="flex justify-start items-center my-3">
          <h1 className="text-2xl mr-3 border shadow-md rounded-full px-4 py-1.5 text-[#2073BD]">
            1
          </h1>
          <h2 className="text-sm">
            Call our helpline and speak to one of our team members who will
            listen to your requirements and ask a few questions to understand
            your unique care needs and what is important to you.
          </h2>
        </div>
        <div className="flex justify-start items-center my-3">
          <h1 className="text-2xl mr-3 border shadow-md rounded-full px-4 py-1.5 text-[#2073BD]">
            2
          </h1>
          <h2 className="text-sm">
            We will use our extensive care home database and relationships with
            care homes to build you a tailored short list of potential care
            homes according to your needs.
          </h2>
        </div>
        <div className="flex justify-start items-center my-3">
          <h1 className="text-2xl mr-3 border shadow-md rounded-full px-4 py-1.5 text-[#2073BD]">
            3
          </h1>
          <h2 className="text-sm">
            We will send you the shortlist via email for you to review and
            contact the ones you want to move forward with.
          </h2>
        </div>
        <div className="flex justify-start items-center my-3">
          <h1 className="text-2xl mr-3 border shadow-md rounded-full px-4 py-1.5 text-[#2073BD]">
            4
          </h1>
          <h2 className="text-sm">
            We will follow up with you afterwards to see where you are with your
            care journey and answer any follow-up questions you may have to ease
            the transition to a care home.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 my-10 ">
        <div className="bg-[#F8F8FF] rounded mx-auto">
          <h1 className="-mt-5 block text-3xl text-center">
            <span className="shadow-md px-4 py-2.5 rounded-full">
              <i className="fa-solid fa-heart text-[#2073BD] "></i>
            </span>
          </h1>
          <h2 className="text-center text-2xl my-3 mt-5">Why choose us?</h2>
          <p className="text-sm my-2 px-4">
            carehome.co.bd will be the leading care home reviews website in the
            BD. Most BD care homes feature on our website, we have few of care
            home profiles with up-to-date information and recent reviews from
            care seekers and their loved ones.
          </p>
          <p className="text-sm my-3 px-4 pb-3">
            Our team will use our extensive database and experience and
            long-term relationships with care homes to match care homes to you.
          </p>
        </div>
        <div className="bg-[#F8F8FF] rounded mx-auto">
          <h1 className="-mt-5 block text-3xl text-center">
            <span className="shadow-md px-4 py-2.5 rounded-full">
              <i className="fa-solid fa-thumbs-up text-[#2073BD]"></i>
            </span>
          </h1>
          <h2 className="text-center text-2xl my-3 mt-5">
            Why is the service free?
          </h2>
          <p className="text-sm my-2 px-4">
            Our aim is to help as many care seekers in the BD as possible find
            the right care home. We have few of care home reviews which help our
            care seekers gain an insight into what life is like in a care home
            from other care home residents and their loved ones before they move
            in.
          </p>
          <p className="text-sm my-3 px-4 pb-3">
            Because of our success, many care homes pay us to help them generate
            more reviews and appear more prominently on the site in order to
            connect with more care seekers.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-center">
          Call our care help service today on{" "}
          <span className="text-[#2073BD]  hover:border-b-2 hover:border-[#2073BD]">
            01571247644
          </span>
        </h3>
        <h4 className="text-sm text-center my-4">
          Monday - Friday <span className="text-[#2073BD] font-bold">| </span>
          9am - 5pm <span className="text-[#2073BD] font-bold">|</span> Calls
          are free to this number
        </h4>
        <hr className="my-4" />
        <h4 className="text-center text-md">
          Alternatively, email carehelp@carehome.co.bd with a brief outline of
          your care needs and a member of the team will contact you.
        </h4>
      </div>
    </div>
  );
}
