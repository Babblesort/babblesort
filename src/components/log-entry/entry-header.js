import React from 'react';
import './entry-header.scss';

function EntryHeader({ title, displayDate }) {
  return (
    <header>
      <h1>{title}</h1>
      <div className="entry-date">{displayDate}</div>
    </header>
  );
}

export default EntryHeader;
