import { useEffect, useState } from 'react';
import {
	CreateContainer,
	EditContainer,
	StyledContainer,
	StyledImg,
	StyledImgCont,
	StyledNews,
	StyledNewsContainer,
	StyledRowNews,
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

	return (
		<>
			<StyledContainer>
				<StyledTitle>News Blog</StyledTitle>
				<CreateContainer id='form' onSubmit={e => handleSubmit(e, setPosts)}>
					<label>Image: </label>
					<input type='text' name='src' />

					<label>Title: </label>
					<input type='text' name='title' />

					<label>Description: </label>
					<textarea type='text' name='description' />

					<input type='submit' value='Create post' />
				</CreateContainer>
				<StyledNewsContainer>
					{posts.map(post => (
						<StyledNews key={post._id}>
							{editingPost && editingPost._id === post._id ? (
								<>
									<EditContainer>
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
										<button
											onClick={() =>
												handleUpdate(editingPost, setEditingPost, setPosts)
											}
										>
											Save Changes
										</button>
									</EditContainer>
								</>
							) : (
								<StyledRowNews key={post._id}>
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
									<button onClick={() => deletePost(post._id, setPosts)}>
										Delete post
									</button>
								</StyledRowNews>
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
		const response = await fetch(
			`http://localhost:3000/api/news/${editingPost._id}`,
			{
				method: 'PATCH',
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(editingPost)
			}
		);
		const newPosts = await response.json();
		// Update the user in the local state
		setPosts(newPosts);

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
	console.log(post);
};

const deletePost = async (newsId, setPosts) => {
	console.log(newsId);
	const response = await fetch(`http://localhost:3000/api/news/${newsId}`, {
		method: 'DELETE'
	});
	const data = await response.json();
	setPosts(data);
};

export default Blog;
