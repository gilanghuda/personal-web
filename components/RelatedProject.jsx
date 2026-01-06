import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const RelatedProject = {
	title: 'Related Projects',
	Projects: [
		{
			id: uuidv4(),
			title: 'Mobile Application',
			img: '/thumb2.png',
		},
		{
			id: uuidv4(),
			title: 'Web Application',
			img: '/thumb3.png',
		},
		{
			id: uuidv4(),
			title: 'ai Project',
			img: '/thumb1.png',
		},
		{
			id: uuidv4(),
			title: 'official website',
			img: '/thumb8.png',
		},
	],
};

function RelatedProjects() {
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{RelatedProject.Projects.map((project) => {
					return (
						<Image
							src={project.img}
							className="rounded-xl cursor-pointer"
							width="400"
							height="400"
							alt={project.title}
							key={project.id}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default RelatedProjects;