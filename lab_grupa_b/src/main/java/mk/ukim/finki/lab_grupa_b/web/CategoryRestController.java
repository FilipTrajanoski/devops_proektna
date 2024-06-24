package mk.ukim.finki.lab_grupa_b.web;

import mk.ukim.finki.lab_grupa_b.model.enumerations.CategoryType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/categories")
public class CategoryRestController {

    @GetMapping
    public List<String> getCategories(){
        return Arrays.stream(CategoryType.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }
}
