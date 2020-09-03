const itunesParser = require('./itunes-parser');
const feeds = require('./feeds');

describe('itunesParser', () => {
  it('should be able to read a basic feed', async () => {
    const result = await itunesParser(feeds.mff.blattEnPodd);
    expect(result).not.toBeNull();
  });
});
