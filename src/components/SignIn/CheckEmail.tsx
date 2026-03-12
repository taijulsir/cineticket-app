function CheckEmail({ email }: { email?: any }) {
  return (
    <div className="my-16">
      <h3 className="text-center font-medium">Check Your Email</h3>
      <h5 className="text-center pt-14 pb-8 font-normal">
        An email has been sent to <span className="text-primary">{email}</span>.{" "}
        <br></br>
        Please check your inbox and verify your email via the link provided.
      </h5>
      {/* <p className="text-center text-sm md:text-base">
        Didn’t receive a link?<span className="text-primary underline font-medium"> Resend Email</span>
      </p> */}
      <div className="border border-b mt-8 mb-6"></div>
      <p className="text-center text-sm md:text-base">
        Not a member yet?
        <span className="text-primary underline font-medium"> Sign up</span>
      </p>
    </div>
  );
}

export default CheckEmail;
