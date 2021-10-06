import React from 'react'
import Icon1 from '../../images/accuweather.svg'
import Icon2 from '../../images/workflowy.svg'
import Icon3 from '../../images/bookrr.svg'
import {ServicesContainer , ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon , ServicesH2 , ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <div>
            <ServicesContainer id="services">
                <ServicesH1>My Projects</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2><a href="https://github.com/PrSi007/accu-weather">Accu-weather</a></ServicesH2>
                        <ServicesP>Accu-Weather is the simplest method to know about the updates of the upcoming weather for the current day.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2><a href="https://github.com/PrSi007/workflowy">Workflowy</a></ServicesH2>
                        <ServicesP>Note making web app which facilitates the recall of factual information, as well as the synthesis and application of new knowledge.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2><a href="https://github.com/PrSi007/Bookrr---A-Movie-Review-Booking-Sysrtem">Bookrr</a></ServicesH2>
                        <ServicesP>Movie Review/Booking web app for all the movie geeks to diminish the gap between the common public and the beautiful world of movies.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </div>
    )
}

export default Services
