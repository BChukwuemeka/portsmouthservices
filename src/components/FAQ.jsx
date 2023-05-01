import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {useState} from 'react'
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';




 
const FAQ = ({question, answer}) => {

    const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);




    const [isAnswerShowing, setIsAnswerShowing] = useState(false)


  return (
      <motion.article
        initial={initial}
        transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
          ref={ref}
          className="faq"
          onClick={() => setIsAnswerShowing(prev => !prev)}>
            <div>
                <h4>{question}</h4>
                <button className="faq__icon">
                    {
                        !isAnswerShowing ? <AiOutlinePlus/> : <AiOutlineMinus/>
                    }
                </button>
            </div>

            {isAnswerShowing &&  <p>{answer}</p>}

        </motion.article>
  )
}

export default FAQ