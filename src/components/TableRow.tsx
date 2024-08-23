import FarmerInfo from "./RowData";
import { FarmerInfoProps } from "./RowData";

interface TableRowProps {
  farmers: FarmerInfoProps[];
}

const TableRow: React.FC<TableRowProps> = ({ farmers }) => {
  return (
    <tr className={`TableRow`}>
      {farmers.map((farmer) => (
        <FarmerInfo key={farmer.farmerName} {...farmer} />
      ))}
    </tr>
  );
};

export default TableRow;
