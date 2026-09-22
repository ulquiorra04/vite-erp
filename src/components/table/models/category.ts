import { createColumnHelper } from "@tanstack/react-table"
import type { DataTableFeatures } from "../data-table-features"

export type Category = {
    id: number
    name: string
}

const columnHelper = createColumnHelper<DataTableFeatures, Category> ()

export const categoryColumns = columnHelper.columns([
    columnHelper.accessor("id", {
        header: "#"
    }),
    columnHelper.accessor("name", {
        header: "Nom"
    })
]);