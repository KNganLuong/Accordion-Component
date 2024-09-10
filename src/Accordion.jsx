/* eslint-disable react/prop-types */
import { useState } from 'react'
import { AccordionData } from './AccordionData'
import { v4 as uuidv4 } from 'uuid'

const AccordionHeader = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <section>
      <h3 onClick={() => setOpen(!isOpen)}>{title}</h3>
      {isOpen && <p>{content}</p>}
    </section>
  )
}

const Accordion = () => {
  return (
    <>
      {AccordionData.map((item) => (
        <AccordionHeader
          key={uuidv4()}
          title={item.title}
          content={item.content}
        ></AccordionHeader>
      ))}
    </>
  )
}
export default Accordion
