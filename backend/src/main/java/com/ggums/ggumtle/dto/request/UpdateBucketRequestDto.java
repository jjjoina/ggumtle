package com.ggums.ggumtle.dto.request;

import com.ggums.ggumtle.entity.ReminderDate;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

@Getter
public class UpdateBucketRequestDto {
    @Schema(example = "1")
    private Long bucketId;

    @Schema(example = "구독자분들과 팬미팅 진행하기")
    @Size(max = 100, message = "제목 크기를 초과하였습니다.")
    private String title;

    @Schema(example = "twoWeeks")
    private ReminderDate reminderDate;

    @Schema(example = "23.452")
    private Double latitude;
    @Schema(example = "143.213")
    private Double longitude;

    @Schema(example = "lightGreen")
    @Size(max = 255, message = "색 글자 크기를 초과하였습니다.")
    private String color;

    @Schema(example = "용산 파크랜드")
    @Size(max = 255, message = "한글 주소 크기를 초과하였습니다.")
    private String address;

    @Schema(example = "[\"휴식\",\"여행\",\"인간관계\"]")
    private List<String> category;

    @Schema(example = "false")
    private Boolean isPrivate;

    @Schema(example = "2023-07-05")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdDate;
}
