import Link from "next/link"


function FooterContent() {
    return (
        <div className="flex-row md:flex justify-center items-center gap-3 text-center">
            <p className="">Copyright @ 2024 BongOz Films</p>
            <p className="hidden sm:block">|</p>
            <p className="py-2">All Rights Reserved</p>
            <p className="hidden sm:block">|</p>
            <Link href='/terms-conditions'><span className="text-primary">Terms and Conditions</span></Link>
            <br className="sm:hidden block"></br>
            <p className="hidden sm:block">|</p>
            <Link href='/PrivacyPolicy'><span className="text-primary">Privacy Policy</span></Link>
            {/* <span className="text-primary">Privacy Policy</span> */}
        </div>
    )
}

export default FooterContent