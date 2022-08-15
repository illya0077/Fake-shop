import React from 'react'

type Props = {
    title: string
}

const AppList = () => {
    return(
        <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
        </ul>
    )
}

const AppHeder = (props: Props) => {
    return <h1>Hell {props.title} oooooo</h1>
}

const App = () => {
  return (
    <>
        <AppHeder title="++++"/>
        <AppList />
    </>
  )
}

export default App
