import * as React from "react"
import Lorem from "../components/Lorem"

const IndexPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Lorem />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
