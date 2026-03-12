import RecoverPassForm from "../RecoverPassForm";

export const metadata = {
    title: 'Recover Password | BongOz Films',
    description: 'BongOz Films - Bringing Quality Movie Experiences to your NeighborHood',
}
function Page({ params }: { params: any }) {


    return (
        <RecoverPassForm params={params} />
    );
}

export default Page;
