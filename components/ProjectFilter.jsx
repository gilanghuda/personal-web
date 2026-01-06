const selectOptions = [
	'Web Application',
	'Mobile Application',
	'AI/ML Projects',
];

function ProjectFilter({ setSelectProject }) {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="
                px-4
                sm:px-6
                py-2
                border border-gray-300
                dark:border-gray-600
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-white
                dark:bg-gray-700
                text-gray-500
                dark:text-gray-300
            "
		>
			<option value="" className="text-sm sm:text-md">
				All Projects
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default ProjectFilter;