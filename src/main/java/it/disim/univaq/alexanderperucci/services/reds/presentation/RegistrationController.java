package it.disim.univaq.alexanderperucci.services.reds.presentation;

import it.disim.univaq.alexanderperucci.services.reds.business.RoleService;
import it.disim.univaq.alexanderperucci.services.reds.business.UserService;
import it.disim.univaq.alexanderperucci.services.reds.business.model.Role;
import it.disim.univaq.alexanderperucci.services.reds.business.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegistrationController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private RoleService roleService;

	@RequestMapping(value="/registration", method={RequestMethod.GET})
	public String registrazione_start(Model model) {
		User user = new User();
		model.addAttribute("roles", roleService.findAll());
		model.addAttribute("user", user);
		return "common.registration";
	}
	
	@RequestMapping(value="/registration", method={RequestMethod.POST})
	public String registrazione(@ModelAttribute User user, @RequestParam(value = "selectedroles", required = false) Long[] roles) {
		
            for (Long roleID : roles) {
			Role role = new Role();
			role.setId(roleID);
			user.addRole(role);
		}
		userService.create(user);
		return "redirect:/okregistration";
	}
}
