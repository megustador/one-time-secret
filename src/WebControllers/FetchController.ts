import { IncomingMessage, ServerResponse } from 'http';
import * as nodeUrl from 'url';

import { WebControllerInterface } from './WebControllerInterface';
import { StorageInterface } from '../one-time-secret/StorageInterface';

export class FetchController implements WebControllerInterface {
  public constructor(
    private secretStore: StorageInterface,
    private decrypt: Function
  ) {}

  public async execute(request: IncomingMessage, response: ServerResponse) {
    const url = nodeUrl.parse(<string> request.url, true);

    if (! (url.query.key && url.query.iv && url.query.pass)) {
      // Brute forces will have to wait 200ms or flood the server.
      setTimeout(() => {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('');
      }, 200);

      return;
    }

    const secret = await this.secretStore.get(<string> url.query.key);
    const iv = Buffer.from(<string> url.query.iv, 'hex');
    const pass = url.query.pass;

    const decrypted = this.decrypt(secret.secret, iv, pass);

    // Brute forces will have to wait 200ms or flood the server.
    setTimeout(() => {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end(decrypted);
    }, 200);
  }
}
