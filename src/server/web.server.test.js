import WebServer from './web.server';

describe('Started', () => {
    let webServer = null;
    beforeAll(() => {
        webServer = new WebServer();
    })
    test('Should start and trigger a callback', async () => {
        let promise = webServer.start();
        await expect(promise).resolves.toBeUndefined();
    })
    test("Should stop and trigger a callback", async () => {
        let promise = webServer.stop();
        await expect(promise).resolves.toBeUndefined();
    })
})