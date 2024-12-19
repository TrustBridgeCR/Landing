import { fadeIn } from '@/utils/transitions'
import { motion, useAnimation, useInView } from 'framer-motion'
import { motionTransitionsProps } from './MotionTransition.types'
import { useEffect, useRef } from 'react';

export function MotionTransition(props: motionTransitionsProps) {
    const { children, className } = props

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])


    return (
        <div ref={ref}>
            <motion.div
                variants={fadeIn()}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}
