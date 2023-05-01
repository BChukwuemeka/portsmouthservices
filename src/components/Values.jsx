import image from '../images/containerpics/images4.jpeg'
import image_ from '../images/containerpics/images9.jpeg'
import {GiCutDiamond} from 'react-icons/gi'
import SectionHead from '../components/SectionHead'
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import './components.css'
import {values} from '../data'
import Card from '../UI/Card'



const Values = () => {

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



  return (
        <section className="values">
            <div className="container values__container" ref={ref}>
                <div className="values__left">
                    <div className="values__image">
                      <img src={image} alt="" />
                    </div>

                    <div className="values__image">
                        <img src={image_} alt="" />
                    </div>
                  
                    <div className="values__image_">
                        <img src={image_} alt="" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                    <p>
                        
                      
                      
                    </p>

                  <motion.div
                    initial={initial}
					transition={{ delay: 0.3, duration: 0.6 }}
					animate={animation}
                    className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return (
                                    <Card className="values__value" key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </section>
  )
}

export default Values