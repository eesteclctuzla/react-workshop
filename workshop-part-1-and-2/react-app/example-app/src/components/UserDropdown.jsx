

const UserDropdown = (props) => {
    const {handleUserChange} = props

    return(
        <div>
            <select name="users" id="users" onChange={(event) => handleUserChange(event.target.value)}>
                <option value="admin">Admin</option>
                <option value="normalUser">Viewer</option>
                </select>
        </div>
    )
}

export default UserDropdown