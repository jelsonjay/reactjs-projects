import React from 'react';

import { FaShareSquare, FaGithubSquare } from 'react-icons/fa';
export const Product = ({ product }) => {
	const { title, img, url, desc, stack, github } = product;
	return (
		<div>
			<article className='project'>
				<a target='_blank' href={url}>
					<img src={img} alt={title} className='project-img' />
				</a>
				<div className='project-info'>
					<h3>{title}</h3>
					<p>{desc}</p>
					<div className='project-stack'>
						{stack.map((stack, index) => (
							<span className='' key={index}>
								{stack}
							</span>
						))}
					</div>
					<div className='project-links'>
						<a target='_blank' href={github}>
							<FaGithubSquare className='project-icon' />
						</a>
						<a target='_blank' href={url}>
							<FaShareSquare className='project-icon' />
						</a>
					</div>
				</div>
			</article>
		</div>
	);
};
