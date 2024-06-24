package mk.ukim.finki.lab_grupa_b.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HostDto {

    private String name;

    private String surname;

    private Long country;
}
