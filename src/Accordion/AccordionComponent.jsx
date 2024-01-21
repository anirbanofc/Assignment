import React, { useState } from 'react'
import accordionData from '../component/data/AccordionData'
import Accordion from './Accordion'

export default function AccordionComponent() {

    let [hide,setHide]=useState(0)

    return (
      <div>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
                 {accordionData.map(({id,que,detail})=>{
              return <Accordion key={id} que={que} detail={detail} id={id} hide={hide} setHide={setHide}/>
          })}
      </div>
    )
}
