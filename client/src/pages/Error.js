import React from "react";
import Header from "../components/Header"

export default function Error() {
  return (
    <div >
      <Header />
      <div className="d-flex align-items-center justify-content-center mt-5">
        <h3>Oops, we couldn't find that page.</h3>
      </div>
    </div>
  )
}
