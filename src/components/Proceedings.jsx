import React from 'react';

export default function Proceedings() {
  return (
    <>
      <div className="md:leading-7 md:text-xl">
        <p className="">
          We are pleased to announce that the DCCN 2024 post-proceedings book (LNCS, <a href="http://link.springer.com/openurl.asp?genre=issue&issn=0302-9743&volume=15460" className=" text-indigo-700" target="_blank">volume 15460</a>) has been published by Springer Nature. The book is available online. The conference participants are granted the four weeks free online access to the e-book of the LNCS proceedings.
        </p>
        <div className="flex mt-6">
          <div className="mr-5" style={{maxWidth: "140px", minWidth: "120px"}}>
            <img src="/images/lncs_cover.png" alt="LNCS Volume cover"/>
          </div>
          <div style={{wordBreak: "break-word"}}>
            <p className="font-semibold">
              LNCS 15460
              <br />
              <a className="text-blue-500" target="_blank" href="https://link.springer.com/book/10.1007/978-3-031-80853-1">https://link.springer.com/book/10.1007/978-3-031-80853-1</a>
            </p>
          </div>
        </div>

        {/*<div className="flex mt-6">*/}
        {/*  <div className="mr-5" style={{maxWidth: "140px", minWidth: "120px"}}>*/}
        {/*    <img src="/images/ccis_cover.png" alt="CCIS Volume cover"/>*/}
        {/*  </div>*/}
        {/*  <div style={{wordBreak: "break-word"}}>*/}
        {/*    <p className="font-semibold">*/}
        {/*      CCIS 1552:*/}
        {/*      <br />*/}
        {/*      <a className="text-blue-500" target="_blank" href="https://link.springer.com/book/10.1007/978-3-030-97110-6">https://link.springer.com/book/10.1007/978-3-030-97110-6</a>*/}
        {/*    </p>*/}
        {/*    <p className="mt-8">*/}
        {/*      The access to the CCIS volume is granted for the period from March 7 to April 7, 2023.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  )
}
