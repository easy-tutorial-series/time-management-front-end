import React from "react"
import Dropdown from "."

export default {
    title: "Dropdown",
    component: Dropdown,
}

export const DropdownNormal = () => (
    <Dropdown
        currentOption={undefined}
        options={[{ id: 1, name: "Tom" }]}
        onSelected={console.log}
    />
)
