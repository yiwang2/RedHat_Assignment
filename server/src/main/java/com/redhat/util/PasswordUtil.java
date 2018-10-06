package com.redhat.util;

import java.util.Base64;
import java.nio.charset.StandardCharsets;

public class PasswordUtil {

	
	public static String getPostUserInfoPassword (String postPassword) {
		//will be based on host:password
		byte[] pwdBytes= Base64.getDecoder().decode(postPassword);
		String realPassword = new String(pwdBytes, StandardCharsets.UTF_8);
		return realPassword.split(":")[1];
	}
}
