import React, { useRef, useState } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import PrintTemplate from './PrintTemplate';

const Print = () => {
    const [title, setTitle] = useState('Watch List')
    const [comments, setComments] = useState('')

    const animeList = useRef(null);
    

    const exportPDF = () => {
        animeList.current.save();
    }
  
    return (
        <div style={{ height: '100vh', width: '100vw'}}>
            <button 
                className='btn btn-light'
                onClick={exportPDF} 
                style={{ margin: '0 auto', display:'block' }}>
                Download
            </button>
            <form style={{ textAlign: 'center', margin: '20px auto 0 auto', width:'30%'}}>
                <label className='label'>Title:</label>
                <input value={title} type="text" onChange={(e)=>setTitle(e.target.value)} />
                {/* <label className='label'>Comments:</label>
                <input value={comments} type="text" onChange={(e)=>setComments(e.target.value)} /> */}
            </form>
            <PDFExport 
                paperSize={'Letter'}
                fileName="animeList.pdf"
                title=""
                subject=""
                keywords=""
                ref={animeList}>
                    <div 
                        style={{
                            height: 792,
                            width: 612,
                            padding: 'none',
                            backgroundColor: 'white',
                            boxShadow: '5px 5px 5px black',
                            margin: 'auto',
                            overflowX: 'hidden',
                            overflowY: 'hidden'
                        }}
                    >
                        <PrintTemplate title={title} comments={comments}/>
                    </div>
            </PDFExport>
        </div>
   
    )
}

export default Print;
