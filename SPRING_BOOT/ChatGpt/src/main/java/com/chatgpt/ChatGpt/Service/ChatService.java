package com.chatgpt.ChatGpt.Service;

import com.chatgpt.ChatGpt.Request.BotRequest;
import com.chatgpt.ChatGpt.Response.ChatGptResponse;

public interface ChatService {
	
	ChatGptResponse askQuestion(BotRequest botRequest);
}
