import { InputAdornment, MenuItem, MenuList, Paper, Popper, TextField } from "@material-ui/core"
import { ArrowDropDown } from "@material-ui/icons"
import React, { useState } from "react"
import { Identity } from "../../type/utils"

export type Option = Identity

export type DropdownProps = {
    onSelected: (option: Option) => any
    currentOption: Option | undefined
    options: Option[]
}
const Dropdown = (p: DropdownProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined)
    
    const onDropdownClicked = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const onMenuItemSelected = (v: Option) => {
        setAnchorEl(undefined)
        p.onSelected(v)
    }

    return (
        <div>
            <TextField
                disabled
                value={p.currentOption?.name}
                onClick={onDropdownClicked}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <ArrowDropDown />
                        </InputAdornment>
                    ),
                }}
            />
            <Popper
                open={anchorEl !== undefined}
                anchorEl={anchorEl}
                placement="bottom"
                popperOptions={{
                    modifiers: {
                        preventOverflow: {
                            padding: 0,
                        },
                    },
                }}
            >
                <Paper style={{ width: anchorEl?.clientWidth }}>
                    <MenuList>
                        {p.options.map((v) => (
                            <MenuItem onClick={() => onMenuItemSelected(v)}>{v.name}</MenuItem>
                        ))}
                    </MenuList>
                </Paper>
            </Popper>
        </div>
    )
}

export default Dropdown
