import React, { Component} from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

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
      <div>
        <div className="cv-text">
          <h1>Resume</h1>
        </div>
        <div style={{ width: 1000 }} className="document">
          <Document
            file={process.env.PUBLIC_URL+"/CV.pdf"}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={this.state.pageNumber} width={1000} />
          </Document>
        </div>
        <div>
        <nav className="doc-buttons">
              <button onClick={this.goToPrevPage}>Prev</button>
              <button onClick={this.goToNextPage}>Next</button>
        </nav>
        <p className="page-text">
          Page {this.state.pageNumber} of {this.state.numPages}
        </p>
        </div>
      </div>
    );
  }
}

export default CVPage
