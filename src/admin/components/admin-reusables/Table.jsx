import React from 'react';
import style from '../adminStyles/Admin.module.css'

const VolunteerTable = ({ volunteers }) => {
  return (
    <table border="1" cellPadding="10" cellSpacing="0" className={style.table}>
      <thead>
        <tr className={style.tr}>
          <th className={style.th}>S/N</th>
          <th className={style.th}>Name</th>
          <th className={style.th}>Email</th>
          <th className={style.th}>DOB</th>
          <th className={style.th}>Phone</th>
          <th className={style.th}>Place of Origin</th>
          <th className={style.th}>Reason</th>
          <th className={style.th}>Date</th>
          <th className={style.th}>Block</th>
        </tr>
      </thead>

      <tbody>
        {volunteers.map((volunteer, index) => (
          <tr key={index} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{volunteer.name}</td>
            <td className={style.td}>{volunteer.email}</td>
            <td className={style.td}>{volunteer.dob}</td>
            <td className={style.td}>{volunteer.phone}</td>
            <td className={style.td}>{volunteer.placeOfOrigin}</td>
            <td className={style.td}>{volunteer.reason}</td>
            <td className={style.td}>{volunteer.date}</td>
            <td className={style.td}>{volunteer.block}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VolunteerTable;
