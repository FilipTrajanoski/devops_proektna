package mk.ukim.finki.lab_grupa_b.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.ukim.finki.lab_grupa_b.model.enumerations.CategoryType;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccommodationDto {

    private String name;

    private CategoryType category;

    private Long host;

    private Integer numRooms;
}
