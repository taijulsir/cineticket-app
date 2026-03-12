import useAxiosPublicInstance from '@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance';
import useAxiosInstance from '@/Utilities/Hooks/useAxiosInstance';
import { Button } from '@/components/ui/button';
import AppContext from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext/AuthContext';
import { useContext } from 'react';
import { handleBuyTickets } from './utils/handleBuyTickes';

function SelectShowButton({
	steps,
	currentStep,
	setCurrentStep,
	selectedSeats,
	name,
	email,
	mobileNumber,
	handleCustomerOrder,
	handleGuestOrder,
	createCustomerOrderAfterTotalZero,
	createGuestOrderAfterTotalZero,
	error,
	setError,
	triggerFetch
}: { steps?: any[]; currentStep: number; setCurrentStep?: (v: number | ((prev: number) => number)) => void; selectedSeats?: any[]; name?: string; email?: string; mobileNumber?: string; handleCustomerOrder?: any; handleGuestOrder?: any; createCustomerOrderAfterTotalZero?: any; createGuestOrderAfterTotalZero?: any; error?: string; setError?: (v: string) => void; triggerFetch?: any }) {

	const { customer } = useAuth() as any;
	const { afterDiscountTotal, isPromo, total, setSelectedSeats } = useContext(AppContext) as any;
	const axiosPublicInstance = useAxiosPublicInstance()

	const handleNextClick = async () => {
		try {
			const { data } = await axiosPublicInstance.post("/checkSeatIsBooked", { selectedSeats });
			if (data.error) {
				setError?.(data.message);
				triggerFetch?.();
				setSelectedSeats?.([]);
			} else {
				setCurrentStep?.((prev: number) => prev + 1);
			}
		} catch (error) {
			console.error('Error checking seats:', error);
		}
	};


	return (
		<div className="flex justify-center items-center gap-3 overflow-hidden self-center">
			<Button
				disabled={currentStep <= 1 ? true : false}
				className="w-[80px] max-sm:h-[28px]  bg-gray-200 text-black hover:bg-gray-100   hover:border-[1px] border-gray-400"
				onClick={() => {
					setCurrentStep?.((prev: number) => prev - 1);
				}}
			>
				Back
			</Button>

			{currentStep === (steps?.length ?? 0) ? (
				<Button
					className=" hover:bg-transparent hover:text-primary hover:border-[1px] border-primary"
					disabled={
						(selectedSeats?.length ?? 0) < 1 ||
						!name ||
						!email ||
						!mobileNumber || !!error
					}
					onClick={() =>
						handleBuyTickets({
							customer,
							isPromo,
							total,
							afterDiscountTotal,
							createCustomerOrderAfterTotalZero,
							createGuestOrderAfterTotalZero,
							handleCustomerOrder,
							handleGuestOrder
						})()
					}
				>
					Buy Tickets
				</Button>
			) : (
				<Button
					className="w-[80px] max-sm:h-[28px] hover:bg-transparent hover:text-primary hover:border-[1px] border-primary"
					disabled={(selectedSeats?.length ?? 0) < 1}
					onClick={handleNextClick}
				>
					Next
				</Button>
			)}
		</div>
	);
}

export default SelectShowButton;
