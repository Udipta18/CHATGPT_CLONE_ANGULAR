package com.chatgpt.ChatGpt.Controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chatgpt.ChatGpt.Request.BotRequest;
import com.chatgpt.ChatGpt.Response.ChatGptResponse;
import com.chatgpt.ChatGpt.Response.Choice;
import com.chatgpt.ChatGpt.Service.ChatService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/ChatGpt")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ChatGptControler {
  
	private final ChatService botService;

    @PostMapping(value = "/send",consumes = MediaType.APPLICATION_JSON_VALUE)
    public String sendMessage(@RequestBody BotRequest botRequest) {
        
        		ChatGptResponse askQuestion = botService.askQuestion(botRequest);
        		
        		  List<Choice> choices = askQuestion.getChoices();
        		  return choices.get(0).getText();
        		 
        		  
        		 
    }
    
	/*
	 * @GetMapping("/get") public String get() { return "WORKING FINE"; }
	 */
}
