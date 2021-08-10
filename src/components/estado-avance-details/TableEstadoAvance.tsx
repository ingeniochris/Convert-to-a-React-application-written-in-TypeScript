import { Table } from "reactstrap";
import { data, dataFooter } from "./dataRowTable";
const columns = [
  { title: "Costo Total del Proyecto" },
  { title: "Total Avance a la Fecha" },
  { title: "Total Avance Anterior" },
  { title: "Total Avance del Período" },
];

const subCol = [
  { subTitle: "" },
  { subTitle: "% Inc." },
  { subTitle: "" },
  { subTitle: "% Inc." },
  { subTitle: "" },
  { subTitle: "% Inc." },
  { subTitle: "" },
  { subTitle: "% Inc." },
];

const TableEstadoAvance = () => {
  return (
    <Table size="sm" responsive={true} bordered={true}>
      <thead>
        <tr>
          <th rowSpan={2}>Partidas / Montos</th>
          {columns.map((col) => (
            <th colSpan={2}>{col.title}</th>
          ))}
        </tr>
        <tr>
          {subCol.map((col) => (
            <th>{col.subTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <th scope="row">{row.concept}</th>
            <td>{row.col1_1}</td>
            <td>{row.col1_2}</td>
            <td>{row.col2_1}</td>
            <td>{row.col2_2}</td>
            <td>{row.col3_1}</td>
            <td>{row.col3_2}</td>
            <td>{row.col4_1}</td>
            <td>{row.col4_2}</td>
          </tr>
        ))}
        {dataFooter.map((row) => (
          <tr>
            <th className="colspan7" colSpan={7}>
              {row.concept}
            </th>
            <td>{row.col4_1}</td>
            <td>{row.col4_2}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableEstadoAvance;
