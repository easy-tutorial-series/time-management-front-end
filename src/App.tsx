import React, { useState } from "react"
import {} from "react-router-dom"
import "./App.css"
import Dropdown, { Option } from "./component/dropdown"

function App() {
    const [selectedOption, setSelectedOption] = useState<Option>()
    return (
        <div className="App">
            <Dropdown
                currentOption={selectedOption}
                options={[{ id: 1, name: "jack" }]}
                onSelected={setSelectedOption}
            />
        </div>
    )
}

export default App
