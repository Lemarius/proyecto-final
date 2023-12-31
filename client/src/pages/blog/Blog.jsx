import { useEffect, useState } from 'react';
import {
	CreateBtn,
	CreateContainer,
	CreateH1,
	CreateInput,
	CreateLabel,
	CreateTextArea,
	EditBtn,
	EditContainer,
	EditInput,
	EditLabelCont,
	StyledAdminBtn,
	StyledBtnCont,
	StyledContainer,
	StyledImg,
	StyledImgCont,
	StyledNews,
	StyledNewsContainer,
	StyledNewsImg,
	StyledTextCont,
	StyledTextH1,
	StyledTextP,
	StyledTitle
} from './styles';
import { useAuth } from '../../context/AuthContext';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [editingPost, setEditingPost] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch('http://localhost:3000/api/news');
				const data = await response.json();
				data.reverse();
				setPosts(data);
			} catch (err) {
				console.log('Error al obtener los usuarios');
			}
		};
		fetchNews();
	}, []);

	const auth = useAuth();
	const { uid } = auth.user;

	return (
		<>
			<StyledContainer>
				<StyledNewsImg src='/images/newsblogicon3.png' />
				{uid === 'iS60YY3eeRYS9KSHEgwQXRaN4J73' && (
					<CreateContainer id='form' onSubmit={e => handleSubmit(e, setPosts)}>
						<CreateH1>Create new post</CreateH1>

						<CreateLabel>Image: </CreateLabel>
						<CreateInput type='text' name='src' />

						<CreateLabel>Title: </CreateLabel>
						<CreateInput type='text' name='title' />

						<CreateLabel>Description: </CreateLabel>
						<CreateTextArea type='text' name='description' />

						<CreateBtn type='submit' value='Create post' />
					</CreateContainer>
				)}

				<StyledNewsContainer>
					{posts.map(post => (
						<StyledNews key={post._id}>
							{editingPost && editingPost._id === post._id ? (
								<>
									<EditContainer>
										<StyledImgCont>
											<StyledImg src='/images/news1.jpg' />
										</StyledImgCont>
										<EditLabelCont>
											<EditInput
												type='text'
												name='src'
												value={editingPost.src}
												onChange={e => handleInputChange(e, setEditingPost)}
											/>
											<EditInput
												type='text'
												name='title'
												value={editingPost.title}
												onChange={e => handleInputChange(e, setEditingPost)}
											/>
											<EditInput
												type='text'
												name='description'
												value={editingPost.description}
												onChange={e => handleInputChange(e, setEditingPost)}
											/>
											<EditBtn
												onClick={() =>
													handleUpdate(editingPost, setEditingPost, setPosts)
												}
											>
												Save Changes
											</EditBtn>
										</EditLabelCont>
									</EditContainer>
								</>
							) : (
								<>
									<StyledImgCont>
										<StyledImg src={post.src} />
									</StyledImgCont>
									<StyledTextCont>
										<StyledTextH1>{post.title}</StyledTextH1>
										<StyledTextP>{post.description}</StyledTextP>
										{uid === 'iS60YY3eeRYS9KSHEgwQXRaN4J73' && (
											<StyledBtnCont>
												<StyledAdminBtn
													onClick={() => handleEdit(setEditingPost, post)}
												>
													Edit post
												</StyledAdminBtn>
												<StyledAdminBtn
													onClick={() => deletePost(post._id, setPosts)}
												>
													Delete post
												</StyledAdminBtn>
											</StyledBtnCont>
										)}
									</StyledTextCont>
								</>
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
	data.reverse();
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
		newPosts.reverse();
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
	data.reverse();
	setPosts(data);
};

export default Blog;
