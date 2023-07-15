// const express = require('express');
// const morgan = require('morgan');
// const { createProxyMiddleware } = require('http-proxy-middleware')

// const app = express();
// app.use(morgan('dev'))

// app.use(
//     "/characters",
//      createProxyMiddleware({
//     target: "http://characters:8001",
//     changeOrigin: true,
//    })
// )

// app.use(
//     "/films",
//      createProxyMiddleware({
//     target: "http://films:8002",
//     changeOrigin: true,
//    })
// )

// app.use(
//     "/planets",
//      createProxyMiddleware({
//     target: "http://planets:8003",
//     changeOrigin: true,
//    })
// )

// app.listen(8000, () => {
//     console.log("Gateway on port 8000")
// })


const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express();
app.use(morgan('dev'))

// Configurar proxy para las rutas
const proxyOptions = {
  changeOrigin: true
};

app.use(
  "/Character",
  createProxyMiddleware({ ...proxyOptions, target: "http://Character:8001" })
);

app.use(
  "/Film",
  createProxyMiddleware({ ...proxyOptions, target: "http://Film:8002" })
);

app.use(
  "/Planet",
  createProxyMiddleware({ ...proxyOptions, target: "http://Planet:8003" })
);

app.listen(8000, () => {
  console.log("Gateway en el puerto 8000");
});
