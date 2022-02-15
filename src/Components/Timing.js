// Timing API to fetch the static timing of the time-table like: [9:40 - 10:20 AM] 
import TimeDetail from './API/TimeDetail';

// Time component is used to write the timing of the time table like [9:40 - 10:20 AM] 
const Time = () => { 
    let timing = TimeDetail.map((elem) => { 
        return <div key={elem.id} className="content-box padding-8-16">{elem.timing}</div>;
    });
    return timing;
}


export default Time;
