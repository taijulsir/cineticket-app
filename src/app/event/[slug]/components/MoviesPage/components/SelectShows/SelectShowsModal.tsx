'use client';
import { useContext, useEffect } from 'react';

import AppContext from '@/context/AppContext';

import SelectShowButton from './components/SelectShowsButton/SelectShowButton';
import ProfileInformation from './components/ProfileInformation/ProfileInformation';

import useOrderHandlers from './utils/hooks/useOrderHandlers/useOrderHandlers';
import useOrderSteps from './utils/hooks/useOrderSteps';
import Pricing from './components/Pricing/Pricing';
import SelectSeat from './components/SelectSeat/SelectSeat';
import { CURRENCY_SYMBOLS } from '../../utils/configs/currencies';

function SelectShowsModal({
	eventSlug,
	shows,
	selectedShows,
	setSelectedShows,
	setError,
	error,
	eventId,
	theaters,
	selectedTheater,
	setSelectedTheater,
	triggerFetch,
	toggleFetch,
	showModal,
	eventCurrency = "AUD"
}: { eventSlug?: string; shows?: any[]; selectedShows?: any; setSelectedShows?: any; setError?: any; error?: string; eventId?: any; theaters?: any[]; selectedTheater?: string; setSelectedTheater?: any; triggerFetch?: any; toggleFetch?: any; showModal?: any; eventCurrency?: string }) {

	const { selectedSeats } = useContext(AppContext) as any;
	const currencySymbol = (CURRENCY_SYMBOLS as any)[eventCurrency]

	const {
		steps, currentStep, setCurrentStep,
		name, setName,
		mobileNumber, setMobileNumber,
		email, setEmail,
		promoCode, setPromoCode,
	} = useOrderSteps(shows, selectedShows, setSelectedShows, selectedTheater, setError)

	const {
		handleCustomerOrderClick,
		handleGuestOrderClick,
		createCustomerOrder,
		createGuestOrder
	} = useOrderHandlers({eventId, name, mobileNumber, email, selectedShows, promoCode, eventSlug, setError, triggerFetch,eventCurrency})


	return (
		<div className="h-full w-full grid grid-rows-[90%_10%] overflow-hidden">
			<>

				{currentStep === 1 && (
					<SelectSeat
						selectedShows={selectedShows}
						handleCustomerOrder={handleCustomerOrderClick}
						handleGuestOrder={handleGuestOrderClick}
						promoCode={promoCode}
						setPromoCode={setPromoCode}
						error={error}
						setSelectedShows={setSelectedShows}
						shows={shows}
						theaters={theaters}
						selectedTheater={selectedTheater}
						setSelectedTheater={setSelectedTheater}
						toggleFetch={toggleFetch}
						showModal={showModal}
						currencySymbol={currencySymbol}
					/>
				)}

				{currentStep === 2 && (
					<div className="grid gap-2">
						<ProfileInformation
							name={name}
							setName={setName}
							setMobileNumber={setMobileNumber}
							setEmail={setEmail}
							mobileNumber={mobileNumber}
							email={email}
							selectedShows={selectedShows}
						/>
						<Pricing
							promoCode={promoCode}
							setPromoCode={setPromoCode}
							setError={setError}
							error={error}
							triggerFetch={triggerFetch}
							setName={setName}
							setMobileNumber={setMobileNumber}
							setEmail={setEmail}
							currencySymbol={currencySymbol}

						/>

					</div>
				)}
			</>

			<SelectShowButton
				steps={steps}
				currentStep={currentStep}
				setCurrentStep={setCurrentStep}
				selectedSeats={selectedSeats}
				name={name}
				email={email}
				error={error}
				setError={setError}
				triggerFetch={triggerFetch}
				mobileNumber={mobileNumber}
				createCustomerOrderAfterTotalZero={createCustomerOrder}
				createGuestOrderAfterTotalZero={createGuestOrder}
				handleCustomerOrder={handleCustomerOrderClick}
				handleGuestOrder={handleGuestOrderClick}
			/>
		</div>
	);
}

export default SelectShowsModal;
