import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const rows = [
  { label: "Positioning", values: ["General-purpose, volume-friendly", "Premium raw, organic-forward", "Large-kernel regional cultivar"] },
  { label: "Best for", values: ["Everyday snacking, private-label repackaging", "Branded premium snack lines, health-focused retail", "Specialty or differentiated snack lines"] },
  { label: "Flavor profile", values: ["Balanced, versatile", "Rich, pronounced", "Rich, distinctive"] },
]

export function SeriesComparisonTable() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
            <TableHead className="font-bold text-gray-900">&nbsp;</TableHead>
            <TableHead className="font-bold text-gray-900">361 Series</TableHead>
            <TableHead className="font-bold text-gray-900">363 Series</TableHead>
            <TableHead className="font-bold text-gray-900">Tongqing No.6 (TQ6)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label} className="align-top">
              <TableCell className="font-semibold text-gray-900">{row.label}</TableCell>
              {row.values.map((v, i) => (
                <TableCell key={i} className="text-gray-700 text-sm">
                  {v}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
