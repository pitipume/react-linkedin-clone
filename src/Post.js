import React, { forwardRef } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"
            color="grey"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment"
            color="grey"/>
            <InputOption Icon={IosShareOutlinedIcon} title="Share"
            color="grey"/>
            <InputOption Icon={SendOutlinedIcon} title="Send"
            color="grey"/>
        </div>
    </div>
  )
})

export default Post
