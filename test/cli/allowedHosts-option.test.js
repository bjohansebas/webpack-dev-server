"use strict";

const { describe, it } = require("node:test");
const { testBin } = require("../helpers/test-bin");
const port = require("../ports-map")["cli-allowed-hosts"];

describe('"allowedHosts" CLI option', { concurrency: true }, () => {
  it('should work using "--allowed-hosts auto"', async (t) => {
    const { exitCode } = await testBin([
      "--port",
      port,
      "--allowed-hosts",
      "auto",
    ]);

    t.assert.strictEqual(exitCode, 0);
  });

  it('should work using "--allowed-hosts all"', async (t) => {
    const { exitCode } = await testBin([
      "--port",
      port,
      "--allowed-hosts",
      "all",
    ]);

    t.assert.strictEqual(exitCode, 0);
  });

  it('should work using "--allowed-hosts testhouse.com"', async (t) => {
    const { exitCode } = await testBin([
      "--port",
      port,
      "--allowed-hosts",
      "testhouse.com",
    ]);

    t.assert.strictEqual(exitCode, 0);
  });

  it('should work using "--allowed-hosts testhost.com --allowed-hosts testhost1.com"', async (t) => {
    const { exitCode } = await testBin([
      "--port",
      port,
      "--allowed-hosts",
      "testhost.com",
      "--allowed-hosts",
      "testhost1.com",
    ]);

    t.assert.strictEqual(exitCode, 0);
  });
});
