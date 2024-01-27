import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";



const TimeLine = () => {

  return (
    <div id='timeline' className='text-white w-full sm:h-[750px] h-auto'>
        <div className='flex flex-col items-center'>
          
            <h1 className='text-2xl font-bold mt-20 text-center'>MY TIMELINE</h1>
            <div className='h-1 w-[100px] rounded-sm bg-white'></div>
        </div>
        <div className='mt-10'>
                          
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#fff' }}
                date="2022 - 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title text-black">VGEC,chandkheda</h3>
                <h4 className="vertical-timeline-element-subtitle text-black">Currently I am persuing my B.Tech</h4>
                <p className='text-black'>
                  Information Technology
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#fff' }}
                date="2022 - 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title text-black"></h3>
                <h4 className="vertical-timeline-element-subtitle text-black">Panticipated In HackVGEC Hackathon</h4>
                <p className='text-black'>
                  Created Project based on web development
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: 'red', color: '#fff' }}
                icon={<FaSchool />}
              >
                <h3 className="vertical-timeline-element-title text-black">Higher Secondary</h3>
                <h4 className="vertical-timeline-element-subtitle text-black">12th</h4>
                <p className='text-black'>
                  Got 90% in Board
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        <div className='w-full mt-[50px] h-[0.5px] bg-white'></div>
    </div>
  )
}

export default TimeLine