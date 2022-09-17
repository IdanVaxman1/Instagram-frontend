import React from 'react';
import ReactDOM from 'react-dom';
import FileBase64 from 'react-file-base64';
import Modal from 'react-modal';
import addIcon from '../assets/icons/add.png'
import leftArrow from '../assets/icons/left-arrow.png'
import { addPost, updatePost, getPost } from '../store/post.actions';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postService } from '../services/post-service'



const customStyles = {
    content: {
        paddingTop: '10px',
        paddingRight: '0px',
        paddingLeft: '0px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        height: '70%',
        width: '50%',
        borderRadius: '25px',
        // border:'none',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body');

export const AddPost = ({ postId, title, buttonTitle, imgUrl, divTitle }) => {

    let subtitle;

    const posts = useSelector((state) => state.postModule.posts)

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [newPost, setNewPost] = useState();
    const [postImg, setPostImg] = useState();
    const [post, setPost] = useState()

    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        // dispatch(getPost(postId))
        // console.log(posts);
    }, [])


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }



    function closeModal() {
        setIsOpen(false);
    }

    const handleChange = ev => {
        const { value } = ev.target
        setNewPost(value)
    }


    const add = ev => {
        ev.preventDefault()
        const post = postService.getEmptyPost()
        post.txt = newPost
        post.selectedImg = postImg
        console.log(post);
        dispatch(addPost({ ...post, name: user?.result?.fullName }))
        closeModal()
    }



    const edit = ev => {
        ev.preventDefault()
        const post = postService.getEmptyPost()
        post.txt = newPost
        dispatch(updatePost(postId, { ...post, name: user?.result?.fullName }))
        console.log(post, 'newPost');
        closeModal()
    }

    return (
        <div>
            <div>
                {(title === 'Edit') ? <span onClick={openModal}>{title}</span> : <img onClick={openModal} src={addIcon} alt="" />}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <div className='add-post-header'>
                        <img onClick={closeModal} src={leftArrow} alt="" />
                        <span className='add-post-title'>{divTitle}</span>
                        <span onClick={() => dispatch(updatePost(postId, post))} className='add-post-share'>{buttonTitle}</span>
                    </div>

                    <div className='add-post-main'>

                        <div>
                            <form onSubmit={(title === 'Edit') ? edit : add}>
                                <textarea onChange={handleChange} name="" id="" cols="30" rows="10"></textarea>
                                <button >Send</button>
                            </form>


                            <FileBase64
                                multiple={false}
                                onDone={({ base64 }) => setPostImg(base64)} />


                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}





