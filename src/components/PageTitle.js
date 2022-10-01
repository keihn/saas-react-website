import React, { useEffect } from "react"



function PageTitle(props) {
  useEffect(function (){
    document.title = `${props.title}`
  }, [props.title])


  return (
    props.children
  )
}

export default PageTitle