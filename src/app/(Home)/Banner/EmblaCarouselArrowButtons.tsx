import React, { useCallback, useEffect, useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { EmblaCarouselType } from 'embla-carousel';

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined, onButtonClick?: (api: EmblaCarouselType) => void) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

export const PrevButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode }) => {
    const { children, ...restProps } = props

    return (
        <button
            className="embla__button embla__button--prev "
            type="button"
            {...restProps}
        >
            <IoMdArrowBack />
            {children}
        </button>
    )
}

export const NextButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode }) => {
    const { children, ...restProps } = props

    return (
        <button
            className="embla__button embla__button--next"
            type="button"
            {...restProps}
        >
            <IoArrowForward />
            {children}
        </button>
    )
}
