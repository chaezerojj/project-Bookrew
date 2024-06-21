package com.bookrew;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
	
	@GetMapping("/")
	public String root() {
		// 메인으로 돌아감
		return "redirect:/bookrew";
	}
	
}