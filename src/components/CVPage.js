import React, { Component} from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export class CVPage extends Component {
  constructor(props){
    super(props);
    this.state = { 
      numPages: null,
      pageNumber: 1 
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    return (
      <div className="cv-page">
        <div className="cv-text">
          <h1>Resume</h1>
        </div>
        <div  className="document">
          <Document
            className="pdf"
            file={process.env.PUBLIC_URL+"/CV.pdf"}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={this.state.pageNumber} width={1000} />
          </Document>
          <div>
        <br/>
        <br/>
        <nav className="doc-buttons">
              <button onClick={this.goToPrevPage}><FontAwesomeIcon icon={faChevronLeft}/></button>
              <button onClick={this.goToNextPage}><FontAwesomeIcon icon={faChevronRight}/></button>
        </nav>
        <p className="page-text">
          Page {this.state.pageNumber} of {this.state.numPages}
        </p>
        </div>
        </div>
        
      </div>
    );
  }
}

export default CVPage
