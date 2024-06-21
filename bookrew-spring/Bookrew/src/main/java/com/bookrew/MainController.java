package com.bookrew;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
	
	@GetMapping("/api/bookrew")
	@ResponseBody
	public List<String> main() {
		return Arrays.asList("main페이지 입니다.", "/api/main 출력");
	}
	
	@GetMapping("/root")
	public String root() {
		return "Bookrew root";
	}
	
}
