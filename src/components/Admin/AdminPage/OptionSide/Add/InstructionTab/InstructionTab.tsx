import React from "react";
import { Product } from "../../../../../../../utils/types";
import s from "./InstructionTab.module.css";

interface InstructionTabProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const InstructionTab: React.FC<InstructionTabProps> = ({
  product,
  setProduct,
}) => {
  const { instructionTable } = product;

  const addColumn = () => {
    setProduct({
      ...product,
      instructionTable: {
        columns: [
          ...instructionTable.columns,
          `Колонка ${instructionTable.columns.length + 1}`,
        ],
        rows: instructionTable.rows.map((row) =>
          row.type === "normal" ? { ...row, cells: [...row.cells, ""] } : row
        ),
      },
    });
  };

  const addRow = () => {
    setProduct({
      ...product,
      instructionTable: {
        ...instructionTable,
        rows: [
          ...instructionTable.rows,
          {
            type: "normal",
            cells: instructionTable.columns.map(() => ""),
          },
        ],
      },
    });
  };

  const addFullRow = () => {
    setProduct({
      ...product,
      instructionTable: {
        ...instructionTable,
        rows: [...instructionTable.rows, { type: "full", value: "" }],
      },
    });
  };

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newRows = instructionTable.rows.map((row, r) =>
      r === rowIndex && row.type === "normal"
        ? {
            ...row,
            cells: row.cells.map((cell, c) => (c === colIndex ? value : cell)),
          }
        : row
    );

    setProduct({
      ...product,
      instructionTable: { ...instructionTable, rows: newRows },
    });
  };

  const updateFullRow = (rowIndex: number, value: string) => {
    const newRows = instructionTable.rows.map((row, r) =>
      r === rowIndex && row.type === "full" ? { ...row, value } : row
    );

    setProduct({
      ...product,
      instructionTable: { ...instructionTable, rows: newRows },
    });
  };
  const removeColumn = (colIndex: number) => {
    setProduct({
      ...product,
      instructionTable: {
        columns: instructionTable.columns.filter((_, i) => i !== colIndex),
        rows: instructionTable.rows.map((row) =>
          row.type === "normal"
            ? {
                ...row,
                cells: row.cells.filter((_, i) => i !== colIndex),
              }
            : row
        ),
      },
    });
  };

  const removeRow = (rowIndex: number) => {
    setProduct({
      ...product,
      instructionTable: {
        ...instructionTable,
        rows: instructionTable.rows.filter((_, i) => i !== rowIndex),
      },
    });
  };
  return (
    <div className={s.instrCont}>
      <button type="button" onClick={addColumn}>
        Додати колонку
      </button>
      <button type="button" onClick={addRow}>
        Додати рядок
      </button>
      <button type="button" onClick={addFullRow}>
        Додати рядок на всю ширину
      </button>

      <table>
        <thead>
          <tr>
            {instructionTable.columns.map((col, i) => (
              <th key={i}>
                <input
                  value={col}
                  onChange={(e) => {
                    const newColumns = [...instructionTable.columns];
                    newColumns[i] = e.target.value;
                    setProduct({
                      ...product,
                      instructionTable: {
                        ...instructionTable,
                        columns: newColumns,
                      },
                    });
                  }}
                />
                <button type="button" onClick={() => removeColumn(i)}>
                  ✕
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {instructionTable.rows.map((row, rIndex) =>
            row.type === "normal" ? (
              <tr key={rIndex}>
                {row.cells.map((cell, cIndex) => (
                  <td key={cIndex}>
                    <input
                      value={cell}
                      onChange={(e) =>
                        updateCell(rIndex, cIndex, e.target.value)
                      }
                    />
                  </td>
                ))}

                <td>
                  <button type="button" onClick={() => removeRow(rIndex)}>
                    ✕
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={rIndex}>
                <td colSpan={instructionTable.columns.length}>
                  <input
                    value={row.value}
                    placeholder="Текст на всю ширину"
                    onChange={(e) => updateFullRow(rIndex, e.target.value)}
                  />

                  <button type="button" onClick={() => removeRow(rIndex)}>
                    ✕
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InstructionTab;
