// scripts/excel-to-ts.ts
import fs from 'fs'
import xlsx from 'xlsx'

const wb = xlsx.readFile('data/zen-masters.xlsx')
const sheet = wb.Sheets[wb.SheetNames[0]]

const rows = xlsx.utils.sheet_to_json(sheet)

const output = `export default ${JSON.stringify(rows, null, 2)}`
fs.writeFileSync('src/data/masters.ts', output)
