

function FooterWrapper({ children }: { children?: any }) {


    return (
        <div className="bg-[#2C2F32]">
            <div className="w-10/12 mx-auto flex-row md:flex justify-between items-center py-6  md:py-16">
                {children}
            </div>
        </div>

    )
}

export default FooterWrapper