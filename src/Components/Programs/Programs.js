// import React from 'react'
// import './Programs.css'
// import program_1 from '../../assets/program-1.png'
// import program_2 from '../../assets/program-2.png'
// import program_3 from '../../assets/program-3.png'
// import program_icon_1 from '../../assets//edusity/program-icon-1.png'
// import program_icon_2 from '../../assets//edusity/program-icon-2.png'
// import program_icon_3 from '../../assets//edusity/program-icon-3.png'

// const Programs = () => {
//   return (
//     <div className='programs'>
//         <div className='program'>
//             <img src={program_1} alt='' />
//             <div className='caption'>
//               <img src={program_icon_1} alt='' />
//               <p>Prayer & Faith</p>
//             </div>
//         </div>
//         <div className='program'>
//             <img src={program_2} alt='' />
//             <div className='caption'>
//               <img src={program_icon_2} alt='' />
//               <p>Community & Music</p>
//             </div>
//         </div>
//         <div className='program'>
//             <img src={program_3} alt='' />
//             <div className='caption'>
//               <img src={program_icon_3} alt='' />
//               <p>Communion & Fellowship</p>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Programs





import React from 'react';
import './Programs.css';

const Programs = () => {
  
  return (
    <div className='programs'>
      <div className='card'>
        <div className='card-content'>
          <h3>Bronze Package</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="price bronze-price">$99</p>
        </div>
      </div>
      <div className='card'>
        <div className='card-content'>
          <h3>Silver Package</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="price silver-price">$149</p>
        </div>
      </div>
      <div className='card'>
        <div className='card-content'>
          <h3>Gold Package</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="price gold-price">$199</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;



