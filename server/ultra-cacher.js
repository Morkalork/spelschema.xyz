let lastChecks = {};
let dataSet = {};

const ultraCacher = async (key, cacheTimeout, getData) => {
  const now = Date.now();
  const cacheTime = lastChecks[key] || 0;
  const timeDiff = Math.round((now - cacheTime) / 1000);
  const timeToUpdate = timeDiff > cacheTimeout;

  if (!timeToUpdate) {
    const data = dataSet[key];
    if (data.length !== 0) {
      return data;
    }
  }

  dataSet[key] = await getData();
  lastChecks[key] = Date.now();

  return dataSet[key];
};

module.exports = ultraCacher;
