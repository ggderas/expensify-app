const 
    express = require("express"),
    path = require('path');

const app = express();
const PUBLIC_PATH = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(PUBLIC_PATH));

app.get('*', (req, res) => {
    res.sendFile(path.join(PUBLIC_PATH, 'index.html'));
})

app.listen(port, () => {
    console.log("Server is up");
});