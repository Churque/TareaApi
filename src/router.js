import { createRouter, createWebHistory } from "vue-router";
import pagInicial from "./pages/PaginaPrincipal";
import segundaPag from "./pages/HabilidadesPokemon";

const routes = [
  {
    name: "HabilidadesPokemon",
    path: "/HabilidadesPokemon/:id",
    component: segundaPag,
    props : true,
  },
  {
    name: "pagInicial",
    path: "/",
    component: pagInicial,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
