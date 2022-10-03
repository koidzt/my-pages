import React from 'react';
import ResumeFile from '../../../source/document/resume.pdf';
import Picture from '../../../source/image/personal.jpeg';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function General() {
  const onClickDocument = () => {
    fetch(ResumeFile).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Thanawan_Panitpongsri.pdf';
        alink.click();
      });
    });
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-4 text-center ">
          <img className="border border-4 border-info rounded-circle mb-3" width={200} height={200} src={Picture} />
        </div>
        <div className="col-sm-12 col-md-8">
          <div className="d-flex">
            <h3 className="text-info">Thanawan Panitpongsri (Koi)</h3>
            <button
              id="document-file"
              className="btn btn-second my-0 mx-2"
              title={'Thanawan_Panitpongsri.pdf'}
              onClick={onClickDocument}
            >
              <FontAwesomeIcon className="text-light" icon={faFileLines} />
            </button>
          </div>

          <div className="row align-items-end mt-4">
            <div className="col-sm-12 col-md-5">
              <div className="d-flex">
                <h5>Gander : </h5> <span className="mx-3">Female</span>
              </div>

              <div className="d-flex">
                <h5>Age :</h5>
                <span className="mx-3">{dayjs().from(dayjs('1992-07-27'), true)}</span>
              </div>

              <div className="d-flex">
                <h5>Date of Birth :</h5>
                <span className="mx-3">{dayjs('1992-07-27').format('DD MMMM YYYY')}</span>
              </div>

              <div className="d-flex">
                <h5>Nationality :</h5>
                <span className="mx-3">Female</span>
              </div>

              <div className="d-flex">
                <h5>Thai Religion :</h5>
                <span className="mx-3">Buddhism</span>
              </div>
            </div>

            <div className="col-sm-12 col-md-7 text-start">
              <div className="d-flex">
                <h5>Contact</h5>
              </div>
              <div className="d-flex">
                <h6>Mobile Phone: : </h6> <span className="mx-3">(088) 617 6222</span>
              </div>

              <div className="d-flex">
                <h6 className="text-nowrap">Email Address:</h6>
                <span className="mx-3">thanawan.koi@hotmail.com</span>
              </div>

              <div className="d-flex">
                <h6 className="text-nowrap">Home Address : </h6>
                <span className="mx-3 text-wrap">579 Sukhumvit22 Road, Klongton, Klongtoey, Bangkok 10110</span>
              </div>

              <div className="d-flex">
                <h6>Github :</h6>
                <a className="mx-3" target="_blank" href="https://github.com/koidzt">
                  https://github.com/koidzt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row mt-5">
        <div className="col-sm-12 col-md-4">Technical Skills</div>
        <div className="col-sm-12 col-md-8">Work Experience</div>
      </div> */}
    </div>
  );
}

export default General;
