import AntecedentesGenerales from "../pages/AntecedentesGenerales";
import EstadoAvance from "../pages/EstadoAvance";
import Start from "../pages/Start"

const routes = [
  {
    path: "/",
    exact: true,
    component: Start,
  },
  {
    path: "/antecedentes-generales",
    exact: true,
    component: AntecedentesGenerales,
  },
  {
    path: "/estado-avance",
    exact: true,
    component: EstadoAvance,
  },
];

export default routes;
