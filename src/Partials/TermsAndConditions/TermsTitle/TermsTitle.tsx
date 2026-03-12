
function TermsTitle(props: any) {
  const { title } = props || {};
  return (
    <h2 className="sm:text-xl lg:text-4xl font-bold gap-4 flex items-center md:gap-7 py-3 lg:py-5">
      {/* <FaArrowLeft /> */}
      {title}
    </h2>
  )
}

export default TermsTitle
