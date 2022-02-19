import CourseDetail from './CourseDetail';
import Timing from './Timing';

// Monday--Saturday API is the schedule of course on monday to saturday[days]
import Monday  from './API/Monday';
import Tuesday from './API/Tuesday';
import Wednesday from './API/Wednesday';
import Thursday from './API/Thursday';
import Friday from './API/Friday';
import Saturday from './API/Saturday';

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
                        <Timing />
                    </div>
                </div>
                <div className='monday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Monday</span>
                    </div>
                    <div className='time-table-content'>
                        <CourseDetail daysComponent={Monday} day={1}/>
                    </div>
                </div>
                <div className='tuesday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Tuesday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail daysComponent={Tuesday} day={2}/>
                    </div>
                </div>
                <div className='wednesday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Wednesday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail daysComponent={Wednesday} day={3}/>
                    </div>
                </div>
                <div className='thursday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Thursday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail daysComponent={Thursday} day={4}/>
                    </div>
                </div>
                <div className='friday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Friday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail daysComponent={Friday} day={6}/>
                    </div>
                </div>
                <div className='saturday flex-vertical'>
                    <div className='time-table-title'>
                        <span className='txt-strong'>Saturday</span>
                    </div>
                    <div className='time-table-content'>
                    <CourseDetail daysComponent={Saturday} day={6}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeTable;



