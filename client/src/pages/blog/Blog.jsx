import { useEffect, useState } from 'react';
import {
	StyledContainer,
	StyledImg,
	StyledImgCont,
	StyledNews,
	StyledNewsContainer,
	StyledTextCont,
	StyledTextH1,
	StyledTextP,
	StyledTitle
} from './styles';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [editingPost, setEditingPost] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch('http://localhost:3000/api/news');
				const data = await response.json();
				setPosts(data);
			} catch (err) {
				console.log('Error al obtener los usuarios');
			}
		};
		fetchNews();
	}, []);

	console.log(posts);

	return (
		<>
			<StyledContainer>
				<StyledTitle>News Blog</StyledTitle>
				<form id='form' onSubmit={e => handleSubmit(e, setPosts)}>
					<label>Image: </label>
					<input type='text' name='src' />

					<label>Title: </label>
					<input type='text' name='title' />

					<label>Description: </label>
					<input type='text' name='description' />

					<input type='submit' value='Create news' />
				</form>
				<StyledNewsContainer>
					{posts.map(post => (
						<StyledNews key={post.newsId}>
							{editingPost && editingPost.newsId === post.newsId ? (
								<>
									<h3>
										<input
											type='text'
											name='src'
											value={editingPost.src}
											onChange={e => handleInputChange(e, setEditingPost)}
										/>
										<input
											type='text'
											name='title'
											value={editingPost.title}
											onChange={e => handleInputChange(e, setEditingPost)}
										/>
										<input
											type='text'
											name='description'
											value={editingPost.description}
											onChange={e => handleInputChange(e, setEditingPost)}
										/>
									</h3>

									<button
										onClick={() =>
											handleUpdate(editingPost, setEditingPost, setPosts)
										}
									>
										Save Changes
									</button>
								</>
							) : (
								<div key={post.newsId}>
									<StyledImgCont>
										<StyledImg src={post.src} />
									</StyledImgCont>
									<StyledTextCont>
										<StyledTextH1>{post.title}</StyledTextH1>
										<StyledTextP>{post.description}</StyledTextP>
									</StyledTextCont>
									<button onClick={() => handleEdit(setEditingPost, post)}>
										Edit post
									</button>
									<button onClick={() => deletePost(post.newsId, setPosts)}>
										Delete post
									</button>
								</div>
							)}
						</StyledNews>
					))}
				</StyledNewsContainer>
			</StyledContainer>
		</>
	);
};

const handleSubmit = async (e, setPosts) => {
	e.preventDefault();
	const response = await fetch('http://localhost:3000/api/news/createNews', {
		method: 'POST',
		body: JSON.stringify({
			src: e.target.src.value,
			title: e.target.title.value,
			description: e.target.description.value
		}),
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();
	setPosts(data);
};

const handleUpdate = async (editingPost, setEditingPost, setPosts) => {
	try {
		await fetch(`http://localhost:3000/api/users/${editingPost.newsId}`, {
			method: 'PUT',
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editingPost)
		});

		// Update the user in the local state
		setPosts(prevPosts =>
			prevPosts.map(post =>
				post.newsId === editingPost.newsId ? editingPost : post
			)
		);

		// Clear the editingUser state to exit the edit mode
		setEditingPost(null);
	} catch (err) {
		console.error('Error al actualizar el post');
	}
};

const handleInputChange = (e, setEditingPost) => {
	const { name, value } = e.target;
	setEditingPost(prevEditingPost => ({
		...prevEditingPost,
		[name]: value
	}));
};

const handleEdit = (setEditingPost, post) => {
	setEditingPost(post);
};

const deletePost = async (newsId, setPosts) => {
	const response = await fetch(`http://localhost:3000/api/users/${newsId}`, {
		method: 'DELETE'
	});
	const data = await response.json();
	setPosts(data);
};

export default Blog;
