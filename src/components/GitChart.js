const URL = 'https://api.github.com/users/JRB-y/events/public';

const formatDataForChartJs = (inputArray) => {
  const result = inputArray.reduce((accumulator, currentItem) => {
    // Extract the date (YYYY-MM-DD) from the 'created_at' string
    const date = currentItem.created_at.split('T')[0];

    // If the date is not in the 'labels' array, add it and initialize its count in the 'data' array
    if (!accumulator.labels.includes(date)) {
      accumulator.labels.push(date);
      accumulator.data.push(0);
    }

    // Increment the count for the current date in the 'data' array
    const dateIndex = accumulator.labels.indexOf(date);
    accumulator.data[dateIndex] += 1;

    return accumulator;
  }, { labels: [], data: [] });

  // Sort the 'labels' and 'data' arrays by date
  const sortedIndices = result.labels.map((label, index) => index)
    .sort((a, b) => new Date(result.labels[a]) - new Date(result.labels[b]));

  result.labels = sortedIndices.map(index => result.labels[index]);
  result.data = sortedIndices.map(index => result.data[index]);

  return result;
}

const gitChart = async () => {
  const res = await(await fetch(URL)).json();
  return formatDataForChartJs(activities.value);
}

export {
  gitChart,
}