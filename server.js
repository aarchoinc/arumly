const express = require("express");
const history = require("connect-history-api-fallback");
const app = express();

const staticFileMiddleware = express.static("dist");
app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);
app.use(staticFileMiddleware);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
