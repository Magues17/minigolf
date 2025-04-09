import React from 'react'
import './Church.css'
import gallery_1 from '../../assets/ssa/hvac1.PNG'
import gallery_2 from '../../assets/ssa/hvac2.PNG'
import gallery_3 from '../../assets/ssa/hvac3.PNG'
import gallery_4 from '../../assets/ssa/hvac4.PNG'
import white_arrow from '../../assets/edusity/white-arrow.png'

const Church = () => {
  return (
    <div className='church'>
        <div className='gallery'>
            {/* <img src={gallery_1} alt=''/> */}
            <img src={gallery_2} alt=''/>
            <img src={gallery_3} alt=''/>
            <img src={gallery_4} alt=''/>

        </div>
        <button className='btn dark-btn'> See more here <img src={white_arrow} alt='' /></button>
    </div>
  )
}

export default Church