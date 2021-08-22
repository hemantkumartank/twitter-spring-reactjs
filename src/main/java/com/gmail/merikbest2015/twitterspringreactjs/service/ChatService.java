package com.gmail.merikbest2015.twitterspringreactjs.service;

import com.gmail.merikbest2015.twitterspringreactjs.model.Chat;
import com.gmail.merikbest2015.twitterspringreactjs.model.ChatMessage;

import java.util.List;

public interface ChatService {

    List<Chat> getUserChats();

    Chat createChat(Long userId);

    List<ChatMessage> getChatMessages(Long chatId);

    ChatMessage addMessage(ChatMessage chatMessage, Long chatId);
}