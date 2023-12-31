const express = require("express");
const router = express.Router();
const app = express();
const axios = require("axios");
const { stringify } = require("querystring");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  /*let response = null;
  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "49e1ce36-60c4-4371-8aae-7841a1928f90",
          },
        }
      );
    } catch (ex) {
      response = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      //console.log(json);
      resolve(json);
      res.send(json);
    }
  });*/
  let val = { text: "Funcionou", status: 200 };
  res.send(JSON.stringify(val));
});

app.use("/", router);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
