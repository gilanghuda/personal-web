import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../data/projectsData';
import ProjectFilter from './ProjectFilter';

function ProjectsGrid() {
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');

	// combined filter: handle category as string or array (case-insensitive)
	const filteredProjects = projectsData.filter((item) => {
		// normalize categories to array of strings
		const categories = Array.isArray(item.category)
			? item.category
			: typeof item.category === 'string'
			? [item.category]
			: [];

		const matchesCategory = selectProject
			? categories.some((c) =>
					c.toLowerCase().includes(selectProject.toLowerCase())
			  )
			: true;

		const matchesSearch = searchProject
			? item.title.toLowerCase().includes(searchProject.toLowerCase())
			: true;

		return matchesCategory && matchesSearch;
	});

	const scrollToProjects = () => {
		const projectSection = document.getElementById('projects');
		if (projectSection) {
			projectSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10" id="projects">
			<div className="mt-10 sm:mt-16">
				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="
                                ont-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
				{filteredProjects.map((project, index) => (
					<ProjectSingle key={project.id ?? index} {...project} />
				))}
			</div>
		</section>
	);
}

export default ProjectsGrid;