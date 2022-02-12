import Timing from './API/Timing';
import Monday  from './API/Monday';
import Tuesday from './API/Tuesday';
import Wednesday from './API/Wednesday';
import Thursday from './API/Thursday';
import Friday from './API/Friday';
import Saturday from './API/Saturday';
import Subject from './API/Subject';
import Teachers from './API/Teachers';
import { useState, useEffect } from 'react';




const Time = () => {
    let timing = Timing.map((elem) => {
        return <div key={elem.id} className="content-box padding-8-16">{elem.timing}</div>;
    });
    return timing;
}

const setTime = (hour,min,sec) => {
    const d = new Date();
    d.setHours(hour);
    d.setMinutes(min);
    d.setSeconds(sec);

    return d;
}

const setNextClass = (addDay) => {
    const d = new Date(setTime(9,40,0));
    d.setDate(d.getDate() + addDay);
    return d;
} 

const timeDifference = (upcoming) => {
    const now = new Date();
    const up = new Date(upcoming);
    return up.getTime() - now.getTime();
}

const displayUpcomingClassTiming = (nextUpcomingClass) => {
    
}

const CourseDetail = ({component, day}) => {
    const [period, updatePeriod] = useState(null);
    const [nextUpcomingClass, updateNextUpcomingClass] = useState(null);
    const [totalSecond, updateSecond] = useState(1000);

    const d = new Date();

    

    const classTime = {
        _1st: [setTime(9,40,0) , setTime(10,20,59)],
        _2nd: [setTime(10,30,0) , setTime(11,10,59)],
        _3rd: [setTime(11,20,0) , setTime(12,0,59)],
        _4th: [setTime(12,10,0) , setTime(12,50,59)],
        _5th: [setTime(13,0,0) , setTime(13,40,59)],
        _6th: [setTime(13,50,0) , setTime(14,30,59)],
        _7th: [setTime(14,40,0) , setTime(15,20,59)],
        _8th: [setTime(15,30,0) , setTime(16,10,59)],
    }

    useEffect(() => {
        if(day == d.getDay()) {
            setTimeout(() => {
                if(d >= classTime._1st[0] && d <= classTime._1st[1])  {
                    updatePeriod(0);
                    updateNextUpcomingClass(classTime._2nd[0]);
                    updateSecond(() => {
                        return timeDifference(nextUpcomingClass)
                    });
                } else if(d >= classTime._2nd[0] && d <= classTime._2nd[1]) {
                    updatePeriod(1);
                    updateNextUpcomingClass(classTime._3rd[0]);
                    updateSecond(() => {
                        return timeDifference(nextUpcomingClass)
                    });
                } else if(d >= classTime._3rd[0] && d <= classTime._3rd[1]) {
                    updatePeriod(2);
                    updateNextUpcomingClass(classTime._4th[0]);
                    updateSecond(() => {
                        return timeDifference(nextUpcomingClass)
                    });
                } else if(d >= classTime._4th[0] && d <= classTime._4th[1]) {
                    updatePeriod(3);
                    updateNextUpcomingClass(classTime._5th[0]);
                    updateSecond(() => {
                        return timeDifference(nextUpcomingClass)
                    });
                } else if (d >= classTime._5th[0] && d <= classTime._5th[1]) {
                    updatePeriod(4);
                    updateNextUpcomingClass(classTime._6th[0]);
                    updateSecond(() => {
                        return timeDifference(nextUpcomingClass)
                    });
                } else if(d >= classTime._6th[0] && d <= classTime._6th[1]) {
                    updatePeriod(5);
                    updateNextUpcomingClass(classTime._7th[0]);
                    updateSecond(() => {
                        return timeDifference(nextUpcomingClass)
                    });
                } else if(d >= classTime._7th[0] && d <= classTime._7th[1]) {
                    updatePeriod(6);
                    updateNextUpcomingClass(classTime._8th[0]);
                    updateSecond(() => {
                        return timeDifference(nextUpcomingClass)
                    });
                } else if(d >= classTime._8th[0] && d <= classTime._8th[1]) {
                    updatePeriod(7);
                    if(day == 6) {
                        updateNextUpcomingClass(setNextClass(2));
                        updateSecond(() => {
                            return timeDifference(setNextClass(2));
                        });
                    } else {
                        updateNextUpcomingClass(setNextClass(1));
                        updateSecond(() => {
                            return timeDifference(setNextClass(1));
                        });
                    }
                } else {
                    updatePeriod(null);
                    if(day == 6) {
                        updateNextUpcomingClass(setNextClass(2));
                        updateSecond(() => {
                            return timeDifference(setNextClass(2));
                        });
                    } else {
                        updateNextUpcomingClass(setNextClass(1));
                        updateSecond(() => {
                            return timeDifference(setNextClass(1));
                        });
                    }
                }
            },totalSecond);
        } else {
            updatePeriod(null);
            if(d.getDay() == 0) {
                
                updateNextUpcomingClass(setNextClass(1));
                updateSecond(() => {
                    return timeDifference(setNextClass(1));
                });
            }
        }
        
        let countDownDate = new Date(nextUpcomingClass).getTime(); // upcoming event 
        let x = setInterval(function() { // Update the count down every 1 second
        let now = new Date().getTime(); // Get today's date and time
        let distance = countDownDate - now; // Find the distance between now and the count down date

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        console.log(days + "D " + hours + "H " + minutes + "M " + seconds + "S ");

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            console.log("EXPIRED");
        }
        }, 1000);

    },[period, totalSecond]);

    let course = component.map((elem) => {
        if(elem.courseCode == '')
        return <div  key={elem.id} className="content-box no-class"></div>;

        const courseName = Subject.filter((name) => {
            return elem.courseCode == name.courseCode;
        });

        const teacherName = Teachers.filter((name) => {
            return elem.teacherCode == name.teacherCode;
        });
        return(
            <div key={elem.id} className={`content-box ${(elem.id === period)?'active':''}`}>
                <a href={(elem.id === period)? courseName[0].link : "#"}>
                    {courseName[0].courseName} ({elem.courseCode}) || {teacherName[0].teacherName} ({elem.teacherCode}) || {elem.section}
                </a>
            </div>
            
        ); 
    });

    return course;
}

const TimeTable = () => {
    return(
        <div className='container'>
            <div className='content-title'>
                <h2 className='txt-strong'>Time Table</h2>
            </div>
            <div className='content-body'>
                <div className='timing flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Timing</span>
                    </div>
                    <div className='time-table-content'>
                        <Time />
                    </div>
                </div>
                <div className='monday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Monday</span>
                    </div>
                    <div className='time-table-content'>
                        <CourseDetail component={Monday} day={1}/>
                    </div>
                </div>
                <div className='tuesday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Tuesday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail component={Tuesday} day={2}/>
                    </div>
                </div>
                <div className='wednesday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Wednesday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail component={Wednesday} day={3}/>
                    </div>
                </div>
                <div className='thursday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Thursday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail component={Thursday} day={4}/>
                    </div>
                </div>
                <div className='friday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Friday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail component={Friday} day={5}/>
                    </div>
                </div>
                <div className='saturday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Saturday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail component={Saturday} day={6}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeTable;



