import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/edusity/next-icon.png";
import back_icon from "../../assets/edusity/back-icon.png";
import user_1 from "../../assets/edusity/user-1.png";
import user_2 from "../../assets/edusity/user-2.png";
import user_3 from "../../assets/edusity/user-3.png";
import user_4 from "../../assets/edusity/user-4.png";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info"> 
                        <img src={user_1} alt=""/>
                        <div>
                            <h3>
                                Kailee Crumbell
                            </h3>
                            <span>Silver Springs, NV</span>
                            <div>
                            <span> <strong>"Amazing Service and Friendly Staff!"</strong></span>
                            </div>
                           
                        </div>
                        
                    </div>
                    
                  
                    <p>"John and the team at Silver Springs HVAC went above and beyond when my AC broke down in the middle of a heatwave. They arrived quickly, diagnosed the issue, and had it fixed within a couple of hours. Not only was the service professional and efficient, but John also took the time to explain how I could maintain my unit better to avoid future issues. I highly recommend them!"</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info"> 
                        <img src={user_2} alt=""/>
                        <div>
                            <h3>
                                Konnor Duncan
                            </h3>
                            <span>Silver Springs, NV</span>
                            <div><div>
                            <span> <strong>"Affordable, Honest, and Reliable!"</strong></span>
                            </div></div>
                        </div>
                       
                    </div>
                    
                    <p>"I’ve used Silver Springs HVAC twice now, and both times, John and his crew delivered exceptional service. I appreciate their honesty about costs and repair options. They don’t push unnecessary work, and the prices are very fair. It’s refreshing to work with a company that genuinely cares about their customers and prioritizes affordability without sacrificing quality."</p></div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info"> 
                        <img src={user_3} alt=""/>
                        <div>
                            <h3>
                                Dianne Satterwhite
                            </h3>
                            <span>Silver Springs, NV</span>
                            <div>
                            <span> <strong>"Veteran-Owned, Professional, and Dependable!"</strong></span>
                            </div>
                        </div>
                    </div>
                    <p>"I love supporting local, veteran-owned businesses, and Silver Springs HVAC is a gem. John is a former Marine, and you can tell he runs his business with the same discipline and commitment. The technicians are courteous and knowledgeable, and they keep my HVAC system running smoothly year-round. I trust them completely with my heating and cooling needs."</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info"> 
                        <img src={user_4} alt=""/>
                        <div>
                            <h3>
                                Kooper Henry
                            </h3>
                            <span>Silver Springs, NV</span>
                            <div>
                            <span> <strong>"Quick Response and Excellent Customer Service!"</strong></span>
                            </div>
                        </div>
                    </div>
                    <p>"John and his team at Silver Springs HVAC have become my go-to for any HVAC needs. From the initial call to completing the repair, they made sure I felt like a valued customer. I had a heating issue in the dead of winter, and they got someone out to my home quickly. The technician was professional, and John even followed up afterward to make sure everything was working perfectly. Fantastic customer service!"</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
