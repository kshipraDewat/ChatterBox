import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import MessageSkeleton from './skeletons/MessageSkeleton'

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } = useChatStore()

  useEffect(() => {
    getMessages(selectedUser._id)
  }, [selectedUser._id, getMessages])

  if (isMessagesLoading) {return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader />
      <MessageSkeleton />
      <MessageInput />
    </div>
  )}
  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader />

      <div className='h-[90vh]'>
        <p>Messages</p>
      </div>

      <MessageInput />
    </div>
  )
}

export default ChatContainer
