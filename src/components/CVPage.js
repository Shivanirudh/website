import React, { Component} from 'react';
import { Document, Page} from 'react-pdf';
import {CV} from "./images/CV.pdf";

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
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file="/images/CV.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={this.state.pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {this.state.pageNumber} of {this.state.numPages}
        </p>
      </div>
    );
  }
}

export default CVPage
