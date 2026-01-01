import React, { useEffect, useState } from 'react';

function DateDisplay() {
  const [currentDate, setCurrentDate] = useState('');

  const updateDate = () => {
    const today = new Date();
    const DD = today.getDate();
    const MM = today.getMonth() + 1;
    const YY = today.getFullYear();

    const formatDays = DD.toString().padStart(2, '0');
    const formatMonth = MM.toString().padStart(2, '0');
    const formattedDate = `${YY}/${formatMonth}/${formatDays}`;
    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    updateDate();
    const interval = setInterval(updateDate, 10000);
    return () => clearInterval(interval); // Clean up
  }, []);

  return <div id="date1">{currentDate}</div>;
}

export default DateDisplay;
