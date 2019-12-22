import * as React from 'react';

export const Searchbar: React.SFC<{}> = () => {
  return (
    <div className='search-bar'>
      <input type='text' />
      <button>Show Archived</button>
    </div>
  );
};
