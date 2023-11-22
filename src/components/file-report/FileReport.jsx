import React from 'react';
import pdfImage from '../../img/file_pdf.png';
import style from '../../pages/Global.module.scss';

export const FileReport = ({ fileURL, fileName }) => {
  return (
    <>
      <a className={style.row} href={fileURL}>
        <img src={pdfImage} alt="" />
        <p>{fileName}</p>
      </a>
      <hr />
    </>
  );
};
