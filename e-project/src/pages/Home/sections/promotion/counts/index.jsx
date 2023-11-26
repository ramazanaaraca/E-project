import { useEffect , useState } from "react";
import CountBox from "./box";


function Count() {
    const [countDown , setCountDown] = useState({
        days: 0,
        hours: 0 ,
        minutes: 0,
        seconds : 0,
    });

    const promotionDate = new Date('2023-12-10T00:00:00');


    useEffect(() => {
        const interval = setInterval(() => {
          const currentTime = new Date();
          const timeDifference = promotionDate - currentTime;
    
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
          setCountDown({
            days,
            hours,
            minutes,
            seconds,
          });
    
          if (timeDifference < 0) {
            clearInterval(interval);
            
          }
        }, 500);
    
        return () => clearInterval(interval);
      }, []);
    

    return(
    <>
    <div>
        <span className="mb-4 text-base font-normal block">Offer expires in:</span>
        <div className="flex flex-row gap-4">
            <CountBox name='Days'>{countDown.days}</CountBox>
            <CountBox name='Hours'>{countDown.hours}</CountBox>
            <CountBox name='Minutes'>{countDown.minutes}</CountBox>
            <CountBox name='Seconds'>{countDown.seconds}</CountBox>
        </div>
    </div>
    
    </>    
    )
}

export default Count