import React from "react";
import { Product } from "../../../../../../../utils/types";

interface InstructionTabProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const InstructionTab: React.FC<InstructionTabProps> = ({
  product,
  setProduct,
}) => {
  const addRow = () => {
    const newRow = product.instructionTable.columns.map(() => ""); // новий рядок з пустих клітинок
    setProduct({
      ...product,
      instructionTable: {
        ...product.instructionTable,
        rows: [...product.instructionTable.rows, newRow],
      },
    });
  };

  const addColumn = () => {
    setProduct({
      ...product,
      instructionTable: {
        columns: [
          ...product.instructionTable.columns,
          `Колонка ${product.instructionTable.columns.length + 1}`,
        ],
        rows: product.instructionTable.rows.map((row) => [...row, ""]),
      },
    });
  };

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newRows = product.instructionTable.rows.map((row, r) =>
      r === rowIndex
        ? row.map((cell, c) => (c === colIndex ? value : cell))
        : row
    );
    setProduct({
      ...product,
      instructionTable: {
        ...product.instructionTable,
        rows: newRows,
      },
    });
  };

  return (
    <div>
      <button type="button" onClick={addRow}>
        Додати рядок
      </button>
      <button type="button" onClick={addColumn}>
        Додати колонку
      </button>

      <table>
        <thead>
          <tr>
            {product.instructionTable.columns.map((col, i) => (
              <th key={i}>
                <input
                  value={col}
                  onChange={(e) => {
                    const newColumns = [...product.instructionTable.columns];
                    newColumns[i] = e.target.value;
                    setProduct({
                      ...product,
                      instructionTable: {
                        ...product.instructionTable,
                        columns: newColumns,
                      },
                    });
                  }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {product.instructionTable.rows.map((row, rIndex) => (
            <tr key={rIndex}>
              {row.map((cell, cIndex) => (
                <td key={cIndex}>
                  <input
                    value={cell}
                    onChange={(e) => updateCell(rIndex, cIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstructionTab;
