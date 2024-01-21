import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
function Faq({id,question,answer})
{
    let [isbool,setIsbool]= useState(false);
    let toggletext=()=>
    {
        setIsbool(!isbool)
    }
    return(
        <div>
            <h3><span>{id}. </span>{question} <i onClick={toggletext}> {isbool ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleDown} />} </i> </h3>
            <p>{isbool ? answer : ""}</p>
        </div>
    );
}
export default function FaqDetails()
{
    let details=
    [
        {
            id:1.,
            Question:"how you'll organize the FAQ page?",
            Answer:"As you'll see from the examples below, not every FAQ page looks the same. Depending on what your company is selling and how many products it offers, your FAQ page might consist of a single page with a list of questions or several pages linked together. What's best for your business will vary based on the needs of your customers and how easy it is to"
        },
        {
            id:2.,
            Question:"Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
            Answer:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
        },
        {
            id:3.,
            Question:"Dolor sit amet consectetur adipiscing elit pellentesque?",
            Answer:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
        },
        {
            id:4.,
            Question:"Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
            Answer:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
        }
        
    ]
    // const [faq, setFaq] = useState(details);
    return (
        <div style={{alignContent:"center"}}>
            <h1>Frequently Asked Questions</h1>
            {details.map((detail,index)=>(
                <Faq id={detail.id}
                question={detail.Question} 
                answer={detail.Answer}
                key={index}
                />
            ))}
        </div>
    )
}