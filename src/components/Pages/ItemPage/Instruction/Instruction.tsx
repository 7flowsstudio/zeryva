import React from "react";
import { Product } from "../../../../../utils/types";

interface InstructionProps {
  product: Product;
}

const Instruction: React.FC<InstructionProps> = ({ product }) => {
  const { instructionTable } = product;

  return (
    <div>
      <h3>Інструкція</h3>
      <table>
        <thead>
          <tr>
            {instructionTable.columns.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {instructionTable.rows.map((row, i) => {
            if (row.type === "normal") {
              return (
                <tr key={i}>
                  {row.cells.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              );
            } else if (row.type === "full") {
              return (
                <tr key={i}>
                  <td colSpan={instructionTable.columns.length}>{row.value}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Instruction;
