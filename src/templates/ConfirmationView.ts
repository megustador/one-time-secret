import { render as baseView } from './BaseView';

// todo make this work by reference

export function render(secretUrl: string): string {
  const view = `
  <div class="wrapper">
  <div class="alert alert-success" style="width: 100%" role="alert">
    <h2 class="alert-heading">Confirmation</h2>
    <p>Once this link is visited, the content will no longer be available.</p>
    <p>After the expiry time is reached, the content  will no longer be available.</p>
    <hr>
    <p class="mb-0">NOTE: Link will expire in 3 hours!</p>
  </div>
    <script>
    function copy() {
      let textarea = document.getElementById("textarea");
      textarea.select();
      document.execCommand("copy");
    }
    </script>
    <label for="form-control">Generated link:</label>
    <textarea id="textarea" class="form-control" name="secret" style="width: 100%" id="exampleFormControlTextarea1" rows="3" readonly>${secretUrl}</textarea>
    <div class="buttons">
      <button class="btn btn-primary" type="button" onclick="copy()">Copy to clipboard</button>
      <a href="./new">
      <button type="button" class="btn btn-secondary">Go Back</button>
      </a>
    </div>
    </div>
  </div>
`.trim();
  return baseView(view);
}

