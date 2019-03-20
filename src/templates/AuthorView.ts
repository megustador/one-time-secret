import { render as baseView } from './BaseView';

export function render(url: string): string {
  const view = `
    <div class="wrapper">
      <h1>Share a secret</h1>
      <form action='${url}' method='POST'>
      <label for=secret>Secret:</label>
      <br>
      <textarea class="form-control" name="secret" style="width: 75%" id="exampleFormControlTextarea1" rows="3"></textarea>
      <br>
      <div class="alert alert-primary" role="alert">
         Generated link will expire in 3 hours!
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  
  <br>
  </div>
`.trim();
  return baseView(view);
}
