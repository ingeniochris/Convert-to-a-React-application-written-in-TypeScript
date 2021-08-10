import { Table } from "reactstrap";
import { data } from "./dataRowTable";

const columns = [
  { title: "Partida" },
  { title: "" },
  { title: "Destino" },
  { title: "Monto" },
];

const TableComercializacion = () => {
  return (
    <Table size="sm" responsive={true} bordered={true}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <th scope="row">{row.concept}</th>
            <td>{row.inicio_prog}</td>
            <td>{row.destino}</td>
            <td>{row.monto}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComercializacion;
