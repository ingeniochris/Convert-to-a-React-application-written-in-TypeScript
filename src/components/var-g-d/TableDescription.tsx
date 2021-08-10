import { Table } from "reactstrap";
import { data } from "./dataRowTable";

const columns = [
  { title: "" },
  { title: "Inicio Prog." },
  { title: "Antes de Recep. Mun." },
  { title: "Con Recep. Mun." },
];

const TableDescription = () => {
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
            <td>{row.antes}</td>
            <td>{row.con}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableDescription;
