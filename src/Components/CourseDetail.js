//Subject API have all the details regarding our course like course name  
import Subject from './API/Subject';

//Teachers API have all the details regarding teachers name 
import Teachers from './API/Teachers';

// Importing hooks from react 
import { useState, useEffect } from 'react';




// setTime function set the timing in date [today at 9h:40m:00s or 13h:50m:00s] 
const setTime = (hour,min,sec) => {
    const d = new Date();
    d.setHours(hour);
    d.setMinutes(min);
    d.setSeconds(sec);

    return d;
}

// setNextClassDay function create a timing of the class at 9h:40m:00s at given nextDay[current day + addDay] 
const setNextClassDay = (addDay) => { 
    const d = new Date(setTime(9,40,0));
    d.setDate(d.getDate() + addDay);
    return d;
} 


//class timing
const classTime = {
    _1st: [setTime(9,40,0) , setTime(10,20,59)], // 1st lecture timing [start,end]
    _2nd: [setTime(10,30,0) , setTime(11,10,59)], // 2nd lecture timing [start,end]
    _3rd: [setTime(11,20,0) , setTime(12,0,59)], // 3rd lecture timing [start,end]
    _4th: [setTime(12,10,0) , setTime(12,50,59)], // 4th lecture timing [start,end]
    _5th: [setTime(13,0,0) , setTime(13,40,59)], // 5th lecture timing [start,end]
    _6th: [setTime(13,50,0) , setTime(14,30,59)], // 6th lecture timing [start,end]
    _7th: [setTime(14,40,0) , setTime(15,20,59)], // 7th lecture timing [start,end]
    _8th: [setTime(15,30,0) , setTime(16,10,59)], // 8th lecture timing [start,end]
}



// Component that returns the course timing and schedule of all course in time table 
const CourseDetail = ({daysComponent, day}) => {

    const d = new Date(); // current date and time 

    let nextClass; 

    if(d < classTime._1st[0]) {
        nextClass = classTime._1st[0];
    } 
    else if(d < classTime._2nd[0]) {
        nextClass = classTime._2nd[0];
    } 
    else if(d < classTime._3rd[0]) {
        nextClass = classTime._3rd[0];
    }
    else if(d < classTime._4th[0]) {
        nextClass = classTime._4th[0];
    }
    else if(d < classTime._5th[0]) {
        nextClass = classTime._5th[0];
    }
    else if(d < classTime._6th[0]) {
        nextClass = classTime._6th[0];
    }
    else if(d < classTime._7th[0]) {
        nextClass = classTime._7th[0];
    }
    else if(d < classTime._8th[0]) {
        nextClass = classTime._8th[0];
    }
    else {
        if(day == 6)
        nextClass = setNextClassDay(2);
        else 
        nextClass = setNextClassDay(1);
    }

    const [activeStatus, updateActiveStatus] = useState('');
    const [activeLectureNo, updateActiveLectureNo] = useState(null); // lecture number like:  1st lecture , 2nd lecture 
    const [nextClassTiming , updateNextClassTiming] = useState(nextClass); // next upcoming class timing 
    const [activeLectureEndTime, updateActiveLectureEndTime] = useState(null); // class over time 
    const [distance, updateDistance] = useState(null); // nextTimeout in millisecond 
    const [days, updateDays] = useState(null);
    const [hours, updateHours] = useState(null);
    const [minutes, updateMinutes] = useState(null);
    const [seconds, updateSeconds] = useState(null);
    const [dateAndTime, updateDateAndTime] = useState('');
    const [activeLinkStatus, updateActiveLinkStatus] = useState(false);

    


    useEffect(() => {
        // checking that day[props] is same as the current day[like : if today is monday then work only on the monday component]
        if(day == d.getDay()) { 

            //timing of lecture no. 1 
            if(d >= classTime._1st[0] && d <= classTime._1st[1])  {  
                updateActiveLectureNo(0); // update lecture no. 
                updateActiveStatus('active');
                updateActiveLectureEndTime(classTime._1st[1]);
                updateNextClassTiming(classTime._2nd[0]); // update next class timing 
                // updateNextTimeOut(Number(nextClassTiming) - Number(d)); // update the nextTimeOut in millisecond 
            }

            // break after 1st lecture  
            else if(d > classTime._1st[1] && d < classTime._2nd[0]) { 
                updateActiveLectureNo(null);
                updateActiveStatus('');
                updateActiveLectureEndTime(null);
                updateNextClassTiming (classTime._2nd[0]);
                updateActiveLinkStatus(false);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            }

            //timing of lecture no. 2 
            else if(d >= classTime._2nd[0] && d <= classTime._2nd[1]) { 
                updateActiveLectureNo(1);
                updateActiveStatus('active');
                updateActiveLectureEndTime(classTime._2nd[1]);
                updateNextClassTiming (classTime._3rd[0]);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            }

            // break after 2nd lecture  
            else if (d > classTime._2nd[1] && d < classTime._3rd[0]) {  
                updateActiveLectureNo(null);
                updateActiveStatus('');
                updateActiveLectureEndTime(null);
                updateNextClassTiming (classTime._3rd[0]);
                updateActiveLinkStatus(false);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            }

            //timing of lecture no. 3 
            else if(d >= classTime._3rd[0] && d <= classTime._3rd[1]) { 
                updateActiveLectureNo(2);
                updateActiveStatus('active');
                updateActiveLectureEndTime(classTime._3rd[1]);
                updateNextClassTiming (classTime._4th[0]);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 

            // break after 3rd lecture 
            else if(d > classTime._3rd[1] && d < classTime._4th[0]) {  
                updateActiveLectureNo(null);
                updateActiveStatus('');
                updateActiveLectureEndTime(null);
                updateNextClassTiming (classTime._4th[0]);
                updateActiveLinkStatus(false);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            }

            //timing of lecture no. 4 
            else if(d >= classTime._4th[0] && d <= classTime._4th[1]) { 
                updateActiveLectureNo(3);
                updateActiveStatus('active');
                updateActiveLectureEndTime(classTime._4th[1]);
                updateNextClassTiming (classTime._5th[0]);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 

            // break after 4th lecture 
            else if(d > classTime._4th[1] && d < classTime._5th[0]) { 
                updateActiveLectureNo(null);
                updateActiveStatus('');
                updateActiveLectureEndTime(null);
                updateNextClassTiming (classTime._5th[0]);
                updateActiveLinkStatus(false);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 
            
            //timing of lecture no. 5
            else if (d >= classTime._5th[0] && d <= classTime._5th[1]) {
                updateActiveLectureNo(4);
                updateActiveStatus('active');
                updateActiveLectureEndTime(classTime._5th[1]);
                updateNextClassTiming (classTime._6th[0]);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 
            
            //break after 5th lecture 
            else if(d > classTime._5th[1] && d < classTime._6th[0]) {
                updateActiveLectureNo(null);
                updateActiveStatus('');
                updateActiveLectureEndTime(null);
                updateNextClassTiming (classTime._6th[0]);
                updateActiveLinkStatus(false);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 
            
            //timing of lecture no. 6
            else if(d >= classTime._6th[0] && d <= classTime._6th[1]) {
                updateActiveLectureNo(5);
                updateActiveStatus('active');
                updateActiveLectureEndTime(classTime._6th[1]);
                updateNextClassTiming (classTime._7th[0]);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 
            
            // break after 6th lecture 
            else if(d > classTime._6th[1] && d < classTime._7th[0]) { 
                updateActiveLectureNo(null);
                updateActiveStatus('');
                updateActiveLectureEndTime(null);
                updateNextClassTiming (classTime._7th[0]);
                updateActiveLinkStatus(false);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 
            
            //timing of lecture no. 7
            else if(d >= classTime._7th[0] && d <= classTime._7th[1]) {
                updateActiveLectureNo(6);
                updateActiveStatus('active');
                updateActiveLectureEndTime(classTime._7th[1]);
                updateNextClassTiming (classTime._8th[0]);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 
            
            // break after 7th lecture 
            else if(d > classTime._7th[1] && d < classTime._8th[0]) {
                updateActiveLectureNo(null);
                updateActiveStatus('');
                updateActiveLectureEndTime(null);
                updateNextClassTiming(classTime._8th[0]);
                updateActiveLinkStatus(false);
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
            } 
            
            //timing of lecture no. 8
            else if(d >= classTime._8th[0] && d <= classTime._8th[1]) {
                updateActiveLectureNo(7);
                updateActiveStatus('active');
                updateActiveLectureEndTime(classTime._8th[1]);
                // if day == 6 == saturday the addDay[2] --> sunday --> monday
                if(day == 6) { 
                    updateNextClassTiming(setNextClassDay(2)); // next class timing is at monday 9h:40m:00s
                    // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
                } 
                else {
                    updateNextClassTiming(setNextClassDay(1)); // next class timing is next day at 9h:40m:00s
                    // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
                }
            }

            //collage timing is over  
            else {

                // set next lecture to null as no class after this 
                updateActiveLectureNo(null);
                updateActiveStatus('');
                updateActiveLectureEndTime(null);
                updateActiveLinkStatus(false);
                
                if(day == 6)
                updateNextClassTiming(classTime._3rd[0])


                // if day == 6 == saturday the addDay[2] --> sunday --> monday
                // if(day == 6) { 
                //     updateNextClassTiming(setNextClassDay(2)); // next class timing is at monday 9h:40m:00s
                //     updateNextTimeOut(Number(nextClassTiming ) - Number(d));
                // } 
                // //we need not need the else part 
                // else {
                //     updateNextClassTiming(setNextClassDay(1)); // next class timing is next day at 9h:40m:00s
                //     // updateNextTimeOut(Number(nextClassTiming ) - Number(d));
                // }
            }

            // upcoming class time 
            let countDownDate = Number(nextClassTiming); 
            
            // Get current date and time
            let now = d.getTime(); 

            // update into the state [time difference in millisecond]
            updateDistance(countDownDate - now);

            // Time calculations for days, hours, minutes and seconds
            updateDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            updateHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            updateMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setTimeout(() => {
                updateSeconds(Math.floor((distance % (1000 * 60)) / 1000));
            },1000);

        } 

        // day[props] is not matched or we have sunday 
        else {
            // set next lecture to null as no class on sunday or other props[day]
            updateActiveLectureNo(null);
            updateActiveStatus('');
            updateActiveLectureEndTime(null);
            if(d.getDay() == 0) {
                updateNextClassTiming(setNextClassDay(1));
                // updateNextTimeOut(Number(nextClassTiming ) - Number(d));

                // upcoming class time 
                let countDownDate = Number(nextClassTiming); 
                
                // Get current date and time
                let now = d.getTime(); 

                // update into the state [time difference in millisecond]
                updateDistance(countDownDate - now);

                // update into the state [time difference in millisecond]
                updateDistance(countDownDate - now);

                // Time calculations for days, hours, minutes and seconds
                updateDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
                updateHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                updateMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
                setTimeout(() => {
                    updateSeconds(Math.floor((distance % (1000 * 60)) / 1000));
                },1000);
            }
        }

        
        
        // storing date and time into string 
        updateDateAndTime(`${days}d:${hours}h:${minutes}m:${seconds}s`);

        console.log(dateAndTime);
        
        // console.log(days + "D " + hours + "H " + minutes + "M " + seconds + "S ");
        // console.log(`Total second ${nextTimeOut}`);
        // console.log(day);
        // console.log(activeLectureNo);
        // console.log(nextClassTiming );
        // console.log(Number(nextClassTiming ) - Number(d));


        // If the count down is finished, write some text
        if (distance < 0) {
            console.log("EXPIRED");
        }
    },[seconds]);

    let course = daysComponent.map((elem) => {
        if(elem.courseCode == '')
        return <div  key={elem.id} className="content-box no-class"></div>;

        const courseName = Subject.filter((name) => {
            return elem.courseCode == name.courseCode;
        });

        const teacherName = Teachers.filter((name) => {
            return elem.teacherCode == name.teacherCode;
        });

        if((elem.id === activeLectureNo) && !activeLinkStatus) {
            window.open(courseName[0].link)
            updateActiveLinkStatus(true);
        }

        return(
            <div key={elem.id} className={`content-box ${(elem.id === activeLectureNo)?`${activeStatus} txt-strong`:''}`}>
                <a href={(elem.id === activeLectureNo)? courseName[0].link : "#"}>
                    {courseName[0].courseName} ({elem.courseCode}) || {teacherName[0].teacherName} ({elem.teacherCode}) || {elem.section}
                </a>
            </div>
        ); 
    });

    return course;
}


export default CourseDetail;