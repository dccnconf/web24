import React from 'react';

export default function Proceedings() {
  return (
    <>
      <div className="md:leading-7 md:text-xl">
        <p className="">
          We are pleased to announce that both of the DCCN 2024 post-proceedings books (LNCS, <a href="http://link.springer.com/openurl.asp?genre=issue&issn=0302-9743&volume=15460" className=" text-indigo-700" target="_blank">volume 15460</a>, and CCIS, <a href="https://link.springer.com/book/10.1007/978-3-031-89211-0" className=" text-indigo-700" target="_blank">volume 2484</a>)
          have been published by Springer Nature. The books are available online. The conference participants are granted the four weeks free online access to the e-books of the DCCN post-proceedings.
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

        <div className="flex mt-6">
          <div className="mr-5" style={{maxWidth: "140px", minWidth: "120px"}}>
            <img src="/images/ccis_cover.png" alt="CCIS Volume cover"/>
          </div>
          <div style={{wordBreak: "break-word"}}>
            <p className="font-semibold">
              CCIS 2484:
              <br />
              <a className="text-blue-500" target="_blank" href="https://link.springer.com/book/10.1007/978-3-031-89211-0">https://link.springer.com/book/10.1007/978-3-031-89211-0</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
