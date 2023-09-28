import app from './src/app.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

console.clear()
const port = 3001;

app.listen(port, ()=>{console.log(`The port is ${port}`);});