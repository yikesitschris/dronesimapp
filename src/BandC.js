const BandC = ({ topBandC }) => {
  // Sorts the classifications by value
  const sortedClassifications = Object.entries(topBandC.classification).sort(
    (a, b) => b[1] - a[1]
  );

  // Sorts the bands by value
  const sortedBands = Object.entries(topBandC.bands).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className="stats">
      <div className="stats-item">
        <h3>Top Classifications</h3>
        <p>
          1. {sortedClassifications[0][0]}: {sortedClassifications[0][1]}
          <br />
          2. {sortedClassifications[1][0]}: {sortedClassifications[1][1]}
        </p>
      </div>
      <div className="stats-item">
        <h3>Top Bands</h3>
        <p>
          1. {sortedBands[0][0]}: {sortedBands[0][1]} <br />
          2. {sortedBands[1][0]}: {sortedBands[1][1]}
        </p>
      </div>
    </div>
  );
};

export default BandC;
