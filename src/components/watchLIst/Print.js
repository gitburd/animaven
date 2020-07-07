import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import PrintTemplate from './PrintTemplate';

class Print extends Component {
    animeList;

    state={
        redirect:false       
    }

    exportPDF = () => {
        this.animeList.save();
        this.setState({redirect:true})
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100vw', paddingTop: 20}}>
                <div style={{ textAlign: 'center', marginBottom: 10 }}>
                    <button 
                        className='btn btn-light'
                        onClick={this.exportPDF} 
                        style={{ margin: 'auto' }}>
                        download
                    </button>
                </div>
                <PDFExport paperSize={'Letter'}
                    fileName="animeList.pdf"
                    title=""
                    subject=""
                    keywords=""
                    ref={(r) => this.animeList = r}>
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
                        <PrintTemplate/>
                    </div>
                </PDFExport>
            </div>
        )
    }
}

export default Print;
