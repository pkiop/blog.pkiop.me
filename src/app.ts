// Step 1: Create a Vue instance
import Vue from 'vue';
const app = new Vue({
  template: `<div>Hello World</div>`,
});

// Step 2: Create a renderer
import * as Renderer from 'vue-server-renderer';
const renderer = Renderer.createRenderer();

// Step 3: Render the Vue instance to HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err;
  console.log(html);
  // => <div data-server-rendered="true">Hello World</div>
});

// in 2.5.0+, returns a Promise if no callback is passed:
renderer
  .renderToString(app)
  .then((html) => {
    console.log(html);
  })
  .catch((err) => {
    console.error(err);
  });
