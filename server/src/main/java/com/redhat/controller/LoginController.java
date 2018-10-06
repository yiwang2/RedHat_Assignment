package com.redhat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.redhat.controller.om.UserInfo;
import com.redhat.entity.User;
import com.redhat.service.UserService;
import com.redhat.util.PasswordUtil;

@Controller
@RequestMapping("/")
public class LoginController {
	@Autowired
	private UserService userService;
	
	
	@PostMapping(path = "login", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Void> login (@RequestBody UserInfo info) {
		
		User user = userService.findUserByEmail(info.getUsername());
		if (user == null || !user.getPassword().equals(PasswordUtil.getPostUserInfoPassword(info.getPassword()))) {
			return new ResponseEntity<Void>(HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
