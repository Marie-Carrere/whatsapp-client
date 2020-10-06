import React from "react";
import { chats } from "../../fixtures/db";
import moment from "moment";

const ChatsList: React.FC = () => (
  <div>
    <ul>
      {chats.map((chat) => (
        <li key={chat.id}>
          <img src={chat.picture} alt={`${chat.name}'s profile`} />
          <div>{chat.name}</div>
          {chat.lastMessage && (
            <>
              <div>{chat.lastMessage.content}</div>
              <div>{moment(chat.lastMessage.createdAt).format("HH:mm")}</div>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ChatsList;
