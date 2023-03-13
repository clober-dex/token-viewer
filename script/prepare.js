// Usage: node script/gen.js
const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '..', 'deployments')
const files = fs.readdirSync(dir)

const addresses = files.reduce((acc, file) => {
  const chainId = file.split('.')[0]
  const content = require(path.join(dir, file, 'TokenViewer.json'))
  acc[chainId] = content.address
  return acc
}, {})

const content = `export const ADDRESSES: { [chainId: number]: string } = ${JSON.stringify(
  addresses,
  null,
  2,
)}`
fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'addresses.ts'),
  content.replace(/"([^"]+)":/g, '$1:').replaceAll('"', "'"),
)
