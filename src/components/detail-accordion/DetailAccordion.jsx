import React from 'react'
import '../detail-accordion/detailAccordion.scss'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
const DetailAccordion = () => {
  return (
      <div className="accordion">
          <h2>
          Course content
          </h2>
          <p>
          Level Beginner • 13 Lectures • 03:06:14 Total Hours
          </p>
          <Accordion allowToggle>
    <AccordionItem>
      <h2 >
        <AccordionButton>
          <Box flex='1' textAlign='left' className='accord-box'>
          Introducion
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className='accord-into'>
       <ul>
           <li>Pretium ligula auctor nulla vitae massa aliqum blandit</li>
           <li>Rutrum risus integer magna at pretium purus pretium cubilia laoreet</li>
       </ul>
       <p>Mauris donec ociis magnis sapien</p>
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left' className='accord-box'>
          Getting Started
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className='accord-into'>
      <ul>
           <li>Pretium ligula auctor nulla vitae massa aliqum blandit</li>
           <li>Rutrum risus integer magna at pretium purus pretium cubilia laoreet</li>
       </ul>
       <p>Mauris donec ociis magnis sapien</p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left' className='accord-box'>
          User Generated Content
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className='accord-into'>
      <ul>
           <li>Pretium ligula auctor nulla vitae massa aliqum blandit</li>
           <li>Rutrum risus integer magna at pretium purus pretium cubilia laoreet</li>
       </ul>
       <p>Mauris donec ociis magnis sapien</p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left' className='accord-box'>
          Course Assessment
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className='accord-into'>
      <ul>
           <li>Pretium ligula auctor nulla vitae massa aliqum blandit</li>
           <li>Rutrum risus integer magna at pretium purus pretium cubilia laoreet</li>
       </ul>
       <p>Mauris donec ociis magnis sapien</p>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
      </div>

  )
}

export default DetailAccordion