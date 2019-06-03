import * as React from "react"

type Props = {
  url: string
  title?: string
}

const Avatar = (props: Props) => {
  return <img src={props.url} className="avatar" title={props.title} />
}

export default Avatar
