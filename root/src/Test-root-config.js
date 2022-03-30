import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@Test/vue",
  app: () => System.import("@Test/vue"),
  activeWhen: ["/vue"],
});

// registerApplication({
//   name: "@Test/navbar",
//   app: () => System.import("@Test/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
