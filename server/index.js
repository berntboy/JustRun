import app from "./app";

const port = import.meta.env.VITE_PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
