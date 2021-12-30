import React, { useState, useEffect, useCallback } from "react"
import Editor from "./components/editor"
import './app.css'
import Preview from "./components/preview"

const App: React.FC = () => {
    const [doc, setDoc] = useState<string>("# Welcome to Notted! Start writing down some markdown code, and see how its becoming reality\n")

    const handleDocChange = useCallback(newDoc => {
        setDoc(newDoc)
    }, [])

    return (
        <div className="app">
            <Editor 
                onChange={handleDocChange}
                initialDoc={doc}
            />

            <Preview doc={doc}/>
        </div>
    )
}

export default App