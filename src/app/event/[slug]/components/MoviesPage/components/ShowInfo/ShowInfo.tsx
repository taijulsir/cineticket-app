import React from 'react';

function ShowInfo ({statistics}: { statistics?: any }) {
  return (
    <div>
      <h3 className="font-medium pt-6 md:pt-6">Book your seats</h3>
      <p className="text-base sm:text-sm leading-relaxed text-primary my-5">
        The Show is running in {statistics?.totalCities} cities in {statistics?.totalTheaters} theaters in {statistics?.totalHalls} halls.
      </p>
    </div>
  );
};

export default ShowInfo;
