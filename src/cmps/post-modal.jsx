import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postService } from '../services/post-service'
import { deletePost } from '../store/post.actions';
import React from 'react';
import Modal from 'react-modal';
import more from '../assets/more.png'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { AddPost } from './add-post';

const customStyles = {
    content: {
        backgroundColor: '#ffffff',
        width: '400px',
        height: '331px',
        padding: '0',
        borderRadius: '10px',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const PostModal = ({ post }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    const posts = useSelector((state) => state.postModule.posts)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    Modal.setAppElement('body');

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    function onDetails() {
        navigate(`/p/${post._id}`)
    }



    return (
        <div>
            <div onClick={openModal} className="more-botton">
                <img src={more} alt="" />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='modal-buttons'>
                    <div className='modal-user-buttons'>
                        <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
                    </div>
                    <button><AddPost postId={post._id} title='Edit' divTitle='Edit info' buttonTitle='Done' imgUrl={post.imgUrl}  /></button>
                    <button >Hide like count</button>
                    <button >Turn off commenting</button>
                    <button onClick={onDetails}>Go to post</button>
                    <button >Copy link</button>
                    <button onClick={closeModal}>Cencel</button>
                </div>
            </Modal>
        </div>
    );
}