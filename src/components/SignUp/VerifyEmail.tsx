function VerifyEmail({ email }) {
    return (
        <div className="my-16 px-0 md:px-5 lg:px-36">
            <h4 className="text-center font-medium">Check Your Email</h4>
            <h5 className="text-center pt-14 pb-8 font-normal">
                If we found an account associated with <span className="text-primary">{email}</span>,<br />
                an email has been sent. Please check your inbox and verify your email via the link provided.
            </h5>
            {/* <p className="text-center text-sm md:text-base">
          Didn’t receive a link?<span className="text-primary underline font-medium"> Resend Email</span>
        </p> */}
            {/* <div className="border border-b mt-8 mb-6"></div>
        <p className="text-center text-sm md:text-base">
          Already verify via email?<span className="text-primary underline font-medium"> Log in</span>
        </p> */}
        </div>
    );
}

export default VerifyEmail;
