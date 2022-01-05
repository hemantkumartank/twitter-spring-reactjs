package com.gmail.merikbest2015.twitterspringreactjs.dto.response;

import com.gmail.merikbest2015.twitterspringreactjs.model.BackgroundColorType;
import com.gmail.merikbest2015.twitterspringreactjs.model.ColorSchemeType;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserResponseCommon {
    private Long id;
    private String email;
    private String fullName;
    private String username;
    private String location;
    private String about;
    private String website;
    private String countryCode;
    private Long phone;
    private String country;
    private String gender;
    private String language;
    private String birthday;
    private LocalDateTime registrationDate;
    private String activationCode;
    private String passwordResetCode;
    private String role;
    private Long tweetCount;
    private Long mediaTweetCount;
    private Long likeCount;
    private Long notificationsCount;
    private boolean active;
    private boolean profileCustomized;
    private boolean profileStarted;
    private boolean mutedDirectMessages;
    private boolean privateProfile;
    private BackgroundColorType backgroundColor;
    private ColorSchemeType colorScheme;
    private ImageResponse avatar;
    private ImageResponse wallpaper;
}