import React from "react";

const MultiSelect = ({
	options,
	optionValue,
	optionLabel,
	placeholder,
	values,
	id,
	error,
}) => {
	return (
		<div class="dropdown">
			<button
				class="btn btn-secondary dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				Dropdown button
			</button>
			<ul class="dropdown-menu">
				{options.map((item) => (
					<li>
						<a class="dropdown-item" href="#">
							{item[optionLabel]}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MultiSelect;
