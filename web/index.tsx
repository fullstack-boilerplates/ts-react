import { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { hello } from "../apis/hello"

const Index = () => {
  let [msg, setMsg] = useState('...loading')
  useEffect(() => {
    (async () => setMsg(await hello('world')))()
  })
  return <div>{msg}</div>
}

createRoot(document.getElementById('react-root')).render(<Index />)



