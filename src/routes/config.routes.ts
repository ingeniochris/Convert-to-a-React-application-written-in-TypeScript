import AntecedentesGenerales from "../pages/AntecedentesGenerales";
import EstadoAvance from "../pages/EstadoAvance";

const routes = [
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
