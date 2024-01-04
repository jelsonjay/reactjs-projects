import React from 'react';

export const Filter = ({ category, filteringTitle }) => {
	return (
		<>
			<div className='filter-container'>
				<select value={category} onChange={filteringTitle}>
					<option value=''>ALL</option>
					<option value='older'>Older/Project</option>
					<option value='newer'>Newer/Project</option>
				</select>
			</div>
		</>
	);
};
