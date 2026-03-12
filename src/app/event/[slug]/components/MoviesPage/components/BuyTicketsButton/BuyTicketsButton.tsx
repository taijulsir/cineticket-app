import { Button } from "@/components/ui/button";


function BuyTicketsButton({ setShowModal }: { setShowModal: (v: boolean) => void }) {

    return (
        <Button
            variant="signin"
            className="w-full hover:bg-transparent hover:text-primary hover:border-[1px] border-primary"
            onClick={() => setShowModal(true)}
        >
            Buy your tickets
        </Button>
    );
}

export default BuyTicketsButton;
