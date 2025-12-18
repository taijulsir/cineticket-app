import PrivacyPolicyDescription from '@/Partials/TermsAndConditions/PrivacyPolicy/PrivacyPolicyDescription'
import TermsTitle from '@/Partials/TermsAndConditions/TermsTitle/TermsTitle'
import React from 'react'


export const metadata = {
    title: 'Privacy Policy | BongOz Films',
    description: 'BongOz Films - Bringing Quality Movie Experiences to your NeighborHood',
}
function page() {

    return (
        <div className="w-10/12 mx-auto py-10 mt-[40px] lg:mt-[70px] privacyPolicy">
            <TermsTitle title="Privacy Policy" />
            <PrivacyPolicyDescription />
        </div>
    )
}

export default page
