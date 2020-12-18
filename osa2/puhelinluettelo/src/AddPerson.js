import React from 'react'

const PersonForm = ({handlenamechange, newname, newnumber, addperson, handlenumberchange}) => {
	return (
		<form>
			<h1>Add a new person</h1>
			<div>
				name: <input value={newname} onChange={handlenamechange}/>
				</div>
				<div>
					number: <input value={newnumber} onChange={handlenumberchange}/>
				</div>
				<div>
					<button type="submit" onClick={addperson}>add</button>
				</div>
			</form>
	)
}
export default PersonForm