import { render as baseView } from './BaseView';

export function render(secret: string): string {
  const view = `
  <nav class="navbar navbar-light">
    <a class="navbar-brand" href="./new">
    <img src="https://northeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Ft1solutionsro-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!nQn-tKgRWkaF6yIIV0XeSr6QwmRPtJpApmB-dL49f4AlWKwao4snSoKLCP1kc7sh%2Fitems%2F01L33IJWGPBCEYQUCCJBGLPC27SDYI2OZ2%3Fversion%3DPublished&encodeFailures=1&ctag=%22c%3A%7B888908CF-4250-4C48-B78B-5F90F08D3B3A%7D%2C2%22&width=1854&height=885&srcWidth=&srcHeight=" width="200" height="" class="d-inline-block align-top" alt="">
    </a>
  </nav>

  <div class="wrapper">
    <h2>Confirmation</h2>
    <p>Once this link is visited, the content will no longer be available.</p>
    <p>After the expiry time is reached, the content  will no longer be available.</p>
    ${secret}
  </div>`.trim();
  return baseView(view);
}