package com.ggums.ggumtle.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Interest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "bucketInterest")
    private Set<Bucket> buckets = new HashSet<>();

    @ManyToMany(mappedBy = "userInterest")
    private Set<User> users = new HashSet<>();

}
